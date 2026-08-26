"use client";

import { createContext, useContext } from "react";

export const OfflineSyncContext = createContext({
  isOnline: true,
  syncStatus: "idle", // "idle" | "syncing" | "synced" | "error" | "offline"
  pendingCount: 0,
  syncErrors: [],
  lastSyncTime: null,
  hasUnsyncedChanges: false,
  triggerSync: async () => {},
  refreshPendingCount: async () => 0,
});

export const useOfflineSync = () => useContext(OfflineSyncContext);
