import db from "@/lib/offline/db";
import { getUtcIsoNow } from "@/lib/offline/timestamps";

const SESSION_STORAGE_KEY = "admin_profile";
const LOCAL_AUTH_KEY = "etm_offline_auth";

const DEFAULT_OFFLINE_ADMIN = {
  id: 1,
  name: "PathLab Admin",
  email: "admin@pathlab.local",
  role: { name: "ADMIN", permissions: [{ permission: "ALL" }] },
  permissions: [{ permission: "ALL" }],
  workspace: { name: "Pathology & Diagnostic Lab" },
  companyName: "Pathology & Diagnostic Lab",
};

/**
 * Saves authenticated admin session both in storage and Dexie.
 * @param {object} sessionData { admin, token, expiresAt }
 */
export async function saveAuthenticatedSession(sessionData) {
  if (typeof window === "undefined") return;

  const { admin, token, expiresAt } = sessionData;
  const sessionRecord = {
    id: 1, // Single active local admin session slot
    token: token || "offline_session_token",
    email: admin?.email || "admin@pathlab.local",
    admin: admin || DEFAULT_OFFLINE_ADMIN,
    permissions: admin?.role?.permissions || admin?.permissions || [{ permission: "ALL" }],
    role: admin?.role?.name || admin?.role || "Admin",
    expiresAt: expiresAt || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    lastSavedAt: getUtcIsoNow(),
  };

  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionRecord.admin));
    localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(sessionRecord));
    await db.offlineSession.put(sessionRecord);
  } catch (err) {
    console.error("[offlineAuth] Failed to cache session:", err);
  }
}

/**
 * Retrieves or initializes an offline session from IndexedDB or storage.
 * @returns {Promise<object>}
 */
export async function getOrCreateOfflineSession() {
  if (typeof window === "undefined") return { admin: DEFAULT_OFFLINE_ADMIN, role: "Admin" };

  try {
    const existing = await getCachedSession();
    if (existing) return existing;

    // If no existing session found, automatically create local offline session
    await saveAuthenticatedSession({
      admin: DEFAULT_OFFLINE_ADMIN,
      token: "offline_session_token",
    });
    return await getCachedSession();
  } catch (err) {
    return { admin: DEFAULT_OFFLINE_ADMIN, role: "Admin" };
  }
}

/**
 * Retrieves the cached offline session from IndexedDB or storage.
 * @returns {Promise<object|null>}
 */
export async function getCachedSession() {
  if (typeof window === "undefined") return null;

  try {
    const dbSession = await db.offlineSession.get(1);
    if (dbSession) return dbSession;

    const localRaw = localStorage.getItem(LOCAL_AUTH_KEY);
    if (localRaw) {
      const parsed = JSON.parse(localRaw);
      return parsed;
    }

    const cachedAdmins = await db.admins.toArray();
    if (cachedAdmins.length > 0) {
      const admin = cachedAdmins[0];
      const fallback = {
        id: 1,
        token: "offline_session_token",
        email: admin.email || "",
        admin,
        permissions: admin.role?.permissions || admin.permissions || [{ permission: "ALL" }],
        role: admin.role?.name || admin.role || "Admin",
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        lastSavedAt: getUtcIsoNow(),
      };
      await saveAuthenticatedSession(fallback);
      return fallback;
    }
  } catch (err) {
    console.error("[offlineAuth] Failed to read cached session:", err);
  }
  return null;
}

/**
 * Validates if the local session is present or if user is offline (always valid offline).
 * @returns {Promise<boolean>}
 */
export async function isLocalSessionValid() {
  // When offline, ALWAYS valid - never block user from IndexedDB
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    return true;
  }

  const session = await getCachedSession();
  if (!session) return false;

  return true;
}

/**
 * Checks if it is safe to log out (no unsynced records).
 * @returns {Promise<{ canLogout: boolean, pendingCount: number, pendingDetails: Array }>}
 */
export async function checkUnsyncedDataBeforeLogout() {
  const pendingRecords = await db.getAllPendingRecords();
  const pendingCount = pendingRecords.reduce((sum, item) => sum + item.count, 0);

  return {
    canLogout: pendingCount === 0,
    pendingCount,
    pendingDetails: pendingRecords,
  };
}

/**
 * Clears the session credentials from local cache.
 * Note: Never wipes unsynced IndexedDB business data tables.
 */
export async function clearLocalSession() {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    localStorage.removeItem(LOCAL_AUTH_KEY);
    await db.offlineSession.clear();
  } catch (err) {
    console.error("[offlineAuth] Error clearing session:", err);
  }
}
