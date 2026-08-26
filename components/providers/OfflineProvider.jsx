"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { OfflineSyncContext } from "@/context/OfflineSyncContext";
import { networkMonitor } from "@/lib/offline/network";
import { syncManager } from "@/lib/offline/sync/syncManager";
import db from "@/lib/offline/db";

export default function OfflineProvider({ children }) {
  const [isOnline, setIsOnline] = useState(true);
  const [syncStatus, setSyncStatus] = useState("idle");
  const [pendingCount, setPendingCount] = useState(0);
  const [syncErrors, setSyncErrors] = useState([]);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const prevOnlineRef = useRef(true);

  // Refresh pending count from IndexedDB
  const refreshPendingCount = useCallback(async () => {
    try {
      const count = await db.getPendingCount();
      setPendingCount(count);
      return count;
    } catch (err) {
      console.error("[OfflineProvider] Error fetching pending count:", err);
      return 0;
    }
  }, []);

  // Manual or automatic sync trigger
  const triggerSync = useCallback(async () => {
    if (!isOnline) {
      setSyncStatus("offline");
      return;
    }

    setSyncStatus("syncing");
    const result = await syncManager.sync();
    await refreshPendingCount();

    if (result.success) {
      setSyncStatus("synced");
      setSyncErrors([]);
    } else {
      setSyncStatus("error");
      setSyncErrors(result.errors || []);
    }
  }, [isOnline, refreshPendingCount]);

  // Network monitor subscription
  useEffect(() => {
    const unsubscribeNetwork = networkMonitor.subscribe((online) => {
      setIsOnline(online);

      if (!online) {
        setSyncStatus("offline");
      } else if (!prevOnlineRef.current && online) {
        // Automatically trigger sync when coming back online
        console.log("[OfflineProvider] Reconnected to internet, triggering auto-sync...");
        triggerSync();
      }
      prevOnlineRef.current = online;
    });

    return () => unsubscribeNetwork();
  }, [triggerSync]);

  // SyncManager subscription
  useEffect(() => {
    const unsubscribeSync = syncManager.subscribe((syncState) => {
      if (syncState.isSyncing) {
        setSyncStatus("syncing");
      } else if (!isOnline) {
        setSyncStatus("offline");
      } else if (syncState.syncErrors && syncState.syncErrors.length > 0) {
        setSyncStatus("error");
        setSyncErrors(syncState.syncErrors);
      } else if (syncState.lastSyncTime) {
        setSyncStatus("synced");
        setLastSyncTime(syncState.lastSyncTime);
      }
    });

    return () => unsubscribeSync();
  }, [isOnline]);

  // Initial check: if IndexedDB is missing tests or parameters, bootstrap via Promise.all
  useEffect(() => {
    async function checkAndBootstrap() {
      if (typeof window === "undefined" || !navigator.onLine) return;
      try {
        const testCount = await db.tests.count();
        const paramCount = await db.parameters.count();
        if (testCount === 0 || paramCount === 0) {
          console.log("[OfflineProvider] Empty master tables detected in IndexedDB, bootstrapping via Promise.all...");
          await syncManager.bootstrapInitialData();
          await refreshPendingCount();
        }
      } catch (err) {
        console.warn("[OfflineProvider] Bootstrap check warning:", err);
      }
    }
    checkAndBootstrap();
  }, [refreshPendingCount]);

  // Periodic check for pending count and initial refresh
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshPendingCount();

    const interval = setInterval(() => {
      refreshPendingCount();
    }, 5000);

    return () => clearInterval(interval);
  }, [refreshPendingCount]);

  const value = {
    isOnline,
    syncStatus,
    pendingCount,
    syncErrors,
    lastSyncTime,
    hasUnsyncedChanges: pendingCount > 0,
    triggerSync,
    refreshPendingCount,
  };

  return (
    <OfflineSyncContext.Provider value={value}>
      {children}
    </OfflineSyncContext.Provider>
  );
}
