import db from "../db";
import { MODEL_REGISTRY } from "./modelRegistry";
import { getUtcIsoNow, isServerNewer, toUtcIso } from "../timestamps";
import { networkMonitor } from "../network";
import { saveAuthenticatedSession } from "@/lib/auth/offlineAuth";

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

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("easytechnomed:sync-state-change", { detail: state }));
      if (!this.isSyncing && this.lastSyncTime) {
        window.dispatchEvent(new CustomEvent("easytechnomed:sync-complete", { detail: state }));
      }
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
        settingsRes
      ] = await Promise.all([
        fetch("/api/profile").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/tests").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/doctors").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetchAllRegistrations(),
        fetch("/api/settings/pdf").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
        fetch("/api/settings").then((r) => r.json()).catch((err) => ({ success: false, error: err.message })),
      ]);

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
      };

      // 2. Process Admin & Workspace session
      if (profileRes.success && profileRes.admin) {
        const adminData = profileRes.admin;
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

      // 6. Process Workspace PDF Configuration & Download Letterhead Frame PDF
      const pdfSetting = pdfRes.pdfConfig || pdfRes.pdfSetting || (pdfRes.success && pdfRes.settings);
      const frameUrl = (pdfSetting && pdfSetting.framePdfUrl) || (profileRes.admin && profileRes.admin.framePdfUrl);
      let cachedFrameData = null;

      if (frameUrl && typeof window !== "undefined" && navigator.onLine) {
        try {
          console.log("[SyncManager] Downloading & caching Letterhead Frame PDF:", frameUrl);
          const frameRes = await fetch(frameUrl);
          if (frameRes.ok) {
            // Put in Service Worker Cache Storage
            if ("caches" in window) {
              caches.open("easytechnomed-pwa-v3").then((c) => c.put(frameUrl, frameRes.clone())).catch(() => {});
            }
            // Read as base64 data URL for permanent IndexedDB storage
            const blob = await frameRes.blob();
            cachedFrameData = await new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = () => resolve(null);
              reader.readAsDataURL(blob);
            });
          }
        } catch (frameErr) {
          console.warn("[SyncManager] Failed to cache framePdfUrl:", frameErr);
        }
      }

      if (pdfSetting) {
        counts.workspacePdf = 1;
        writePromises.push(
          db.workspacePdf.put({
            ...pdfSetting,
            id: pdfSetting.id || 1,
            framePdfData: cachedFrameData || pdfSetting.framePdfData || null,
            isDirty: false,
            isModified: false,
            isError: false,
            lastUpdatedAt: getUtcIsoNow(),
          })
        );
      }

      // 7. Execute all Dexie writes in parallel using Promise.all
      await Promise.all(writePromises);

      // 8. Pre-warm HTML route caches in Service Worker cache storage so admins can navigate completely offline
      if (typeof window !== "undefined" && "caches" in window && navigator.onLine) {
        const routesToPrecache = [
          "/dashboard",
          "/registration",
          "/test-report",
          "/doctor-summary",
          "/members",
          "/userApprove",
          "/settings",
          "/settings/tests",
          "/settings/pdf",
          "/settings/payments",
          "/settings/address",
        ];
        caches.open("easytechnomed-pwa-v7").then(async (cache) => {
          for (const route of routesToPrecache) {
            try {
              const res = await fetch(route, { headers: { Accept: "text/html" } });
              if (res && res.status === 200) {
                const ct = res.headers.get("content-type") || "";
                if (ct.includes("text/html")) {
                  await cache.put(route, res.clone());
                  await cache.put("/__app_shell__", res.clone());
                }
              }
            } catch (e) {}
          }
        }).catch(() => {});
      }

      this.lastSyncTime = getUtcIsoNow();
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
          testParams.length > 0 ? db.testParameters.bulkPut(testParams.map(x => ({ ...x, isDirty: false, isModified: false, isError: false }))) : Promise.resolve(),
          paramsMap.size > 0 ? db.parameters.bulkPut(Array.from(paramsMap.values()).map(x => ({ ...x, isDirty: false, isModified: false, isError: false }))) : Promise.resolve(),
          deptsMap.size > 0 ? db.testDepartments.bulkPut(Array.from(deptsMap.values()).map(x => ({ ...x, isDirty: false, isModified: false, isError: false }))) : Promise.resolve(),
          formulas.length > 0 ? db.testFormulas.bulkPut(formulas.map(x => ({ ...x, isDirty: false, isModified: false, isError: false }))) : Promise.resolve(),
          rules.length > 0 ? db.interpretationRules.bulkPut(rules.map(x => ({ ...x, isDirty: false, isModified: false, isError: false }))) : Promise.resolve(),
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
export default syncManager;
