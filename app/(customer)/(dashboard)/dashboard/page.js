"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import db from "@/lib/offline/db";
import { useSync } from "@/hooks/useSync";
import { syncManager } from "@/lib/offline/sync/syncManager";
import { useAdminPermissions } from "@/lib/clientAuth";
import DashboardRangeSelector from "./RangeSelector";
import { RegistrationChart, DepartmentDistributionChart } from "./DashboardCharts";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  Chip
} from "@mui/material";
import {
  AppRegistration as RegisterIcon,
  CheckCircle as CheckedIcon,
  PendingActions as PendingIcon,
  AccountBalanceWallet as WalletIcon,
  TableChart as TableChartIcon,
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon,
  Assignment as ReportIcon
} from "@mui/icons-material";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rangeParam = searchParams.get("range") || "7days";
  const [range, setRange] = useState(rangeParam);
  const [loading, setLoading] = useState(true);
  const [adminProfile, setAdminProfile] = useState({ name: "User", workspaceName: "Diagnostic Laboratory" });

  const { hasPermission, role, permissions = [] } = useAdminPermissions();

  // Dashboard Aggregated States
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    pendingRegistrations: 0,
    completedRegistrations: 0,
  });
  const [departmentData, setDepartmentData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [summaryTableRows, setSummaryTableRows] = useState([]);
  const [financials, setFinancials] = useState({
    totalBilling: 0,
    totalCollected: 0,
    dueBalance: 0,
    totalTableRegistered: 0,
    totalTableCompleted: 0,
  });
  const [periodDateRangeStr, setPeriodDateRangeStr] = useState("");

  // Role permissions check
  useEffect(() => {
    if (role) {
      const roleNameUpper = typeof role === "string" ? role.toUpperCase() : (role?.name?.toUpperCase() || "");
      const isSuperRole = roleNameUpper === "ADMIN" || roleNameUpper === "OWNER" || roleNameUpper === "SUPERADMIN" || roleNameUpper === "";
      if (isSuperRole) return; // Full admin access, no redirect needed

      const rolePerms = Array.isArray(role?.permissions)
        ? role.permissions.map((p) => (typeof p === "string" ? p : p.permission))
        : (Array.isArray(permissions) ? permissions : []);

      const hasAllPermission = rolePerms.some((p) => String(p).toUpperCase() === "ALL" || p === "*");
      const hasDashboardView = isSuperRole || hasAllPermission || rolePerms.includes("DASHBOARD_VIEW") || (typeof hasPermission === "function" && hasPermission("DASHBOARD_VIEW"));

      if (!hasDashboardView) {
        if (rolePerms.includes("REGISTRATION_READ") || rolePerms.includes("REGISTRATION_WRITE")) {
          router.push("/registration");
        } else if (rolePerms.includes("DOCTOR_READ") || rolePerms.includes("DOCTOR_WRITE")) {
          router.push("/doctor-summary");
        } else if (rolePerms.includes("MEMBER_READ") || rolePerms.includes("MEMBER_WRITE")) {
          router.push("/members");
        } else if (
          rolePerms.includes("SETTINGS_READ") || rolePerms.includes("SETTINGS_WRITE") ||
          rolePerms.includes("TEST_READ") || rolePerms.includes("TEST_WRITE")
        ) {
          router.push("/settings");
        }
      }
    }
  }, [role, permissions, hasPermission, router]);

  // Sync range state if url search params change
  useEffect(() => {
    if (rangeParam && rangeParam !== range) {
      setRange(rangeParam);
    }
  }, [rangeParam]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  const calculateDateFilter = (selectedRange) => {
    const now = new Date();
    let startDate = new Date();
    let endDate = new Date();

    if (selectedRange === "30days") {
      startDate.setDate(now.getDate() - 30);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
    } else if (selectedRange === "thismonth") {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
    } else if (selectedRange === "prevmonth") {
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0, 0);
      endDate = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
    } else if (selectedRange === "3months") {
      startDate.setDate(now.getDate() - 90);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
    } else if (selectedRange === "6months") {
      startDate.setDate(now.getDate() - 180);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
    } else if (selectedRange === "year") {
      startDate.setDate(now.getDate() - 365);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
    } else {
      // Default: 7days
      startDate.setDate(now.getDate() - 7);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
    }

    return { startDate, endDate };
  };

  const formatPeriodDate = (d) => {
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // Compute all dashboard metrics directly from IndexedDB (0ms latency, 100% offline & online)
  const computeDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Fetch admin & workspace profile from IndexedDB session or tables
      const [cachedAdmins, cachedSession, cachedWorkspaces, allRegs, allTests, allDepts, allPayments] = await Promise.all([
        db.admins.toArray(),
        db.offlineSession.get(1),
        db.workspaces.toArray(),
        db.registrations.filter((r) => !r.isDeleted).toArray(),
        db.tests.filter((t) => !t.isDeleted).toArray(),
        db.testDepartments.toArray(),
        db.registrationPayments.toArray(),
      ]);

      const currentAdmin = cachedAdmins?.[0] || cachedSession?.admin || {};
      const currentWorkspace = cachedWorkspaces?.[0] || cachedSession?.workspace || {};
      setAdminProfile({
        name: currentAdmin.name || "User",
        workspaceName: currentAdmin.workspaceName || currentWorkspace.name || "Diagnostic Laboratory",
      });

      // If IndexedDB is empty and online, trigger background bootstrap
      if (allRegs.length === 0 && typeof navigator !== "undefined" && navigator.onLine && localStorage.getItem("isInitialSynced") !== "1") {
        syncManager.bootstrapInitialData().catch((err) => console.warn("[Dashboard] Bootstrap error:", err));
      }

      const { startDate, endDate } = calculateDateFilter(range);
      const isMonthly = ["3months", "6months", "year"].includes(range);
      setPeriodDateRangeStr(`${formatPeriodDate(startDate)} – ${formatPeriodDate(endDate)}`);

      const startMs = startDate.getTime();
      const endMs = endDate.getTime();

      // Filter registrations in period
      const periodRegs = allRegs.filter((r) => {
        if (!r.date) return false;
        const t = new Date(r.date).getTime();
        return t >= startMs && t <= endMs;
      });

      // Filter payments in period
      const periodPayments = allPayments.filter((p) => {
        const pDate = p.createdAt || p.updatedAt;
        if (!pDate) return false;
        const t = new Date(pDate).getTime();
        return t >= startMs && t <= endMs;
      });

      // 1. Core counts
      const totalCount = periodRegs.length;
      let pendingCount = 0;
      let completedCount = 0;

      periodRegs.forEach((r) => {
        if (r.status === "Completed") {
          completedCount++;
        } else {
          pendingCount++;
        }
      });

      setStats({
        totalRegistrations: totalCount,
        pendingRegistrations: pendingCount,
        completedRegistrations: completedCount,
      });

      // 2. Department Breakdown
      const deptAggregation = {};
      const testMap = new Map();
      allTests.forEach((t) => testMap.set(t.id, t));
      const deptMap = new Map();
      allDepts.forEach((d) => deptMap.set(d.id, d.name));

      periodRegs.forEach((r) => {
        const rTests = Array.isArray(r.tests) ? r.tests : [];
        rTests.forEach((rt) => {
          const tId = rt.testId || rt.id || rt.test?.id;
          const fullTest = tId ? testMap.get(tId) || rt.test : rt.test;
          const deptName = fullTest?.department?.name || (fullTest?.departmentId ? deptMap.get(fullTest.departmentId) : null) || "General";
          deptAggregation[deptName] = (deptAggregation[deptName] || 0) + 1;
        });
      });

      const departmentDataList = Object.entries(deptAggregation).map(([name, value]) => ({
        name,
        value,
      }));
      setDepartmentData(departmentDataList);

      // 3. Time Series Aggregation for charts and tables
      const aggregatedData = {};
      if (isMonthly) {
        const tempDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        const endLimit = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
        while (tempDate <= endLimit) {
          const year = tempDate.getFullYear();
          const month = String(tempDate.getMonth() + 1).padStart(2, "0");
          const key = `${year}-${month}`;
          aggregatedData[key] = { registered: 0, completed: 0, revenue: 0, received: 0 };
          tempDate.setMonth(tempDate.getMonth() + 1);
        }
      } else {
        const tempDate = new Date(startDate);
        while (tempDate <= endDate) {
          const year = tempDate.getFullYear();
          const month = String(tempDate.getMonth() + 1).padStart(2, "0");
          const day = String(tempDate.getDate()).padStart(2, "0");
          const key = `${year}-${month}-${day}`;
          aggregatedData[key] = { registered: 0, completed: 0, revenue: 0, received: 0 };
          tempDate.setDate(tempDate.getDate() + 1);
        }
      }

      periodRegs.forEach((reg) => {
        const regDate = new Date(reg.date);
        let key;
        if (isMonthly) {
          const year = regDate.getFullYear();
          const month = String(regDate.getMonth() + 1).padStart(2, "0");
          key = `${year}-${month}`;
        } else {
          const year = regDate.getFullYear();
          const month = String(regDate.getMonth() + 1).padStart(2, "0");
          const day = String(regDate.getDate()).padStart(2, "0");
          key = `${year}-${month}-${day}`;
        }

        if (!aggregatedData[key]) {
          aggregatedData[key] = { registered: 0, completed: 0, revenue: 0, received: 0 };
        }
        aggregatedData[key].registered += 1;
        if (reg.status === "Completed") {
          aggregatedData[key].completed += 1;
        }
        const regRevenue = (Number(reg.totalAmount) || 0) + (Number(reg.collectionCharge) || 0) - (Number(reg.discountAmount) || 0);
        aggregatedData[key].revenue += regRevenue;

        if ((!reg.payments || reg.payments.length === 0) && Number(reg.receivedAmount || 0) > 0) {
          aggregatedData[key].received += Number(reg.receivedAmount || 0);
        }
      });

      periodPayments.forEach((payment) => {
        const payDate = new Date(payment.createdAt || payment.updatedAt);
        let pKey;
        if (isMonthly) {
          const year = payDate.getFullYear();
          const month = String(payDate.getMonth() + 1).padStart(2, "0");
          pKey = `${year}-${month}`;
        } else {
          const year = payDate.getFullYear();
          const month = String(payDate.getMonth() + 1).padStart(2, "0");
          const day = String(payDate.getDate()).padStart(2, "0");
          pKey = `${year}-${month}-${day}`;
        }

        if (!aggregatedData[pKey]) {
          aggregatedData[pKey] = { registered: 0, completed: 0, revenue: 0, received: 0 };
        }
        aggregatedData[pKey].received += Number(payment.amount || 0);
      });

      // 4. Chart Data
      const chartDataList = Object.entries(aggregatedData).map(([key, val]) => {
        let label = "";
        if (isMonthly) {
          const [year, month] = key.split("-");
          const dateObj = new Date(Number(year), Number(month) - 1, 1);
          label = dateObj.toLocaleDateString("en-US", { month: "short" });
        } else {
          const [year, month, day] = key.split("-");
          const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
          label = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        }
        return {
          date: key,
          label,
          count: val.registered,
          revenue: val.revenue,
        };
      });
      setChartData(chartDataList);

      // 5. Summary Table Rows (newest first)
      const tableRows = Object.entries(aggregatedData)
        .map(([key, val]) => {
          let formattedDate = "";
          if (isMonthly) {
            const [year, month] = key.split("-");
            const dateObj = new Date(Number(year), Number(month) - 1, 1);
            formattedDate = dateObj.toLocaleDateString("en-US", { month: "long", year: "numeric" });
          } else {
            const [year, month, day] = key.split("-");
            const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
            formattedDate = dateObj.toLocaleDateString("en-US", {
              weekday: "short",
              day: "2-digit",
              month: "short",
            });
          }
          return {
            key,
            dateLabel: formattedDate,
            registered: val.registered,
            completed: val.completed,
            revenue: val.revenue,
            received: val.received,
          };
        })
        .sort((a, b) => b.key.localeCompare(a.key));

      setSummaryTableRows(tableRows);

      const totalBilling = tableRows.reduce((sum, r) => sum + r.revenue, 0);
      const totalCollected = tableRows.reduce((sum, r) => sum + r.received, 0);
      const totalTableRegistered = tableRows.reduce((sum, r) => sum + r.registered, 0);
      const totalTableCompleted = tableRows.reduce((sum, r) => sum + r.completed, 0);
      const dueBalance = totalBilling - totalCollected;

      setFinancials({
        totalBilling,
        totalCollected,
        dueBalance,
        totalTableRegistered,
        totalTableCompleted,
      });
    } catch (err) {
      console.error("[Dashboard] Error computing IndexedDB metrics:", err);
    } finally {
      setLoading(false);
    }
  }, [range]);

  // Initial load and range changes
  useEffect(() => {
    computeDashboardData();
  }, [computeDashboardData]);

  // Real-time synchronization listeners
  const { isSyncing, lastSyncTime } = useSync();
  const isSyncingPrevRef = React.useRef(false);

  useEffect(() => {
    if (isSyncingPrevRef.current && !isSyncing) {
      computeDashboardData();
    }
    isSyncingPrevRef.current = isSyncing;
  }, [isSyncing, computeDashboardData]);

  useEffect(() => {
    if (lastSyncTime) {
      computeDashboardData();
    }
  }, [lastSyncTime, computeDashboardData]);

  useEffect(() => {
    const handleSyncEvent = () => computeDashboardData();
    window.addEventListener("easytechnomed:sync-complete", handleSyncEvent);
    window.addEventListener("easytechnomed:sync-state-change", handleSyncEvent);

    const unsubscribe = syncManager.subscribe((state) => {
      if (!state.isSyncing && state.lastSyncTime) {
        computeDashboardData();
      }
    });

    return () => {
      window.removeEventListener("easytechnomed:sync-complete", handleSyncEvent);
      window.removeEventListener("easytechnomed:sync-state-change", handleSyncEvent);
      unsubscribe();
    };
  }, [computeDashboardData]);

  return (
    <Box sx={{ flexGrow: 1, minWidth: 0, pb: 4, pt: 1 }}>
      
      {/* 1. Header Bar: Minimal, Direct, Impactful */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          border: "1.5px solid #E2E8F0",
          borderRadius: "12px",
          p: { xs: 2, sm: 2.5 },
          mb: 2.5,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 1.5,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.25rem", sm: "1.45rem" },
              color: "#0F172A",
              letterSpacing: "-0.01em",
            }}
          >
            Welcome, <Box component="span" sx={{ color: "#10b6a5" }}>{adminProfile.name}</Box>
          </Typography>
          <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600, display: "block", mt: 0.25 }}>
            {adminProfile.workspaceName || "Diagnostic Laboratory"} • Period: <Box component="span" sx={{ fontWeight: 700, color: "#1E293B" }}>{periodDateRangeStr}</Box>
          </Typography>
        </Box>

        {/* Action + Time Filter (50% each side-by-side on mobile) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box sx={{ flex: { xs: "1 1 50%", sm: "none" }, width: { xs: "50%", sm: "auto" } }}>
            <DashboardRangeSelector initialRange={range} value={range} onChange={handleRangeChange} />
          </Box>
          
          <Link href="/registration" style={{ textDecoration: "none", flex: "1 1 50%", width: "100%" }}>
            <Button
              fullWidth
              variant="contained"
              size="small"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "#0f766e",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.8rem",
                py: 0.8,
                px: 2,
                borderRadius: "8px",
                boxShadow: "none !important",
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#115e59" },
              }}
            >
              + Patient
            </Button>
          </Link>
        </Box>
      </Box>

      {/* 2. 4 Core Numbers (Instant Understanding) */}
      <Grid container spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: 2.5 }}>
        
        {/* Total Patients */}
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              bgcolor: "#FFFFFF",
              border: "1.5px solid #E2E8F0",
              borderRadius: "12px",
              p: { xs: 1.5, sm: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 800, textTransform: "uppercase", fontSize: "0.7rem" }}>
                Total Patients
              </Typography>
              <Box sx={{ width: 32, height: 32, borderRadius: "8px", bgcolor: "rgba(15, 118, 110, 0.12)", color: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RegisterIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#0F172A", fontSize: { xs: "1.5rem", sm: "1.85rem" }, lineHeight: 1 }}>
              {stats.totalRegistrations}
            </Typography>
            <Typography variant="caption" sx={{ color: "#0f766e", fontWeight: 700, mt: 0.75, display: "block", fontSize: "0.72rem" }}>
              Registered in period
            </Typography>
          </Card>
        </Grid>

        {/* Pending Tests */}
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              bgcolor: "#FFFFFF",
              border: "1.5px solid #E2E8F0",
              borderRadius: "12px",
              p: { xs: 1.5, sm: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 800, textTransform: "uppercase", fontSize: "0.7rem" }}>
                Pending Tests
              </Typography>
              <Box sx={{ width: 32, height: 32, borderRadius: "8px", bgcolor: "rgba(245, 158, 11, 0.12)", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PendingIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: stats.pendingRegistrations > 0 ? "#D97706" : "#0F172A", fontSize: { xs: "1.5rem", sm: "1.85rem" }, lineHeight: 1 }}>
              {stats.pendingRegistrations}
            </Typography>
            <Typography variant="caption" sx={{ color: stats.pendingRegistrations > 0 ? "#D97706" : "#10B981", fontWeight: 700, mt: 0.75, display: "block", fontSize: "0.72rem" }}>
              {stats.pendingRegistrations > 0 ? "⚠️ Awaiting Results" : "✓ Worklist Clear"}
            </Typography>
          </Card>
        </Grid>

        {/* Completed Tests */}
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              bgcolor: "#FFFFFF",
              border: "1.5px solid #E2E8F0",
              borderRadius: "12px",
              p: { xs: 1.5, sm: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 800, textTransform: "uppercase", fontSize: "0.7rem" }}>
                Completed Tests
              </Typography>
              <Box sx={{ width: 32, height: 32, borderRadius: "8px", bgcolor: "rgba(16, 185, 129, 0.12)", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CheckedIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#0F172A", fontSize: { xs: "1.5rem", sm: "1.85rem" }, lineHeight: 1 }}>
              {stats.completedRegistrations}
            </Typography>
            <Typography variant="caption" sx={{ color: "#10B981", fontWeight: 700, mt: 0.75, display: "block", fontSize: "0.72rem" }}>
              ✓ Reports Ready
            </Typography>
          </Card>
        </Grid>

        {/* Collections */}
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              bgcolor: "#FFFFFF",
              border: "1.5px solid #E2E8F0",
              borderRadius: "12px",
              p: { xs: 1.5, sm: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 800, textTransform: "uppercase", fontSize: "0.7rem" }}>
                Collections
              </Typography>
              <Box sx={{ width: 32, height: 32, borderRadius: "8px", bgcolor: "rgba(59, 130, 246, 0.12)", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WalletIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#0F172A", fontSize: { xs: "1.35rem", sm: "1.7rem" }, lineHeight: 1 }}>
              ₹{financials.totalCollected.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </Typography>
            <Typography variant="caption" sx={{ color: financials.dueBalance > 0 ? "#DC2626" : "#10B981", fontWeight: 700, mt: 0.75, display: "block", fontSize: "0.72rem" }}>
              {financials.dueBalance > 0 ? `₹${financials.dueBalance.toLocaleString("en-IN", { maximumFractionDigits: 0 })} due balance` : "All dues cleared"}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Visual Overview: Patient Trend & Department Split */}
      <Grid container spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: 2.5 }}>
        
        {/* Patient Volume Trend */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card elevation={0} sx={{ height: "100%", bgcolor: "#FFFFFF", border: "1.5px solid #E2E8F0", borderRadius: "12px", p: { xs: 2, sm: 2.5 } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.95rem" }}>
                Patient Volume Trend
              </Typography>
              <Chip
                label={`${stats.totalRegistrations} Patients`}
                size="small"
                sx={{ fontWeight: 800, bgcolor: "rgba(15, 118, 110, 0.12)", color: "#0f766e", borderRadius: "6px", fontSize: "0.72rem" }}
              />
            </Box>
            <RegistrationChart data={chartData} />
          </Card>
        </Grid>

        {/* Department Breakdown */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card elevation={0} sx={{ height: "100%", bgcolor: "#FFFFFF", border: "1.5px solid #E2E8F0", borderRadius: "12px", p: { xs: 2, sm: 2.5 } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.95rem" }}>
              Test Department Split
            </Typography>
            <DepartmentDistributionChart data={departmentData} />
          </Card>
        </Grid>
      </Grid>

      {/* 4. Simple Operational Activity Log */}
      <Card elevation={0} sx={{ bgcolor: "#FFFFFF", border: "1.5px solid #E2E8F0", borderRadius: "12px", p: { xs: 2, sm: 2.5 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, flexWrap: "wrap", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TableChartIcon sx={{ color: "#0f766e", fontSize: 18 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.95rem" }}>
              Recent Activity Breakdown
            </Typography>
          </Box>
          <Link href="/registration" style={{ textDecoration: "none" }}>
            <Typography variant="caption" sx={{ color: "#0f766e", fontWeight: 800, display: "flex", alignItems: "center", gap: 0.5 }}>
              View All Patients <ArrowForwardIcon sx={{ fontSize: 13 }} />
            </Typography>
          </Link>
        </Box>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            border: "1px solid #E2E8F0",
            borderRadius: "8px",
            maxHeight: 380,
            overflowX: "auto",
          }}
        >
          <Table stickyHeader size="small" sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800, bgcolor: "#F8FAFC", color: "#475569", py: 1.2, fontSize: "0.78rem" }}>
                  Date
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, bgcolor: "#F8FAFC", color: "#475569", py: 1.2, fontSize: "0.78rem" }}>
                  Registered
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, bgcolor: "#F8FAFC", color: "#475569", py: 1.2, fontSize: "0.78rem" }}>
                  Completed
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800, bgcolor: "#F8FAFC", color: "#475569", py: 1.2, fontSize: "0.78rem" }}>
                  Invoiced (₹)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800, bgcolor: "#F8FAFC", color: "#475569", py: 1.2, fontSize: "0.78rem" }}>
                  Collected (₹)
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {summaryTableRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 4, color: "#64748B" }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>No registrations found for this period.</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                summaryTableRows.slice(0, 10).map((row) => (
                  <TableRow
                    key={row.key}
                    hover
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:hover": { bgcolor: "#F8FAFC" }
                    }}
                  >
                    <TableCell sx={{ fontWeight: 700, color: "#0F172A", py: 1.1, fontSize: "0.8rem" }}>
                      {row.dateLabel}
                    </TableCell>
                    <TableCell align="center" sx={{ py: 1.1 }}>
                      <Box
                        sx={{
                          display: "inline-block",
                          minWidth: 28,
                          px: 0.75,
                          py: 0.2,
                          borderRadius: "4px",
                          fontWeight: 800,
                          fontSize: "0.75rem",
                          bgcolor: row.registered > 0 ? "rgba(16, 182, 165, 0.15)" : "#F1F5F9",
                          color: row.registered > 0 ? "#10b6a5" : "#64748B",
                        }}
                      >
                        {row.registered}
                      </Box>
                    </TableCell>
                    <TableCell align="center" sx={{ py: 1.1 }}>
                      <Box
                        sx={{
                          display: "inline-block",
                          minWidth: 28,
                          px: 0.75,
                          py: 0.2,
                          borderRadius: "4px",
                          fontWeight: 800,
                          fontSize: "0.75rem",
                          bgcolor: row.completed > 0 ? "rgba(16, 185, 129, 0.15)" : "#F1F5F9",
                          color: row.completed > 0 ? "#059669" : "#64748B",
                        }}
                      >
                        {row.completed}
                      </Box>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700, color: "#0F172A", py: 1.1, fontSize: "0.8rem" }}>
                      ₹{row.revenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 800, color: "#059669", py: 1.1, fontSize: "0.8rem" }}>
                      ₹{row.received.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>

            <TableFooter>
              <TableRow sx={{ bgcolor: "#F8FAFC" }}>
                <TableCell sx={{ fontWeight: 800, color: "#0F172A", py: 1.2, fontSize: "0.8rem" }}>
                  Total
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, color: "#10b6a5", py: 1.2, fontSize: "0.82rem" }}>
                  {financials.totalTableRegistered}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 800, color: "#059669", py: 1.2, fontSize: "0.82rem" }}>
                  {financials.totalTableCompleted}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800, color: "#0F172A", py: 1.2, fontSize: "0.82rem" }}>
                  ₹{financials.totalBilling.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800, color: "#059669", py: 1.2, fontSize: "0.82rem" }}>
                  ₹{financials.totalCollected.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

    </Box>
  );
}

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<Box sx={{ p: 4, textAlign: "center" }}><Typography variant="body2" color="text.secondary">Loading dashboard...</Typography></Box>}>
      <DashboardContent />
    </Suspense>
  );
}
