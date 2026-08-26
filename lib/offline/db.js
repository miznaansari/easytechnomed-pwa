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
   * @returns {Promise<Array<{ storeName: string, count: number, records: Array<any> }>>}
   */
  async getAllPendingRecords() {
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

    const results = [];
    for (const storeName of stores) {
      if (this[storeName]) {
        const dirty = await this[storeName].filter(item => item.isDirty === true || item.isModified === true).toArray();
        if (dirty.length > 0) {
          results.push({ storeName, count: dirty.length, records: dirty });
        }
      }
    }
    return results;
  }

  /**
   * Computes the total count of unsynced items.
   * @returns {Promise<number>}
   */
  async getPendingCount() {
    const pending = await this.getAllPendingRecords();
    return pending.reduce((sum, item) => sum + item.count, 0);
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
}

export const db = new AppDatabase();
export default db;
