"use client";

import React, { useState } from "react";
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

  // Direct reactive subscription to browser online/offline events
  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = typeof navigator !== "undefined" ? navigator.onLine : true;
      setIsClientOnline(online);
    };

    updateOnlineStatus();
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


  // Determine icon and color based on sync state
  let iconComponent = null;
  let tooltipText = "";
  let badgeContent = null;
  let badgeColor = "default";

  if (hasAuthError) {
    iconComponent = <ErrorIcon sx={{ color: "#ef4444" }} />;
    tooltipText = "Authentication expired (401). Re-login required to sync.";
    badgeContent = "!";
    badgeColor = "error";
  } else if (!isCurrentlyOnline) {
    iconComponent = <OfflineIcon sx={{ color: "#f59e0b" }} />;
    tooltipText = pendingCount > 0
      ? `Offline: ${pendingCount} change${pendingCount === 1 ? "" : "s"} saved in local database`
      : "Offline: Working in local IndexedDB";
    if (pendingCount > 0) {
      badgeContent = pendingCount;
      badgeColor = "warning";
    }
  } else if (syncStatus === "syncing") {
    iconComponent = (
      <SyncingIcon
        sx={{
          color: "#0f766e",
          animation: "spin 1.5s linear infinite",
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />
    );
    tooltipText = pendingCount > 0 ? `Syncing ${pendingCount} changes...` : "Syncing...";
    if (pendingCount > 0) {
      badgeContent = pendingCount;
      badgeColor = "primary";
    }
  } else if (syncStatus === "error" || (syncErrors && syncErrors.length > 0)) {
    iconComponent = <ErrorIcon sx={{ color: "#ef4444" }} />;
    tooltipText = `Sync error (${syncErrors.length} failed)`;
    badgeContent = syncErrors.length;
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
          sx={{
            width: 38,
            height: 38,
            p: 0.75,
            borderRadius: 2,
            backgroundColor: hasAuthError
              ? "rgba(239, 68, 68, 0.08)"
              : !isCurrentlyOnline
              ? "rgba(245, 158, 11, 0.08)"
              : "transparent",
            "&:hover": {
              backgroundColor: hasAuthError
                ? "rgba(239, 68, 68, 0.16)"
                : !isCurrentlyOnline
                ? "rgba(245, 158, 11, 0.16)"
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
        <Box sx={{ width: 310, p: 2.5, boxSizing: "border-box" }}>
          {/* Header Row */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: "10px",
                  backgroundColor: hasAuthError
                    ? "#fef2f2"
                    : !isCurrentlyOnline
                    ? "#fffbeb"
                    : "#f0fdf4",
                  color: hasAuthError
                    ? "#dc2626"
                    : !isCurrentlyOnline
                    ? "#d97706"
                    : "#16a34a",
                }}
              >
                {hasAuthError ? (
                  <ErrorIcon sx={{ fontSize: 20 }} />
                ) : !isCurrentlyOnline ? (
                  <OfflineIcon sx={{ fontSize: 20 }} />
                ) : (
                  <CloudDoneIcon sx={{ fontSize: 20 }} />
                )}
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: "0.9rem", lineHeight: 1.2 }}>
                  {hasAuthError ? "Auth Expired" : !isCurrentlyOnline ? "Offline Mode" : "Cloud Connected"}
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b", fontSize: "0.7rem", fontWeight: 500 }}>
                  {hasAuthError ? "Re-login required" : !isCurrentlyOnline ? "Local DB active" : "Real-time sync"}
                </Typography>
              </Box>
            </Box>

            <Chip
              size="small"
              label={hasAuthError ? "AUTH REQ" : !isCurrentlyOnline ? "OFFLINE" : (syncStatus === "synced" ? "SYNCED" : syncStatus.toUpperCase())}
              color={hasAuthError || syncStatus === "error" ? "error" : !isCurrentlyOnline ? "warning" : "success"}
              sx={{ fontWeight: 800, fontSize: "0.65rem", height: 22, borderRadius: "6px" }}
            />
          </Box>


          <Divider sx={{ mb: 2, borderColor: "#f1f5f9" }} />

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
                Pending Changes:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
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
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 600, fontSize: "0.78rem" }}>
                Last Synced:
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 700, color: "#1e293b", fontSize: "0.78rem" }}>
                {lastSyncTime ? formatLocalDisplay(lastSyncTime) : "Not yet"}
              </Typography>
            </Box>
          </Box>

          {/* Auth Error Banner & Action */}
          {hasAuthError && (
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

          {/* Failed Sync Items (if any non-auth errors) */}
          {!hasAuthError && syncErrors && syncErrors.length > 0 && (
            <Box sx={{ mb: 2, p: 1.5, bgcolor: "#fef2f2", border: "1px solid #fee2e2", borderRadius: "12px" }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: "#991b1b", display: "block", fontSize: "0.75rem" }}>
                Failed Sync Items:
              </Typography>
              <List dense disablePadding sx={{ maxHeight: 90, overflowY: "auto", mt: 0.5 }}>
                {syncErrors.map((err, idx) => (
                  <ListItem key={idx} disablePadding sx={{ py: 0.25 }}>
                    <ListItemText
                      primary={err.error || err.message || "Sync failed"}
                      primaryTypographyProps={{
                        fontSize: "0.7rem",
                        color: "#b91c1c",
                        fontWeight: 600,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Sync Now Action Button */}
          <Button
            fullWidth
            variant="contained"
            disabled={!isOnline || syncStatus === "syncing"}
            onClick={() => {
              sync();
            }}
            startIcon={
              syncStatus === "syncing" ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                <RefreshIcon sx={{ fontSize: 18 }} />
              )
            }
            sx={{
              py: 1.1,
              backgroundColor: "#0f766e",
              fontWeight: 700,
              fontSize: "0.85rem",
              borderRadius: "10px",
              textTransform: "none",
              boxShadow: "0 2px 4px rgba(15, 118, 110, 0.2)",
              "&:hover": {
                backgroundColor: "#0d645d",
                boxShadow: "0 4px 8px rgba(15, 118, 110, 0.3)",
              },
            }}
          >
            {syncStatus === "syncing" ? "Syncing in progress..." : "Sync Now"}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

