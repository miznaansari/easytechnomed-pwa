"use client";

import { useOfflineSync } from "@/context/OfflineSyncContext";

export function useOffline() {
  const { isOnline, syncStatus, pendingCount, hasUnsyncedChanges } = useOfflineSync();
  return {
    isOnline,
    isOffline: !isOnline,
    syncStatus,
    pendingCount,
    hasUnsyncedChanges,
  };
}

export default useOffline;
