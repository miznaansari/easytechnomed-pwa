import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { prisma } from "./lib/db.js";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "d60155b93198cdce275efee6b4a242c75a4dc372e9a2be74cfd34208a546ccf9"
);

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Allow all /api/n8n webhook endpoints without cookie/session checks
  if (pathname.startsWith("/api/n8n")) {
    return NextResponse.next();
  }

  const adminToken = request.cookies.get("admin_session_token")?.value;

  // 1. Workspace Dashboard Pages protection
  const isDashboardRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/registration") ||
    pathname.startsWith("/test-report") ||
    pathname.startsWith("/doctor-summary") ||
    pathname.startsWith("/members") ||
    pathname.startsWith("/settings");

  if (isDashboardRoute) {
    if (!adminToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    try {
      await jwtVerify(adminToken, JWT_SECRET);

      // Stateful verification against the database
      const session = await prisma.adminSession.findUnique({
        where: { token: adminToken },
        include: {
          admin: {
            include: {
              workspace: true,
            },
          },
        },
      });

      if (!session || session.expiresAt < new Date()) {
        if (session) {
          await prisma.adminSession.delete({ where: { id: session.id } }).catch(() => {});
        }
        const res = NextResponse.redirect(new URL("/", request.url));
        res.cookies.delete("admin_session_token");
        return res;
      }

      const admin = session.admin;
      if (!admin.isActive || (admin.workspace && !admin.workspace.isActive)) {
        if (session) {
          await prisma.adminSession.delete({ where: { id: session.id } }).catch(() => {});
        }
        const res = NextResponse.redirect(new URL("/?error=deactivated", request.url));
        res.cookies.delete("admin_session_token");
        return res;
      }
    } catch (e) {
      const res = NextResponse.redirect(new URL("/", request.url));
      res.cookies.delete("admin_session_token");
      return res;
    }
  }

  // 2. Prevent logged-in admins from visiting root login page
  if ((pathname === "/" || pathname === "/auth/login" || pathname === "/auth/register") && adminToken) {
    const errorParam = request.nextUrl.searchParams.get("error");
    if (errorParam) {
      return NextResponse.next();
    }
    try {
      await jwtVerify(adminToken, JWT_SECRET);
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } catch (e) {
      const res = NextResponse.next();
      res.cookies.delete("admin_session_token");
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/dashboard/:path*",
    "/registration",
    "/registration/:path*",
    "/test-report",
    "/test-report/:path*",
    "/doctor-summary",
    "/doctor-summary/:path*",
    "/members",
    "/members/:path*",
    "/settings",
    "/settings/:path*",
    "/auth/:path*",
  ],
};
