/** Map Automate intake role slugs to HubSpot `hs_seniority` enumeration values. */
const AUTOMATE_ROLE_TO_HS_SENIORITY: Record<string, string> = {
  "c-suite": "executive",
  vp: "vp",
  director: "director",
  manager: "manager",
  engineer: "employee",
  analyst: "employee",
  operations: "employee",
  it: "employee",
  procurement: "employee",
  "consultant-external": "employee",
  "other-role": "employee",
}

export function mapAutomateRoleToHubSpotSeniority(roleSlug: string): string | null {
  const slug = roleSlug.trim()
  if (!slug) return null
  return AUTOMATE_ROLE_TO_HS_SENIORITY[slug] ?? null
}
