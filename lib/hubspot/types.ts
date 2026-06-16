import type { DemoLeadContext } from "@/lib/email/demo-lead-context"
import type { AutomateIntakePayload } from "@/lib/validation/automate-intake"
import type { ContactPayload } from "@/lib/validation/contact"
import type { DemoRequestPayload } from "@/lib/validation/demo-request"

export type HubSpotLeadSource = "contact" | "demo-request" | "automate-intake"

export type HubSpotLeadInput =
  | { source: "contact"; payload: ContactPayload; context: DemoLeadContext }
  | { source: "demo-request"; payload: DemoRequestPayload; context: DemoLeadContext }
  | { source: "automate-intake"; payload: AutomateIntakePayload; context: DemoLeadContext }

export type HubSpotContactProperties = Record<string, string>

export type HubSpotUpsertContactResult = {
  id: string
  properties: HubSpotContactProperties
}

export type HubSpotSyncResult =
  | { ok: true; contactId: string }
  | { ok: false; skipped: true; reason: "not_configured" }
  | { ok: false; skipped: false; error: string }
