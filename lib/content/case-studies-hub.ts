export interface MarketingCaseStudyListing {
  id: number
  title: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  status: string
}

/** Teaser cards on `/case-studies` (top-level hub, distinct from `/resources/case-studies`). Hub is password-gated; crawlers get 403 — see `PASSWORD_GATED_HUB_PATH_PREFIXES` in `@/lib/site-access`. */
export const marketingCaseStudyListings: MarketingCaseStudyListing[] = [
  {
    id: 1,
    title: "Autonomous Logistics Fleet - 150 Vehicle Deployment",
    industry: "Logistics",
    challenge: "Major delivery company needed automated charging for growing autonomous delivery fleet",
    solution: "AutoDuck robotic charging with fleet orchestration",
    results: [
      "99.7% successful autonomous charging connections",
      "60% reduction in depot operational costs",
      "Zero charging-related downtime in 12 months",
    ],
    status: "Coming Soon",
  },
  {
    id: 2,
    title: "Port Terminal Automation - Container Operations",
    industry: "Port Operations",
    challenge: "Container terminal required V2X coordination for autonomous reach stackers and AGVs",
    solution: "RADARLink V2X communication with Cm-level Localization and Tracking",
    results: [
      "25% increase in container handling throughput",
      "Zero equipment collisions since deployment",
      "Sub-5cm positioning accuracy for container stacking",
    ],
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Mining Operation - Underground Haul Truck Fleet",
    industry: "Mining",
    challenge: "Underground mine needed GPS-denied localization and automated charging for autonomous haul trucks",
    solution: "RADARLink Cm-level Localization and Tracking + AutoDuck heavy-duty charging",
    results: [
      "30% increase in equipment utilization",
      "Continuous 24/7 autonomous operations",
      "Zero operator exposure to underground hazards",
    ],
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Manufacturing Safety - Human-Robot Collaboration",
    industry: "Manufacturing",
    challenge: "Automotive manufacturer needed dynamic safety monitoring for collaborative robot work cells",
    solution: "SafeGuard real-time threat detection and compliance monitoring",
    results: [
      "Zero safety incidents since deployment",
      "40% increase in work cell productivity",
      "Automated ISO 10218 compliance reporting",
    ],
    status: "Coming Soon",
  },
]
