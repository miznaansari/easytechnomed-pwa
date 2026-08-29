import db from "@/lib/offline/db";
import { getUtcIsoNow } from "@/lib/offline/timestamps";

const SESSION_STORAGE_KEY = "admin_profile";
const LOCAL_AUTH_KEY = "etm_offline_auth";

/**
 * Saves authenticated admin session both in storage and Dexie.
 * @param {object} sessionData { admin, token, expiresAt }
 */
export async function saveAuthenticatedSession(sessionData) {
  if (typeof window === "undefined" || !sessionData?.admin) return;

  const { admin, token, expiresAt } = sessionData;
  const sessionRecord = {
    id: 1, // Single active local admin session slot
    token: token || "offline_session_token",
    email: admin?.email || admin?.mobileNumber || "",
    admin,
    permissions: admin?.role?.permissions || admin?.permissions || [{ permission: "ALL" }],
    role: admin?.role?.name || admin?.role || "Admin",
    expiresAt: expiresAt || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    lastSavedAt: getUtcIsoNow(),
  };

  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionRecord.admin));
    localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(sessionRecord));
    localStorage.removeItem("etm_logged_out");
    await db.offlineSession.put(sessionRecord);
  } catch (err) {
    console.error("[offlineAuth] Failed to cache session:", err);
  }
}

/**
 * Retrieves or initializes an offline session from IndexedDB or storage.
 * @returns {Promise<object|null>}
 */
export async function getOrCreateOfflineSession() {
  if (typeof window === "undefined") return null;

  try {
    const existing = await getCachedSession();
    if (existing) return existing;
    return null;
  } catch (err) {
    return null;
  }
}

/**
 * Retrieves the cached offline session from IndexedDB or storage.
 * @returns {Promise<object|null>}
 */
export async function getCachedSession() {
  if (typeof window === "undefined") return null;

  try {
    // If user explicitly logged out, never return cached session
    if (localStorage.getItem("etm_logged_out") === "1") {
      return null;
    }

    const dbSession = await db.offlineSession.get(1);
    if (dbSession && dbSession.admin) return dbSession;

    const localRaw = localStorage.getItem(LOCAL_AUTH_KEY);
    if (localRaw) {
      const parsed = JSON.parse(localRaw);
      if (parsed && parsed.admin) return parsed;
    }

    const cachedAdmins = await db.admins.toArray();
    if (cachedAdmins.length > 0) {
      const admin = cachedAdmins[0];
      const fallback = {
        id: 1,
        token: "offline_session_token",
        email: admin.email || admin.mobileNumber || "",
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
 * Clears all local session credentials, wipes all IndexedDB tables completely,
 * and resets client-side caches on explicit user logout.
 */
export async function clearLocalSession() {
  if (typeof window === "undefined") return;

  try {
    // 1. Wipe all IndexedDB data across all tables
    if (db && typeof db.clearAllData === "function") {
      await db.clearAllData();
    } else if (db?.offlineSession) {
      await db.offlineSession.clear();
    }

    // 2. Clear all session storage
    sessionStorage.clear();

    // 3. Clear local storage and mark as logged out to prevent auto-redirect
    localStorage.clear();
    localStorage.setItem("etm_logged_out", "1");

    console.log("[offlineAuth] Complete logout purge finished: IndexedDB, localStorage, and sessionStorage wiped.");
  } catch (err) {
    console.error("[offlineAuth] Error during complete logout cleanup:", err);
  }
}


