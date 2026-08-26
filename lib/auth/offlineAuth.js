import db from "@/lib/offline/db";
import { getUtcIsoNow } from "@/lib/offline/timestamps";

const SESSION_STORAGE_KEY = "admin_profile";
const LOCAL_AUTH_KEY = "etm_offline_auth";

/**
 * Saves authenticated admin session both in storage and Dexie.
 * @param {object} sessionData { admin, token, expiresAt }
 */
export async function saveAuthenticatedSession(sessionData) {
  if (typeof window === "undefined") return;

  const { admin, token, expiresAt } = sessionData;
  const sessionRecord = {
    id: 1, // Single active local admin session slot
    token: token || "",
    email: admin?.email || "",
    admin: admin || {},
    permissions: admin?.role?.permissions || admin?.permissions || [],
    role: admin?.role?.name || admin?.role || "Admin",
    expiresAt: expiresAt || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    lastSavedAt: getUtcIsoNow(),
  };

  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(admin));
    localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(sessionRecord));
    await db.offlineSession.put(sessionRecord);
  } catch (err) {
    console.error("[offlineAuth] Failed to cache session:", err);
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
  } catch (err) {
    console.error("[offlineAuth] Failed to read cached session:", err);
  }
  return null;
}

/**
 * Validates if the local session is present and not expired.
 * @returns {Promise<boolean>}
 */
export async function isLocalSessionValid() {
  const session = await getCachedSession();
  if (!session) return false;

  if (session.expiresAt) {
    const expiryTime = new Date(session.expiresAt).getTime();
    if (expiryTime < Date.now()) {
      // Session has expired
      return false;
    }
  }
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
