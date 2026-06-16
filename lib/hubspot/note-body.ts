import { industryLabel, interestLabel } from "@/lib/content/contact-form"
import { automateIntakeForm } from "@/lib/content/exhibition-automate"
import { buildLeadMarketingContextText } from "@/lib/email/lead-marketing-section"
import type { HubSpotLeadInput } from "@/lib/hubspot/types"

function labelFromOptions(
  options: readonly { value: string; label: string }[],
  value: string
): string {
  if (!value) return "—"
  return options.find((o) => o.value === value)?.label ?? value
}

function section(title: string, lines: string[]): string {
  return [`— ${title} —`, ...lines, ""].join("\n")
}

function line(label: string, value: string | null | undefined): string {
  const v = value?.trim()
  return `${label}: ${v || "—"}`
}

/** Plain-text note attached to the HubSpot contact with full submission details. */
export function buildHubSpotLeadNoteBody(input: HubSpotLeadInput): string {
  const { source, context } = input
  const blocks: string[] = [`InnoTech website lead — ${source}`, ""]

  if (source === "contact") {
    const { payload } = input
    blocks.push(
      section("Contact form", [
        line("Name", payload.fullName),
        line("Email", payload.email),
        line("Company", payload.company),
        line("Phone", payload.phone),
        line("Industry", industryLabel(payload.industry)),
        line("Area of interest", interestLabel(payload.interest)),
        line("Message", payload.message),
      ])
    )
  }

  if (source === "demo-request") {
    const { payload } = input
    blocks.push(
      section("Demo request", [
        line("Name", payload.fullName),
        line("Email", payload.email),
        line("Company", payload.company),
        line("Phone", payload.phone),
        line("Industry", industryLabel(payload.industry)),
        line("Area of interest", interestLabel(payload.interest)),
        line("Message", payload.message),
      ])
    )
  }

  if (source === "automate-intake") {
    const { payload } = input
    blocks.push(
      section("Automate 2026 intake", [
        line("Name", payload.name),
        line("Email", payload.email),
        line("Company", payload.company),
        line("Job title", payload.jobTitle),
        line(
          "Organization type",
          labelFromOptions(automateIntakeForm.fields.organization.options, payload.organization)
        ),
        line("Role", labelFromOptions(automateIntakeForm.fields.role.options, payload.role)),
        line("Interest / message", payload.interest || "—"),
      ])
    )
  }

  blocks.push(buildLeadMarketingContextText(context))
  return blocks.join("\n").trim()
}
