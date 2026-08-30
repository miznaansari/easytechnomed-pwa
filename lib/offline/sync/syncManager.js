import db from "../db";
import { MODEL_REGISTRY } from "./modelRegistry";
import { getUtcIsoNow, isServerNewer, toUtcIso } from "../timestamps";
import { networkMonitor } from "../network";
import { saveAuthenticatedSession } from "@/lib/auth/offlineAuth";

export const MODEL_SYNC_PRIORITY = {
  doctors: 1,
  tests: 2,
  parameters: 3,
  testParameters: 4,
  testDepartments: 5,
  testFormulas: 6,
  interpretationRules: 7,
  workspacePdf: 8,
  registrations: 10,
  registrationTests: 11,
  patientResults: 20,
  registrationPayments: 30,
};

class SyncManager {
  constructor() {
    this.isSyncing = false;
    this.currentSyncPromise = null;
    this.activeProcessingIds = new Set();
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

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("easytechnomed:sync-state-change", { detail: state }));
      if (!this.isSyncing && this.lastSyncTime) {
        window.dispatchEvent(new CustomEvent("easytechnomed:sync-complete", { detail: state }));
      }
    }
  }

  /**
   * Dispatches a global event when a 401 Unauthorized is detected
   * so the ReLoginModal popup can prompt the user to re-authenticate.
   * @param {object} details
   */
  triggerAuthRequired(details = {}) {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("easytechnomed:auth-required", {
          detail: {
            status: 401,
            message: details.message || "Authentication required to sync data with the cloud server.",
            endpoint: details.endpoint || "/api/offline/sync",
            ...details,
          },
        })
      );
    }
  }

  /**
   * Clears all failed sync errors from IndexedDB and memory state.
   */
  async clearAllErrors() {
    await db.clearAllSyncErrors();
    this.syncErrors = [];
    this.notifyState();
  }

  /**
   * Resolves a specific sync error.
   * @param {string} storeName
   * @param {any} id
   * @param {"markSynced"|"retry"|"discard"} action
   */
  async resolveError(storeName, id, action = "markSynced") {
    await db.resolveSyncError(storeName, id, action);
    this.syncErrors = this.syncErrors.filter(
      (err) => !(err.model === storeName && (err.id === id || err.registrationId === id))
    );
    this.notifyState();
    if (action === "retry") {
      this.sync();
    }
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

        // Pick the latest timestamp among lastUpdatedAt, updatedAt, createdAt
        const candidates = [rec.lastUpdatedAt, rec.updatedAt, rec.createdAt].filter(Boolean);
        for (const cand of candidates) {
          const candMs = new Date(cand).getTime();
          if (!isNaN(candMs) && candMs > new Date(latestUpdated).getTime()) {
            latestUpdated = toUtcIso(cand) || latestUpdated;
          }
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
   * Bootstraps and pre-fetches all initial business & configuration data
   * from the server into IndexedDB using Promise.all concurrency.
   * Used immediately upon login and during initial app boot.
   * @returns {Promise<{ success: boolean, counts: object }>}
   */
  async bootstrapInitialData() {
    const isConnected = await networkMonitor.checkConnection();
    if (!isConnected) {
      console.log("[SyncManager] Offline - skipping initial data bootstrap.");
      return { success: false, message: "Offline" };
    }

    console.log("[SyncManager] Bootstrapping all data into IndexedDB via Promise.all...");

    try {
      // Helper to fetch all registrations across all pages
      const fetchAllRegistrations = async () => {
        let all = [];
        let page = 1;
        const limit = 200;
        let hasMore = true;

        while (hasMore) {
          try {
            const res = await fetch(`/api/registrations?page=${page}&limit=${limit}`).then((r) => r.json());
            if (res.success && Array.isArray(res.registrations)) {
              all = all.concat(res.registrations);
              const total = res.total || 0;
              if (all.length >= total || res.registrations.length < limit || res.registrations.length === 0) {
                hasMore = false;
              } else {
                page++;
              }
            } else {
              hasMore = false;
            }
          } catch (err) {
            console.warn(`[SyncManager] fetchAllRegistrations error on page ${page}:`, err);
            hasMore = false;
          }
        }
        return { success: true, registrations: all };
      };

      // 1. Fetch all core master data concurrently using Promise.all
      const [
        profileRes,
        testsRes,
        doctorsRes,
        regsRes,
        pdfRes,
        settingsRes,
        addressRes,
        paymentsRes,
        membersRes,
        rolesRes
      ] = await Promise.all([
        fetch("/api/profile").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/tests").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/doctors").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetchAllRegistrations(),
        fetch("/api/settings/pdf").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/settings").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/settings/address").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/settings/payments").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/members").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/roles").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
      ]);

      if (profileRes && (profileRes.error === "Unauthorized" || profileRes.status === 401)) {
        this.triggerAuthRequired({
          endpoint: "/api/profile",
          message: "Session expired during initial sync bootstrap.",
        });
      }

      const writePromises = [];
      const counts = {
        tests: 0,
        parameters: 0,
        testParameters: 0,
        testDepartments: 0,
        testFormulas: 0,
        interpretationRules: 0,
        doctors: 0,
        registrations: 0,
        registrationTests: 0,
        patientResults: 0,
        registrationPayments: 0,
        workspacePdf: 0,
        members: 0,
      };

      // 2. Process Admin & Workspace session
      if (profileRes.success && profileRes.admin) {
        const adminData = profileRes.admin;
        if (addressRes.success && addressRes.address) {
          adminData.address = addressRes.address;
        }
        await saveAuthenticatedSession({ admin: adminData });
        writePromises.push(
          db.admins.put({
            ...adminData,
            id: adminData.id || 1,
            isDirty: false,
            isModified: false,
            isError: false,
            lastUpdatedAt: getUtcIsoNow(),
          })
        );
        if (adminData.workspace) {
          writePromises.push(
            db.workspaces.put({
              ...adminData.workspace,
              isDirty: false,
              isModified: false,
              isError: false,
              lastUpdatedAt: getUtcIsoNow(),
            })
          );
        }
      }

      // Process Members
      if (membersRes.success && Array.isArray(membersRes.members)) {
        counts.members = membersRes.members.length;
        const membersToPut = membersRes.members.map((m) => ({
          ...m,
          isDirty: false,
          isModified: false,
          isError: false,
          lastUpdatedAt: getUtcIsoNow(),
        }));
        if (membersToPut.length > 0) writePromises.push(db.admins.bulkPut(membersToPut));
      }

      // 3. Process Tests, Parameters, TestParameters, Departments, Formulas, Rules
      if (testsRes.success && Array.isArray(testsRes.tests)) {
        const testsToPut = [];
        const testParamsToPut = [];
        const paramMap = new Map();
        const deptMap = new Map();
        const formulasToPut = [];
        const rulesToPut = [];

        for (const t of testsRes.tests) {
          testsToPut.push({
            ...t,
            price: Number(t.price) || 0,
            outsourceCost: t.outsourceCost !== undefined && t.outsourceCost !== null ? Number(t.outsourceCost) : 0,
            specialIncentivePercent: t.specialIncentivePercent ? Number(t.specialIncentivePercent) : null,
            isDirty: false,
            isModified: false,
            isError: false,
            lastUpdatedAt: getUtcIsoNow(),
          });

          // Test Department
          if (t.department && t.department.id && !deptMap.has(t.department.id)) {
            deptMap.set(t.department.id, {
              ...t.department,
              isDirty: false,
              isModified: false,
              isError: false,
              lastUpdatedAt: getUtcIsoNow(),
            });
          }

          // Test Parameters & Master Parameters
          if (Array.isArray(t.parameters)) {
            for (const tp of t.parameters) {
              testParamsToPut.push({
                ...tp,
                testId: t.id,
                parameterId: tp.parameterId || (tp.parameter ? tp.parameter.id : tp.id),
                isDirty: false,
                isModified: false,
                isError: false,
                lastUpdatedAt: getUtcIsoNow(),
              });

              const paramObj = tp.parameter || {
                id: tp.parameterId || tp.id,
                name: tp.name,
                unit: tp.unit !== undefined && tp.unit !== null ? tp.unit : "",
                valueType: tp.valueType || "NUMERIC",
                options: tp.options || null,
                minValMale: tp.minValMale,
                maxValMale: tp.maxValMale,
                normalRangeMale: tp.normalRangeMale,
                minValFemale: tp.minValFemale,
                maxValFemale: tp.maxValFemale,
                normalRangeFemale: tp.normalRangeFemale,
                minValBaby: tp.minValBaby,
                maxValBaby: tp.maxValBaby,
                normalRangeBaby: tp.normalRangeBaby,
                normalRangeDefault: tp.normalRangeDefault,
              };

              if (paramObj && paramObj.id && !paramMap.has(paramObj.id)) {
                paramMap.set(paramObj.id, {
                  ...paramObj,
                  isDirty: false,
                  isModified: false,
                  isError: false,
                  lastUpdatedAt: getUtcIsoNow(),
                });
              }
            }
          }

          // Test Formulas
          if (Array.isArray(t.formulas)) {
            for (const f of t.formulas) {
              formulasToPut.push({
                ...f,
                testId: t.id,
                isDirty: false,
                isModified: false,
                isError: false,
                lastUpdatedAt: getUtcIsoNow(),
              });
            }
          }

          // Interpretation Rules
          if (Array.isArray(t.interpretationRules)) {
            for (const r of t.interpretationRules) {
              rulesToPut.push({
                ...r,
                testId: t.id,
                isDirty: false,
                isModified: false,
                isError: false,
                lastUpdatedAt: getUtcIsoNow(),
              });
            }
          }
        }

        counts.tests = testsToPut.length;
        counts.testParameters = testParamsToPut.length;
        counts.parameters = paramMap.size;
        counts.testDepartments = deptMap.size;
        counts.testFormulas = formulasToPut.length;
        counts.interpretationRules = rulesToPut.length;

        if (testsToPut.length > 0) writePromises.push(db.tests.bulkPut(testsToPut));
        if (testParamsToPut.length > 0) writePromises.push(db.testParameters.bulkPut(testParamsToPut));
        if (paramMap.size > 0) writePromises.push(db.parameters.bulkPut(Array.from(paramMap.values())));
        if (deptMap.size > 0) writePromises.push(db.testDepartments.bulkPut(Array.from(deptMap.values())));
        if (formulasToPut.length > 0) writePromises.push(db.testFormulas.bulkPut(formulasToPut));
        if (rulesToPut.length > 0) writePromises.push(db.interpretationRules.bulkPut(rulesToPut));
      }

      // 4. Process Doctors
      if (doctorsRes.success && Array.isArray(doctorsRes.doctors)) {
        const docsToPut = doctorsRes.doctors.map((d) => ({
          ...d,
          isDirty: false,
          isModified: false,
          isError: false,
          lastUpdatedAt: getUtcIsoNow(),
        }));
        counts.doctors = docsToPut.length;
        if (docsToPut.length > 0) writePromises.push(db.doctors.bulkPut(docsToPut));
      }

      // 5. Process Registrations, RegistrationTests, PatientResults, RegistrationPayments
      if (regsRes.success && Array.isArray(regsRes.registrations)) {
        const regsToPut = [];
        const regTestsToPut = [];
        const patientResultsToPut = [];
        const regPaymentsToPut = [];

        for (const reg of regsRes.registrations) {
          regsToPut.push({
            ...reg,
            isDirty: false,
            isModified: false,
            isError: false,
            lastUpdatedAt: getUtcIsoNow(),
          });

          // Registration Tests
          if (Array.isArray(reg.tests)) {
            for (const rt of reg.tests) {
              const testId = rt.testId || (rt.test ? rt.test.id : rt.id);
              if (reg.id && testId) {
                regTestsToPut.push({
                  registrationId: reg.id,
                  testId: testId,
                  price: rt.price !== undefined ? Number(rt.price) : 0,
                  expense: rt.expense !== undefined ? Number(rt.expense) : 0,
                  sampleStatus: rt.sampleStatus || "Pending",
                  sampleBarcode: rt.sampleBarcode || null,
                  collectedBy: rt.collectedBy || "-NA-",
                  pathologist: rt.pathologist || "-NA-",
                  sendTo: rt.sendTo || "-NA-",
                  interpretation: rt.interpretation || null,
                  isDirty: false,
                  isModified: false,
                  isError: false,
                  lastUpdatedAt: getUtcIsoNow(),
                });
              }
            }
          }

          // Patient Results
          if (Array.isArray(reg.results)) {
            for (const pr of reg.results) {
              if (reg.id && pr.testParameterId) {
                patientResultsToPut.push({
                  ...pr,
                  registrationId: reg.id,
                  testParameterId: parseInt(pr.testParameterId),
                  value: pr.value !== undefined && pr.value !== null ? String(pr.value) : "",
                  isDirty: false,
                  isModified: false,
                  isError: false,
                  lastUpdatedAt: getUtcIsoNow(),
                });
              }
            }
          }

          // Registration Payments
          if (Array.isArray(reg.payments)) {
            for (const pm of reg.payments) {
              if (pm.id) {
                regPaymentsToPut.push({
                  ...pm,
                  registrationId: reg.id,
                  amount: pm.amount !== undefined ? Number(pm.amount) : 0,
                  isDirty: false,
                  isModified: false,
                  isError: false,
                  lastUpdatedAt: getUtcIsoNow(),
                });
              }
            }
          }
        }

        counts.registrations = regsToPut.length;
        counts.registrationTests = regTestsToPut.length;
        counts.patientResults = patientResultsToPut.length;
        counts.registrationPayments = regPaymentsToPut.length;

        if (regsToPut.length > 0) writePromises.push(db.registrations.bulkPut(regsToPut));
        if (regTestsToPut.length > 0) writePromises.push(db.registrationTests.bulkPut(regTestsToPut));
        if (patientResultsToPut.length > 0) writePromises.push(db.patientResults.bulkPut(patientResultsToPut));
        if (regPaymentsToPut.length > 0) writePromises.push(db.registrationPayments.bulkPut(regPaymentsToPut));
      }

      // 6. Process Workspace PDF Configuration & Cache Letterhead Frame
      const pdfSetting = pdfRes.pdfConfig || pdfRes.pdfSetting || (pdfRes.success && pdfRes.settings);
      if (pdfSetting) {
        counts.workspacePdf = 1;

        let framePdfBytes = null;
        if (pdfSetting.framePdfBase64) {
          try {
            const binaryString = atob(pdfSetting.framePdfBase64);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            framePdfBytes = bytes;
          } catch (b64Err) {
            console.warn("[SyncManager] Failed to decode framePdfBase64 from backend:", b64Err);
          }
        }

        writePromises.push(
          db.workspacePdf.put({
            ...pdfSetting,
            framePdfBytes: framePdfBytes || pdfSetting.framePdfBytes || null,
            id: pdfSetting.id || 1,
            isDirty: false,
            isModified: false,
            isError: false,
            lastUpdatedAt: getUtcIsoNow(),
          })
        );
      }

      // 7. Execute all Dexie writes in parallel using Promise.all
      await Promise.all(writePromises);

      this.lastSyncTime = getUtcIsoNow();
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("isInitialSynced", "1");
        } catch {}
      }
      console.log("[SyncManager] Initial data bootstrap completed successfully:", counts);
      return { success: true, counts };
    } catch (err) {
      console.error("[SyncManager] Error during initial data bootstrap:", err);
      return { success: false, error: err.message };
    }
  }

  /**
   * Main synchronization trigger.
   * @returns {Promise<{ success: boolean, errors: Array }>}
   */
  /**
   * Main synchronization trigger.
   * Uses Promise sharing and mutex lock to guarantee no two sync requests run in parallel.
   * @returns {Promise<{ success: boolean, errors: Array }>}
   */
  async sync() {
    if (this.currentSyncPromise) {
      console.log("[SyncManager] Sync already in progress, returning active promise.");
      return this.currentSyncPromise;
    }

    if (this.isSyncing) {
      console.log("[SyncManager] Sync flag active, skipping.");
      return { success: false, message: "Sync in progress" };
    }

    this.isSyncing = true;
    this.syncErrors = [];
    this.notifyState();

    this.currentSyncPromise = (async () => {
      try {
        // Strict Offline Guard: NEVER make network calls if offline
        if (typeof navigator !== "undefined" && !navigator.onLine) {
          console.log("[SyncManager] Offline detected via navigator.onLine, skipping sync without API calls.");
          return { success: false, message: "Offline", isOffline: true };
        }

        // 1. Build dynamic sync request from IndexedDB
        const syncObjects = await this.buildSyncPayload();

        // 2. Call /api/offline/sync
        const response = await fetch("/api/offline/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sync_objects: syncObjects }),
        });

        if (response.status === 401) {
          console.warn("[SyncManager] Received 401 Unauthorized from /api/offline/sync");
          const authError = {
            error: "Unauthorized (401). Session expired. Please re-login to sync.",
            isAuthError: true,
            status: 401,
          };
          this.syncErrors.push(authError);
          this.triggerAuthRequired({
            endpoint: "/api/offline/sync",
            message: authError.error,
          });
          return { success: false, isAuthError: true, status: 401, errors: this.syncErrors };
        }

        if (!response.ok) {
          throw new Error(`Sync API responded with status ${response.status}`);
        }

        const syncResult = await response.json();
        if (!syncResult.status || !Array.isArray(syncResult.data)) {
          throw new Error(syncResult.msg || "Invalid sync response structure");
        }

        // 3. Sort instructions by strict dependency priority (Doctors -> Tests/Master -> Registrations -> Results)
        const sortedInstructions = [...syncResult.data].sort((a, b) => {
          const prioA = MODEL_SYNC_PRIORITY[a.object_name] || 99;
          const prioB = MODEL_SYNC_PRIORITY[b.object_name] || 99;
          return prioA - prioB;
        });

        // 3A. Process POST operations first across models in strict dependency sequence (excluding patientResults which is batched)
        for (const instruction of sortedInstructions) {
          const modelName = instruction.object_name;
          const apiTypes = instruction.api_types || [];
          const modelDef = MODEL_REGISTRY[modelName];

          if (modelDef && modelDef.name !== "patientResults" && apiTypes.includes("POST")) {
            await this.processPostOperations(modelDef);
          }
        }

        // 3B. Process PUT operations across models in strict dependency sequence (excluding patientResults which is batched)
        for (const instruction of sortedInstructions) {
          const modelName = instruction.object_name;
          const apiTypes = instruction.api_types || [];
          const modelDef = MODEL_REGISTRY[modelName];

          if (modelDef && modelDef.name !== "patientResults" && apiTypes.includes("PUT")) {
            await this.processPutOperations(modelDef);
          }
        }

        // 4. Special handler for batched patientResults (Single consolidated hit per registration)
        await this.processPendingPatientResults();

        // 3C. Process GET operations (Server has newer records)
        for (const instruction of sortedInstructions) {
          const modelName = instruction.object_name;
          const apiTypes = instruction.api_types || [];
          const modelDef = MODEL_REGISTRY[modelName];

          if (modelDef && apiTypes.includes("GET")) {
            await this.processGetOperations(modelDef);
          }
        }

        this.lastSyncTime = getUtcIsoNow();
        return { success: this.syncErrors.length === 0, errors: this.syncErrors };
      } catch (err) {
        const isNetworkErr =
          (typeof navigator !== "undefined" && !navigator.onLine) ||
          err.name === "TypeError" ||
          (err.message && (err.message.includes("Failed to fetch") || err.message.includes("NetworkError") || err.message.includes("Load failed")));

        if (isNetworkErr) {
          console.log("[SyncManager] Network disconnected during sync, staying in offline mode.");
        } else {
          console.error("[SyncManager] Sync failed with error:", err);
          this.syncErrors.push({ error: err.message || "Sync failed" });
        }
        return { success: false, errors: this.syncErrors, isOffline: isNetworkErr };
      } finally {
        this.isSyncing = false;
        this.currentSyncPromise = null;
        this.notifyState();
      }
    })();

    return this.currentSyncPromise;
  }


  /**
   * Process POST for newly created local records.
   */
  async processPostOperations(modelDef) {
    if (!db[modelDef.storeName] || modelDef.name === "patientResults") return;

    const dirtyRecords = await db[modelDef.storeName]
      .filter((item) => item.isDirty === true)
      .toArray();

    for (const record of dirtyRecords) {
      const lockKey = `${modelDef.storeName}:${record.id}`;
      if (this.activeProcessingIds.has(lockKey)) {
        console.log(`[SyncManager] Skipping in-flight POST for ${lockKey}`);
        continue;
      }
      this.activeProcessingIds.add(lockKey);

      try {
        const payload = modelDef.serializePost ? modelDef.serializePost(record) : record;
        const postUrl = typeof modelDef.apiEndpoints?.post === "function"
          ? modelDef.apiEndpoints.post(record)
          : modelDef.apiEndpoints?.post;

        if (!postUrl || postUrl.includes("undefined")) {
          console.warn(`[SyncManager] Invalid or missing POST endpoint for ${modelDef.name} id=${record.id}`);
          continue;
        }

        const res = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.status === 401) {
          this.triggerAuthRequired({ endpoint: postUrl, action: "POST", model: modelDef.name });
          throw new Error("Unauthorized (401). Session expired.");
        }

        const data = await res.json();
        if (res.ok && (data.success || data.status)) {
          const serverRecord = modelDef.extractCreatedRecord ? modelDef.extractCreatedRecord(data) : data;

          // If server assigned a new authoritative ID
          if (serverRecord && serverRecord.id && serverRecord.id !== record.id) {
            const oldId = record.id;
            const newId = serverRecord.id;

            await db[modelDef.storeName].delete(oldId);
            await db[modelDef.storeName].put({
              ...record,
              ...serverRecord,
              isDirty: false,
              isModified: false,
              isError: false,
              errorInfo: null,
              lastUpdatedAt: getUtcIsoNow(),
            });

            // Cascade ID updates for child models if store is registrations
            if (modelDef.storeName === "registrations") {
              try {
                if (db.patientResults) {
                  const matchingResults = await db.patientResults.where("registrationId").equals(oldId).toArray();
                  for (const res of matchingResults) {
                    await db.patientResults.update(res.id, { registrationId: newId });
                  }
                }
                if (db.registrationTests) {
                  const matchingTests = await db.registrationTests.where("registrationId").equals(oldId).toArray();
                  for (const rt of matchingTests) {
                    await db.registrationTests.update(rt.id, { registrationId: newId });
                  }
                }
                if (db.registrationPayments) {
                  const matchingPayments = await db.registrationPayments.where("registrationId").equals(oldId).toArray();
                  for (const rp of matchingPayments) {
                    await db.registrationPayments.update(rp.id, {
                      registrationId: newId,
                      isDirty: false,
                      isModified: false,
                      isError: false,
                      errorInfo: null,
                    });
                  }
                }
              } catch (cascadeErr) {
                console.warn("[SyncManager] Registration ID cascade update warning:", cascadeErr);
              }
            }
          } else {
            await db.markSynced(modelDef.storeName, record.id, serverRecord);
            // If registration with same ID succeeded, mark initial payments clean
            if (modelDef.storeName === "registrations" && db.registrationPayments) {
              try {
                const matchingPayments = await db.registrationPayments.where("registrationId").equals(record.id).toArray();
                for (const rp of matchingPayments) {
                  await db.registrationPayments.update(rp.id, {
                    isDirty: false,
                    isModified: false,
                    isError: false,
                    errorInfo: null,
                  });
                }
              } catch (err) {}
            }
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
      } finally {
        this.activeProcessingIds.delete(lockKey);
      }
    }
  }

  /**
   * Process PUT for modified local records.
   */
  async processPutOperations(modelDef) {
    if (!db[modelDef.storeName] || modelDef.name === "patientResults") return;

    const modifiedRecords = await db[modelDef.storeName]
      .filter((item) => item.isModified === true && item.isDirty !== true)
      .toArray();

    for (const record of modifiedRecords) {
      const lockKey = `${modelDef.storeName}:${record.id}`;
      if (this.activeProcessingIds.has(lockKey)) {
        console.log(`[SyncManager] Skipping in-flight PUT for ${lockKey}`);
        continue;
      }

      // If this registration has pending patient results, skip separate PUT since processPendingPatientResults will sync both in 1 consolidated hit
      if (modelDef.name === "registrations" && db.patientResults) {
        const hasPendingResults = await db.patientResults
          .filter((r) => r.registrationId === record.id && (r.isDirty === true || r.isModified === true))
          .first();
        if (hasPendingResults) {
          console.log(`[SyncManager] Skipping separate PUT for registration #${record.id} (will be consolidated with patient results sync)`);
          continue;
        }
      }

      this.activeProcessingIds.add(lockKey);

      try {
        const payload = modelDef.serializePut ? modelDef.serializePut(record) : record;
        const putUrl = typeof modelDef.apiEndpoints?.put === "function"
          ? modelDef.apiEndpoints.put(record)
          : modelDef.apiEndpoints?.put;

        if (!putUrl || putUrl.includes("undefined")) {
          console.warn(`[SyncManager] Invalid or missing PUT endpoint for ${modelDef.name} id=${record.id}`);
          continue;
        }

        const res = await fetch(putUrl, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.status === 401) {
          this.triggerAuthRequired({ endpoint: putUrl, action: "PUT", model: modelDef.name });
          throw new Error("Unauthorized (401). Session expired.");
        }

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
      } finally {
        this.activeProcessingIds.delete(lockKey);
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
      if (res.status === 401) {
        this.triggerAuthRequired({ endpoint: getUrl, action: "GET", model: modelDef.name });
        return;
      }
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

      // If updating tests, also synchronize child relational stores
      if (modelDef.name === "tests" && Array.isArray(data.tests)) {
        const testParams = [];
        const paramsMap = new Map();
        const deptsMap = new Map();
        const formulas = [];
        const rules = [];

        for (const t of data.tests) {
          if (t.department && t.department.id && !deptsMap.has(t.department.id)) {
            deptsMap.set(t.department.id, t.department);
          }
          if (Array.isArray(t.parameters)) {
            for (const tp of t.parameters) {
              testParams.push({
                ...tp,
                testId: t.id,
                parameterId: tp.parameterId || (tp.parameter ? tp.parameter.id : tp.id),
              });
              const p = tp.parameter || tp;
              if (p && p.id && !paramsMap.has(p.id)) {
                paramsMap.set(p.id, p);
              }
            }
          }
          if (Array.isArray(t.formulas)) {
            for (const f of t.formulas) formulas.push({ ...f, testId: t.id });
          }
          if (Array.isArray(t.interpretationRules)) {
            for (const r of t.interpretationRules) rules.push({ ...r, testId: t.id });
          }
        }

        await Promise.all([
          testParams.length > 0 ? db.testParameters.bulkPut(testParams.map(x => ({ ...x, isDirty: false, isModified: false, isError: false, lastUpdatedAt: getUtcIsoNow() }))) : Promise.resolve(),
          paramsMap.size > 0 ? db.parameters.bulkPut(Array.from(paramsMap.values()).map(x => ({ ...x, isDirty: false, isModified: false, isError: false, lastUpdatedAt: getUtcIsoNow() }))) : Promise.resolve(),
          deptsMap.size > 0 ? db.testDepartments.bulkPut(Array.from(deptsMap.values()).map(x => ({ ...x, isDirty: false, isModified: false, isError: false, lastUpdatedAt: getUtcIsoNow() }))) : Promise.resolve(),
          formulas.length > 0 ? db.testFormulas.bulkPut(formulas.map(x => ({ ...x, isDirty: false, isModified: false, isError: false, lastUpdatedAt: getUtcIsoNow() }))) : Promise.resolve(),
          rules.length > 0 ? db.interpretationRules.bulkPut(rules.map(x => ({ ...x, isDirty: false, isModified: false, isError: false, lastUpdatedAt: getUtcIsoNow() }))) : Promise.resolve(),
        ]);
      }

      // If updating registrations, also synchronize child relational stores
      if (modelDef.name === "registrations" && Array.isArray(data.registrations)) {
        const regTests = [];
        const patResults = [];
        const regPayments = [];

        for (const reg of data.registrations) {
          if (Array.isArray(reg.tests)) {
            for (const rt of reg.tests) {
              const testId = rt.testId || (rt.test ? rt.test.id : rt.id);
              if (reg.id && testId) {
                regTests.push({
                  registrationId: reg.id,
                  testId: testId,
                  price: rt.price !== undefined ? Number(rt.price) : 0,
                  expense: rt.expense !== undefined ? Number(rt.expense) : 0,
                  sampleStatus: rt.sampleStatus || "Pending",
                  sampleBarcode: rt.sampleBarcode || null,
                  collectedBy: rt.collectedBy || "-NA-",
                  pathologist: rt.pathologist || "-NA-",
                  sendTo: rt.sendTo || "-NA-",
                  interpretation: rt.interpretation || null,
                  isDirty: false,
                  isModified: false,
                  isError: false,
                  lastUpdatedAt: getUtcIsoNow(),
                });
              }
            }
          }
          if (Array.isArray(reg.results)) {
            for (const pr of reg.results) {
              if (reg.id && pr.testParameterId) {
                patResults.push({
                  ...pr,
                  registrationId: reg.id,
                  testParameterId: parseInt(pr.testParameterId),
                  value: pr.value !== undefined && pr.value !== null ? String(pr.value) : "",
                  isDirty: false,
                  isModified: false,
                  isError: false,
                  lastUpdatedAt: getUtcIsoNow(),
                });
              }
            }
          }
          if (Array.isArray(reg.payments)) {
            for (const pm of reg.payments) {
              if (pm.id) {
                regPayments.push({
                  ...pm,
                  registrationId: reg.id,
                  amount: pm.amount !== undefined ? Number(pm.amount) : 0,
                  isDirty: false,
                  isModified: false,
                  isError: false,
                  lastUpdatedAt: getUtcIsoNow(),
                });
              }
            }
          }
        }

        await Promise.all([
          regTests.length > 0 ? db.registrationTests.bulkPut(regTests) : Promise.resolve(),
          patResults.length > 0 ? db.patientResults.bulkPut(patResults) : Promise.resolve(),
          regPayments.length > 0 ? db.registrationPayments.bulkPut(regPayments) : Promise.resolve(),
        ]);
      }
    } catch (err) {
      console.error(`[SyncManager] GET failed for ${modelDef.name}:`, err);
    }
  }

  /**
   * Batch processes pending patient result entries.
   * Consolidates all parameters, latest notes, and status into exactly 1 hit per registration.
   * Skips all intermediate draft states and sends only the single latest consolidated snapshot.
   */
  async processPendingPatientResults() {
    if (!db.patientResults) return;

    const dirtyResults = await db.patientResults
      .filter((r) => r.isDirty === true || r.isModified === true)
      .toArray();

    if (dirtyResults.length === 0) return;

    // Group unique registration IDs
    const uniqueRegIds = Array.from(new Set(dirtyResults.map((r) => r.registrationId).filter(Boolean)));

    for (const regId of uniqueRegIds) {
      const regIdInt = parseInt(regId);
      const lockKey = `patientResults:reg:${regIdInt}`;
      if (this.activeProcessingIds.has(lockKey)) {
        continue;
      }
      this.activeProcessingIds.add(lockKey);

      try {
        const localReg = await db.registrations?.get(regIdInt);
        // Pull ALL latest parameters for this registration from IndexedDB
        const allRegResults = await db.patientResults
          .filter((r) => r.registrationId === regIdInt)
          .toArray();

        const itemsToProcess = allRegResults.length > 0 ? allRegResults : dirtyResults.filter(r => r.registrationId === regId);
        const resultsData = itemsToProcess.map((r) => ({
          testParameterId: parseInt(r.testParameterId),
          value: r.value !== undefined && r.value !== null ? String(r.value) : "",
        }));

        const payload = {
          resultsData,
          reportNotes: localReg?.remark || "",
          status: localReg?.status || "Completed",
        };

        const res = await fetch(`/api/registrations/${regIdInt}/results`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.status === 401) {
          this.triggerAuthRequired({
            endpoint: `/api/registrations/${regIdInt}/results`,
            action: "POST_RESULTS",
          });
          throw new Error("Unauthorized (401). Session expired.");
        }

        const data = await res.json();
        if (res.ok && data.success) {
          for (const item of itemsToProcess) {
            const key = item.id || [item.registrationId, item.testParameterId];
            await db.markSynced("patientResults", key);
          }
          // Mark parent registration synced to prevent redundant separate PUT
          if (localReg) {
            await db.markSynced("registrations", regIdInt);
          }
          console.log(`[SyncManager] Successfully synced consolidated report results for Registration #${regIdInt} (${resultsData.length} parameters)`);
        } else {
          throw new Error(data.message || data.error || "Failed to save results");
        }
      } catch (err) {
        console.error(`[SyncManager] Failed to sync results for registration ${regId}:`, err);
        const affectedResults = dirtyResults.filter((r) => r.registrationId === regId);
        for (const item of affectedResults) {
          const key = item.id || [item.registrationId, item.testParameterId];
          await db.markSyncError("patientResults", key, err.message);
        }
        this.syncErrors.push({
          model: "patientResults",
          registrationId: regId,
          action: "POST_RESULTS",
          error: err.message,
        });
      } finally {
        this.activeProcessingIds.delete(lockKey);
      }
    }
  }
}

export const syncManager = new SyncManager();
export default syncManager;

