import { useState, useEffect } from "react";
import db from "@/lib/offline/db";

export function useAdminPermissions() {
  const [permissions, setPermissions] = useState([]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadAuth() {
      // 1. Try sessionStorage first
      const cached = sessionStorage.getItem("admin_profile");
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (isMounted) {
            setPermissions(parsed.role?.permissions || parsed.permissions || []);
            setRole(parsed.role?.name || parsed.role || "");
            setLoading(false);
          }
        } catch (e) {}
      }

      // 2. Fallback to IndexedDB (db.admins / db.offlineSession)
      try {
        const [cachedAdmins, cachedSession] = await Promise.all([
          db.admins.toArray(),
          db.offlineSession.get(1),
        ]);
        const localAdmin = cachedAdmins?.[0] || cachedSession?.admin;
        if (localAdmin && isMounted) {
          const perms = localAdmin.role?.permissions?.map((p) => p.permission || p) || localAdmin.permissions || [];
          const roleName = localAdmin.role?.name || localAdmin.role || "";
          setPermissions(perms);
          setRole(roleName);
          setLoading(false);
        }
      } catch (dbErr) {
        console.warn("[clientAuth] IndexedDB session read error:", dbErr);
      }

      // 3. If online, fetch authoritative profile from API with fast timeout
      if (typeof navigator !== "undefined" && navigator.onLine) {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 600);
          const res = await fetch("/api/profile", { signal: controller.signal });
          clearTimeout(timer);

          if (res.status === 401) {
            const data = await res.json().catch(() => ({}));
            if (data && data.error === "deactivated") {
              window.location.href = "/auth/login?error=deactivated";
            }
            return;
          }
          const data = await res.json();
          if (data && data.success && data.admin && isMounted) {
            sessionStorage.setItem("admin_profile", JSON.stringify(data.admin));
            const perms = data.admin.role?.permissions?.map((p) => p.permission || p) || data.admin.permissions || [];
            setPermissions(perms);
            setRole(data.admin.role?.name || data.admin.role || "");
          }
        } catch (err) {
          // Offline or network glitch/timeout - keep local permissions without blocking
        }
      }

      if (isMounted) {
        setLoading(false);
      }
    }

    loadAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const hasPermission = (perm) => {
    const rUpper = String(role || "").toUpperCase();
    if (rUpper === "ADMIN" || rUpper === "OWNER" || permissions.includes("ALL")) {
      return true;
    }
    return permissions.includes(perm);
  };

  return { permissions, role, loading, hasPermission };
}
