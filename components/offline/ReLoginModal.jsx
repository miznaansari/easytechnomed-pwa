"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  Alert,
  Chip,
} from "@mui/material";
import {
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Email as EmailIcon,
  CloudSync as SyncIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { toast } from "sonner";
import { getCachedSession, saveAuthenticatedSession } from "@/lib/auth/offlineAuth";

export default function ReLoginModal({
  open,
  onClose,
  onLoginSuccess,
  pendingCount = 0,
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/" || pathname?.startsWith("/auth") || pathname?.startsWith("/adminstration/login");

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Populate email / identifier from cached session when modal opens
  useEffect(() => {
    if (open && !isAuthPage) {
      setErrorMessage("");
      setPassword("");
      getCachedSession()
        .then((session) => {
          if (session) {
            const cachedEmail = session.email || session.admin?.email || session.admin?.mobileNumber || "";
            if (cachedEmail) {
              setIdentifier(cachedEmail);
            }
          }
        })
        .catch(() => {});
    }
  }, [open, isAuthPage]);

  // Do not render modal if not open or on auth/root pages
  if (isAuthPage || !open) return null;

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!identifier.trim() || !password) {
      setErrorMessage("Please enter your email/mobile and password.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password,
        }),
      }).then((r) => r.json());

      if (res.success) {
        // Fetch refreshed admin profile to update offline session store
        try {
          const profileRes = await fetch("/api/profile").then((r) => r.json());
          if (profileRes.success && profileRes.admin) {
            await saveAuthenticatedSession({
              admin: profileRes.admin,
              token: "admin_session_active",
            });
          }
        } catch (profileErr) {
          console.warn("[ReLoginModal] Profile fetch warning:", profileErr);
        }

        toast.success("Authentication successful! Resuming synchronization...", {
          id: "reauth-sync",
        });

        if (onLoginSuccess) {
          await onLoginSuccess();
        }
        if (onClose) {
          onClose();
        }
      } else {
        setErrorMessage(res.message || "Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error("[ReLoginModal] Login error:", err);
      setErrorMessage("Network error occurred while trying to log in. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={isLoading ? undefined : onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 1.5,
          border: "1px solid #e2e8f0",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ pb: 1, pt: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "#f0fdfa",
                  color: "#0f766e",
                  border: "1px solid #ccfbf1",
                }}
              >
                <LockIcon sx={{ fontSize: 24 }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", fontSize: "1.1rem" }}>
                  Session Expired
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 500 }}>
                  Re-login required to synchronize data
                </Typography>
              </Box>
            </Box>
            <IconButton
              size="small"
              onClick={onClose}
              disabled={isLoading}
              sx={{ color: "text.secondary", mt: -0.5, mr: -0.5 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ py: 1.5 }}>
          {pendingCount > 0 && (
            <Box sx={{ mb: 2 }}>
              <Chip
                icon={<SyncIcon sx={{ fontSize: 16 }} />}
                label={`${pendingCount} offline record${pendingCount === 1 ? "" : "s"} waiting to sync`}
                size="small"
                color="warning"
                sx={{ fontWeight: 600, fontSize: "0.75rem", width: "100%", justifyContent: "flex-start", px: 1 }}
              />
            </Box>
          )}

          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, fontSize: "0.875rem" }}>
            Your cloud session has expired (401). Please enter your password to re-authenticate and automatically resume syncing.
          </Typography>

          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: 2, fontSize: "0.8rem", py: 0.5 }}>
              {errorMessage}
            </Alert>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email or Mobile"
              variant="outlined"
              size="small"
              fullWidth
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={isLoading}
              autoComplete="username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon fontSize="small" sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              fullWidth
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      tabIndex={-1}
                    >
                      {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2, pt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading || !password}
            startIcon={
              isLoading ? <CircularProgress size={16} color="inherit" /> : <SyncIcon />
            }
            sx={{
              backgroundColor: "#0f766e",
              fontWeight: 700,
              borderRadius: 2,
              py: 1,
              "&:hover": { backgroundColor: "#0d645d" },
            }}
          >
            {isLoading ? "Authenticating..." : "Log In & Resume Sync"}
          </Button>

          <Button
            type="button"
            variant="text"
            fullWidth
            onClick={onClose}
            disabled={isLoading}
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              fontSize: "0.8rem",
              color: "text.secondary",
            }}
          >
            Continue Working Offline
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
