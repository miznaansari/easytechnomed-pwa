"use client";

import React, { useEffect } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { Refresh as RefreshIcon, Dashboard as DashboardIcon } from "@mui/icons-material";
import Link from "next/link";

export default function DashboardErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.warn("[Dashboard Error Boundary Caught]:", error);
  }, [error]);

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
        minHeight: "60vh",
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
        <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 1 }}>
          Something went wrong
        </Typography>

        <Typography variant="body2" sx={{ color: "#64748b", mb: 3, lineHeight: 1.6 }}>
          {error?.message || "An error occurred while rendering this page."}
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={handleReload}
            sx={{ fontWeight: 600, textTransform: "none", px: 2.5 }}
          >
            Retry
          </Button>

          <Button
            component={Link}
            href="/dashboard"
            variant="outlined"
            startIcon={<DashboardIcon />}
            sx={{ fontWeight: 600, textTransform: "none", px: 2 }}
          >
            Dashboard
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
