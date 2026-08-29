"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  Warning as WarningIcon,
  CloudUpload as SyncIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

export default function UnsyncedLogoutModal({
  open,
  onClose,
  onConfirmLogout,
  onSyncAndLogout,
  pendingCount = 0,
  isSyncing = false,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 1.5,
          border: "1px solid #fee2e2",
        },
      }}
    >
      <DialogTitle sx={{ pb: 1, pt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#fef2f2",
              color: "#dc2626",
            }}
          >
            <WarningIcon sx={{ fontSize: 26 }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#991b1b", fontSize: "1.1rem" }}>
              Unsynced Data Warning
            </Typography>
            <Typography variant="caption" sx={{ color: "#b91c1c", fontWeight: 600 }}>
              {pendingCount} unsaved change{pendingCount === 1 ? "" : "s"} detected
            </Typography>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ py: 1.5 }}>
        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
          You have <strong>{pendingCount} unsynchronized change{pendingCount === 1 ? "" : "s"}</strong> stored locally in your browser.
          Logging out will completely wipe local IndexedDB data, cached sessions, and local storage. Any unsaved changes that have not been synced to the server will be lost.
        </Typography>
        <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600, mt: 1.5 }}>
          We strongly recommend syncing your data before logging out.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 2, pb: 1.5, pt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={onSyncAndLogout}
            disabled={isSyncing}
            startIcon={
              isSyncing ? <CircularProgress size={16} color="inherit" /> : <SyncIcon />
            }
            sx={{
              backgroundColor: "#0f766e",
              fontWeight: 700,
              borderRadius: 2,
              py: 1,
              "&:hover": { backgroundColor: "#0d645d" },
            }}
          >
            {isSyncing ? "Syncing..." : "Sync & Logout"}
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{
              borderRadius: 2,
              fontWeight: 700,
              py: 1,
              borderColor: "divider",
              color: "text.primary",
            }}
          >
            Cancel
          </Button>
        </Box>

        <Button
          variant="text"
          fullWidth
          color="error"
          onClick={onConfirmLogout}
          startIcon={<LogoutIcon />}
          sx={{
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "#dc2626",
            "&:hover": { backgroundColor: "#fef2f2" },
          }}
        >
          Logout Anyway
        </Button>
      </DialogActions>
    </Dialog>
  );
}
