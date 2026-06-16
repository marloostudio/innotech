/** Split a display name into HubSpot firstname / lastname fields. */
export function splitFullName(fullName: string): { firstname: string; lastname: string } {
  const trimmed = fullName.trim()
  if (!trimmed) {
    return { firstname: "", lastname: "" }
  }

  const parts = trimmed.split(/\s+/)
  if (parts.length === 1) {
    return { firstname: parts[0]!, lastname: "" }
  }

  return {
    firstname: parts[0]!,
    lastname: parts.slice(1).join(" "),
  }
}
