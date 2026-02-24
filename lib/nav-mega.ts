/**
 * Navigation mega menu and dropdown content for InnoTech navbar.
 * Used by components/site/navbar.tsx.
 */

export interface ProductMegaColumn {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  href: string
  ctaLabel: string
  accentColor: string // CSS variable, e.g. var(--it-safeguard)
}

export interface SolutionMegaCategory {
  id: string
  name: string
  solutions: { name: string; href: string; description: string }[]
  accentColor: string
}

export interface IndustryMegaItem {
  name: string
  href: string
  descriptor?: string
  isSubItem?: boolean // e.g. "Charge Depot" under Autonomous Fleets
  comingSoon?: boolean
}

export interface SimpleDropdownItem {
  title: string
  href: string
  external?: boolean
  dividerAbove?: boolean
  badge?: string
}

export const productsMegaColumns: ProductMegaColumn[] = [
  {
    id: "safeguard",
    name: "SafeGuard",
    tagline: "Safety & threat monitoring",
    description: "Intelligent safety monitoring for robotic environments",
    features: ["Threat Detection", "Compliance Monitoring", "Real-Time Alerting", "Predictive Maintenance"],
    href: "/products/safeguard",
    ctaLabel: "View SafeGuard",
    accentColor: "var(--it-safeguard)",
  },
  {
    id: "autolock",
    name: "AutoLock",
    tagline: "Autonomous charging & fleet control",
    description: "Autonomous charging and fleet orchestration",
    features: ["Autonomous Charging", "Fleet Orchestration", "Process Automation", "Access Control"],
    href: "/products/autolock",
    ctaLabel: "View AutoLock",
    accentColor: "var(--it-autolock)",
  },
  {
    id: "radar-link",
    name: "Radar Link",
    tagline: "V2X, localization & drone tracking",
    description: "V2X Communication, localization and drone tracking",
    features: ["V2X Communication", "Micro-Localization", "Drone Tracking & ID", "Real-Time Analytics"],
    href: "/products/radar-link",
    ctaLabel: "View Radar Link",
    accentColor: "var(--it-blue)",
  },
]

export const solutionsMegaCategories: SolutionMegaCategory[] = [
  {
    id: "charging",
    name: "Autonomous Charging",
    accentColor: "var(--it-solutions)",
    solutions: [
      { name: "For AV Fleets", href: "/solutions/charging-autonomous-vehicles", description: "Autonomous EV charging for self-driving fleets" },
      { name: "Heavy-Duty", href: "/solutions/charging-heavy-duty", description: "Robotic charging for commercial trucks and buses" },
      { name: "Mobile Robots (MAR)", href: "/solutions/charging-mar", description: "Autonomous charging for AMRs and inspection bots" },
    ],
  },
  {
    id: "safety",
    name: "Dynamic Safety",
    accentColor: "var(--it-solutions)",
    solutions: [
      { name: "Industrial Robots", href: "/solutions/safety-industrial-robots", description: "Safety monitoring for industrial automation" },
      { name: "Mobile Robots", href: "/solutions/safety-mar", description: "Safety for mobile autonomous robots" },
      { name: "Human–Robot Collaboration", href: "/solutions/safety-human-robot", description: "Safe human-robot collaboration zones" },
    ],
  },
  {
    id: "connectivity",
    name: "Connectivity & Localization",
    accentColor: "var(--it-solutions)",
    solutions: [
      { name: "V2V Communication", href: "/solutions/connectivity-v2v", description: "Vehicle-to-vehicle communication" },
      { name: "V2I Communication", href: "/solutions/connectivity-v2i", description: "Vehicle-to-infrastructure" },
      { name: "Micro-Localization", href: "/solutions/micro-localization", description: "Centimeter-level positioning" },
      { name: "Drone Tracking & ID", href: "/solutions/drone-tracking", description: "Autonomous drone tracking and identification" },
    ],
  },
]

export const industriesMegaItems: IndustryMegaItem[] = [
  { name: "Logistics", href: "/industries/logistics" },
  { name: "Autonomous Fleets", href: "/industries/autonomous-fleets" },
  { name: "Charge Depot", href: "/industries/autonomous-fleets#charging", isSubItem: true },
  { name: "Automated Depot", href: "/industries/automated-depot" },
  { name: "Port Operations", href: "/industries/port" },
  { name: "Airport & Shopping Mall", href: "/industries/airport-shopping-mall" },
  { name: "Mining", href: "/industries/mining" },
  { name: "Military", href: "#", comingSoon: true },
]

export const industriesMegaFeatured = {
  headline: "Operating in extreme environments?",
  description: "See how InnoTech is deployed in mining, ports, and defence.",
  ctaLabel: "Request a Site Assessment",
  ctaHref: "/contact",
  accentColor: "var(--it-industries)",
}

export const resourcesDropdownItems: SimpleDropdownItem[] = [
  { title: "Blog & Insights", href: "/resources/blog" },
  { title: "Whitepapers", href: "/resources/whitepapers" },
  { title: "Playbooks", href: "/resources/playbooks" },
  { title: "Webinars & Videos", href: "/resources/videos" },
  { title: "FAQ", href: "/resources/faq" },
  { title: "Product Docs", href: "/resources/docs", external: true, dividerAbove: true },
]

export const companyDropdownItems: SimpleDropdownItem[] = [
  { title: "Our Story", href: "/company/our-story" },
  { title: "Our Team", href: "/company/team" },
  { title: "Mission & Values", href: "/company" },
  { title: "Board & Advisors", href: "/company" },
  { title: "Investor Relations", href: "/company", dividerAbove: true },
  { title: "Careers", href: "/company/careers", badge: "We're hiring" },
  { title: "Partners", href: "/company" },
]

export type NavMegaKey = "products" | "solutions" | "industries" | "case-studies" | "resources" | "company" | null
