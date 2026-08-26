import React from "react";
import AdminLayoutClient from "@/components/AdminLayoutClient";
import NextTopLoader from "nextjs-toploader";

export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <NextTopLoader color="#0f766e" showSpinner={false} height={3} />
      <AdminLayoutClient>
        {children}
      </AdminLayoutClient>
    </>
  );
}
