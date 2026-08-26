"use client";

import { useOfflineSync } from "@/context/OfflineSyncContext";

export function useSync() {
  const {
    isOnline,
    syncStatus,
    pendingCount,
    syncErrors,
    lastSyncTime,
    hasUnsyncedChanges,
    triggerSync,
    refreshPendingCount,
  } = useOfflineSync();

  return {
    isOnline,
    isSyncing: syncStatus === "syncing",
    isSynced: syncStatus === "synced",
    isError: syncStatus === "error",
    isOffline: syncStatus === "offline",
    syncStatus,
    pendingCount,
    syncErrors,
    lastSyncTime,
    hasUnsyncedChanges,
    sync: triggerSync,
    refreshPendingCount,
  };
}

export default useSync;
