import { headers } from "next/headers"
import dns from "node:dns/promises"
import { isIPv4 } from "node:net"

export type DemoLeadContext = {
  clientIp: string | null
  /** Full proxy chain, when available */
  ipForwardChain: string | null
  /** Best-effort reverse DNS for the client IP (Node); may be empty. */
  reverseDns: string | null
  userAgent: string | null
  host: string | null
  forwardedHost: string | null
  forwardedProto: string | null
  /** HTTP Referer on the submission request. */
  serverReferer: string | null
  origin: string | null
  acceptLanguage: string | null
  vercelId: string | null
  country: string | null
  region: string | null
  city: string | null
  /** Full URL the browser sent (includes UTM params) — set client-side. */
  clientPageUrl: string | null
  /** `document.referrer` before the user landed on the form (previous site/page). */
  clientDocumentReferrer: string | null
  /** Part of the lead’s email after @; useful for account/company signals. */
  leadEmailDomain: string | null
  /** Inferred public URL to the form for this submission. */
  formEndpoint: string | null
}

export type ServerDemoLeadContext = Omit<DemoLeadContext, "clientPageUrl" | "clientDocumentReferrer">

const RDNS_TIMEOUT_MS = 450

function getHeader(h: Awaited<ReturnType<typeof headers>>, name: string): string | null {
  const v = h.get(name)
  return v?.trim() ? v.trim() : null
}

function firstClientIp(xForwardedFor: string | null): string | null {
  if (!xForwardedFor) return null
  const part = xForwardedFor.split(",")[0]?.trim()
  return part || null
}

function isIpLookupCandidate(ip: string): boolean {
  return isIPv4(ip) && !isPrivateV4(ip)
}

function isPrivateV4(ip: string): boolean {
  const m = ip.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)
  if (!m) return true
  const a = +m[1]!
  const b = +m[2]!
  if (a === 10) return true
  if (a === 127) return true
  if (a === 0) return true
  if (a === 100 && b >= 64 && b <= 127) return true
  if (a === 172 && b >= 16 && b <= 31) return true
  if (a === 192 && b === 168) return true
  if (a === 169 && b === 254) return true
  return false
}

async function reverseLookupSafe(ip: string | null): Promise<string | null> {
  if (!ip || !isIpLookupCandidate(ip)) return null
  try {
    const timeout = new Promise<never>((_, rej) => setTimeout(() => rej(new Error("rdns timeout")), RDNS_TIMEOUT_MS))
    const names = await Promise.race([dns.reverse(ip), timeout])
    return names?.[0] ?? null
  } catch {
    return null
  }
}

function emailDomainFrom(email: string): string | null {
  const at = email.lastIndexOf("@")
  if (at < 0 || at === email.length - 1) return null
  return email.slice(at + 1).toLowerCase() || null
}

/**
 * Gathers request metadata for the internal (team) lead email — IP, host,
 * Vercel geo, referrers, etc. Complement with `mergeClientDemoLeadContext` for
 * browser-only fields.
 */
export async function getServerDemoLeadContext(
  leadEmail: string,
  options?: { formPath?: string }
): Promise<ServerDemoLeadContext> {
  const h = await headers()
  const xff = getHeader(h, "x-forwarded-for")
  const xReal = getHeader(h, "x-real-ip")
  const xVercel = getHeader(h, "x-vercel-forwarded-for")
  const cf = getHeader(h, "cf-connecting-ip")
  const clientIp =
    firstClientIp(xff) ?? (xVercel && xVercel.trim() ? xVercel.split(",")[0]!.trim() : null) ?? xReal ?? cf
  const forwardedHost = getHeader(h, "x-forwarded-host")
  const host = getHeader(h, "host")
  const forwardedProto = getHeader(h, "x-forwarded-proto")
  const hst = forwardedHost ?? host
  const proto = (forwardedProto || "https").toLowerCase()
  const rawPath = (options?.formPath ?? "/demo").trim() || "/demo"
  const formPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`
  const formEndpoint = hst ? `${proto}://${hst}${formPath}` : null

  const leadEmailDomain = emailDomainFrom(leadEmail)
  const reverseDns = await reverseLookupSafe(clientIp)

  return {
    clientIp,
    ipForwardChain: xff,
    reverseDns,
    userAgent: getHeader(h, "user-agent"),
    host,
    forwardedHost,
    forwardedProto,
    serverReferer: getHeader(h, "referer"),
    origin: getHeader(h, "origin"),
    acceptLanguage: getHeader(h, "accept-language"),
    vercelId: getHeader(h, "x-vercel-id"),
    country: getHeader(h, "x-vercel-ip-country"),
    region: getHeader(h, "x-vercel-ip-country-region"),
    city: getHeader(h, "x-vercel-ip-city"),
    leadEmailDomain,
    formEndpoint,
  }
}

export function mergeClientDemoLeadContext(
  server: ServerDemoLeadContext,
  client: { pageUrl: string | null; documentReferrer: string | null }
): DemoLeadContext {
  return {
    ...server,
    clientPageUrl: client.pageUrl,
    clientDocumentReferrer: client.documentReferrer,
  }
}
