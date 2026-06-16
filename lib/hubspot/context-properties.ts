import type { DemoLeadContext } from "@/lib/email/demo-lead-context"
import { HS_CONTACT, HS_OFFLINE_SOURCE } from "@/lib/hubspot/property-map"
import type { HubSpotContactProperties } from "@/lib/hubspot/types"

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "msn.com",
])

function isBusinessEmailDomain(domain: string | null): domain is string {
  if (!domain) return false
  return !FREE_EMAIL_DOMAINS.has(domain.toLowerCase())
}

/** Geo, website, and attribution fields from request/browser context. */
export function mapLeadContextToHubSpotProperties(context: DemoLeadContext): HubSpotContactProperties {
  const properties: HubSpotContactProperties = {
    [HS_CONTACT.analyticsSource]: HS_OFFLINE_SOURCE,
    [HS_CONTACT.latestSource]: HS_OFFLINE_SOURCE,
  }

  if (context.country?.trim()) {
    properties[HS_CONTACT.countryCode] = context.country.trim()
    properties[HS_CONTACT.country] = context.country.trim()
  }

  if (context.city?.trim()) {
    properties[HS_CONTACT.city] = context.city.trim()
  }

  if (context.region?.trim()) {
    properties[HS_CONTACT.state] = context.region.trim()
    properties[HS_CONTACT.stateCode] = context.region.trim()
  }

  if (isBusinessEmailDomain(context.leadEmailDomain)) {
    properties[HS_CONTACT.website] = `https://${context.leadEmailDomain}`
  }

  return properties
}
