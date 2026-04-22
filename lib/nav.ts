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
  {
    title: "Products",
    href: "/products",
    children: [
      { title: "SafeGuard", href: "/products/safeguard", description: "Software-defined safety for robots" },
      { title: "AutoDuck", href: "/products/autoduck", description: "Autonomous Charging & Fleet Orchestration" },
      { title: "RADARLink", href: "/products/radar-link", description: "V2X, Cm-level Localization and Drone Tracking" },
    ]
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      { title: "Logistics", href: "/industries/logistics" },
      { title: "Autonomous Fleets", href: "/industries/autonomous-fleets" },
      { title: "Port Operations", href: "/industries/port" },
      { title: "Mining", href: "/industries/mining" }
    ]
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog & Insights", href: "/resources/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Whitepapers", href: "/resources/whitepapers" },
      { title: "Playbooks", href: "/resources/playbooks" },
      { title: "Webinars & Videos", href: "/resources/videos" },
      { title: "FAQ", href: "/resources/faq" }
    ]
  },
  {
    title: "Company",
    href: "/company",
    children: [
      { title: "Our Story", href: "/company/our-story" },
      { title: "Our Team", href: "/company/team" },
    ]
  }
]

/** v1.5: footer link columns hidden — legal bar + brand row only (see `Footer`). */
export const footerNav: NavSection[] = []
