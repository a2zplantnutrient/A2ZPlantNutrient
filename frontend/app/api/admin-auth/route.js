import { NextResponse } from "next/server";

// Verify admin password against ADMIN_TOKEN (server-side only, never leaked to browser)
// and set an HttpOnly cookie the middleware can read.
export async function POST(request) {
  try {
    const { password } = await request.json();
    const expected = process.env.ADMIN_TOKEN || "";

    if (!expected) {
      return NextResponse.json({ ok: false, error: "not-configured" }, { status: 500 });
    }
    if (!password || password !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("a2z_admin", expected, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("a2z_admin", "", { path: "/", maxAge: 0 });
  return res;
}
