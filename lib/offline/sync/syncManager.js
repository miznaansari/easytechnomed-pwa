import db from "../db";
import { MODEL_REGISTRY } from "./modelRegistry";
import { getUtcIsoNow, isServerNewer, toUtcIso } from "../timestamps";
import { networkMonitor } from "../network";

class SyncManager {
  constructor() {
    this.isSyncing = false;
    this.lastSyncTime = null;
    this.syncErrors = [];
    this.listeners = new Set();
  }

  /**
   * Subscribe to sync state changes.
   * @param {function(object): void} listener 
   * @returns {function(): void}
   */
  subscribe(listener) {
    this.listeners.add(listener);
    this.notifyState();
    return () => {
      this.listeners.delete(listener);
    };
  }

  notifyState() {
    const state = {
      isSyncing: this.isSyncing,
      lastSyncTime: this.lastSyncTime,
      syncErrors: this.syncErrors,
    };
    this.listeners.forEach((fn) => {
      try {
        fn(state);
      } catch (err) {
        console.error("[SyncManager] Listener error:", err);
      }
    });
  }

  /**
   * Generates dynamic sync objects payload for /api/offline/sync from IndexedDB.
   * @returns {Promise<Array<object>>}
   */
  async buildSyncPayload() {
    const syncObjects = [];
    const models = Object.values(MODEL_REGISTRY);

    for (const model of models) {
      if (!db[model.storeName]) continue;

      const records = await db[model.storeName].toArray();
      let hasDirty = false;
      let hasModified = false;
      let latestUpdated = "1970-01-01T00:00:00.000Z";

      records.forEach((rec) => {
        if (rec.isDirty === true) hasDirty = true;
        if (rec.isModified === true && rec.isDirty !== true) hasModified = true;

        const recTime = rec.updatedAt || rec.lastUpdatedAt || rec.createdAt;
        if (recTime && new Date(recTime).getTime() > new Date(latestUpdated).getTime()) {
          latestUpdated = toUtcIso(recTime) || latestUpdated;
        }
      });

      syncObjects.push({
        object_name: model.name,
        is_dirty: hasDirty,
        is_modified: hasModified,
        updated_at: latestUpdated,
        device_name: typeof navigator !== "undefined" ? navigator.userAgent : "Node/Server",
        device_model: typeof navigator !== "undefined" ? navigator.platform : "Desktop",
      });
    }

    return syncObjects;
  }

  /**
   * Main synchronization trigger.
   * @returns {Promise<{ success: boolean, errors: Array }>}
   */
  async sync() {
    if (this.isSyncing) {
      console.log("[SyncManager] Sync already in progress, skipping.");
      return { success: false, message: "Sync in progress" };
    }

    const isConnected = await networkMonitor.checkConnection();
    if (!isConnected) {
      console.log("[SyncManager] Offline, cannot sync now.");
      return { success: false, message: "Offline" };
    }

    this.isSyncing = true;
    this.syncErrors = [];
    this.notifyState();

    try {
      // 1. Build dynamic sync request from IndexedDB
      const syncObjects = await this.buildSyncPayload();

      // 2. Call /api/offline/sync
      const response = await fetch("/api/offline/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sync_objects: syncObjects }),
      });

      if (!response.ok) {
        throw new Error(`Sync API responded with status ${response.status}`);
      }

      const syncResult = await response.json();
      if (!syncResult.status || !Array.isArray(syncResult.data)) {
        throw new Error(syncResult.msg || "Invalid sync response structure");
      }

      // 3. Process each model's required operations
      for (const instruction of syncResult.data) {
        const modelName = instruction.object_name;
        const apiTypes = instruction.api_types || [];
        const modelDef = MODEL_REGISTRY[modelName];

        if (!modelDef) continue;

        // A. Process POST operations (New records: isDirty = true)
        if (apiTypes.includes("POST")) {
          await this.processPostOperations(modelDef);
        }

        // B. Process PUT operations (Modified records: isModified = true && !isDirty)
        if (apiTypes.includes("PUT")) {
          await this.processPutOperations(modelDef);
        }

        // C. Process GET operations (Server has newer records)
        if (apiTypes.includes("GET")) {
          await this.processGetOperations(modelDef);
        }
      }

      // 4. Special handler for batched patientResults
      await this.processPendingPatientResults();

      this.lastSyncTime = getUtcIsoNow();
      return { success: this.syncErrors.length === 0, errors: this.syncErrors };
    } catch (err) {
      console.error("[SyncManager] Sync failed with error:", err);
      this.syncErrors.push({ error: err.message || "Sync failed" });
      return { success: false, errors: this.syncErrors };
    } finally {
      this.isSyncing = false;
      this.notifyState();
    }
  }

  /**
   * Process POST for newly created local records.
   */
  async processPostOperations(modelDef) {
    if (!db[modelDef.storeName]) return;

    const dirtyRecords = await db[modelDef.storeName]
      .filter((item) => item.isDirty === true)
      .toArray();

    for (const record of dirtyRecords) {
      try {
        const payload = modelDef.serializePost ? modelDef.serializePost(record) : record;
        const postUrl = typeof modelDef.apiEndpoints.post === "function"
          ? modelDef.apiEndpoints.post(record)
          : modelDef.apiEndpoints.post;

        const res = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (res.ok && (data.success || data.status)) {
          const serverRecord = modelDef.extractCreatedRecord ? modelDef.extractCreatedRecord(data) : data;
          
          // If server assigned a new authoritative ID
          if (serverRecord && serverRecord.id && serverRecord.id !== record.id) {
            await db[modelDef.storeName].delete(record.id);
            await db[modelDef.storeName].put({
              ...record,
              ...serverRecord,
              isDirty: false,
              isModified: false,
              isError: false,
              errorInfo: null,
              lastUpdatedAt: getUtcIsoNow(),
            });
          } else {
            await db.markSynced(modelDef.storeName, record.id, serverRecord);
          }
        } else {
          throw new Error(data.message || data.error || "Failed to create record on server");
        }
      } catch (err) {
        console.error(`[SyncManager] POST failed for ${modelDef.name} id=${record.id}:`, err);
        await db.markSyncError(modelDef.storeName, record.id, err.message);
        this.syncErrors.push({
          model: modelDef.name,
          id: record.id,
          action: "POST",
          error: err.message,
        });
      }
    }
  }

  /**
   * Process PUT for modified local records.
   */
  async processPutOperations(modelDef) {
    if (!db[modelDef.storeName]) return;

    const modifiedRecords = await db[modelDef.storeName]
      .filter((item) => item.isModified === true && item.isDirty !== true)
      .toArray();

    for (const record of modifiedRecords) {
      try {
        const payload = modelDef.serializePut ? modelDef.serializePut(record) : record;
        const putUrl = typeof modelDef.apiEndpoints.put === "function"
          ? modelDef.apiEndpoints.put(record)
          : modelDef.apiEndpoints.put;

        const res = await fetch(putUrl, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (res.ok && (data.success || data.status)) {
          await db.markSynced(modelDef.storeName, record.id, data);
        } else {
          throw new Error(data.message || data.error || "Failed to update record on server");
        }
      } catch (err) {
        console.error(`[SyncManager] PUT failed for ${modelDef.name} id=${record.id}:`, err);
        await db.markSyncError(modelDef.storeName, record.id, err.message);
        this.syncErrors.push({
          model: modelDef.name,
          id: record.id,
          action: "PUT",
          error: err.message,
        });
      }
    }
  }

  /**
   * Process GET to pull server updates with conflict protection.
   */
  async processGetOperations(modelDef) {
    if (!modelDef.apiEndpoints?.get || !db[modelDef.storeName]) return;

    try {
      const getUrl = typeof modelDef.apiEndpoints.get === "function"
        ? modelDef.apiEndpoints.get()
        : modelDef.apiEndpoints.get;

      const res = await fetch(getUrl);
      if (!res.ok) return;

      const data = await res.json();
      const serverRecords = modelDef.extractServerRecords ? modelDef.extractServerRecords(data) : [];

      if (!Array.isArray(serverRecords)) return;

      for (const serverItem of serverRecords) {
        if (!serverItem.id) continue;

        const localItem = await db[modelDef.storeName].get(serverItem.id);

        // Conflict check: Never overwrite local dirty or modified records!
        if (localItem && (localItem.isDirty === true || localItem.isModified === true)) {
          console.log(`[SyncManager] Conflict: Protecting local changes for ${modelDef.name} id=${serverItem.id}`);
          continue;
        }

        // Safe to upsert server item locally
        await db[modelDef.storeName].put({
          ...serverItem,
          isDirty: false,
          isModified: false,
          isError: false,
          errorInfo: null,
          lastUpdatedAt: getUtcIsoNow(),
        });
      }
    } catch (err) {
      console.error(`[SyncManager] GET failed for ${modelDef.name}:`, err);
    }
  }

  /**
   * Batch processes pending patient result entries.
   */
  async processPendingPatientResults() {
    if (!db.patientResults) return;

    const dirtyResults = await db.patientResults
      .filter((r) => r.isDirty === true || r.isModified === true)
      .toArray();

    if (dirtyResults.length === 0) return;

    // Group by registrationId
    const groups = {};
    dirtyResults.forEach((r) => {
      if (!groups[r.registrationId]) {
        groups[r.registrationId] = [];
      }
      groups[r.registrationId].push(r);
    });

    for (const [regId, resultsList] of Object.entries(groups)) {
      try {
        const resultsData = resultsList.map((r) => ({
          testParameterId: parseInt(r.testParameterId),
          value: r.value !== undefined && r.value !== null ? String(r.value) : "",
        }));

        const res = await fetch(`/api/registrations/${regId}/results`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resultsData }),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          for (const item of resultsList) {
            const key = item.id || [item.registrationId, item.testParameterId];
            await db.markSynced("patientResults", key);
          }
        } else {
          throw new Error(data.message || data.error || "Failed to save results");
        }
      } catch (err) {
        console.error(`[SyncManager] Failed to sync results for registration ${regId}:`, err);
        for (const item of resultsList) {
          const key = item.id || [item.registrationId, item.testParameterId];
          await db.markSyncError("patientResults", key, err.message);
        }
      }
    }
  }
}

export const syncManager = new SyncManager();
