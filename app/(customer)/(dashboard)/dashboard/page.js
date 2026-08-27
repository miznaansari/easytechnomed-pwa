"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import db from "@/lib/offline/db";
import { useSync } from "@/hooks/useSync";
import { syncManager } from "@/lib/offline/sync/syncManager";
import { useAdminPermissions } from "@/lib/clientAuth";
import { RegistrationChart, RevenueChart, DepartmentDistributionChart, ReferralChart } from "./DashboardCharts";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress
} from "@mui/material";
import {
  AppRegistration as RegisterIcon,
  Assignment as ReportIcon,
  CheckCircle as CheckedIcon,
  PendingActions as PendingIcon,
  TrendingUp as TrendingUpIcon,
  TableChart as TableChartIcon,
  CalendarMonth as CalendarIcon,
  Refresh as RefreshIcon
} from "@mui/icons-material";

export default function AdminDashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rangeParam = searchParams.get("range") || "7days";
  const [range, setRange] = useState(rangeParam);
  const [loading, setLoading] = useState(true);
  const [adminProfile, setAdminProfile] = useState({ name: "User" });

  const { hasPermission, role } = useAdminPermissions();

  // Dashboard Aggregated States
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    pendingRegistrations: 0,
    completedRegistrations: 0,
    avgTAT: "0.0",
  });
  const [departmentData, setDepartmentData] = useState([]);
  const [referralData, setReferralData] = useState([]);
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
  const [isMonthlyView, setIsMonthlyView] = useState(false);

  // Sync range state if url search params change
  useEffect(() => {
    if (rangeParam && rangeParam !== range) {
      setRange(rangeParam);
    }
  }, [rangeParam]);

  const handleRangeChange = (e) => {
    const val = e.target.value;
    setRange(val);
    router.push(`/dashboard?range=${val}`);
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
      year: "numeric",
    });
  };

  // Compute all dashboard metrics directly from IndexedDB (0ms latency, 100% offline & online)
  const computeDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Fetch admin profile from IndexedDB session or table
      const [cachedAdmins, cachedSession, allRegs, allDocs, allTests, allDepts, allPayments] = await Promise.all([
        db.admins.toArray(),
        db.offlineSession.get(1),
        db.registrations.filter((r) => !r.isDeleted).toArray(),
        db.doctors.filter((d) => !d.isDeleted).toArray(),
        db.tests.filter((t) => !t.isDeleted).toArray(),
        db.testDepartments.toArray(),
        db.registrationPayments.toArray(),
      ]);

      const currentAdmin = cachedAdmins?.[0] || cachedSession?.admin;
      if (currentAdmin) {
        setAdminProfile(currentAdmin);
      }

      // If IndexedDB is empty and we are online and not initial synced, trigger bootstrap in background
      if (allRegs.length === 0 && typeof navigator !== "undefined" && navigator.onLine && localStorage.getItem("isInitialSynced") !== "1") {
        syncManager.bootstrapInitialData().catch((err) => console.warn("[Dashboard] Bootstrap error:", err));
      }

      const { startDate, endDate } = calculateDateFilter(range);
      const isMonthly = ["3months", "6months", "year"].includes(range);
      setIsMonthlyView(isMonthly);
      setPeriodDateRangeStr(`${formatPeriodDate(startDate)} - ${formatPeriodDate(endDate)}`);

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

      // Stats counts
      const totalCount = periodRegs.length;
      let pendingCount = 0;
      let completedCount = 0;
      let totalTatMs = 0;
      let tatCount = 0;

      periodRegs.forEach((r) => {
        if (r.status === "Completed") {
          completedCount++;
          if (r.createdAt && r.updatedAt) {
            const diff = new Date(r.updatedAt).getTime() - new Date(r.createdAt).getTime();
            if (diff > 0) {
              totalTatMs += diff;
              tatCount++;
            }
          }
        } else {
          pendingCount++;
        }
      });

      const avgTatHours = tatCount > 0 ? (totalTatMs / tatCount / (1000 * 60 * 60)).toFixed(1) : "0.0";
      setStats({
        totalRegistrations: totalCount,
        pendingRegistrations: pendingCount,
        completedRegistrations: completedCount,
        avgTAT: avgTatHours,
      });

      // Department Distribution
      const deptCountMap = {};
      const testMap = new Map();
      allTests.forEach((t) => testMap.set(t.id, t));
      const deptMap = new Map();
      allDepts.forEach((d) => deptMap.set(d.id, d.name));

      periodRegs.forEach((r) => {
        const rTests = Array.isArray(r.tests) ? r.tests : [];
        rTests.forEach((rt) => {
          const tId = rt.testId || rt.id || rt.test?.id;
          const fullTest = tId ? testMap.get(tId) || rt.test : rt.test;
          const dName = fullTest?.department?.name || (fullTest?.departmentId ? deptMap.get(fullTest.departmentId) : null) || "General";
          deptCountMap[dName] = (deptCountMap[dName] || 0) + 1;
        });
      });

      const deptDataList = Object.entries(deptCountMap).map(([name, value]) => ({ name, value }));
      setDepartmentData(deptDataList);

      // Doctor Referral Split
      const docMap = new Map();
      allDocs.forEach((d) => docMap.set(d.id, d.name));
      const refCountMap = {};

      periodRegs.forEach((r) => {
        const dId = r.refById || r.refBy?.id;
        const dName = dId ? docMap.get(dId) || r.refBy?.name || "Self" : (r.refBy?.name || "Self");
        refCountMap[dName] = (refCountMap[dName] || 0) + 1;
      });

      const refDataList = Object.entries(refCountMap)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
      setReferralData(refDataList);

      // Generate date keys for charts & tables
      const aggregated = {};
      if (isMonthly) {
        const temp = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        const endLimit = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
        while (temp <= endLimit) {
          const year = temp.getFullYear();
          const month = String(temp.getMonth() + 1).padStart(2, "0");
          const key = `${year}-${month}`;
          aggregated[key] = { registered: 0, completed: 0, revenue: 0, received: 0 };
          temp.setMonth(temp.getMonth() + 1);
        }
      } else {
        const temp = new Date(startDate);
        while (temp <= endDate) {
          const year = temp.getFullYear();
          const month = String(temp.getMonth() + 1).padStart(2, "0");
          const day = String(temp.getDate()).padStart(2, "0");
          const key = `${year}-${month}-${day}`;
          aggregated[key] = { registered: 0, completed: 0, revenue: 0, received: 0 };
          temp.setDate(temp.getDate() + 1);
        }
      }

      // Populate registrations into keys
      periodRegs.forEach((r) => {
        const rDate = new Date(r.date);
        let key;
        if (isMonthly) {
          key = `${rDate.getFullYear()}-${String(rDate.getMonth() + 1).padStart(2, "0")}`;
        } else {
          key = `${rDate.getFullYear()}-${String(rDate.getMonth() + 1).padStart(2, "0")}-${String(rDate.getDate()).padStart(2, "0")}`;
        }

        if (!aggregated[key]) {
          aggregated[key] = { registered: 0, completed: 0, revenue: 0, received: 0 };
        }

        aggregated[key].registered += 1;
        if (r.status === "Completed") {
          aggregated[key].completed += 1;
        }

        const total = Number(r.totalAmount) || 0;
        const colCharge = Number(r.collectionCharge) || 0;
        const discount = Number(r.discountAmount) || 0;
        const netRev = total + colCharge - discount;
        aggregated[key].revenue += netRev;

        // Add received amount fallback if no payments array
        if ((!r.payments || r.payments.length === 0) && Number(r.receivedAmount || 0) > 0) {
          aggregated[key].received += Number(r.receivedAmount || 0);
        }
      });

      // Populate separate payments into keys
      periodPayments.forEach((p) => {
        const pDate = new Date(p.createdAt || p.updatedAt);
        let key;
        if (isMonthly) {
          key = `${pDate.getFullYear()}-${String(pDate.getMonth() + 1).padStart(2, "0")}`;
        } else {
          key = `${pDate.getFullYear()}-${String(pDate.getMonth() + 1).padStart(2, "0")}-${String(pDate.getDate()).padStart(2, "0")}`;
        }

        if (!aggregated[key]) {
          aggregated[key] = { registered: 0, completed: 0, revenue: 0, received: 0 };
        }
        aggregated[key].received += Number(p.amount || 0);
      });

      // Format Chart Data
      const cData = Object.entries(aggregated).map(([key, val]) => {
        let label = "";
        if (isMonthly) {
          const [year, month] = key.split("-");
          const dateObj = new Date(Number(year), Number(month) - 1, 1);
          label = dateObj.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
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
      setChartData(cData);

      // Format Summary Table Rows (newest first)
      const tableRows = Object.entries(aggregated)
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
              year: "numeric",
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

      // Calculate totals
      const totalBilling = tableRows.reduce((sum, r) => sum + r.revenue, 0);
      const totalCollected = tableRows.reduce((sum, r) => sum + r.received, 0);
      const totalTableRegistered = tableRows.reduce((sum, r) => sum + r.registered, 0);
      const totalTableCompleted = tableRows.reduce((sum, r) => sum + r.completed, 0);

      setFinancials({
        totalBilling,
        totalCollected,
        dueBalance: totalBilling - totalCollected,
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

  const statCards = [
    {
      title: "Registrations",
      value: stats.totalRegistrations,
      icon: <RegisterIcon sx={{ fontSize: 32, color: "#0f766e" }} />,
      bgColor: "#ccfbf1",
    },
    {
      title: "Pending Reports",
      value: stats.pendingRegistrations,
      icon: <PendingIcon sx={{ fontSize: 32, color: "#d97706" }} />,
      bgColor: "#fef3c7",
    },
    {
      title: "Completed Tests",
      value: stats.completedRegistrations,
      icon: <CheckedIcon sx={{ fontSize: 32, color: "#16a34a" }} />,
      bgColor: "#dcfce7",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden", pt: 2, pb: 4 }}>
      {/* Header Overview */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2, mb: 4 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main" }}>
            Welcome back{adminProfile.name ? `, ${adminProfile.name}` : ""}!
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Here is the current real-time overview of your laboratory operations, patient registrations, and accounts.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "flex-start", sm: "flex-end" }, gap: 0.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FormControl size="small" sx={{ minWidth: 160, mt: 1 }}>
              <InputLabel id="range-select-label">Date Period</InputLabel>
              <Select
                labelId="range-select-label"
                value={range}
                label="Date Period"
                onChange={handleRangeChange}
                sx={{ bgcolor: "background.paper" }}
              >
                <MenuItem value="7days">Last 7 Days</MenuItem>
                <MenuItem value="30days">Last 30 Days</MenuItem>
                <MenuItem value="thismonth">This Month</MenuItem>
                <MenuItem value="prevmonth">Previous Month</MenuItem>
                <MenuItem value="3months">Last 3 Months</MenuItem>
                <MenuItem value="6months">Last 6 Months</MenuItem>
                <MenuItem value="year">Last Year</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              size="small"
              onClick={computeDashboardData}
              sx={{ minWidth: 40, height: 40, mt: 1, p: 0 }}
              title="Refresh local data"
            >
              <RefreshIcon fontSize="small" />
            </Button>
          </Box>
          <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, mt: 0.5 }}>
            Period: {periodDateRangeStr}
          </Typography>
        </Box>
      </Box>

      {/* Loading indicator */}
      {loading && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <CircularProgress size={20} color="primary" />
          <Typography variant="caption" color="text.secondary">
            Reading latest analytics from local database...
          </Typography>
        </Box>
      )}

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statCards.map((stat, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card variant="outlined" sx={{ borderRadius: 2 }}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: stat.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
                    {stat.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dynamic Trends Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Patient Registrations Trend
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {isMonthlyView ? "Monthly count of patient registrations in this period" : "Daily count of patient registrations in this period"}
              </Typography>
              <RegistrationChart data={chartData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Revenue Collection Trend
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {isMonthlyView ? "Monthly invoiced billing amount (₹) in this period" : "Daily invoiced billing amount (₹) in this period"}
              </Typography>
              <RevenueChart data={chartData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Daily / Monthly Operational & Financial Breakdown Table */}
      <Card variant="outlined" sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1.5, mb: 2 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, display: "flex", alignItems: "center", gap: 1, color: "text.primary" }}>
                <TableChartIcon sx={{ color: "primary.main", fontSize: 22 }} />
                {isMonthlyView ? "Monthly Operational & Revenue Summary" : "Daily Operational & Revenue Summary"}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {isMonthlyView
                  ? "Month-wise breakdown of registrations, completed tests, billed revenue, and cash collections"
                  : "Date-wise breakdown of registrations, completed tests, billed revenue, and cash collections"}
              </Typography>
            </Box>
            <Chip
              icon={<CalendarIcon sx={{ fontSize: "16px !important" }} />}
              label={isMonthlyView ? "Month-wise View" : "Date-wise View"}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 700, borderRadius: 1.5 }}
            />
          </Box>

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              maxHeight: 440,
              overflow: "auto",
            }}
          >
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: "background.paper", width: { xs: "30%", sm: "28%" }, py: 1.5 }}>
                    {isMonthlyView ? "Month" : "Date"}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, bgcolor: "background.paper", width: "18%", py: 1.5 }}>
                    Registered
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, bgcolor: "background.paper", width: "18%", py: 1.5 }}>
                    Completed
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, bgcolor: "background.paper", width: "18%", py: 1.5 }}>
                    Revenue (₹)
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, bgcolor: "background.paper", width: "18%", py: 1.5 }}>
                    Received (₹)
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {summaryTableRows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} align="center" sx={{ py: 4, color: "text.secondary" }}>
                      <Typography variant="body2">No registration or revenue activity found for this period.</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  summaryTableRows.map((row) => (
                    <TableRow
                      key={row.key}
                      hover
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        transition: "background-color 0.15s ease",
                      }}
                    >
                      <TableCell sx={{ fontWeight: 600, color: "text.primary", py: 1.2 }}>
                        {row.dateLabel}
                      </TableCell>
                      <TableCell align="center" sx={{ py: 1.2 }}>
                        <Chip
                          size="small"
                          label={row.registered}
                          sx={{
                            fontWeight: 700,
                            minWidth: 38,
                            bgcolor: row.registered > 0 ? "rgba(15, 118, 110, 0.1)" : "action.hover",
                            color: row.registered > 0 ? "#0f766e" : "text.secondary",
                            borderRadius: 1.5,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center" sx={{ py: 1.2 }}>
                        <Chip
                          size="small"
                          label={row.completed}
                          sx={{
                            fontWeight: 700,
                            minWidth: 38,
                            bgcolor: row.completed > 0 ? "#dcfce7" : "action.hover",
                            color: row.completed > 0 ? "#15803d" : "text.secondary",
                            borderRadius: 1.5,
                          }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700, color: row.revenue > 0 ? "text.primary" : "text.secondary", py: 1.2 }}>
                        ₹{row.revenue.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700, color: row.received > 0 ? "success.main" : "text.secondary", py: 1.2 }}>
                        ₹{row.received.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>

              <TableFooter>
                <TableRow sx={{ bgcolor: "action.hover" }}>
                  <TableCell sx={{ fontWeight: 800, color: "text.primary", py: 1.5 }}>
                    Total ({summaryTableRows.length} {isMonthlyView ? "Months" : "Days"})
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 800, color: "primary.main", py: 1.5 }}>
                    {financials.totalTableRegistered}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 800, color: "#15803d", py: 1.5 }}>
                    {financials.totalTableCompleted}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 800, color: "text.primary", py: 1.5 }}>
                    ₹{financials.totalBilling.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 800, color: "success.main", py: 1.5 }}>
                    ₹{financials.totalCollected.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Financials & Analytical Charts */}
      <Grid container spacing={4}>
        {/* Financials summary */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                <TrendingUpIcon color="primary" /> Financial Overview
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                <Typography variant="body2" color="text.secondary">Total Invoiced Billing:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  ₹{financials.totalBilling.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                <Typography variant="body2" color="text.secondary">Total Cash Collected:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: "success.main" }}>
                  ₹{financials.totalCollected.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">Due Balance:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: financials.dueBalance > 0 ? "error.main" : "text.primary" }}>
                  ₹{financials.dueBalance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Analytical Charts */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Card variant="outlined" sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Test Department Split
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Distribution of ordered tests by laboratory section
                  </Typography>
                  <DepartmentDistributionChart data={departmentData} />
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Card variant="outlined" sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Top Referrals
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Top 5 referring doctors / clinical partners
                  </Typography>
                  <ReferralChart data={referralData} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
