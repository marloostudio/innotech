/** HubSpot portal (account) ID — matches the tracking embed in `components/analytics/hubspot-tracking.tsx`. */
export const HUBSPOT_PORTAL_ID = "244835137" as const

const HUBSPOT_API_BASE = "https://api.hubapi.com" as const

/**
 * Preferred: `HUBSPOT_SERVICE_KEY` (Settings → Development → Keys → Service keys).
 * Legacy fallback: `HUBSPOT_PRIVATE_APP_ACCESS_TOKEN` (Development → Legacy apps).
 * Both are used as `Authorization: Bearer <token>` against the same CRM APIs.
 */
export function getHubSpotAccessToken(): string | null {
  const serviceKey = process.env.HUBSPOT_SERVICE_KEY?.trim()
  if (serviceKey) return serviceKey

  const legacyToken = process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN?.trim()
  return legacyToken || null
}

export function getHubSpotCredentialSource(): "service_key" | "legacy_private_app" | null {
  if (process.env.HUBSPOT_SERVICE_KEY?.trim()) return "service_key"
  if (process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN?.trim()) return "legacy_private_app"
  return null
}

export function isHubSpotConfigured(): boolean {
  return Boolean(getHubSpotAccessToken())
}

export function getHubSpotApiBaseUrl(): string {
  return HUBSPOT_API_BASE
}
