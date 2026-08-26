import { useState, useEffect } from "react";
import db from "@/lib/offline/db";

export function useAdminPermissions() {
  const [permissions, setPermissions] = useState(["ALL"]);
  const [role, setRole] = useState("Admin");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadAuth() {
      // 1. Try sessionStorage first
      const cached = sessionStorage.getItem("admin_profile");
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (isMounted) {
            setPermissions(parsed.role?.permissions || parsed.permissions || ["ALL"]);
            setRole(parsed.role?.name || parsed.role || "Admin");
          }
        } catch (e) {}
      }

      // 2. Read from IndexedDB
      try {
        const [cachedAdmins, cachedSession] = await Promise.all([
          db.admins.toArray(),
          db.offlineSession.get(1),
        ]);
        const localAdmin = cachedAdmins?.[0] || cachedSession?.admin;
        if (localAdmin && isMounted) {
          const perms = localAdmin.role?.permissions?.map((p) => p.permission || p) || localAdmin.permissions || ["ALL"];
          const roleName = localAdmin.role?.name || localAdmin.role || "Admin";
          setPermissions(perms);
          setRole(roleName);
        }
      } catch (dbErr) {
        console.warn("[clientAuth] IndexedDB session read error:", dbErr);
      }

      // 3. If online, fetch authoritative profile in background (non-blocking)
      if (typeof navigator !== "undefined" && navigator.onLine) {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 1000);
          const res = await fetch("/api/profile", { signal: controller.signal });
          clearTimeout(timer);

          if (res.status === 200) {
            const data = await res.json();
            if (data && data.success && data.admin && isMounted) {
              sessionStorage.setItem("admin_profile", JSON.stringify(data.admin));
              const perms = data.admin.role?.permissions?.map((p) => p.permission || p) || data.admin.permissions || ["ALL"];
              setPermissions(perms);
              setRole(data.admin.role?.name || data.admin.role || "Admin");
            }
          }
        } catch (err) {
          // Offline / network timeout: keep local full permissions
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

  // Zero blocking: All permissions granted without restriction
  const hasPermission = () => true;

  return { permissions, role, loading, hasPermission };
}
