"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Avatar,
  CircularProgress,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip
} from "@mui/material";
import { Add as AddIcon, People as PeopleIcon } from "@mui/icons-material";
import { toast } from "sonner";
import db from "@/lib/offline/db";
import { useAdminPermissions } from "@/lib/clientAuth";

export default function WorkspaceMembersPage() {
  const { hasPermission } = useAdminPermissions();
  const canWrite = hasPermission("MEMBER_WRITE");
  const [members, setMembers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleId: ""
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [cachedAdmins, cachedSession] = await Promise.all([
        db.admins.toArray(),
        db.offlineSession.get(1),
      ]);
      const adminData = cachedAdmins?.[0] || cachedSession?.admin;
      if (adminData) {
        setCurrentAdmin(adminData);
        if (cachedAdmins.length > 0) {
          setMembers(cachedAdmins);
        }
      }

      if (typeof navigator !== "undefined" && navigator.onLine) {
        const [mRes, rRes, pRes] = await Promise.all([
          fetch("/api/members").then((r) => r.json()).catch(() => ({})),
          fetch("/api/roles").then((r) => r.json()).catch(() => ({})),
          fetch("/api/profile").then((r) => r.json()).catch(() => ({})),
        ]);

        if (mRes.success) {
          setMembers(mRes.members);
        }
        if (rRes.success) {
          setRoles(rRes.roles);
        }
        if (pRes.success && pRes.admin) {
          setCurrentAdmin(pRes.admin);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = () => {
    setFormData({ name: "", email: "", password: "", roleId: "" });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.roleId) {
      toast.error("All fields are required.");
      return;
    }

    setSubmitting(true);
    try {
      const selectedRole = roles.find((r) => r.id === formData.roleId);
      const newMember = {
        name: formData.name,
        email: formData.email,
        roleId: formData.roleId,
        role: selectedRole || { name: "STAFF", permissions: [] },
        isActive: true,
      };

      // 1. Insert directly into local IndexedDB
      await db.insertOffline("admins", newMember);

      toast.success("Member added successfully.");
      handleClose();
      fetchData();

      // 2. Trigger background auto-sync if online
      if (typeof navigator !== "undefined" && navigator.onLine) {
        import("@/lib/offline/sync/syncManager").then(({ syncManager }) => syncManager.sync()).catch(() => {});
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add member.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleStatusChange = async (memberId, newStatus) => {
    if (!newStatus) {
      const confirmDeactivate = window.confirm("Are you sure you want to deactivate this member? They will be instantly logged out and lose access.");
      if (!confirmDeactivate) return;
    }

    try {
      // 1. Update directly in local IndexedDB
      await db.updateOffline("admins", memberId, { isActive: newStatus });

      toast.success("Member status updated successfully.");
      fetchData();

      // 2. Trigger background auto-sync if online
      if (typeof navigator !== "undefined" && navigator.onLine) {
        import("@/lib/offline/sync/syncManager").then(({ syncManager }) => syncManager.sync()).catch(() => {});
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status.");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header section */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, mb: 4, gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <PeopleIcon color="primary" sx={{ fontSize: 32 }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main" }}>
              Laboratory Workspace Members
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Add and manage administrators for this laboratory workspace.
            </Typography>
          </Box>
        </Box>
        <Tooltip title={!canWrite ? "You do not have permission to add members" : ""}>
          <span>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpen}
              disabled={!canWrite}
              sx={{ fontWeight: 600, py: 1, px: 2, width: { xs: "100%", sm: "auto" } }}
            >
              Add Workspace Member
            </Button>
          </span>
        </Tooltip>
      </Box>

      {/* Members table */}
      <Card variant="outlined">
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 8 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ bgcolor: "grey.50" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Email Address</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Role</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Joined Date</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Approval Status</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Active Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {members.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 6, color: "text.secondary" }}>
                        No members found in this laboratory workspace.
                      </TableCell>
                    </TableRow>
                  ) : (
                    members.map((member) => (
                      <TableRow key={member.id} hover>
                        <TableCell sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32, fontSize: "0.85rem" }}>
                            {member.name?.charAt(0).toUpperCase()}
                          </Avatar>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {member.name}
                          </Typography>
                        </TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>
                          <Chip
                            label={member.roleName}
                            size="small"
                            variant="outlined"
                            color="primary"
                            sx={{ fontWeight: 600, borderRadius: 1.5 }}
                          />
                        </TableCell>
                        <TableCell>{formatDate(member.createdAt)}</TableCell>
                        <TableCell>
                          <Chip
                            label={member.isApproved ? "Approved" : "Pending"}
                            color={member.isApproved ? "success" : "warning"}
                            size="small"
                            sx={{ fontWeight: 600, borderRadius: 1.5 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Tooltip title={currentAdmin && currentAdmin.id === member.id ? "You cannot activate/deactivate yourself" : ""}>
                            <span>
                              <Select
                                value={member.isActive ? "active" : "disabled"}
                                onChange={(e) => handleStatusChange(member.id, e.target.value === "active")}
                                size="small"
                                disabled={!canWrite || (currentAdmin && currentAdmin.id === member.id)}
                                sx={{
                                  fontSize: "0.75rem",
                                  fontWeight: 700,
                                  height: 24,
                                  borderRadius: 1.5,
                                  bgcolor: member.isActive ? "#dcfce7" : "#fee2e2",
                                  color: member.isActive ? "#166534" : "#991b1b",
                                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                  "& .MuiSelect-select": { py: "2px", pl: 1, pr: 3 }
                                }}
                              >
                                <MenuItem value="active" sx={{ fontSize: "0.8rem" }}>Active</MenuItem>
                                <MenuItem value="disabled" sx={{ fontSize: "0.8rem" }}>Disabled</MenuItem>
                              </Select>
                            </span>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>

      {/* Add Member Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Add New Workspace Member</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2.5, pt: 1 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Creating a member gives them administrator permissions for this lab workspace.
            </Typography>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              size="small"
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              size="small"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              size="small"
              helperText="Min. 8 characters"
              inputProps={{ minLength: 8 }}
            />
            <FormControl fullWidth size="small" required>
              <InputLabel id="role-select-label">Role Access Level</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                name="roleId"
                value={formData.roleId}
                label="Role Access Level"
                onChange={handleChange}
              >
                {roles.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleClose} variant="outlined" color="inherit" disabled={submitting}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={submitting}>
              {submitting ? "Adding..." : "Add Member"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
