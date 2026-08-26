"use client";

import React, { useState, useEffect, Suspense } from "react";
import db from "@/lib/offline/db";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
  CircularProgress,
  Snackbar,
  Alert,
  Tooltip
} from "@mui/material";
import {
  Save as SaveIcon
} from "@mui/icons-material";
import { useSearchParams, useRouter } from "next/navigation";
import { useAdminPermissions } from "@/lib/clientAuth";
import TestsClient from "./tests/testsClient";
import PdfSettingsClient from "./pdf/pdfClient";
import PaymentsClient from "./payments/paymentsClient";

function SettingsContent({ defaultSection = "profile" }) {
  const { hasPermission } = useAdminPermissions();
  const canWriteSettings = hasPermission("SETTINGS_WRITE");
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab");
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    if (tab && ["profile", "tests", "pdf", "payments"].includes(tab)) {
      setActiveSection(tab);
    }
  }, [tab]);

  // Profile states
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatingProfile, setUpdatingProfile] = useState(false);

  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ open: false, message: "", severity: "success" });

  const showToast = (message, severity = "success") => {
    setToast({ open: true, message, severity });
  };

  // Load profile settings instantly from IndexedDB
  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      try {
        const [cachedAdmins, cachedSession] = await Promise.all([
          db.admins.toArray(),
          db.offlineSession.get(1),
        ]);
        const adminData = cachedAdmins?.[0] || cachedSession?.admin;

        if (adminData) {
          setProfileName(adminData.name || "");
          setProfileEmail(adminData.email || "");
          setCompanyName(adminData.companyName || "");
          setMobileNumber(adminData.mobileNumber || "");
        }
      } catch (err) {
        console.error("Error loading profile from IndexedDB:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, []);

  // Profile actions
  const handleProfileUpdate = async () => {
    if (!profileName.trim()) {
      showToast("Name is required.", "error");
      return;
    }

    if (oldPassword && (!newPassword || !confirmPassword)) {
      showToast("Please fill in both new password fields.", "error");
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      showToast("New passwords do not match.", "error");
      return;
    }

    setUpdatingProfile(true);
    try {
      // 1. Update local IndexedDB admin profile (0ms latency)
      const cachedAdmins = await db.admins.toArray();
      if (cachedAdmins.length > 0) {
        await db.updateOffline("admins", cachedAdmins[0].id, {
          name: profileName,
          companyName: companyName || null,
          mobileNumber: mobileNumber || null,
        });
      }

      showToast("Profile updated successfully!", "success");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

      // 2. Trigger background auto-sync if online
      if (typeof navigator !== "undefined" && navigator.onLine) {
        import("@/lib/offline/sync/syncManager").then(({ syncManager }) => syncManager.sync()).catch(() => {});
      }
    } catch (err) {
      console.error("Profile update error:", err);
      showToast("An error occurred while updating profile.", "error");
    } finally {
      setUpdatingProfile(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "60vh", gap: 2 }}>
        <CircularProgress size={45} />
        <Typography variant="body2" color="text.secondary">
          Loading system configurations...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: "text.primary" }}>
        ⚙️ System Settings & Preferences
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Manage your profile, set custom test prices, configure letterhead frame PDFs, and adjust system defaults.
      </Typography>

      {activeSection === "profile" && (
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
              👤 Update Profile Details
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Modify your login name and manage your account password.
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3} sx={{ maxWidth: 600 }}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Email Address"
                  fullWidth
                  size="small"
                  value={profileEmail}
                  disabled
                  helperText="Login email cannot be changed."
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Your Name"
                  fullWidth
                  size="small"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  required
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Company Name"
                  fullWidth
                  size="small"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter company name"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Mobile Number"
                  fullWidth
                  size="small"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter mobile number"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 1, mb: 1, color: "text.primary" }}>
                  Change Password (Optional)
                </Typography>
                <Divider sx={{ mb: 2 }} />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Current Password"
                  type="password"
                  fullWidth
                  size="small"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter current password to make password updates"
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="New Password"
                  type="password"
                  fullWidth
                  size="small"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min 6 characters"
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Confirm New Password"
                  type="password"
                  fullWidth
                  size="small"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Tooltip title={!canWriteSettings ? "You do not have permission to update profiles" : ""}>
                <span>
                  <Button
                    variant="contained"
                    onClick={handleProfileUpdate}
                    startIcon={updatingProfile ? <CircularProgress size={16} color="inherit" /> : <SaveIcon />}
                    disabled={updatingProfile || !canWriteSettings}
                    sx={{ px: 4 }}
                  >
                    {updatingProfile ? "Updating..." : "Update Profile"}
                  </Button>
                </span>
              </Tooltip>
            </Box>
          </CardContent>
        </Card>
      )}

      {activeSection === "tests" && (
        <TestsClient />
      )}

      {activeSection === "pdf" && (
        <PdfSettingsClient />
      )}

      {activeSection === "payments" && (
        <PaymentsClient />
      )}

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={toast.severity} onClose={() => setToast((prev) => ({ ...prev, open: false }))} sx={{ width: "100%" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default function SettingsPage({ defaultSection = "profile" }) {
  return (
    <Suspense fallback={
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "60vh", gap: 2 }}>
        <CircularProgress size={45} />
        <Typography variant="body2" color="text.secondary">
          Loading system configurations...
        </Typography>
      </Box>
    }>
      <SettingsContent defaultSection={defaultSection} />
    </Suspense>
  );
}
