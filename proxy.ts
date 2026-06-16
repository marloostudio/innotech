import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import {
  HOME_SOLUTIONS_EXPERIMENT,
  isHomeSolutionsVariant,
  pickHomeSolutionsVariant,
} from "@/lib/ab-testing/home-solutions-experiment"
import {
  PREVIEW_COOKIE_NAME,
  PREVIEW_HMAC_MESSAGE,
  PREVIEW_SESSION_SECRET,
  isAlwaysPublicPath,
  isLikelyCrawler,
  isNoCrawlHumanPublicPath,
  isPasswordGatedHubPath,
  isPublicCrawlablePath,
} from "@/lib/site-access"

const AB_COOKIE_MAX_AGE = 60 * 60 * 24 * 30

function applyHomeSolutionsAbCookie(request: NextRequest, response: NextResponse): NextResponse {
  if (request.nextUrl.pathname !== "/") return response

  const { cookieName, paramName } = HOME_SOLUTIONS_EXPERIMENT
  const forced = request.nextUrl.searchParams.get(paramName)

  if (isHomeSolutionsVariant(forced)) {
    response.cookies.set(cookieName, forced, {
      maxAge: AB_COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    })
    return response
  }

  if (!request.cookies.get(cookieName)) {
    response.cookies.set(cookieName, pickHomeSolutionsVariant(), {
      maxAge: AB_COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    })
  }

  return response
}

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

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const ua = request.headers.get("user-agent")

  if (isAlwaysPublicPath(pathname)) {
    if (isLikelyCrawler(ua) && isNoCrawlHumanPublicPath(pathname)) {
      return new NextResponse("Forbidden", { status: 403 })
    }
    return applyHomeSolutionsAbCookie(request, NextResponse.next())
  }
  if (
    isLikelyCrawler(ua) &&
    (isPasswordGatedHubPath(pathname) || !isPublicCrawlablePath(pathname))
  ) {
    return new NextResponse("Forbidden", { status: 403 })
  }

  const cookie = request.cookies.get(PREVIEW_COOKIE_NAME)?.value
  if (await verifyPreviewCookieEdge(cookie)) {
    return applyHomeSolutionsAbCookie(request, NextResponse.next())
  }

  const url = request.nextUrl.clone()
  url.pathname = "/site-gate"
  const returnPath = pathname + request.nextUrl.search
  url.searchParams.set("return", returnPath || "/")
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|site\\.webmanifest|favicon-16x16\\.png|favicon-32x32\\.png|favicon-48x48\\.png|icon-192\\.png|icon-512\\.png|icon\\.svg|icon-light-32x32\\.png|icon-dark-32x32\\.png|apple-icon\\.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest|woff2)$).*)",
  ],
}
