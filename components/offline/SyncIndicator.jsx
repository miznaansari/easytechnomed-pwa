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
    sync,
  } = useSync();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Determine icon and color based on sync state
  let iconComponent = null;
  let tooltipText = "";
  let badgeContent = null;
  let badgeColor = "default";

  if (!isOnline) {
    iconComponent = <SyncedIcon sx={{ color: "#10b981" }} />;
    tooltipText = pendingCount > 0
      ? `${pendingCount} changes saved locally (IndexedDB)`
      : "Working locally in IndexedDB";
    if (pendingCount > 0) {
      badgeContent = pendingCount;
      badgeColor = "primary";
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
  } else if (hasUnsyncedChanges) {
    iconComponent = <SyncedIcon sx={{ color: "#10b981" }} />;
    tooltipText = `${pendingCount} changes saved locally`;
    badgeContent = pendingCount;
    badgeColor = "info";
  } else {
    iconComponent = <SyncedIcon sx={{ color: "#10b981" }} />;
    tooltipText = "All changes synced";
  }

  return (
    <>
      <Tooltip title={tooltipText} arrow>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{
            p: 1,
            borderRadius: 2,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(15, 118, 110, 0.08)",
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
        PaperProps={{
          sx: {
            width: 320,
            p: 2,
            borderRadius: 2,
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
            border: "1px solid #e2e8f0",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CloudDoneIcon sx={{ color: "#10b981", fontSize: 20 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "text.primary" }}>
              {isOnline ? "Cloud Connected" : "Local Database Active"}
            </Typography>
          </Box>
          <Chip
            size="small"
            label={syncStatus === "offline" ? "LOCAL" : syncStatus.toUpperCase()}
            color={syncStatus === "error" ? "error" : "success"}
            sx={{ fontWeight: 700, fontSize: "0.65rem", height: 20 }}
          />
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, py: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
              Pending Changes:
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 700, color: pendingCount > 0 ? "warning.main" : "text.primary" }}
            >
              {pendingCount} records
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
              Last Synced:
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.primary" }}>
              {lastSyncTime ? formatLocalDisplay(lastSyncTime) : "Not yet"}
            </Typography>
          </Box>
        </Box>

        {syncErrors && syncErrors.length > 0 && (
          <Box sx={{ mt: 1, mb: 1.5, p: 1, bgcolor: "error.light", borderRadius: 1.5, opacity: 0.9 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: "error.contrastText", display: "block" }}>
              Failed Sync Items:
            </Typography>
            <List dense disablePadding sx={{ maxHeight: 100, overflowY: "auto", mt: 0.5 }}>
              {syncErrors.map((err, idx) => (
                <ListItem key={idx} disablePadding sx={{ py: 0.2 }}>
                  <ListItemText
                    primary={err.error || err.message || "Unknown error"}
                    primaryTypographyProps={{
                      fontSize: "0.7rem",
                      color: "error.contrastText",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Divider sx={{ my: 1 }} />

        <Button
          fullWidth
          variant="contained"
          size="small"
          disabled={!isOnline || syncStatus === "syncing"}
          onClick={() => {
            sync();
          }}
          startIcon={
            syncStatus === "syncing" ? (
              <CircularProgress size={14} color="inherit" />
            ) : (
              <RefreshIcon fontSize="small" />
            )
          }
          sx={{
            mt: 0.5,
            py: 0.8,
            backgroundColor: "#0f766e",
            fontWeight: 700,
            fontSize: "0.8rem",
            borderRadius: 1.5,
            "&:hover": {
              backgroundColor: "#0d645d",
            },
          }}
        >
          {syncStatus === "syncing" ? "Syncing in progress..." : "Sync Now"}
        </Button>
      </Popover>
    </>
  );
}
