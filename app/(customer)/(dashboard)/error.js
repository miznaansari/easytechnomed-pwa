"use client";

import React, { useEffect } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { SignalWifiOff as OfflineIcon, Refresh as RefreshIcon, Home as HomeIcon } from "@mui/icons-material";
import Link from "next/link";

export default function DashboardErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.warn("[Dashboard Error Boundary Caught]:", error);
  }, [error]);

  const isOffline = typeof navigator !== "undefined" && !navigator.onLine;

  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      reset();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          maxWidth: 480,
          width: "100%",
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          borderColor: "#e2e8f0",
          bgcolor: "#ffffff",
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            bgcolor: isOffline ? "#ccfbf1" : "#fee2e2",
            color: isOffline ? "#0f766e" : "#dc2626",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2.5,
          }}
        >
          <OfflineIcon sx={{ fontSize: 32 }} />
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 1 }}>
          {isOffline ? "Offline Mode (IndexedDB Active)" : "Something went wrong"}
        </Typography>

        <Typography variant="body2" sx={{ color: "#64748b", mb: 3, lineHeight: 1.6 }}>
          {isOffline
            ? "Your laboratory data is safely stored in local IndexedDB. You can continue creating registrations, entering test results, and printing reports."
            : error?.message || "An unexpected error occurred while loading this view."}
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={handleReload}
            sx={{ fontWeight: 600, textTransform: "none", px: 2.5 }}
          >
            Reload Local Data
          </Button>

          <Button
            component={Link}
            href="/registration"
            variant="outlined"
            startIcon={<HomeIcon />}
            sx={{ fontWeight: 600, textTransform: "none", px: 2 }}
          >
            Registration
          </Button>

          <Button
            component={Link}
            href="/test-report"
            variant="outlined"
            sx={{ fontWeight: 600, textTransform: "none", px: 2 }}
          >
            Test Reports
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
