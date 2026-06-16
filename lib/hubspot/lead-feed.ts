import { HubSpotApiError } from "@/lib/hubspot/client"
import { createContactNote, upsertContactByEmail } from "@/lib/hubspot/contacts"
import { isHubSpotConfigured } from "@/lib/hubspot/config"
import {
  hubSpotDebugDryRun,
  hubSpotDebugLeadReceived,
  hubSpotDebugMappedProperties,
  hubSpotDebugResult,
  hubSpotDebugSkipped,
  isHubSpotDryRunEnabled,
} from "@/lib/hubspot/debug"
import { mapLeadToHubSpotContactProperties } from "@/lib/hubspot/mappers"
import { buildHubSpotLeadNoteBody } from "@/lib/hubspot/note-body"
import type { HubSpotLeadInput, HubSpotSyncResult } from "@/lib/hubspot/types"

/**
 * Push a validated website lead into HubSpot Contacts CRM.
 * Upserts by email, then attaches a note with full form + marketing context.
 * Non-fatal when HubSpot is not configured — callers should not block form UX on failure.
 */
export async function pushLeadToHubSpot(input: HubSpotLeadInput): Promise<HubSpotSyncResult> {
  hubSpotDebugLeadReceived(input)

  if (!isHubSpotConfigured()) {
    hubSpotDebugSkipped("not_configured", input.source)
    return { ok: false, skipped: true, reason: "not_configured" }
  }

  const properties = mapLeadToHubSpotContactProperties(input)
  const email = properties.email
  if (!email) {
    const result: HubSpotSyncResult = {
      ok: false,
      skipped: false,
      error: "Lead email is required for HubSpot sync",
    }
    hubSpotDebugResult(input.source, result)
    return result
  }

  const noteBody = buildHubSpotLeadNoteBody(input)
  hubSpotDebugMappedProperties(input.source, properties, noteBody)

  if (isHubSpotDryRunEnabled()) {
    const result = hubSpotDebugDryRun(input.source, email)
    hubSpotDebugResult(input.source, result)
    return result
  }

  try {
    const contact = await upsertContactByEmail(email, properties)
    await createContactNote(contact.id, noteBody)
    const result: HubSpotSyncResult = { ok: true, contactId: contact.id }
    hubSpotDebugResult(input.source, result)
    return result
  } catch (error) {
    const message =
      error instanceof HubSpotApiError
        ? error.message
        : error instanceof Error
          ? error.message
          : "Unknown HubSpot error"

    console.error(`[hubspot] ${input.source}:`, message, error instanceof HubSpotApiError ? error.body : "")
    const result: HubSpotSyncResult = { ok: false, skipped: false, error: message }
    hubSpotDebugResult(input.source, result)
    return result
  }
}
