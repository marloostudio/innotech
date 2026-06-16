import { NextResponse } from "next/server"

import { HubSpotApiError, hubSpotRequest } from "@/lib/hubspot/client"
import { HUBSPOT_PORTAL_ID, getHubSpotCredentialSource, isHubSpotConfigured } from "@/lib/hubspot/config"

type HubSpotAccountInfo = {
  portalId?: number
  uiDomain?: string
  timeZone?: string
}

/**
 * GET /api/hubspot/health
 * Verifies the private app token can reach HubSpot CRM (server-only diagnostic).
 */
export async function GET() {
  if (!isHubSpotConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        portalId: HUBSPOT_PORTAL_ID,
        error: "HUBSPOT_SERVICE_KEY is not set",
      },
      { status: 503 }
    )
  }

  try {
    const account = await hubSpotRequest<HubSpotAccountInfo>("/account-info/v3/details")
    return NextResponse.json({
      ok: true,
      configured: true,
      credentialSource: getHubSpotCredentialSource(),
      portalId: HUBSPOT_PORTAL_ID,
      account,
    })
  } catch (error) {
    const message =
      error instanceof HubSpotApiError
        ? error.message
        : error instanceof Error
          ? error.message
          : "HubSpot health check failed"

    return NextResponse.json(
      {
        ok: false,
        configured: true,
        portalId: HUBSPOT_PORTAL_ID,
        error: message,
      },
      { status: error instanceof HubSpotApiError ? error.status : 502 }
    )
  }
}
