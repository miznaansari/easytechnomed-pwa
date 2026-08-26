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
            bgcolor: isOffline ? "#fef3c7" : "#fee2e2",
            color: isOffline ? "#d97706" : "#dc2626",
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
          {isOffline ? "You are currently offline" : "Something went wrong"}
        </Typography>

        <Typography variant="body2" sx={{ color: "#64748b", mb: 3, lineHeight: 1.6 }}>
          {isOffline
            ? "Your local data is safely preserved in IndexedDB. You can continue working on cached laboratory records."
            : error?.message || "An unexpected error occurred while loading this view."}
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={() => reset()}
            sx={{ fontWeight: 600, textTransform: "none", px: 2.5 }}
          >
            Try Again
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
        </Box>
      </Paper>
    </Box>
  );
}
