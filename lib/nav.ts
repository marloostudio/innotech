export interface NavItem {
  title: string
  href: string
  description?: string
  children?: NavItem[]
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const mainNav: NavItem[] = [
  { title: "SafeGuard", href: "/products/safeguard", description: "Software-defined safety for robots" },
  { title: "AutoDuck", href: "/products/autoduck", description: "Autonomous Charging & Fleet Orchestration" },
  { title: "RADARLink", href: "/products/radar-link", description: "V2X, Cm-level Localization and Drone Tracking" },
  { title: "Company", href: "/company", description: "Our story and team" },
]

/** v1.5: footer link columns hidden — legal bar + brand row only (see `Footer`). */
export const footerNav: NavSection[] = []
