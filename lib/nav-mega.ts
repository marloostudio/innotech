/**
 * Navigation content for InnoTech navbar (products mega columns).
 * Used by components/site/navbar.tsx.
 */

export interface ProductMegaColumn {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  ctaLabel: string
  accentColor: string // CSS variable, e.g. var(--it-safeguard)
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
  },
  {
    id: "autolock",
    name: "AutoDuck",
    tagline: "Autonomous Charging & Fleet Mgmt",
    description: "Autonomous charging and fleet orchestration",
    href: "/products/autoduck",
    ctaLabel: "View AutoDuck",
    accentColor: "var(--it-autolock)",
  },
  {
    id: "radar-link",
    name: "RADARLink",
    tagline: "V2X, cm-level localization & drone tracking",
    description: "V2X Communication, Cm-level Localization and Drone Tracking",
    href: "/products/radar-link",
    ctaLabel: "View RADARLink",
    accentColor: "var(--it-blue)",
  },
]
