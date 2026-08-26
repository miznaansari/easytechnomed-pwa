"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { OfflineSyncContext } from "@/context/OfflineSyncContext";
import { networkMonitor } from "@/lib/offline/network";
import { syncManager } from "@/lib/offline/sync/syncManager";
import db from "@/lib/offline/db";

export default function OfflineProvider({ children }) {
  const [isOnline, setIsOnline] = useState(() => typeof navigator !== "undefined" ? navigator.onLine : true);
  const [syncStatus, setSyncStatus] = useState("idle");
  const [pendingCount, setPendingCount] = useState(0);
  const [syncErrors, setSyncErrors] = useState([]);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const prevOnlineRef = useRef(isOnline);

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
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setSyncStatus("offline");
      return { success: false, message: "Offline" };
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
    return result;
  }, [refreshPendingCount]);

  // Network monitor & online/offline window event listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("[OfflineProvider] Internet reconnected, triggering auto-sync...");
      triggerSync();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setSyncStatus("offline");
    };

    const handleDataMutated = () => {
      refreshPendingCount();
      if (typeof navigator !== "undefined" && navigator.onLine) {
        triggerSync();
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("easytechnomed:data-mutated", handleDataMutated);

    const unsubscribeNetwork = networkMonitor.subscribe((online) => {
      setIsOnline(online);
      if (!online) {
        setSyncStatus("offline");
      } else if (!prevOnlineRef.current && online) {
        console.log("[OfflineProvider] Network monitor detected online, triggering auto-sync...");
        triggerSync();
      }
      prevOnlineRef.current = online;
    });

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("easytechnomed:data-mutated", handleDataMutated);
      unsubscribeNetwork();
    };
  }, [triggerSync, refreshPendingCount]);

  // SyncManager subscription
  useEffect(() => {
    const unsubscribeSync = syncManager.subscribe((syncState) => {
      if (syncState.isSyncing) {
        setSyncStatus("syncing");
      } else if (typeof navigator !== "undefined" && !navigator.onLine) {
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
  }, []);

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

  // Periodic auto-sync loop: every 10 seconds check pending records and auto-sync when online
  useEffect(() => {
    refreshPendingCount();

    const interval = setInterval(async () => {
      const pending = await refreshPendingCount();
      if (pending > 0 && typeof navigator !== "undefined" && navigator.onLine && !syncManager.isSyncing) {
        console.log(`[OfflineProvider] Auto-syncing ${pending} pending local records in background...`);
        triggerSync();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [refreshPendingCount, triggerSync]);

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
