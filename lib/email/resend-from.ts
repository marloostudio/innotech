import { siteConfig, siteUrl } from "@/lib/site"

const DEFAULT_LOCAL_PART = "noreply"

function parseMailDomainFromSiteUrl(): string | null {
  try {
    const host = new URL(siteUrl).hostname
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      /^192\.168\.\d+\.\d+$/.test(host)
    ) {
      return null
    }
    return host.replace(/^www\./i, "")
  } catch {
    return null
  }
}

/**
 * Resend `from` header.
 *
 * - If `RESEND_FROM` is set, it wins (full string, e.g. `Name <addr@domain.com>`).
 * - Else if `RESEND_FROM_DOMAIN` is set, uses `noreply@` that domain.
 * - Else uses the hostname from `NEXT_PUBLIC_SITE_URL` (strips `www.`).
 * - If the site URL is localhost (or similar), falls back to Resend’s onboarding sender
 *   until you set `RESEND_FROM` or `RESEND_FROM_DOMAIN`.
 *
 * The domain must be verified in Resend; see https://resend.com/docs/dashboard/domains/introduction
 */
export function getResendFrom(): string {
  const full = process.env.RESEND_FROM?.trim()
  if (full) return full

  const explicitDomain = process.env.RESEND_FROM_DOMAIN?.trim()
  const domain = explicitDomain || parseMailDomainFromSiteUrl()

  if (domain) {
    return `${siteConfig.name} <${DEFAULT_LOCAL_PART}@${domain}>`
  }

  return `${siteConfig.name} <onboarding@resend.dev>`
}
