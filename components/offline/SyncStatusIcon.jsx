"use client";

import React from "react";
import { Tooltip, Box } from "@mui/material";
import {
  CheckCircle as SyncedIcon,
  CloudUpload as PendingUploadIcon,
  Error as ErrorIcon,
  Schedule as PendingClockIcon,
  Sync as SyncingIcon,
} from "@mui/icons-material";

export default function SyncStatusIcon({
  isDirty = false,
  isModified = false,
  isError = false,
  isSyncing = false,
  errorInfo = "",
  size = 18,
}) {
  if (isSyncing && (isDirty || isModified)) {
    return (
      <Tooltip title="Synchronizing with server..." arrow>
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            animation: "spin 1.2s linear infinite",
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        >
          <SyncingIcon sx={{ color: "#0284c7", fontSize: size }} />
        </Box>
      </Tooltip>
    );
  }

  if (isError) {
    return (
      <Tooltip title={`Sync Failed: ${errorInfo || "Click sync to retry"}`} arrow>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
          <ErrorIcon sx={{ color: "#ef4444", fontSize: size }} />
        </Box>
      </Tooltip>
    );
  }

  if (isDirty) {
    return (
      <Tooltip title="Newly created offline (pending sync)" arrow>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center" }}>
          <PendingUploadIcon sx={{ color: "#d97706", fontSize: size }} />
        </Box>
      </Tooltip>
    );
  }

  if (isModified) {
    return (
      <Tooltip title="Modified offline (pending sync)" arrow>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center" }}>
          <PendingClockIcon sx={{ color: "#d97706", fontSize: size }} />
        </Box>
      </Tooltip>
    );
  }

  return (
    <Tooltip title="Synced with server" arrow>
      <Box component="span" sx={{ display: "inline-flex", alignItems: "center" }}>
        <SyncedIcon sx={{ color: "#10b981", fontSize: size, opacity: 0.8 }} />
      </Box>
    </Tooltip>
  );
}
