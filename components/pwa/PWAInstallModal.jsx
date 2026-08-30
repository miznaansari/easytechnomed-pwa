"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Fade,
} from "@mui/material";
import {
  Close as CloseIcon,
  GetApp as DownloadIcon,
  PhoneIphone as AppleIcon,
  PhoneAndroid as AndroidIcon,
  Laptop as WindowsIcon,
  Share as ShareIcon,
  AddBox as AddIcon,
  OfflinePin as OfflineIcon,
  Bolt as FastIcon,
} from "@mui/icons-material";

export function getDeviceInfo() {
  if (typeof window === "undefined") {
    return { os: "unknown", isStandalone: false, isIOS: false, isAndroid: false, isDesktop: true };
  }

  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true ||
    document.referrer.includes("android-app://");

  const ua = window.navigator.userAgent || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);
  const isWindows = /Windows/.test(ua);
  const isMac = /Macintosh|Mac OS X/.test(ua) && !isIOS;

  let os = "desktop";
  if (isIOS) os = "ios";
  else if (isAndroid) os = "android";
  else if (isWindows) os = "windows";
  else if (isMac) os = "mac";

  return {
    os,
    isIOS,
    isAndroid,
    isWindows,
    isMac,
    isDesktop: !isIOS && !isAndroid,
    isStandalone,
  };
}

export default function PWAInstallModal({ forceOpen = false, onClose = null }) {
  const [open, setOpen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({
    os: "unknown",
    isStandalone: false,
    isIOS: false,
    isAndroid: false,
    isDesktop: true,
  });
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const info = getDeviceInfo();
    setDeviceInfo(info);

    // If already installed as standalone PWA, never show install prompt
    if (info.isStandalone) {
      localStorage.removeItem("pwa_show_install_on_login");
      return;
    }

    // Listen for the native beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      window.deferredPwaPrompt = e;
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setOpen(false);
      localStorage.removeItem("pwa_show_install_on_login");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Check if we should trigger on login
    const shouldShowOnLogin = localStorage.getItem("pwa_show_install_on_login") === "1";

    if ((shouldShowOnLogin || forceOpen) && !info.isStandalone) {
      // Delay slightly for smooth transition after login
      const timer = setTimeout(() => {
        setOpen(true);
      }, 700);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        window.removeEventListener("appinstalled", handleAppInstalled);
      };
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [forceOpen]);

  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("pwa_show_install_on_login");
    if (onClose) onClose();
  };

  const handleInstallClick = async () => {
    const promptEvent = deferredPrompt || window.deferredPwaPrompt;
    if (promptEvent) {
      try {
        promptEvent.prompt();
        const { outcome } = await promptEvent.userChoice;
        if (outcome === "accepted") {
          setIsInstalled(true);
          handleClose();
        }
      } catch (err) {
        console.warn("[PWA] Install prompt error:", err);
      }
    } else if (deviceInfo.isIOS) {
      // iOS doesn't support programmatic install; guide is shown
      handleClose();
    } else {
      handleClose();
    }
  };

  // If already running inside standalone app, do not render
  if (deviceInfo.isStandalone && !forceOpen) {
    return null;
  }

  const { isIOS, isAndroid, isDesktop } = deviceInfo;

  return (
    <Dialog
      open={open || forceOpen}
      onClose={handleClose}
      TransitionComponent={Fade}
      transitionDuration={300}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: "20px",
            p: { xs: 2.5, sm: 3 },
            bgcolor: "#ffffff",
            boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
            border: "1.5px solid #e2e8f0",
            overflow: "hidden",
            position: "relative",
          },
        },
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={handleClose}
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: "#94a3b8",
          "&:hover": { color: "#0f172a", bgcolor: "#f1f5f9" },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        {/* Header Icon + Brand */}
        <Box sx={{ textAlign: "center", mb: 2.5 }}>
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "16px",
              bgcolor: "#0f766e",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 1.5,
              boxShadow: "0 10px 20px -5px rgba(15, 118, 110, 0.4)",
            }}
          >
            {isIOS ? (
              <AppleIcon sx={{ fontSize: 32 }} />
            ) : isAndroid ? (
              <AndroidIcon sx={{ fontSize: 32 }} />
            ) : (
              <WindowsIcon sx={{ fontSize: 32 }} />
            )}
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              fontSize: { xs: "1.15rem", sm: "1.25rem" },
              letterSpacing: "-0.01em",
              mb: 0.5,
            }}
          >
            {isIOS
              ? "Install on iPhone / iPad"
              : isAndroid
              ? "Install Android App"
              : "Install Desktop App"}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#64748b", fontSize: "0.825rem", lineHeight: 1.4 }}
          >
            EasyTechnoMed Laboratory Portal
          </Typography>
        </Box>

        {/* Benefits Badges */}
        <Stack direction="row" spacing={1} sx={{ mb: 2.5, justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.6,
              px: 1.2,
              py: 0.5,
              borderRadius: "8px",
              bgcolor: "#ecfdf5",
              color: "#065f46",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            <OfflineIcon sx={{ fontSize: 14 }} />
            <span>0ms Offline Access</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.6,
              px: 1.2,
              py: 0.5,
              borderRadius: "8px",
              bgcolor: "#f0fdfa",
              color: "#0f766e",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            <FastIcon sx={{ fontSize: 14 }} />
            <span>Fast Native App</span>
          </Box>
        </Stack>

        {/* Device-Specific Simple Instructions */}
        {isIOS ? (
          /* iOS Step-by-Step Guide */
          <Box
            sx={{
              bgcolor: "#f8fafc",
              border: "1.5px solid #e2e8f0",
              borderRadius: "14px",
              p: 2,
              mb: 2.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 800,
                color: "#0f766e",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                mb: 1.2,
              }}
            >
              Simple 3-Step Setup (Safari)
            </Typography>

            <Stack spacing={1.2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: "#0f766e",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  1
                </Box>
                <Typography variant="body2" sx={{ fontSize: "0.825rem", color: "#334155" }}>
                  Tap the <strong>Share</strong> button <ShareIcon sx={{ fontSize: 16, verticalAlign: "middle", mx: 0.3, color: "#0284c7" }} /> at the bottom.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: "#0f766e",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  2
                </Box>
                <Typography variant="body2" sx={{ fontSize: "0.825rem", color: "#334155" }}>
                  Scroll down & tap <strong>&quot;Add to Home Screen&quot;</strong> <AddIcon sx={{ fontSize: 16, verticalAlign: "middle", mx: 0.3 }} />.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: "#0f766e",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  3
                </Box>
                <Typography variant="body2" sx={{ fontSize: "0.825rem", color: "#334155" }}>
                  Tap <strong>Add</strong> in the top-right corner.
                </Typography>
              </Box>
            </Stack>
          </Box>
        ) : (
          /* Android / Desktop Install Box */
          <Box
            sx={{
              bgcolor: "#f8fafc",
              border: "1.5px solid #e2e8f0",
              borderRadius: "14px",
              p: 2,
              mb: 2.5,
              textAlign: "center",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "0.85rem", color: "#334155", fontWeight: 600, mb: 0.5 }}>
              {isAndroid
                ? "Install for 1-tap patient registration & offline lab reports."
                : "Install as a desktop application with full keyboard shortcuts and instant printing."}
            </Typography>
            <Typography variant="caption" sx={{ color: "#64748b", display: "block" }}>
              No app store download required. Uses 0 MB extra storage.
            </Typography>
          </Box>
        )}

        {/* Action Buttons */}
        <Stack spacing={1.2}>
          {isIOS ? (
            <Button
              fullWidth
              variant="contained"
              onClick={handleClose}
              sx={{
                bgcolor: "#0f766e",
                color: "#ffffff",
                py: 1.2,
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#115e59" },
              }}
            >
              Got It
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleInstallClick}
              sx={{
                bgcolor: "#0f766e",
                color: "#ffffff",
                py: 1.2,
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#115e59" },
              }}
            >
              {isAndroid ? "Install Android App" : "Install Desktop App"}
            </Button>
          )}

          <Button
            fullWidth
            variant="text"
            onClick={handleClose}
            sx={{
              color: "#64748b",
              py: 0.8,
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.8rem",
              "&:hover": { color: "#0f172a", bgcolor: "#f1f5f9" },
            }}
          >
            Maybe Later
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
