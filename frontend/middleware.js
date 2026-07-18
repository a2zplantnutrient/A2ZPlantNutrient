import { NextResponse } from "next/server";

// Simple env-based admin gate for /admin, /add-blog, /add-media routes.
// Clients set an `a2z_admin` cookie (from /admin-login page).
// Middleware verifies the cookie value matches ADMIN_TOKEN env var.
export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isAdminRoute =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/add-blog") ||
    pathname.startsWith("/add-media");

  if (!isAdminRoute) return NextResponse.next();
  if (pathname === "/admin-login") return NextResponse.next();

  const token = request.cookies.get("a2z_admin")?.value;
  const expected = process.env.ADMIN_TOKEN || "";

  if (!expected) {
    // Fail-closed if operator forgot to configure ADMIN_TOKEN
    const url = request.nextUrl.clone();
    url.pathname = "/admin-login";
    url.searchParams.set("error", "not-configured");
    return NextResponse.redirect(url);
  }

  if (token !== expected) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin-login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/add-blog/:path*", "/add-media/:path*"],
};
