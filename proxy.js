import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

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

  // Prevent logged-in admins from being stuck on root / login page
  if ((pathname === "/" || pathname === "/auth/login") && adminToken) {
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
