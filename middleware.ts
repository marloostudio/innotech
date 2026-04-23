import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import {
  PREVIEW_COOKIE_NAME,
  PREVIEW_HMAC_MESSAGE,
  PREVIEW_SESSION_SECRET,
  isAlwaysPublicPath,
  isPasswordGatedHubPath,
  isLikelyCrawler,
  isPublicCrawlablePath,
} from "@/lib/site-access"

async function verifyPreviewCookieEdge(cookieVal: string | undefined): Promise<boolean> {
  if (!cookieVal) return false
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(PREVIEW_SESSION_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(PREVIEW_HMAC_MESSAGE))
  const hex = Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("")
  return hex === cookieVal
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (isAlwaysPublicPath(pathname)) {
    return NextResponse.next()
  }

  const ua = request.headers.get("user-agent")
  if (
    isLikelyCrawler(ua) &&
    (isPasswordGatedHubPath(pathname) || !isPublicCrawlablePath(pathname))
  ) {
    return new NextResponse("Forbidden", { status: 403 })
  }

  const cookie = request.cookies.get(PREVIEW_COOKIE_NAME)?.value
  if (await verifyPreviewCookieEdge(cookie)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = "/site-gate"
  const returnPath = pathname + request.nextUrl.search
  url.searchParams.set("return", returnPath || "/")
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon\\.svg|icon-light-32x32\\.png|icon-dark-32x32\\.png|apple-icon\\.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2)$).*)",
  ],
}
