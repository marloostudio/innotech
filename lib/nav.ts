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
      { title: "AutoDuck", href: "/products/autolock", description: "Autonomous Charging & Fleet Orchestration" },
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
      { title: "Careers", href: "/company/careers" },
    ]
  }
]

export const footerNav: NavSection[] = [
  {
    title: "Products",
    items: [
      { title: "SafeGuard", href: "/products/safeguard" },
      { title: "AutoDuck", href: "/products/autolock" },
      { title: "RADARLink", href: "/products/radar-link" },
      { title: "Industrial Robots (safety)", href: "/solutions/safety-industrial-robots" },
      { title: "Mobile Robots (safety)", href: "/solutions/safety-mar" },
      { title: "Human–Robot Collaboration", href: "/solutions/safety-human-robot" },
      { title: "For AV Fleets", href: "/solutions/charging-autonomous-vehicles" },
      { title: "Heavy-Duty Charging", href: "/solutions/charging-heavy-duty" },
      { title: "Mobile Robots (MAR)", href: "/solutions/charging-mar" },
      { title: "V2V Communication", href: "/solutions/connectivity-v2v" },
      { title: "V2I Communication", href: "/solutions/connectivity-v2i" },
      { title: "Cm-level Localization and Tracking", href: "/solutions/micro-localization" },
      { title: "Drone Tracking", href: "/solutions/drone-tracking" },
    ]
  },
  {
    title: "Industries",
    items: [
      { title: "Logistics", href: "/industries/logistics" },
      { title: "Autonomous Fleets", href: "/industries/autonomous-fleets" },
      { title: "Port Operations", href: "/industries/port" },
      { title: "Mining", href: "/industries/mining" }
    ]
  },
  {
    title: "Company",
    items: [
      { title: "Our Story", href: "/company/our-story" },
      { title: "Our Team", href: "/company/team" },
      { title: "Careers", href: "/company/careers" },
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Whitepapers", href: "/resources/whitepapers" },
      { title: "FAQ", href: "/resources/faq" }
    ]
  }
]
