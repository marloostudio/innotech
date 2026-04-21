/** Contact page form — options shared by UI, validation, and notification emails. */

export const contactIndustryOptions = [
  { value: "automotive", label: "Automotive" },
  { value: "aerospace", label: "Aerospace & Defense" },
  { value: "healthcare", label: "Healthcare" },
  { value: "energy", label: "Energy" },
  { value: "warehousing", label: "Warehousing & Logistics" },
  { value: "agriculture", label: "Agriculture" },
  { value: "manufacturing", label: "General Manufacturing" },
  { value: "other", label: "Other" },
] as const

export const contactInterestOptions = [
  { value: "amr", label: "Autonomous Mobile Robots" },
  { value: "manipulators", label: "Robotic Manipulators" },
  { value: "inspection", label: "Inspection Systems" },
  { value: "software", label: "Software Platforms" },
  { value: "consultation", label: "General Consultation" },
  { value: "support", label: "Technical Support" },
] as const

export function industryLabel(value: string) {
  if (!value) return "—"
  return contactIndustryOptions.find((o) => o.value === value)?.label ?? value
}

export function interestLabel(value: string) {
  if (!value) return "—"
  return contactInterestOptions.find((o) => o.value === value)?.label ?? value
}
