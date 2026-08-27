"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { OfflineSyncContext } from "@/context/OfflineSyncContext";
import { networkMonitor } from "@/lib/offline/network";
import { syncManager } from "@/lib/offline/sync/syncManager";
import db from "@/lib/offline/db";
import ReLoginModal from "@/components/offline/ReLoginModal";

export default function OfflineProvider({ children }) {
  const [isOnline, setIsOnline] = useState(() => typeof navigator !== "undefined" ? navigator.onLine : true);
  const [syncStatus, setSyncStatus] = useState("idle");
  const [pendingCount, setPendingCount] = useState(0);
  const [syncErrors, setSyncErrors] = useState([]);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const [isAuthRequired, setIsAuthRequired] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
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
      setIsAuthRequired(false);
    } else {
      setSyncStatus("error");
      setSyncErrors(result.errors || []);
      if (result.isAuthError) {
        setIsAuthRequired(true);
        setIsAuthModalOpen(true);
      }
    }
    return result;
  }, [refreshPendingCount]);

  const debounceTimerRef = useRef(null);

  // Debounced sync trigger for burst events (online, mutated)
  const debouncedTriggerSync = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      triggerSync();
    }, 300);
  }, [triggerSync]);

  // Network monitor & online/offline window event listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("[OfflineProvider] Internet reconnected, triggering auto-sync...");
      debouncedTriggerSync();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setSyncStatus("offline");
    };

    const handleDataMutated = () => {
      refreshPendingCount();
      if (typeof navigator !== "undefined" && navigator.onLine) {
        debouncedTriggerSync();
      }
    };

    const handleAuthRequired = (e) => {
      console.warn("[OfflineProvider] Auth required event caught:", e?.detail);
      setIsAuthRequired(true);
      setIsAuthModalOpen(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("easytechnomed:data-mutated", handleDataMutated);
    window.addEventListener("easytechnomed:auth-required", handleAuthRequired);

    const unsubscribeNetwork = networkMonitor.subscribe((online) => {
      setIsOnline(online);
      if (!online) {
        setSyncStatus("offline");
      } else if (!prevOnlineRef.current && online) {
        console.log("[OfflineProvider] Network monitor detected online, triggering auto-sync...");
        debouncedTriggerSync();
      }
      prevOnlineRef.current = online;
    });

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("easytechnomed:data-mutated", handleDataMutated);
      window.removeEventListener("easytechnomed:auth-required", handleAuthRequired);
      unsubscribeNetwork();
    };
  }, [debouncedTriggerSync, refreshPendingCount]);

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
        const hasAuthErr = syncState.syncErrors.some((e) => e.isAuthError || e.status === 401);
        if (hasAuthErr) {
          setIsAuthRequired(true);
        }
      } else if (syncState.lastSyncTime) {
        setSyncStatus("synced");
        setLastSyncTime(syncState.lastSyncTime);
        setIsAuthRequired(false);
      }
    });

    return () => unsubscribeSync();
  }, []);

  // Initial check: if user has not completed initial sync and is online, bootstrap via Promise.all
  useEffect(() => {
    async function checkAndBootstrap() {
      if (typeof window === "undefined" || !navigator.onLine) return;
      try {
        const isInitialSynced = localStorage.getItem("isInitialSynced");
        if (isInitialSynced !== "1") {
          console.log("[OfflineProvider] isInitialSynced not set. Bootstrapping all data into IndexedDB...");
          const res = await syncManager.bootstrapInitialData();
          if (res.success) {
            localStorage.setItem("isInitialSynced", "1");
            await refreshPendingCount();
          }
        }
      } catch (err) {
        console.warn("[OfflineProvider] Bootstrap check warning:", err);
      }
    }
    checkAndBootstrap();
  }, [refreshPendingCount]);

  // Periodic auto-sync loop: every 30 seconds check server updates & pending records when online
  useEffect(() => {
    refreshPendingCount();

    const interval = setInterval(async () => {
      if (typeof window === "undefined") return;
      if (typeof navigator !== "undefined" && navigator.onLine && !syncManager.isSyncing) {
        const isInitialSynced = localStorage.getItem("isInitialSynced");
        // Only run incremental sync after initial sync is complete
        if (isInitialSynced === "1") {
          await triggerSync();
        }
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [refreshPendingCount, triggerSync]);

  const handleLoginSuccess = async () => {
    setIsAuthRequired(false);
    setIsAuthModalOpen(false);
    console.log("[OfflineProvider] Re-authentication completed. Resuming sync...");
    await triggerSync();
  };

  const value = {
    isOnline,
    syncStatus,
    pendingCount,
    syncErrors,
    lastSyncTime,
    hasUnsyncedChanges: pendingCount > 0,
    isAuthRequired,
    isAuthModalOpen,
    openAuthModal: () => setIsAuthModalOpen(true),
    closeAuthModal: () => setIsAuthModalOpen(false),
    triggerSync,
    refreshPendingCount,
  };

  return (
    <OfflineSyncContext.Provider value={value}>
      {children}
      <ReLoginModal
        open={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        pendingCount={pendingCount}
      />
    </OfflineSyncContext.Provider>
  );
}

