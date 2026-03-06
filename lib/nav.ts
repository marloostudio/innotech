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
      { title: "SafeGuard", href: "/products/safeguard", description: "Intelligent Safety Monitoring" },
      { title: "AutoDuck", href: "/products/autolock", description: "Autonomous Charging & Fleet Orchestration" },
      { title: "RADARLink", href: "/products/radar-link", description: "V2X, Cm-level Localization and Drone Tracking" }
    ]
  },
  {
    title: "Solutions",
    href: "/solutions",
    children: [
      { title: "Autonomous Charging", href: "/solutions#charging" },
      { title: "Dynamic Safety", href: "/solutions#safety" },
      { title: "Connectivity & Localization", href: "/solutions#connectivity" }
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
    title: "Case Studies",
    href: "/case-studies"
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Whitepapers", href: "/resources/whitepapers" },
      { title: "Playbooks", href: "/resources/playbooks" },
      { title: "Videos", href: "/resources/videos" }
    ]
  },
  {
    title: "Company",
    href: "/company",
    children: [
      { title: "Our Story", href: "/company/our-story" },
      { title: "Team", href: "/company/team" },
      { title: "Careers", href: "/company/careers" }
    ]
  }
]

export const footerNav: NavSection[] = [
  {
    title: "Products",
    items: [
      { title: "SafeGuard", href: "/products/safeguard" },
      { title: "AutoDuck", href: "/products/autolock" },
      { title: "RADARLink", href: "/products/radar-link" }
    ]
  },
  {
    title: "Solutions",
    items: [
      { title: "Autonomous Charging", href: "/solutions/charging-autonomous-vehicles" },
      { title: "Dynamic Safety", href: "/solutions/safety-industrial-robots" },
      { title: "V2X Communication", href: "/solutions/connectivity-v2v" },
      { title: "Cm-level Localization and Tracking", href: "/solutions/micro-localization" }
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
      { title: "About Us", href: "/company" },
      { title: "Our Story", href: "/company/our-story" },
      { title: "Careers", href: "/company/careers" },
      { title: "Contact", href: "/contact" }
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
