import Dexie from "dexie";
import { getUtcIsoNow } from "./timestamps";

class AppDatabase extends Dexie {
  constructor() {
    super("EasyTechnoMedOfflineDB");

    this.version(1).stores({
      // Core Models
      workspaces: "++id, slug, name, isActive, expireAt, startAt, nextSequence, updatedAt, isDirty, isModified, isError",
      admins: "++id, email, mobileNumber, workspaceId, roleId, updatedAt, isDirty, isModified, isError",
      doctors: "++id, workspaceId, code, name, isDeleted, updatedAt, isDirty, isModified, isError",
      tests: "++id, workspaceId, code, name, departmentId, isDeleted, updatedAt, isDirty, isModified, isError",
      parameters: "++id, workspaceId, code, name, updatedAt, isDirty, isModified, isError",
      testParameters: "++id, testId, parameterId, workspaceId, order, isDeleted, updatedAt, isDirty, isModified, isError",
      testDepartments: "++id, name, updatedAt, isDirty, isModified, isError",
      testFormulas: "++id, workspaceId, testId, outputParameterId, updatedAt, isDirty, isModified, isError",
      interpretationRules: "++id, workspaceId, testId, parameterId, updatedAt, isDirty, isModified, isError",
      
      // Transaction & Patient Data
      registrations: "++id, regNo, labId, mobileNo, date, status, workspaceId, adminId, isDeleted, updatedAt, isDirty, isModified, isError",
      registrationTests: "[registrationId+testId], registrationId, testId, isDirty, isModified, isError",
      patientResults: "++id, [registrationId+testParameterId], registrationId, testParameterId, updatedAt, isDirty, isModified, isError",
      registrationPayments: "++id, registrationId, updatedAt, isDirty, isModified, isError",
      workspacePdf: "++id, workspaceId, updatedAt, isDirty, isModified, isError",
      
      // Tracking & System (Retaining tracking stores for backwards compatibility)
      adminTracking: "++id, sessionId, startUTC, ENDUTC, mode, durationInMin, isDirty",
      superAdminTracking: "++id, sessionId, startUTC, ENDUTC, mode, durationInMin, isDirty",
      
      // Offline Authentication & Sync State
      offlineSession: "id, token, email, expiresAt",
      syncLog: "++id, modelName, action, recordId, status, timestamp",
      appVersions: "++id, version, isActive, releaseDate, updatedAt",
    });

    // Provide insert helper alias for backwards compatibility with tracking tables
    this.adminTracking.insert = (data) => this.adminTracking.add(data);
    this.superAdminTracking.insert = (data) => this.superAdminTracking.add(data);
  }

  /**
   * Helper to mark a record as dirty (newly created offline).
   * @param {string} storeName 
   * @param {object} data 
   * @returns {Promise<any>}
   */
  async insertOffline(storeName, data) {
    const nowUtc = getUtcIsoNow();
    const record = {
      ...data,
      isDirty: true,
      isModified: false,
      isError: false,
      errorInfo: null,
      createdAt: data.createdAt ? new Date(data.createdAt).toISOString() : nowUtc,
      updatedAt: data.updatedAt ? new Date(data.updatedAt).toISOString() : nowUtc,
      lastUpdatedAt: nowUtc,
    };
    const id = await this[storeName].add(record);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("easytechnomed:data-mutated", { detail: { storeName, action: "insert", id } }));
    }
    return { ...record, id };
  }

  /**
   * Helper to mark a record as modified offline.
   * @param {string} storeName 
   * @param {any} key 
   * @param {object} data 
   * @returns {Promise<any>}
   */
  async updateOffline(storeName, key, data) {
    const nowUtc = getUtcIsoNow();
    const existing = await this[storeName].get(key);
    if (!existing) {
      throw new Error(`Record with key ${JSON.stringify(key)} not found in ${storeName}`);
    }

    const updates = {
      ...data,
      // If it was already newly created locally (isDirty: true), keep isDirty: true
      isDirty: existing.isDirty === true,
      isModified: existing.isDirty === true ? false : true,
      isError: false,
      errorInfo: null,
      updatedAt: nowUtc,
      lastUpdatedAt: nowUtc,
    };

    await this[storeName].update(key, updates);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("easytechnomed:data-mutated", { detail: { storeName, action: "update", key } }));
    }
    return { ...existing, ...updates };
  }

  /**
   * Helper to soft delete a record offline.
   * @param {string} storeName 
   * @param {any} key 
   * @returns {Promise<void>}
   */
  async deleteOffline(storeName, key) {
    const existing = await this[storeName].get(key);
    if (!existing) return;

    if (existing.isDirty) {
      // If never synced to server, simply delete locally
      await this[storeName].delete(key);
    } else {
      // Soft-delete and mark modified
      await this.updateOffline(storeName, key, {
        isDeleted: true,
        deletedAt: getUtcIsoNow(),
      });
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("easytechnomed:data-mutated", { detail: { storeName, action: "delete", key } }));
    }
  }

  /**
   * Clears sync flags after successful synchronization with server.
   * @param {string} storeName 
   * @param {any} key 
   * @param {object} [serverData] Authoritative data returned from server
   */
  async markSynced(storeName, key, serverData = null) {
    const existing = await this[storeName].get(key);
    if (!existing) return;

    const merged = {
      ...existing,
      ...(serverData || {}),
      isDirty: false,
      isModified: false,
      isError: false,
      errorInfo: null,
      lastUpdatedAt: getUtcIsoNow(),
    };

    await this[storeName].put(merged);
  }

  /**
   * Marks a record with a sync error when POST or PUT fails.
   * @param {string} storeName 
   * @param {any} key 
   * @param {string} errorMessage 
   */
  async markSyncError(storeName, key, errorMessage) {
    const existing = await this[storeName].get(key);
    if (!existing) return;

    await this[storeName].update(key, {
      isError: true,
      errorInfo: errorMessage || "Failed to sync",
      lastUpdatedAt: getUtcIsoNow(),
    });
  }

  /**
   * Retrieves all records across all tables that have pending unsynced changes.
   * Groups patient report parameter entries by unique registration so that multiple
   * parameter edits/auto-saves for a single report count as 1 logical pending report.
   * @returns {Promise<Array<{ storeName: string, count: number, records: Array<any>, registrationIds?: number[] }>>}
   */
  async getAllPendingRecords() {
    const results = [];
    const pendingRegistrationIds = new Set();

    // 1. Collect pending registrations first
    if (this.registrations) {
      const dirtyRegs = await this.registrations
        .filter(item => item.isDirty === true || item.isModified === true)
        .toArray();
      if (dirtyRegs.length > 0) {
        dirtyRegs.forEach(r => pendingRegistrationIds.add(r.id));
        results.push({ storeName: "registrations", count: dirtyRegs.length, records: dirtyRegs });
      }
    }

    // 2. Process patientResults deduplicated by registrationId (1 report = 1 pending count)
    if (this.patientResults) {
      const dirtyResults = await this.patientResults
        .filter(item => item.isDirty === true || item.isModified === true)
        .toArray();
      if (dirtyResults.length > 0) {
        const uniqueRegIds = Array.from(new Set(dirtyResults.map(r => r.registrationId).filter(Boolean)));
        // Count only registrations that aren't already counted in dirty registrations to prevent double-counting
        const distinctNewReportCount = uniqueRegIds.filter(regId => !pendingRegistrationIds.has(regId)).length;
        const logicalCount = distinctNewReportCount > 0 ? distinctNewReportCount : (pendingRegistrationIds.size === 0 ? uniqueRegIds.length : 0);

        results.push({
          storeName: "patientResults",
          count: logicalCount,
          records: dirtyResults,
          uniqueReportCount: uniqueRegIds.length,
          registrationIds: uniqueRegIds,
        });
      }
    }

    // 3. Process other master and transactional stores
    const otherStores = [
      "doctors",
      "tests",
      "parameters",
      "testParameters",
      "registrationTests",
      "registrationPayments",
      "workspacePdf",
    ];

    for (const storeName of otherStores) {
      if (this[storeName]) {
        const dirty = await this[storeName].filter(item => item.isDirty === true || item.isModified === true).toArray();
        if (dirty.length > 0) {
          // If child registration tests or payments belong to an already counted pending registration, avoid double counting
          if (storeName === "registrationTests" || storeName === "registrationPayments") {
            const extraRegs = dirty.filter(d => !pendingRegistrationIds.has(d.registrationId));
            const distinctExtra = new Set(extraRegs.map(d => d.registrationId)).size;
            results.push({ storeName, count: distinctExtra, records: dirty });
          } else {
            results.push({ storeName, count: dirty.length, records: dirty });
          }
        }
      }
    }

    return results;
  }

  /**
   * Computes the total count of distinct logical unsynced operations.
   * @returns {Promise<number>}
   */
  async getPendingCount() {
    const pending = await this.getAllPendingRecords();
    return pending.reduce((sum, item) => sum + (item.count || 0), 0);
  }

  /**
   * Retrieves all records with sync errors.
   * @returns {Promise<Array<{ storeName: string, id: any, errorInfo: string }>>}
   */
  async getAllErrorRecords() {
    const stores = [
      "registrations",
      "registrationTests",
      "patientResults",
      "doctors",
      "tests",
      "parameters",
      "testParameters",
      "registrationPayments",
      "workspacePdf",
    ];

    const errors = [];
    for (const storeName of stores) {
      if (this[storeName]) {
        const failed = await this[storeName].filter(item => item.isError === true).toArray();
        failed.forEach(record => {
          errors.push({
            storeName,
            id: record.id || `${record.registrationId}_${record.testId}`,
            errorInfo: record.errorInfo || "Sync error",
            record,
          });
        });
      }
    }
    return errors;
  }

  /**
   * Resolves a specific sync error record.
   * @param {string} storeName
   * @param {any} key
   * @param {"markSynced"|"retry"|"discard"} action
   */
  async resolveSyncError(storeName, key, action = "markSynced") {
    if (!this[storeName]) return;
    try {
      const record = await this[storeName].get(key);
      if (!record) return;

      if (action === "discard") {
        await this[storeName].delete(key);
      } else if (action === "retry") {
        await this[storeName].update(key, {
          isError: false,
          errorInfo: null,
          isDirty: true,
          lastUpdatedAt: getUtcIsoNow(),
        });
      } else {
        // "markSynced" (Force resolve conflict by accepting local state as synced)
        await this[storeName].update(key, {
          isError: false,
          errorInfo: null,
          isDirty: false,
          isModified: false,
          lastUpdatedAt: getUtcIsoNow(),
        });
      }
    } catch (err) {
      console.error(`[db.resolveSyncError] Error resolving ${storeName} key=${key}:`, err);
    }
  }

  /**
   * Clears all error states across all stores in IndexedDB.
   */
  async clearAllSyncErrors() {
    const stores = [
      "registrations",
      "registrationTests",
      "patientResults",
      "doctors",
      "tests",
      "parameters",
      "testParameters",
      "registrationPayments",
      "workspacePdf",
    ];

    for (const storeName of stores) {
      if (this[storeName]) {
        try {
          const failed = await this[storeName].filter(item => item.isError === true).toArray();
          for (const item of failed) {
            const key = item.id || [item.registrationId, item.testParameterId];
            await this[storeName].update(key, {
              isError: false,
              errorInfo: null,
              isDirty: false,
              isModified: false,
              lastUpdatedAt: getUtcIsoNow(),
            });
          }
        } catch (err) {
          console.warn(`[db.clearAllSyncErrors] Error clearing store ${storeName}:`, err);
        }
      }
    }
  }

  /**
   * Completely clears all tables in IndexedDB on explicit logout.
   * Ensures zero leftover data remains in the offline database.
   * @returns {Promise<void>}
   */
  async clearAllData() {
    try {
      const allStores = [
        "workspaces",
        "admins",
        "doctors",
        "tests",
        "parameters",
        "testParameters",
        "testDepartments",
        "testFormulas",
        "interpretationRules",
        "registrations",
        "registrationTests",
        "patientResults",
        "registrationPayments",
        "workspacePdf",
        "adminTracking",
        "superAdminTracking",
        "offlineSession",
        "syncLog",
        "appVersions",
      ];

      const clearPromises = [];

      // 1. Clear all explicitly known stores
      for (const storeName of allStores) {
        if (this[storeName] && typeof this[storeName].clear === "function") {
          clearPromises.push(
            this[storeName].clear().catch((err) => {
              console.warn(`[db.clearAllData] Warning clearing ${storeName}:`, err);
            })
          );
        }
      }

      // 2. Iterate dynamically over all tables registered on Dexie instance
      if (Array.isArray(this.tables)) {
        for (const table of this.tables) {
          if (table && typeof table.clear === "function") {
            clearPromises.push(
              table.clear().catch((err) => {
                console.warn(`[db.clearAllData] Warning clearing table ${table.name}:`, err);
              })
            );
          }
        }
      }

      await Promise.all(clearPromises);
      console.log("[db] All IndexedDB tables successfully wiped clean.");
    } catch (err) {
      console.error("[db] Error while wiping IndexedDB data:", err);
    }
  }
}

export const db = new AppDatabase();
export default db;
