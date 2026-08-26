import React, { Suspense } from "react";
import AdminLayoutClient from "@/components/AdminLayoutClient";
import NextTopLoader from "nextjs-toploader";

export const dynamic = "force-dynamic";

export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <NextTopLoader color="#0f766e" showSpinner={false} height={3} />
      <Suspense fallback={null}>
        <AdminLayoutClient>
          {children}
        </AdminLayoutClient>
      </Suspense>
    </>
  );
}
