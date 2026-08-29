"use client";

import React, { useState, useEffect } from "react";


import {
  Box,
  IconButton,
  Tooltip,
  Popover,
  Typography,
  Button,
  Divider,
  CircularProgress,
  Badge,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  CheckCircle as SyncedIcon,
  CloudOff as OfflineIcon,
  Sync as SyncingIcon,
  Error as ErrorIcon,
  Refresh as RefreshIcon,
  WifiOff as WifiOffIcon,
  CloudDone as CloudDoneIcon,
  LockReset as ReAuthIcon,
} from "@mui/icons-material";
import { useSync } from "@/hooks/useSync";
import { formatLocalDisplay } from "@/lib/offline/timestamps";

export default function SyncIndicator() {
  const {
    isOnline,
    syncStatus,
    pendingCount,
    syncErrors,
    lastSyncTime,
    hasUnsyncedChanges,
    isAuthRequired,
    openAuthModal,
    sync,
  } = useSync();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isClientOnline, setIsClientOnline] = useState(true);
  const [isStandalone, setIsStandalone] = useState(false);

  // Direct reactive subscription to browser online/offline events & PWA check
  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = typeof navigator !== "undefined" ? navigator.onLine : true;
      setIsClientOnline(online);
    };

    updateOnlineStatus();

    if (typeof window !== "undefined") {
      const standaloneMatch =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true;
      setIsStandalone(Boolean(standaloneMatch));
    }

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const hasAuthError =
    isAuthRequired ||
    (syncErrors &&
      syncErrors.some(
        (err) =>
          err.isAuthError ||
          err.status === 401 ||
          (typeof err.error === "string" && (err.error.includes("401") || err.error.includes("Unauthorized")))
      ));

  // Strict online status: false if either context or native browser says offline
  const isCurrentlyOnline = Boolean(
    isClientOnline &&
    isOnline !== false &&
    (typeof navigator === "undefined" || navigator.onLine)
  );

  // Determine icon and color based on sync state - OFFLINE takes topmost priority
  let iconComponent = null;
  let tooltipText = "";
  let badgeContent = null;
  let badgeColor = "default";

  if (!isCurrentlyOnline) {
    iconComponent = <OfflineIcon sx={{ color: "#f59e0b" }} />;
    tooltipText = pendingCount > 0
      ? `Offline Mode: ${pendingCount} change${pendingCount === 1 ? "" : "s"} saved locally`
      : "Offline Mode: Working in local IndexedDB";
    if (pendingCount > 0) {
      badgeContent = pendingCount;
      badgeColor = "warning";
    }
  } else if (hasAuthError) {
    iconComponent = <ErrorIcon sx={{ color: "#ef4444" }} />;
    tooltipText = "Session expired (401). Re-login required to sync.";
    badgeContent = "!";
    badgeColor = "error";
  } else if (syncStatus === "syncing") {
    iconComponent = (
      <CircularProgress
        size={20}
        thickness={5}
        sx={{ color: "#0f766e" }}
      />
    );
    tooltipText = "Synchronizing with cloud...";
    if (pendingCount > 0) {
      badgeContent = pendingCount;
      badgeColor = "primary";
    }
  } else if (syncStatus === "error" || (syncErrors && syncErrors.length > 0)) {
    iconComponent = <ErrorIcon sx={{ color: "#ef4444" }} />;
    tooltipText = syncErrors && syncErrors.length > 0
      ? `Sync error: ${syncErrors[0]?.error || "Check connection"}`
      : "Sync error - will retry automatically";
    badgeContent = "!";
    badgeColor = "error";
  } else if (hasUnsyncedChanges || pendingCount > 0) {
    iconComponent = <CloudDoneIcon sx={{ color: "#0284c7" }} />;
    tooltipText = `${pendingCount} changes saved locally (pending sync)`;
    badgeContent = pendingCount;
    badgeColor = "info";
  } else {
    iconComponent = <CloudDoneIcon sx={{ color: "#10b981" }} />;
    tooltipText = "Cloud Connected - All data synced";
  }

  return (
    <>
      <Tooltip title={tooltipText} arrow>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-label="Sync status"
          sx={{
            width: 38,
            height: 38,
            p: 0.75,
            borderRadius: 2,
            backgroundColor: !isCurrentlyOnline
              ? "rgba(245, 158, 11, 0.08)"
              : hasAuthError
              ? "rgba(239, 68, 68, 0.08)"
              : syncStatus === "error"
              ? "rgba(239, 68, 68, 0.08)"
              : "transparent",
            "&:hover": {
              backgroundColor: !isCurrentlyOnline
                ? "rgba(245, 158, 11, 0.16)"
                : hasAuthError
                ? "rgba(239, 68, 68, 0.16)"
                : "rgba(15, 118, 110, 0.08)",
            },
          }}
        >
          {badgeContent ? (
            <Badge
              badgeContent={badgeContent}
              color={badgeColor}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "0.65rem",
                  height: 16,
                  minWidth: 16,
                  padding: "0 4px",
                  fontWeight: 700,
                },
              }}
            >
              {iconComponent}
            </Badge>
          ) : (
            iconComponent
          )}
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            elevation: 8,
            sx: {
              mt: 1.5,
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              overflow: "hidden",
            },
          },
        }}
      >
        <Box sx={{ width: 320, p: 2.5, boxSizing: "border-box" }}>
          {/* Header Row */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  backgroundColor: !isCurrentlyOnline
                    ? "#fffbeb"
                    : hasAuthError || syncStatus === "error"
                    ? "#fef2f2"
                    : syncStatus === "syncing"
                    ? "#f0fdfa"
                    : pendingCount > 0
                    ? "#f0f9ff"
                    : "#f0fdf4",
                  color: !isCurrentlyOnline
                    ? "#d97706"
                    : hasAuthError || syncStatus === "error"
                    ? "#dc2626"
                    : syncStatus === "syncing"
                    ? "#0f766e"
                    : pendingCount > 0
                    ? "#0284c7"
                    : "#16a34a",
                }}
              >
                {!isCurrentlyOnline ? (
                  <OfflineIcon sx={{ fontSize: 20 }} />
                ) : hasAuthError || syncStatus === "error" ? (
                  <ErrorIcon sx={{ fontSize: 20 }} />
                ) : syncStatus === "syncing" ? (
                  <CircularProgress size={18} thickness={5} sx={{ color: "#0f766e" }} />
                ) : (
                  <CloudDoneIcon sx={{ fontSize: 20 }} />
                )}
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: "0.9rem", lineHeight: 1.2 }}>
                  {!isCurrentlyOnline
                    ? "Offline Mode"
                    : hasAuthError
                    ? "Auth Expired"
                    : syncStatus === "syncing"
                    ? "Syncing Data..."
                    : syncStatus === "error"
                    ? "Sync Error"
                    : pendingCount > 0
                    ? "Pending Sync"
                    : "Cloud Connected"}
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b", fontSize: "0.7rem", fontWeight: 500 }}>
                  {!isCurrentlyOnline
                    ? "Local IndexedDB Active"
                    : hasAuthError
                    ? "Re-login required"
                    : syncStatus === "syncing"
                    ? "Updating cloud database"
                    : syncStatus === "error"
                    ? "Check server connection"
                    : pendingCount > 0
                    ? `${pendingCount} changes queued`
                    : "Real-time sync active"}
                </Typography>
              </Box>
            </Box>

            <Chip
              size="small"
              label={
                !isCurrentlyOnline
                  ? "OFFLINE"
                  : hasAuthError
                  ? "AUTH REQ"
                  : syncStatus === "syncing"
                  ? "SYNCING"
                  : syncStatus === "error"
                  ? "ERROR"
                  : pendingCount > 0
                  ? "QUEUED"
                  : "SYNCED"
              }
              color={
                !isCurrentlyOnline
                  ? "warning"
                  : hasAuthError || syncStatus === "error"
                  ? "error"
                  : syncStatus === "syncing"
                  ? "primary"
                  : pendingCount > 0
                  ? "info"
                  : "success"
              }
              sx={{ fontWeight: 800, fontSize: "0.65rem", height: 22, borderRadius: "6px" }}
            />
          </Box>

          <Divider sx={{ mb: 2, borderColor: "#f1f5f9" }} />

          {/* Offline Information Banner */}
          {!isCurrentlyOnline && (
            <Box sx={{ mb: 2, p: 1.5, bgcolor: "#fffbeb", border: "1px solid #fef3c7", borderRadius: "12px" }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: "#92400e", display: "block", fontSize: "0.75rem" }}>
                Operating in Offline Mode
              </Typography>
              <Typography variant="caption" sx={{ color: "#b45309", display: "block", mt: 0.25, fontSize: "0.7rem", lineHeight: 1.35 }}>
                Registrations, test reports, and bills are saved with 0ms latency in local IndexedDB. Automatic cloud sync will resume when connection is restored.
              </Typography>
            </Box>
          )}

          {/* Sync Stats Info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.25,
              p: 1.5,
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #f1f5f9",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 600, fontSize: "0.78rem" }}>
                Pending Local Records:
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  color: pendingCount > 0 ? "#d97706" : "#16a34a",
                }}
              >
                {pendingCount} {pendingCount === 1 ? "record" : "records"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 600, fontSize: "0.78rem" }}>
                Last Synced:
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, color: "#1e293b", fontSize: "0.78rem" }}>
                {lastSyncTime ? formatLocalDisplay(lastSyncTime) : "Not yet"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 600, fontSize: "0.78rem" }}>
                App Mode:
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, color: isStandalone ? "#0f766e" : "#475569", fontSize: "0.75rem" }}>
                {isStandalone ? "Installed PWA App" : "Web Browser PWA"}
              </Typography>
            </Box>
          </Box>

          {/* Auth Error Banner & Action (Only when online) */}
          {isCurrentlyOnline && hasAuthError && (
            <Box sx={{ mb: 2, p: 1.5, bgcolor: "#fef2f2", border: "1px solid #fee2e2", borderRadius: "12px" }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: "#991b1b", display: "block", fontSize: "0.75rem" }}>
                Session Expired (401)
              </Typography>
              <Typography variant="caption" sx={{ color: "#b91c1c", display: "block", mt: 0.25, fontSize: "0.7rem", lineHeight: 1.3 }}>
                Your token has expired. Please re-login to synchronize with cloud.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                size="small"
                color="error"
                onClick={() => {
                  handleClose();
                  openAuthModal();
                }}
                startIcon={<ReAuthIcon sx={{ fontSize: 16 }} />}
                sx={{
                  mt: 1.25,
                  py: 0.75,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                Re-Login to Resume Sync
              </Button>
            </Box>
          )}

          {/* Failed Sync Items & Resolution Actions */}
          {isCurrentlyOnline && !hasAuthError && syncErrors && syncErrors.length > 0 && (
            <Box sx={{ mb: 2, p: 1.5, bgcolor: "#fef2f2", border: "1px solid #fee2e2", borderRadius: "12px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.75 }}>
                <Typography variant="caption" sx={{ fontWeight: 800, color: "#991b1b", display: "block", fontSize: "0.75rem" }}>
                  Sync Conflicts / Errors ({syncErrors.length}):
                </Typography>
                <Button
                  size="small"
                  variant="text"
                  onClick={async () => {
                    const { syncManager } = await import("@/lib/offline/sync/syncManager");
                    await syncManager.clearAllErrors();
                    if (refreshPendingCount) refreshPendingCount();
                  }}
                  sx={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#dc2626",
                    p: 0,
                    minWidth: "auto",
                    textTransform: "none",
                    "&:hover": { textDecoration: "underline", bgcolor: "transparent" }
                  }}
                >
                  Resolve All
                </Button>
              </Box>

              <List dense disablePadding sx={{ maxHeight: 110, overflowY: "auto", mb: 1.25 }}>
                {syncErrors.map((err, idx) => (
                  <ListItem key={idx} disablePadding sx={{ py: 0.35, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <ListItemText
                      primary={err.error || err.message || "Sync failed"}
                      primaryTypographyProps={{
                        fontSize: "0.7rem",
                        color: "#b91c1c",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              {/* Action Buttons to Resolve or Retry */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  fullWidth
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={async () => {
                    const { syncManager } = await import("@/lib/offline/sync/syncManager");
                    await syncManager.clearAllErrors();
                    if (refreshPendingCount) refreshPendingCount();
                    sync();
                  }}
                  sx={{
                    py: 0.5,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    borderRadius: "8px",
                    textTransform: "none",
                  }}
                >
                  Resolve & Retry
                </Button>

                <Button
                  fullWidth
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={async () => {
                    const { syncManager } = await import("@/lib/offline/sync/syncManager");
                    await syncManager.clearAllErrors();
                    if (refreshPendingCount) refreshPendingCount();
                  }}
                  sx={{
                    py: 0.5,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    borderRadius: "8px",
                    textTransform: "none",
                  }}
                >
                  Clear Errors
                </Button>
              </Box>
            </Box>
          )}

          {/* Sync Action Button */}
          <Button
            fullWidth
            variant="contained"
            disabled={!isCurrentlyOnline || syncStatus === "syncing"}
            onClick={() => {
              sync();
            }}
            startIcon={
              !isCurrentlyOnline ? (
                <OfflineIcon sx={{ fontSize: 18 }} />
              ) : syncStatus === "syncing" ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                <RefreshIcon sx={{ fontSize: 18 }} />
              )
            }
            sx={{
              py: 1.1,
              backgroundColor: !isCurrentlyOnline ? "#e2e8f0" : "#0f766e",
              color: !isCurrentlyOnline ? "#64748b" : "#ffffff",
              fontWeight: 700,
              fontSize: "0.85rem",
              borderRadius: "10px",
              textTransform: "none",
              boxShadow: !isCurrentlyOnline ? "none" : "0 2px 4px rgba(15, 118, 110, 0.2)",
              "&:hover": {
                backgroundColor: !isCurrentlyOnline ? "#e2e8f0" : "#0d645d",
                boxShadow: !isCurrentlyOnline ? "none" : "0 4px 8px rgba(15, 118, 110, 0.3)",
              },
            }}
          >
            {!isCurrentlyOnline
              ? "Offline - Changes Saved Locally"
              : syncStatus === "syncing"
              ? "Syncing in progress..."
              : "Sync Now"}
          </Button>
        </Box>
      </Popover>
    </>
  );
}


