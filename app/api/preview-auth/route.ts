import { NextResponse } from "next/server"

import { createPreviewCookieValue, PREVIEW_COOKIE_NAME } from "@/lib/preview-cookie-node"
import { SITE_PREVIEW_PASSWORD } from "@/lib/site-access"

export async function POST(request: Request) {
  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  if (body.password !== SITE_PREVIEW_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const token = createPreviewCookieValue()
  const maxAge = 60 * 60 * 24 * 30
  const secure = process.env.NODE_ENV === "production"

  const res = NextResponse.json({ ok: true })
  res.cookies.set({
    name: PREVIEW_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge,
    secure,
  })
  return res
}
