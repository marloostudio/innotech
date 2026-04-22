/**
 * Navigation mega menu and dropdown content for InnoTech navbar.
 * Used by components/site/navbar.tsx.
 */

/** Use-case links shown under each product in the Products mega menu (former Solutions nav). */
export interface ProductSolutionLink {
  name: string
  href: string
  description: string
}

export interface ProductMegaColumn {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  ctaLabel: string
  accentColor: string // CSS variable, e.g. var(--it-safeguard)
  solutionLinks: ProductSolutionLink[]
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
    tagline: "Software-Defined Safety for Robots",
    description: "Intelligent safety monitoring for robotic environments",
    href: "/products/safeguard",
    ctaLabel: "View SafeGuard",
    accentColor: "var(--it-safeguard)",
    solutionLinks: [
      { name: "Industrial Robots", href: "/solutions/safety-industrial-robots", description: "Safety monitoring for industrial automation" },
      { name: "Mobile Robots", href: "/solutions/safety-mar", description: "Safety for mobile autonomous robots" },
      { name: "Human–Robot Collaboration", href: "/solutions/safety-human-robot", description: "Safe human-robot collaboration zones" },
    ],
  },
  {
    id: "autolock",
    name: "AutoDuck",
    tagline: "Autonomous Charging and Fleet Mgmt",
    description: "Autonomous charging and fleet orchestration",
    href: "/products/autoduck",
    ctaLabel: "View AutoDuck",
    accentColor: "var(--it-autolock)",
    solutionLinks: [
      { name: "For AV Fleets", href: "/solutions/charging-autonomous-vehicles", description: "Autonomous EV charging for self-driving fleets" },
      { name: "Heavy-Duty", href: "/solutions/charging-heavy-duty", description: "Robotic charging for commercial trucks and buses" },
      { name: "Mobile Robots (MAR)", href: "/solutions/charging-mar", description: "Autonomous charging for AMRs and inspection bots" },
    ],
  },
  {
    id: "radar-link",
    name: "RADARLink",
    tagline: "V2X, Cm-level Localization and Drone Tracking",
    description: "V2X Communication, Cm-level Localization and Drone Tracking",
    href: "/products/radar-link",
    ctaLabel: "View RADARLink",
    accentColor: "var(--it-blue)",
    solutionLinks: [
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
  { title: "Blog", href: "/resources/blog", descriptor: "Industry analysis and technical perspectives" },
  { title: "Whitepapers", href: "/resources/whitepapers", descriptor: "Technical deep-dives and frameworks" },
]

export const companyDropdownItems: SimpleDropdownItem[] = [
  { title: "Our Story", href: "/company/our-story", descriptor: "How InnoTech started and where we're going" },
  { title: "Our Team", href: "/company/team", descriptor: "Leadership and engineering team" },
]

export type NavMegaKey = "products" | "industries" | "resources" | "company" | null
