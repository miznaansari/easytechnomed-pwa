"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import {
  SystemUpdateAlt as UpdateIcon,
  AutoAwesome as SparkleIcon,
  CheckCircle as CheckIcon,
  Refresh as RefreshIcon,
  Schedule as ClockIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import packageJson from "@/package.json";

// Helper: Semver comparison (returns 1 if v1 > v2, -1 if v1 < v2, 0 if equal)
function compareVersions(v1, v2) {
  if (!v1 || !v2) return 0;
  const cleanV1 = String(v1).replace(/^v/i, "").trim();
  const cleanV2 = String(v2).replace(/^v/i, "").trim();

  const parts1 = cleanV1.split(".").map((n) => parseInt(n, 10) || 0);
  const parts2 = cleanV2.split(".").map((n) => parseInt(n, 10) || 0);

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const num1 = parts1[i] || 0;
    const num2 = parts2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}

export default function VersionUpdateNotifier() {
  const [open, setOpen] = useState(false);
  const [releaseInfo, setReleaseInfo] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const currentClientVersion = typeof window !== "undefined"
    ? localStorage.getItem("app_version") || packageJson.version || "3.1.2"
    : packageJson.version || "3.1.2";

  // Check latest version from server database
  const checkForUpdates = useCallback(async () => {
    if (typeof window === "undefined" || !navigator.onLine) return;

    try {
      const res = await fetch("/api/version", {
        headers: { "Cache-Control": "no-cache" },
      });
      if (!res.ok) return;

      const data = await res.json();
      if (data && data.success && data.latestVersion) {
        const latestVer = data.latestVersion;
        const currentVer = localStorage.getItem("app_version") || packageJson.version || "3.1.2";

        // Check if server version is newer than current client version
        if (compareVersions(latestVer, currentVer) > 0) {
          setReleaseInfo(data);
          setOpen(true);
        }
      }
    } catch (err) {
      console.warn("[VersionNotifier] Version check failed:", err);
    }
  }, []);

  useEffect(() => {
    // Initial check on mount
    checkForUpdates();

    // Check when internet reconnects
    window.addEventListener("online", checkForUpdates);

    // Periodic check every 5 minutes
    const interval = setInterval(checkForUpdates, 5 * 60 * 1000);

    return () => {
      window.removeEventListener("online", checkForUpdates);
      clearInterval(interval);
    };
  }, [checkForUpdates]);

  // Execute hard refresh & complete cache purge
  const handleHardRefresh = async () => {
    setIsUpdating(true);
    try {
      // 1. Purge all browser CacheStorage instances
      if ("caches" in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));
        console.log("[VersionNotifier] All browser caches purged.");
      }

      // 2. Notify Service Worker to skipWaiting and clear caches
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }
          if (registration.active) {
            registration.active.postMessage({ type: "CLEAR_ALL_CACHES" });
          }
          // Request SW update
          registration.update().catch(() => {});
        }
      }

      // 3. Store new version in localStorage
      if (releaseInfo?.latestVersion) {
        localStorage.setItem("app_version", releaseInfo.latestVersion);
      }

      // 4. Perform hard cache-busting reload
      setTimeout(() => {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("_v", Date.now().toString());
        window.location.href = currentUrl.toString();
      }, 300);
    } catch (error) {
      console.error("[VersionNotifier] Error during hard refresh:", error);
      window.location.reload();
    }
  };

  if (!open || !releaseInfo) return null;

  const changesList = Array.isArray(releaseInfo.changes)
    ? releaseInfo.changes
    : typeof releaseInfo.changes === "string"
    ? releaseInfo.changes.split("\n").filter(Boolean)
    : [];

  return (
    <Dialog
      open={open}
      onClose={releaseInfo.isMandatory || isUpdating ? undefined : () => setOpen(false)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3.5,
          p: 1,
          border: "1px solid #ccfbf1",
          boxShadow: "0 20px 25px -5px rgba(15, 118, 110, 0.15), 0 8px 10px -6px rgba(15, 118, 110, 0.1)",
          overflow: "hidden",
        },
      }}
    >
      {/* Header with gradient badge */}
      <DialogTitle sx={{ pb: 1, pt: 2, px: 2.5 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: "14px",
                background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
                color: "#ffffff",
                boxShadow: "0 4px 12px rgba(20, 184, 166, 0.3)",
              }}
            >
              <UpdateIcon sx={{ fontSize: 28 }} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", fontSize: "1.15rem" }}>
                  New Update Available
                </Typography>
                <Chip
                  label={`v${releaseInfo.latestVersion}`}
                  size="small"
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    bgcolor: "#ccfbf1",
                    color: "#0f766e",
                    border: "1px solid #99f6e4",
                  }}
                />
              </Box>
              <Typography variant="caption" sx={{ color: "#64748b", display: "flex", alignItems: "center", gap: 0.5, mt: 0.2 }}>
                <ClockIcon sx={{ fontSize: 13 }} />
                Current: v{currentClientVersion} &bull; Released: {new Date(releaseInfo.releaseDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogTitle>

      {/* Content: Title, Description & What's New List */}
      <DialogContent sx={{ px: 2.5, py: 1.5 }}>
        <Box sx={{ bgcolor: "#f8fafc", p: 2, borderRadius: 2.5, border: "1px solid #e2e8f0", mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#0f766e", mb: 0.5 }}>
            {releaseInfo.title || "Latest Laboratory System Improvements"}
          </Typography>
          {releaseInfo.description && (
            <Typography variant="body2" sx={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.5 }}>
              {releaseInfo.description}
            </Typography>
          )}
        </Box>

        {/* "What's New in this Update" Box */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#1e293b", mb: 1, display: "flex", alignItems: "center", gap: 0.8 }}>
            <SparkleIcon sx={{ fontSize: 16, color: "#0d9488" }} />
            What&apos;s New in this Update
          </Typography>

          <List orientation="vertical" sx={{ p: 0, display: "flex", flexDirection: "column", gap: 0.8 }}>
            {changesList.map((change, idx) => (
              <ListItem
                key={idx}
                sx={{
                  py: 0.8,
                  px: 1.2,
                  bgcolor: "#f0fdfa",
                  borderRadius: 2,
                  border: "1px solid #ccfbf1",
                  alignItems: "flex-start",
                }}
              >
                <ListItemIcon sx={{ minWidth: 26, mt: 0.2, color: "#0d9488" }}>
                  <CheckIcon sx={{ fontSize: 17 }} />
                </ListItemIcon>
                <ListItemText
                  primary={change}
                  primaryTypographyProps={{
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    color: "#134e4a",
                    lineHeight: 1.4,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </DialogContent>

      {/* Actions: Hard Refresh & Dismiss */}
      <DialogActions sx={{ px: 2.5, pb: 2, pt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleHardRefresh}
          disabled={isUpdating}
          startIcon={
            isUpdating ? <CircularProgress size={18} color="inherit" /> : <RefreshIcon />
          }
          sx={{
            background: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "0.9rem",
            py: 1.2,
            borderRadius: 2.5,
            boxShadow: "0 4px 12px rgba(15, 118, 110, 0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #0d645d 0%, #0f766e 100%)",
            },
          }}
        >
          {isUpdating ? "Applying Update & Reloading..." : "Hard Refresh & Update Now"}
        </Button>

        {!releaseInfo.isMandatory && (
          <Button
            variant="text"
            fullWidth
            onClick={() => setOpen(false)}
            disabled={isUpdating}
            sx={{
              color: "#64748b",
              fontWeight: 600,
              fontSize: "0.8rem",
              py: 0.5,
              "&:hover": { color: "#334155", bgcolor: "transparent" },
            }}
          >
            Remind Me Later
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
