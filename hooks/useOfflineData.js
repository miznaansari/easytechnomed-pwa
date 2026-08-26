"use client";

import { useState, useEffect, useCallback } from "react";
import db from "@/lib/offline/db";
import { useSync } from "./useSync";

export function useOfflineData(storeName, filterFn = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOnline, sync } = useSync();

  const loadData = useCallback(async () => {
    if (!db[storeName]) return;
    try {
      let records = await db[storeName].toArray();
      if (filterFn && typeof filterFn === "function") {
        records = records.filter(filterFn);
      }
      setData(records);
    } catch (err) {
      console.error(`[useOfflineData] Error loading from ${storeName}:`, err);
    } finally {
      setLoading(false);
    }
  }, [storeName, filterFn]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
  }, [loadData]);

  // Insert new record
  const insert = async (record) => {
    const created = await db.insertOffline(storeName, record);
    await loadData();
    if (isOnline) {
      sync();
    }
    return created;
  };

  // Update existing record
  const update = async (key, updates) => {
    const updated = await db.updateOffline(storeName, key, updates);
    await loadData();
    if (isOnline) {
      sync();
    }
    return updated;
  };

  // Delete record
  const remove = async (key) => {
    await db.deleteOffline(storeName, key);
    await loadData();
    if (isOnline) {
      sync();
    }
  };

  return {
    data,
    loading,
    refresh: loadData,
    insert,
    update,
    remove,
  };
}

export default useOfflineData;
