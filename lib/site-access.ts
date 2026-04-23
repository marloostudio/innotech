/**
 * Crawler + anonymous access: only these areas are reachable without the preview password.
 * All other HTML routes require cookie from POST /api/preview-auth (password).
 */

export const SITE_PREVIEW_PASSWORD = process.env.SITE_PREVIEW_PASSWORD ?? "inno2020"

/** Used to sign the preview cookie (set PREVIEW_SESSION_SECRET in production). */
export const PREVIEW_SESSION_SECRET =
  process.env.PREVIEW_SESSION_SECRET ?? "development-preview-secret-change-me"

export const PREVIEW_HMAC_MESSAGE = "innotech-site-preview-v1"

export const PREVIEW_COOKIE_NAME = "innotech_site_preview"

function stripQuery(pathname: string): string {
  return pathname.split("?")[0] || "/"
}

/**
 * Hubs that are never crawler-public or anonymously accessible HTML (403 for bots; preview password for humans).
 * - `/resources/blog` — listing; posts are `#blog-post-*` anchors on the same URL until per-post routes exist.
 * - `/resources/case-studies` — resources case cards (`#case-study-*`).
 * - `/case-studies` — marketing hub (`#marketing-case-*`).
 * - `/company/values` — values page (internal review; not indexed).
 */
export const PASSWORD_GATED_HUB_PATH_PREFIXES = [
  "/resources/blog",
  "/resources/case-studies",
  "/case-studies",
  "/company/values",
] as const

export function isPasswordGatedHubPath(pathname: string): boolean {
  const p = stripQuery(pathname)
  return PASSWORD_GATED_HUB_PATH_PREFIXES.some(
    (prefix) => p === prefix || p.startsWith(`${prefix}/`),
  )
}

/** Paths bots may fetch (403 otherwise). Same as password-free anonymous browsing. */
export function isPublicCrawlablePath(pathname: string): boolean {
  const p = stripQuery(pathname)
  if (isPasswordGatedHubPath(p)) return false
  const core = p.replace(/\/$/, "") || "/"
  if (core === "/") return true
  if (core === "/products") return true
  if (core === "/demo" || core === "/contact") return true
  /** Form confirmation; noindex in page metadata — must not require preview password. */
  if (core === "/thank-you") return true
  if (core === "/company" || core.startsWith("/company/")) return true
  /** Product hubs only — subpages (e.g. `/products/autoduck/access-control`) are gated. */
  if (core === "/products/autoduck") return true
  if (core === "/products/radar-link") return true
  if (core === "/products/safeguard") return true
  return false
}

/** System paths that must bypass the gate (no password). */
export function isInfrastructurePublicPath(pathname: string): boolean {
  const p = stripQuery(pathname)
  if (p.startsWith("/api/")) return true
  if (p.startsWith("/site-gate")) return true
  if (p === "/robots.txt" || p === "/sitemap.xml") return true
  if (/\.(ico|png|jpg|jpeg|svg|gif|webp|txt|xml|json|webmanifest)$/i.test(p)) return true
  if (p.startsWith("/_next/")) return true
  if (p.startsWith("/images/")) return true
  return false
}

export function isAlwaysPublicPath(pathname: string): boolean {
  return isInfrastructurePublicPath(pathname) || isPublicCrawlablePath(pathname)
}

const CRAWLER_UA =
  /googlebot|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|pinterest|slackbot|gptbot|chatgpt-user|anthropic-ai|claude-web|bytespider|amazonbot/i

export function isLikelyCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false
  return CRAWLER_UA.test(userAgent)
}

export type RouteAccessKind = "marketing-public" | "system" | "password"

/** Classify a route path (e.g. "" or "/company") for /currentpages legend. */
export function getRouteAccessKind(path: string): RouteAccessKind {
  const p = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`
  if (isInfrastructurePublicPath(p)) return "system"
  if (isPublicCrawlablePath(p)) return "marketing-public"
  return "password"
}
