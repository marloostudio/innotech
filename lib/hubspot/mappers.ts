import { industryLabel, interestLabel } from "@/lib/content/contact-form"
import { automateIntakeForm } from "@/lib/content/exhibition-automate"
import { mapLeadContextToHubSpotProperties } from "@/lib/hubspot/context-properties"
import { splitFullName } from "@/lib/hubspot/name"
import { HS_CONTACT } from "@/lib/hubspot/property-map"
import { mapAutomateRoleToHubSpotSeniority } from "@/lib/hubspot/seniority-map"
import type { HubSpotContactProperties, HubSpotLeadInput } from "@/lib/hubspot/types"

function labelFromOptions(
  options: readonly { value: string; label: string }[],
  value: string
): string {
  if (!value) return ""
  return options.find((o) => o.value === value)?.label ?? value
}

function compactProperties(properties: HubSpotContactProperties): HubSpotContactProperties {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value.trim() !== "")
  ) as HubSpotContactProperties
}

function baseProperties(
  email: string,
  fullName: string,
  company: string,
  input: HubSpotLeadInput,
  extras: HubSpotContactProperties = {}
): HubSpotContactProperties {
  const { firstname, lastname } = splitFullName(fullName)
  const contextProps = mapLeadContextToHubSpotProperties(input.context)

  return compactProperties({
    [HS_CONTACT.email]: email.trim().toLowerCase(),
    [HS_CONTACT.firstname]: firstname,
    [HS_CONTACT.lastname]: lastname,
    [HS_CONTACT.company]: company.trim(),
    [HS_CONTACT.lifecycleStage]: "lead",
    [HS_CONTACT.leadStatus]: "NEW",
    ...contextProps,
    ...extras,
  })
}

/** Map a validated form submission to HubSpot CRM contact properties. */
export function mapLeadToHubSpotContactProperties(input: HubSpotLeadInput): HubSpotContactProperties {
  if (input.source === "contact") {
    const { payload } = input
    return baseProperties(payload.email, payload.fullName, payload.company, input, {
      [HS_CONTACT.phone]: payload.phone.trim(),
      [HS_CONTACT.industry]: industryLabel(payload.industry),
      [HS_CONTACT.jobFunction]: interestLabel(payload.interest),
      [HS_CONTACT.message]: payload.message.trim(),
    })
  }

  if (input.source === "demo-request") {
    const { payload } = input
    return baseProperties(payload.email, payload.fullName, payload.company, input, {
      [HS_CONTACT.phone]: payload.phone.trim(),
      [HS_CONTACT.industry]: industryLabel(payload.industry),
      [HS_CONTACT.jobFunction]: interestLabel(payload.interest),
      [HS_CONTACT.message]: payload.message.trim(),
    })
  }

  const { payload } = input
  const organizationLabel = labelFromOptions(
    automateIntakeForm.fields.organization.options,
    payload.organization
  )
  const roleLabel = labelFromOptions(automateIntakeForm.fields.role.options, payload.role)
  const hsSeniority = mapAutomateRoleToHubSpotSeniority(payload.role)

  return baseProperties(payload.email, payload.name, payload.company, input, {
    [HS_CONTACT.jobtitle]: payload.jobTitle.trim(),
    [HS_CONTACT.industry]: organizationLabel,
    [HS_CONTACT.seniority]: roleLabel,
    ...(hsSeniority ? { [HS_CONTACT.employmentSeniority]: hsSeniority } : {}),
    [HS_CONTACT.message]: payload.interest.trim(),
  })
}
