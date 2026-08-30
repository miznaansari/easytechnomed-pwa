"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TrackingProvider } from "@/app/context/TrackingContext";
import packageJson from "@/package.json";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  MenuList,
  Button,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Popper,
  Paper,
  CircularProgress
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  AppRegistration as RegisterIcon,
  Assignment as ReportIcon,
  SupervisorAccount as DoctorIcon,
  CheckCircle as ApprovalsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  People as PeopleIcon,
  GetApp as InstallAppIcon,
  WarningAmber as WarningIcon,
  Refresh as RefreshIcon
} from "@mui/icons-material";
import SyncIndicator from "@/components/offline/SyncIndicator";
import UnsyncedLogoutModal from "@/components/offline/UnsyncedLogoutModal";
import VersionUpdateNotifier from "@/components/version/VersionUpdateNotifier";
import PWAInstallModal, { getDeviceInfo } from "@/components/pwa/PWAInstallModal";
import ReLoginModal from "@/components/offline/ReLoginModal";
import db from "@/lib/offline/db";
import { useSync } from "@/hooks/useSync";
import { saveAuthenticatedSession, clearLocalSession } from "@/lib/auth/offlineAuth";

const drawerWidth = 280;

// Create a custom MUI theme matching the app's clean medical theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0f766e", // Teal 700
      light: "#14b8a6", // Teal 500
      dark: "#115e59", // Teal 800
      contrastText: "#fff",
    },
    secondary: {
      main: "#3b82f6", // Blue 500
    },
    background: {
      default: "#f8fafc", // Slate 50
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a", // Slate 900
      secondary: "#475569", // Slate 600
    },
  },
  typography: {
    fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
      },
    },
  },
});

const getExpiryMessage = (expireAt) => {
  if (!expireAt) return null;
  const expiry = new Date(expireAt);
  const now = new Date();
  const diffMs = expiry.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { text: "Expired", color: "error.main", severity: "error" };
  }

  // Calculate remaining days based on local calendar dates (timezone-aware system time)
  const expiryDateOnly = new Date(expiry.getFullYear(), expiry.getMonth(), expiry.getDate());
  const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const oneDayMs = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((expiryDateOnly - nowDateOnly) / oneDayMs);

  if (diffDays === 0) {
    const diffHours = diffMs / (1000 * 60 * 60);
    const hours = Math.floor(diffHours);
    const minutes = Math.floor((diffHours - hours) * 60);
    return {
      text: `${hours}h ${minutes}m left`,
      color: "error.main",
      severity: "warning"
    };
  }

  return {
    text: `${diffDays} ${diffDays === 1 ? "day" : "days"} left`,
    color: diffDays <= 7 ? "warning.main" : "text.secondary",
    severity: diffDays <= 7 ? "warning" : "info"
  };
};

export default function AdminLayoutClient({ admin: initialAdmin, children }) {
  const [admin, setAdmin] = useState(initialAdmin || null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoverAnchorEl, setHoverAnchorEl] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [unsyncedModalOpen, setUnsyncedModalOpen] = useState(false);
  const [pwaModalOpen, setPwaModalOpen] = useState(false);
  const [reLoginOpen, setReLoginOpen] = useState(false);
  const [dataMissingWarning, setDataMissingWarning] = useState(false);
  const [isRecoveringData, setIsRecoveringData] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const hoverTimeoutRef = React.useRef(null);

  const { pendingCount, sync, isSyncing } = useSync();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { isStandalone: standalone } = getDeviceInfo();
      setIsStandalone(standalone);
    }
  }, []);

  const handleManualDataFetch = async () => {
    setIsRecoveringData(true);
    try {
      const { syncManager } = await import("@/lib/offline/sync/syncManager");
      const res = await syncManager.bootstrapInitialData();
      if (res?.success) {
        const refreshedAdmin = (await db.admins.toArray())?.[0];
        if (refreshedAdmin) {
          setAdmin(refreshedAdmin);
          sessionStorage.setItem("admin_profile", JSON.stringify(refreshedAdmin));
        }
        setDataMissingWarning(false);
      }
    } catch (err) {
      console.warn("[AdminLayout] Manual data restore error:", err);
    } finally {
      setIsRecoveringData(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    async function hydrateAdmin() {
      if (initialAdmin) {
        setAdmin(initialAdmin);
        sessionStorage.setItem("admin_profile", JSON.stringify(initialAdmin));
        return;
      }
      try {
        const cached = sessionStorage.getItem("admin_profile");
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            if (parsed && isMounted) {
              setAdmin(parsed);
              return;
            }
          } catch { }
        }

        const [cachedAdmins, cachedSession, testsCount] = await Promise.all([
          db.admins.toArray(),
          db.offlineSession.get(1),
          db.tests.count(),
        ]);
        const local = cachedAdmins?.[0] || cachedSession?.admin;
        if (local && isMounted) {
          setAdmin(local);
        }

        // Check if IndexedDB is missing critical records
        const isDataMissing = !local || testsCount === 0;
        if (isDataMissing) {
          if (typeof navigator !== "undefined" && navigator.onLine) {
            // User is online -> fetch & restore IndexedDB in background without reloading
            try {
              const { syncManager } = await import("@/lib/offline/sync/syncManager");
              const res = await syncManager.bootstrapInitialData();
              if (res?.success && isMounted) {
                const refreshedAdmin = (await db.admins.toArray())?.[0];
                if (refreshedAdmin) {
                  setAdmin(refreshedAdmin);
                  sessionStorage.setItem("admin_profile", JSON.stringify(refreshedAdmin));
                }
                setDataMissingWarning(false);
              }
            } catch (syncErr) {
              console.warn("[AdminLayout] Background data fetch failed:", syncErr);
              if (isMounted && !local) {
                setDataMissingWarning(true);
              }
            }
          } else {
            // User is offline and local data is missing
            if (isMounted && !local) {
              setDataMissingWarning(true);
            }
          }
        } else {
          if (isMounted) setDataMissingWarning(false);
        }
      } catch (err) {
        console.warn("[AdminLayout] Hydration error:", err);
      }
    }
    hydrateAdmin();
    return () => {
      isMounted = false;
    };
  }, [initialAdmin]);

  const handleItemHover = (event, item) => {
    if (!isDrawerExpanded && item.subItems) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setHoverAnchorEl(event.currentTarget);
      setHoveredItem(item);
    }
  };

  const handleItemLeave = () => {
    if (!isDrawerExpanded) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoverAnchorEl(null);
        setHoveredItem(null);
      }, 300);
    }
  };

  const handleMenuEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleMenuLeave = () => {
    setHoverAnchorEl(null);
    setHoveredItem(null);
  };

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    // Prefetch all dashboard route chunks so they are stored in Service Worker cache for offline use
    const routesToPrefetch = [
      "/dashboard",
      "/registration",
      "/test-report",
      "/doctor-summary",
      "/members",
      "/settings",
      "/settings/address",
      "/settings/tests",
      "/settings/pdf",
      "/settings/payments"
    ];
    routesToPrefetch.forEach((r) => {
      try {
        router.prefetch(r);
      } catch { }
    });
  }, [router]);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"), { noSsr: true });

  const currentDrawerWidth = isMdUp ? (desktopOpen ? drawerWidth : 72) : drawerWidth;
  const isDrawerExpanded = isMdUp ? desktopOpen : true;

  const prevPathnameRef = React.useRef(pathname);

  // Auto-close mobile drawer ONLY on actual subsequent route transitions
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setMobileOpen(false);
    }
  }, [pathname]);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerToggle = (e) => {
    if (e && typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }
    const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 900 : isMdUp;
    if (isDesktop) {
      setDesktopOpen((prev) => !prev);
    } else {
      setMobileOpen((prev) => !prev);
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleProfileMenuClose();
    if (pendingCount > 0) {
      setUnsyncedModalOpen(true);
      return;
    }
    await performLogout();
  };

  const performLogout = async () => {
    try {
      await clearLocalSession();
      try {
        await fetch("/api/auth/logout", {
          method: "POST",
        });
      } catch (e) {
        console.warn("[AdminLayout] Server logout call failed (offline mode):", e);
      }
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };


  const handleSyncAndLogout = async () => {
    await sync();
    await performLogout();
  };

  // Always show all options - full access across all modules
  const hasPermission = () => true;

  const menuItems = [
    {
      text: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Patient Registration",
      path: "/registration",
      icon: <RegisterIcon />,
    },
    {
      text: "Test Reports",
      path: "/test-report",
      icon: <ReportIcon />,
    },
    {
      text: "Dr. Referral Summary",
      path: "/doctor-summary",
      icon: <DoctorIcon />,
    },
    {
      text: "Manage Members",
      path: "/members",
      icon: <PeopleIcon />,
    },
    {
      text: "System Settings",
      path: "/settings",
      icon: <SettingsIcon />,
      subItems: [
        { text: "Profile Setting", path: "/settings?tab=profile" },
        { text: "Address Setting", path: "/settings/address" },
        { text: "Test & Parameter", path: "/settings/tests" },
        { text: "PDF Frame Setting", path: "/settings/pdf" },
        { text: "Subscription & Invoices", path: "/settings/payments" },
      ]
    },
  ];

  const filteredMenuItems = menuItems;

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: isDrawerExpanded ? "space-between" : "center", px: [2] }}>
        {isDrawerExpanded ? (
          <Box component="img" src="/logo/logobg.png" alt="PathLab Logo" sx={{ height: 48, width: "auto", maxWidth: "100%", borderRadius: "4px" }} />
        ) : (
          <Box component="img" src="/android-chrome-512x512.png" alt="Logo" sx={{ height: 36, width: 36, borderRadius: "6px" }} />
        )}

        {mounted && !isMdUp && (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Toolbar>
      <Divider />
      <Box
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          flexGrow: 1,
          py: 1.5,
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <List sx={{ px: isDrawerExpanded ? 1.5 : 1 }}>
          {filteredMenuItems.map((item) => {
            const isAdmin = pathname.startsWith("/admin");
            const cleanPath = isAdmin ? pathname.slice(6) || "/" : pathname;
            const isActive = cleanPath === item.path || cleanPath.startsWith(item.path + "/");
            const itemHref = isAdmin ? `/admin${item.path}` : item.path;
            return (
              <React.Fragment key={item.text}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <Link href={itemHref} style={{ textDecoration: "none", width: "100%" }}>
                    <ListItemButton
                      onClick={() => mounted && !isMdUp && handleDrawerClose()}
                      onMouseEnter={(e) => handleItemHover(e, item)}
                      onMouseLeave={handleItemLeave}
                      sx={{
                        borderRadius: "8px",
                        py: 1,
                        px: isDrawerExpanded ? 2 : 1.5,
                        backgroundColor: isActive ? "primary.light" : "transparent",
                        color: isActive ? "primary.contrastText" : "text.secondary",
                        justifyContent: isDrawerExpanded ? "initial" : "center",
                        "&:hover": {
                          backgroundColor: isActive ? "primary.main" : "rgba(15, 118, 110, 0.08)",
                          color: isActive ? "primary.contrastText" : "primary.main",
                          "& .MuiListItemIcon-root": {
                            color: isActive ? "primary.contrastText" : "primary.main",
                          },
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: isActive ? "primary.contrastText" : "text.secondary",
                          display: "flex",
                          justifyContent: "center",
                          minWidth: 0,
                          mr: isDrawerExpanded ? 2 : "auto",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{
                          opacity: isDrawerExpanded ? 1 : 0,
                          width: isDrawerExpanded ? "auto" : 0,
                          transition: (theme) =>
                            theme.transitions.create("opacity", {
                              easing: theme.transitions.easing.sharp,
                              duration: theme.transitions.duration.shorter,
                            }),
                        }}
                        slotProps={{
                          primary: {
                            fontWeight: isActive ? 700 : 500,
                            fontSize: "0.875rem",
                            noWrap: true,
                          }
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
                {isDrawerExpanded && item.subItems && (
                  <List component="div" disablePadding sx={{ pl: 3, mb: 1 }}>
                    {item.subItems.map((sub) => {
                      const searchParamsStr = sub.path.split("?")[1] || "";
                      const tabName = searchParamsStr.split("=")[1] || "";
                      const currentTab = searchParams.get("tab") || (cleanPath === "/settings" ? "profile" : "");
                      const isSubActive = sub.path.includes("?")
                        ? (cleanPath === "/settings" && currentTab === tabName)
                        : (cleanPath === sub.path || cleanPath.startsWith(sub.path + "/"));
                      const subHref = isAdmin ? `/admin${sub.path}` : sub.path;

                      return (
                        <ListItem key={sub.text} disablePadding sx={{ mb: 0.5 }}>
                          <Link href={subHref} style={{ textDecoration: "none", width: "100%" }}>
                            <ListItemButton
                              onClick={() => mounted && !isMdUp && handleDrawerClose()}
                              sx={{
                                borderRadius: "6px",
                                py: 0.6,
                                px: 1.5,
                                backgroundColor: isSubActive ? "rgba(15, 118, 110, 0.08)" : "transparent",
                                color: isSubActive ? "primary.main" : "text.secondary",
                                "&:hover": {
                                  backgroundColor: "rgba(15, 118, 110, 0.04)",
                                  color: "primary.main",
                                },
                              }}
                            >
                              <ListItemText
                                primary={sub.text}
                                slotProps={{
                                  primary: {
                                    fontWeight: isSubActive ? 700 : 500,
                                    fontSize: "0.825rem",
                                  }
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Box>
      <Divider />
      {/* Bottom Profile Info */}
      <Box sx={{ p: 2, pb: 0, backgroundColor: "grey.50", display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, justifyContent: isDrawerExpanded ? "initial" : "center" }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
            {admin?.name ? admin.name.charAt(0).toUpperCase() : (admin?.companyName ? admin.companyName.charAt(0).toUpperCase() : "")}
          </Avatar>
          {isDrawerExpanded && (
            <Box sx={{ minWidth: 0, flexGrow: 1 }}>
              <Typography variant="subtitle2" noWrap sx={{ fontWeight: 700, color: "text.primary" }}>
                {admin?.name || admin?.companyName || ""}
              </Typography>
              <Typography variant="caption" noWrap sx={{ display: "block", color: "text.secondary" }}>
                {admin?.email || admin?.mobileNumber || ""}
              </Typography>
            </Box>
          )}
        </Box>
        {isDrawerExpanded ? (
          <Box sx={{ mt: 0.5, display: "flex", gap: 1, alignItems: "stretch" }}>
            {admin?.expireAt && (() => {
              const expiryInfo = getExpiryMessage(admin.expireAt);
              if (!expiryInfo) return null;
              return (
                <Box
                  sx={{
                    flex: 1.1,
                    px: 1,
                    py: 0.5,
                    borderRadius: 1.5,
                    bgcolor: expiryInfo.severity === "error"
                      ? "#fee2e2"
                      : expiryInfo.severity === "warning"
                        ? "#fffbeb"
                        : "#f1f5f9",
                    border: "1px solid",
                    borderColor: expiryInfo.severity === "error"
                      ? "#fca5a5"
                      : expiryInfo.severity === "warning"
                        ? "#fcd34d"
                        : "#cbd5e1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "text.primary", fontSize: "0.62rem", lineHeight: 1.1 }}>
                    Ends in:
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: expiryInfo.severity === "error"
                        ? "#991b1b"
                        : expiryInfo.severity === "warning"
                          ? "#92400e"
                          : "#334155",
                      fontSize: "0.65rem",
                      lineHeight: 1.1
                    }}
                  >
                    {expiryInfo.text}
                  </Typography>
                </Box>
              );
            })()}
            <Button
              variant="outlined"
              color="error"
              size="small"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                flex: 1,
                py: 0.5,
                borderRadius: 1.5,
                fontWeight: 700,
                fontSize: "0.8rem",
                justifyContent: "center",
                borderColor: "rgba(239, 68, 68, 0.4)",
                "& .MuiButton-startIcon": {
                  marginRight: "4px"
                }
              }}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              mt: 0,
              py: 0,
              minWidth: 0,
              px: 0,
              borderRadius: 1.5,
              fontWeight: 700,
              fontSize: "0.8rem",
              justifyContent: "center",
              borderColor: "rgba(239, 68, 68, 0.4)",
              "& .MuiButton-startIcon": {
                margin: 0
              }
            }}
          />
        )}
        {/* App Version at bottom */}
        {packageJson?.version && (
          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "center",
              fontSize: "0.68rem",
              fontWeight: 600,
              color: "text.disabled",
              letterSpacing: "0.02em",
              mt: 0
            }}
          >
            v{packageJson.version}
          </Typography>
        )}
      </Box>
    </Box >
  );

  const getPageTitle = () => {
    const matched = menuItems.find((item) => pathname === item.path);
    return matched ? matched.text : "Admin Workspace";
  };

  return (
    <TrackingProvider type="admin">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          {/* AppBar */}
          <AppBar
            position="fixed"
            sx={{
              width: { md: `calc(100% - ${currentDrawerWidth}px)` },
              ml: { md: `${currentDrawerWidth}px` },
              backgroundColor: "background.paper",
              color: "text.primary",
              boxShadow: "0 1px 3px 0 rgba(0,0,0,0.05)",
              borderBottom: "1px solid",
              borderColor: "divider",
              transition: (theme) => theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1.5, sm: 3 } }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: { xs: 1, sm: 2 },
                    p: 1,
                    minWidth: 44,
                    minHeight: 44,
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <MenuIcon sx={{ fontSize: { xs: "1.65rem", sm: "1.75rem" } }} />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                  {getPageTitle()}
                </Typography>
              </Box>

              {/* Right Side Actions: Install App (if in browser) + Sync Indicator + Profile Dropdown */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                {!isStandalone && (
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<InstallAppIcon sx={{ fontSize: "1rem !important" }} />}
                    onClick={() => setPwaModalOpen(true)}
                    sx={{
                      display: { xs: "none", sm: "inline-flex" },
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      py: 0.4,
                      px: 1.2,
                      borderColor: "rgba(15, 118, 110, 0.3)",
                      color: "primary.main",
                      bgcolor: "rgba(15, 118, 110, 0.03)",
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(15, 118, 110, 0.08)",
                      },
                    }}
                  >
                    Install App
                  </Button>
                )}
                <SyncIndicator />
                <Box>
                  <Button
                    onClick={handleProfileMenuOpen}
                    startIcon={
                      <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32, fontSize: "0.875rem" }}>
                        {admin?.name ? admin.name.charAt(0).toUpperCase() : (admin?.companyName ? admin.companyName.charAt(0).toUpperCase() : "")}
                      </Avatar>
                    }
                    sx={{ color: "text.primary", px: 1.5, py: 0.5 }}
                  >
                    <Typography variant="subtitle2" sx={{ display: { xs: "none", sm: "block" }, fontWeight: 600, ml: 1 }}>
                      {admin?.name || admin?.companyName || ""}
                    </Typography>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleProfileMenuClose}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        boxShadow: "0 4px 20px 0 rgba(0,0,0,0.08)",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        minWidth: 180,
                      },
                    }}
                  >
                    <Box sx={{ px: 2, py: 1.5 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {admin?.name || admin?.companyName || ""}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        Role: {admin?.role?.name || admin?.role || ""}
                      </Typography>
                    </Box>
                    <Divider />
                    {!isStandalone && (
                      <MenuItem
                        onClick={() => {
                          handleProfileMenuClose();
                          setPwaModalOpen(true);
                        }}
                        sx={{ py: 1.2, color: "primary.main", gap: 1 }}
                      >
                        <InstallAppIcon fontSize="small" />
                        Install App (PWA)
                      </MenuItem>
                    )}
                    <MenuItem onClick={handleLogout} sx={{ py: 1.2, color: "error.main", gap: 1 }}>
                      <LogoutIcon fontSize="small" />
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Sidebar Drawer */}
          <Box
            component="nav"
            sx={{
              width: { md: currentDrawerWidth },
              flexShrink: { md: 0 },
              transition: (theme) => theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              })
            }}
            aria-label="mailbox folders"
          >
            {/* Temporary Drawer for Mobile */}
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerClose}
              disableAutoFocus
              disableRestoreFocus
              disableEnforceFocus
              ModalProps={{
                keepMounted: true,
                disableRestoreFocus: true,
                disableAutoFocus: true,
                disableEnforceFocus: true,
              }}
              sx={{
                display: { xs: "block", md: "none" },
                zIndex: (theme) => theme.zIndex.drawer + 2,
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  borderRight: "1px solid",
                  borderColor: "divider",
                  touchAction: "pan-y",
                },
              }}
            >
              {drawerContent}
            </Drawer>
            {/* Permanent Drawer for Desktop */}
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", md: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: currentDrawerWidth,
                  borderRight: "1px solid",
                  borderColor: "divider",
                  overflowX: "hidden",
                  transition: (theme) => theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                },
              }}
              open
            >
              {drawerContent}
            </Drawer>
          </Box>

          {/* Main Content Area */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: { xs: 1.5, sm: 3 },
              width: { md: `calc(100% - ${currentDrawerWidth}px)` },
              minWidth: 0,
              mt: "64px",
              backgroundColor: "background.default",
              minHeight: "calc(100vh - 64px)",
              transition: (theme) => theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }}
          >
            {children}
          </Box>

          {/* Floating Submenu for Collapsed Drawer */}
          <Popper
            open={Boolean(hoverAnchorEl)}
            anchorEl={hoverAnchorEl}
            placement="right-start"
            style={{ zIndex: 1400 }}
          >
            <Paper
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
              sx={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid",
                borderColor: "divider",
                minWidth: 180,
                py: 0.5,
                ml: 0.5
              }}
            >
              <Box sx={{ px: 2, py: 0.8, bgcolor: "rgba(15, 118, 110, 0.04)" }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "primary.main", textTransform: "uppercase", letterSpacing: 0.5 }}>
                  {hoveredItem?.text}
                </Typography>
              </Box>
              <Divider sx={{ opacity: 0.6 }} />
              <MenuList>
                {hoveredItem?.subItems?.map((sub) => {
                  const isAdmin = pathname.startsWith("/admin");
                  const cleanPath = isAdmin ? pathname.slice(6) || "/" : pathname;
                  const searchParamsStr = sub.path.split("?")[1] || "";
                  const tabName = searchParamsStr.split("=")[1] || "";
                  const currentTab = searchParams.get("tab") || (cleanPath === "/settings" ? "profile" : "");
                  const isSubActive = sub.path.includes("?")
                    ? (cleanPath === "/settings" && currentTab === tabName)
                    : (cleanPath === sub.path || cleanPath.startsWith(sub.path + "/"));
                  const subHref = isAdmin ? `/admin${sub.path}` : sub.path;

                  return (
                    <MenuItem
                      key={sub.text}
                      onClick={() => {
                        handleMenuLeave();
                        router.push(subHref);
                      }}
                      sx={{
                        py: 1,
                        px: 2,
                        fontSize: "0.825rem",
                        fontWeight: isSubActive ? 700 : 500,
                        color: isSubActive ? "primary.main" : "text.secondary",
                        backgroundColor: isSubActive ? "rgba(15, 118, 110, 0.08)" : "transparent",
                        "&:hover": {
                          backgroundColor: "rgba(15, 118, 110, 0.04)",
                          color: "primary.main"
                        }
                      }}
                    >
                      {sub.text}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Paper>
          </Popper>

          {/* Unsynced Data Modal on Logout */}
          <UnsyncedLogoutModal
            open={unsyncedModalOpen}
            onClose={() => setUnsyncedModalOpen(false)}
            onConfirmLogout={performLogout}
            onSyncAndLogout={handleSyncAndLogout}
            pendingCount={pendingCount}
            isSyncing={isSyncing}
          />

          {/* Automated App Version Update & Hard Refresh Notifier */}
          <VersionUpdateNotifier />

          {/* PWA Install Prompt Modal on Login & Manual Action */}
          <PWAInstallModal forceOpen={pwaModalOpen} onClose={() => setPwaModalOpen(false)} />

          {/* Missing IndexedDB Data Recovery Alert (Non-blocking & Zero Reloads) */}
          {dataMissingWarning && (
            <Box
              sx={{
                position: "fixed",
                bottom: 24,
                right: 24,
                zIndex: 1400,
                maxWidth: 420,
                p: 2.2,
                bgcolor: "#ffffff",
                borderRadius: "16px",
                border: "1.5px solid #f59e0b",
                boxShadow: "0 20px 30px -10px rgba(245, 158, 11, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                fontFamily: "var(--font-outfit), sans-serif",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5 }}>
                <WarningIcon sx={{ color: "#d97706", fontSize: 26, mt: 0.2 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#92400e", fontSize: "0.9rem" }}>
                    Local Data Unsynchronized
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.8rem", color: "#78350f", lineHeight: 1.4, mt: 0.3 }}>
                    Local database records were not found on this device. If you cleared browser cache or logged in recently, please sync or log in again.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setReLoginOpen(true)}
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    borderColor: "#d97706",
                    color: "#92400e",
                    borderRadius: "8px",
                    "&:hover": { borderColor: "#b45309", bgcolor: "rgba(245, 158, 11, 0.08)" },
                  }}
                >
                  Log In Again
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  disabled={isRecoveringData}
                  startIcon={isRecoveringData ? <CircularProgress size={14} color="inherit" /> : <RefreshIcon />}
                  onClick={handleManualDataFetch}
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    bgcolor: "#d97706",
                    color: "#ffffff",
                    borderRadius: "8px",
                    "&:hover": { bgcolor: "#b45309" },
                  }}
                >
                  {isRecoveringData ? "Syncing..." : "Sync Records"}
                </Button>
              </Box>
            </Box>
          )}

          {/* Seamless In-App Re-Login Modal */}
          <ReLoginModal
            open={reLoginOpen}
            onClose={() => setReLoginOpen(false)}
            onLoginSuccess={async () => {
              setReLoginOpen(false);
              setDataMissingWarning(false);
              const { syncManager } = await import("@/lib/offline/sync/syncManager");
              await syncManager.bootstrapInitialData();
              const refreshedAdmin = (await db.admins.toArray())?.[0];
              if (refreshedAdmin) setAdmin(refreshedAdmin);
            }}
          />
        </Box>
      </ThemeProvider>
    </TrackingProvider>
  );
}
