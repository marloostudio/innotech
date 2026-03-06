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
  descriptor?: string
  external?: boolean
  dividerAbove?: boolean
  badge?: string
}

export const productsMegaColumns: ProductMegaColumn[] = [
  {
    id: "safeguard",
    name: "SafeGuard",
    tagline: "Safety and Hazard Detection",
    description: "Intelligent safety monitoring for robotic environments",
    features: ["Hazard Detection", "Dynamic Zoning", "Asset & Human Monitoring", "Real-Time Alerting"],
    href: "/products/safeguard",
    ctaLabel: "View SafeGuard",
    accentColor: "var(--it-safeguard)",
  },
  {
    id: "autolock",
    name: "AutoDuck",
    tagline: "Autonomous Charging and Fleet Mgmt",
    description: "Autonomous charging and fleet orchestration",
    features: ["Robotic Charging", "Fleet Orchestrat.", "Process Automat.", "Access Control"],
    href: "/products/autolock",
    ctaLabel: "View AutoDuck",
    accentColor: "var(--it-autolock)",
  },
  {
    id: "radar-link",
    name: "RADARLink",
    tagline: "V2X, Cm-level Localization and Drone Tracking",
    description: "V2X Communication, Cm-level Localization and Drone Tracking",
    features: ["V2X Communic.", "Cm-level Loc. and Tracking", "Drone Tracking", "Real-Time Asset Tracking"],
    href: "/products/radar-link",
    ctaLabel: "View RADARLink",
    accentColor: "var(--it-blue)",
  },
]

export const solutionsMegaCategories: SolutionMegaCategory[] = [
  {
    id: "charging",
    name: "Autonomous Charging",
    accentColor: "var(--it-blue)",
    solutions: [
      { name: "For AV Fleets", href: "/solutions/charging-autonomous-vehicles", description: "Autonomous EV charging for self-driving fleets" },
      { name: "Heavy-Duty", href: "/solutions/charging-heavy-duty", description: "Robotic charging for commercial trucks and buses" },
      { name: "Mobile Robots (MAR)", href: "/solutions/charging-mar", description: "Autonomous charging for AMRs and inspection bots" },
    ],
  },
  {
    id: "safety",
    name: "Safety & Monitoring",
    accentColor: "var(--it-safeguard)",
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
      { name: "Cm-level Localization and Tracking", href: "/solutions/micro-localization", description: "Centimeter-level positioning" },
      { name: "Drone Tracking", href: "/solutions/drone-tracking", description: "Autonomous drone tracking and identification" },
    ],
  },
]

export const industriesMegaItems: IndustryMegaItem[] = [
  { name: "Logistics", href: "/industries/logistics", descriptor: "Fleet charging and monitoring for delivery operations" },
  { name: "Autonomous Fleets", href: "/industries/autonomous-fleets", descriptor: "Infrastructure for driverless vehicle operations" },
  { name: "Automated Depots", href: "/industries/automated-depot", descriptor: "Smart charging and vehicle management facilities" },
  { name: "Port Operations", href: "/industries/port", descriptor: "Terminal automation and container vehicle coordination" },
  { name: "Mining", href: "/industries/mining", descriptor: "Ruggedized systems for extreme conditions" },
  { name: "Airport & Shopping Mall", href: "/industries/airport-shopping-mall", descriptor: "Public hub charging and traffic management" },
  { name: "Military", href: "#", descriptor: "Defence applications", comingSoon: true },
]

export const resourcesDropdownItems: SimpleDropdownItem[] = [
  { title: "Blog & Insights", href: "/resources/blog", descriptor: "Industry analysis and technical perspectives" },
  { title: "Case Studies", href: "/case-studies", descriptor: "Real deployment results and outcomes" },
  { title: "Whitepapers", href: "/resources/whitepapers", descriptor: "Technical deep-dives and frameworks" },
  { title: "Playbooks", href: "/resources/playbooks", descriptor: "Step-by-step implementation guides" },
  { title: "Webinars & Videos", href: "/resources/videos", descriptor: "Product demos and expert discussions" },
  { title: "FAQ", href: "/resources/faq", descriptor: "Common questions answered" },
  { title: "Product Docs", href: "/resources/docs", descriptor: "Technical documentation", external: true, dividerAbove: true },
]

export const companyDropdownItems: SimpleDropdownItem[] = [
  { title: "Our Story", href: "/company/our-story", descriptor: "How InnoTech started and where we're going" },
  { title: "Our Team", href: "/company/team", descriptor: "Leadership and engineering team" },
  { title: "Mission & Values", href: "/company", descriptor: "What drives our work" },
  { title: "Board & Advisors", href: "/company/board-advisors", descriptor: "Strategic guidance and expertise" },
  { title: "Investor Relations", href: "/company/investors", descriptor: "Growth, funding, and market opportunity" },
  { title: "Careers", href: "/company/careers", descriptor: "Open positions and culture", badge: "We're hiring" },
  { title: "Partners", href: "/company/partners", descriptor: "Integration and channel partners", badge: "Coming soon" },
]

export type NavMegaKey = "products" | "solutions" | "industries" | "resources" | "company" | null
