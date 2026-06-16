import type { HubSpotLeadInput, HubSpotSyncResult } from "@/lib/hubspot/types"

const PREFIX = "[hubspot:debug]"

/** Enable verbose HubSpot lead + API logging in the dev server terminal. */
export function isHubSpotDebugEnabled(): boolean {
  const value = process.env.HUBSPOT_DEBUG?.trim().toLowerCase()
  return value === "1" || value === "true" || value === "yes"
}

/**
 * When true, logs the full lead payload but skips HubSpot API calls.
 * Pair with HUBSPOT_DEBUG=true to inspect mappings without writing to CRM.
 */
export function isHubSpotDryRunEnabled(): boolean {
  const value = process.env.HUBSPOT_DRY_RUN?.trim().toLowerCase()
  return value === "1" || value === "true" || value === "yes"
}

function log(event: string, detail?: Record<string, unknown>): void {
  if (!isHubSpotDebugEnabled()) return
  if (detail) {
    console.log(PREFIX, event, detail)
  } else {
    console.log(PREFIX, event)
  }
}

export function hubSpotDebugLeadReceived(input: HubSpotLeadInput): void {
  log("lead.received", {
    source: input.source,
    email: input.payload.email,
    formEndpoint: input.context.formEndpoint,
    clientPageUrl: input.context.clientPageUrl,
    clientDocumentReferrer: input.context.clientDocumentReferrer,
    serverReferer: input.context.serverReferer,
    country: input.context.country,
    region: input.context.region,
    city: input.context.city,
    leadEmailDomain: input.context.leadEmailDomain,
    payload: input.payload,
  })
}

export function hubSpotDebugMappedProperties(
  source: HubSpotLeadInput["source"],
  properties: Record<string, string>,
  notePreview: string
): void {
  log("lead.mapped", {
    source,
    contactProperties: properties,
    notePreview: notePreview.slice(0, 500) + (notePreview.length > 500 ? "…" : ""),
  })
}

export function hubSpotDebugDryRun(source: HubSpotLeadInput["source"], email: string): HubSpotSyncResult {
  log("lead.dry_run", {
    source,
    email,
    message: "Skipped HubSpot API — set HUBSPOT_DRY_RUN=false to sync for real",
  })
  return { ok: true, contactId: "dry-run" }
}

export function hubSpotDebugSkipped(reason: string, source?: HubSpotLeadInput["source"]): void {
  log("lead.skipped", { source, reason })
}

export function hubSpotDebugApiRequest(method: string, path: string, body?: unknown): void {
  log("api.request", { method, path, body })
}

export function hubSpotDebugApiResponse(method: string, path: string, status: number, body?: unknown): void {
  log("api.response", { method, path, status, body })
}

export function hubSpotDebugResult(source: HubSpotLeadInput["source"], result: HubSpotSyncResult): void {
  if (result.ok) {
    log("lead.success", { source, contactId: result.contactId })
    return
  }

  if (result.skipped) {
    hubSpotDebugSkipped(result.reason, source)
    return
  }

  log("lead.error", { source, error: result.error })
}

if (isHubSpotDebugEnabled()) {
  console.log(PREFIX, "enabled — all form submissions will log HubSpot sync details", {
    dryRun: isHubSpotDryRunEnabled(),
  })
}
