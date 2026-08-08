import { NextResponse } from "next/server";

export async function POST(request) {
  const { password } = await request.json().catch(() => ({}));
  const expected = process.env.ADMIN_TOKEN || process.env.ADMIN_KEY || "";

  if (!expected) {
    return NextResponse.json({ detail: "admin-not-configured" }, { status: 500 });
  }

  if (!password || password !== expected) {
    return NextResponse.json({ detail: "invalid-credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("a2z_admin", expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete("a2z_admin");
  return response;
}
