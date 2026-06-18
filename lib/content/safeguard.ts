export interface ProductFeature {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  benefits: string[]
  keyFeatures: string[]
  icon: string
  useCases: string[]
}

/** Static image paths under `public/images/`. */
export const safeguardImages = {
  hardwareHero: "/images/products/safeguard/SafeGuard_Hero.png",
  featuresBackground: "/images/products/safeguard/SafeGuard_08.png",
  zoning: "/images/products/safeguard/zoning.png",
} as const

export const safeguardProduct = {
  name: "SafeGuard",
  tagline: "Software-Defined Safety for Robots",
  description: "SafeGuard provides real-time monitoring and predictive safety solutions for industrial and autonomous robotic operations. Our AI-powered platform ensures compliance, prevents incidents, and enables safe human-robot collaboration.",
  hero: {
    title: "SafeGuard™",
    subtitle: "Software-Defined Safety for Robots",
    description: "Real-time hazard detection, compliance monitoring, and predictive maintenance for AMRs and industrial robots",
    image: safeguardImages.hardwareHero,
    imageAlt: "SafeGuard safety monitoring system",
  },
}

/** “Static Safety is Dead” — problem/solution narrative (main product page). */
export const safeguardStaticSafetyNarrative = {
  /** Small ribbon above the section headline (matches Features-style badge on light sections). */
  ribbonLabel: "Challenge",
  headline: "Static Safety is Dead",
  intro:
    "Legacy safety systems treat every human presence as a hard stop, forcing a compromise between safety and throughput. A software-defined safety layer that upgrades your existing fleet with Dynamic Intelligence.",
  legacyProblems: [
    {
      title: "Static LiDAR Zones Kill Efficiency",
      description:
        "Rigid safety zones cause a 20%+ drop in throughput by forcing unnecessary stops when humans are nearby.",
    },
    {
      title: "Physical Barriers Limit Flexibility",
      description:
        "Fences and mats lock your operations into a fixed layout and a simple change becomes costly downtime.",
    },
    {
      title: "No Collaboration",
      description:
        "Caging robots isolates them from humans and kills cobot applications.",
    },
  ],
}

/** Main SafeGuard product page — “Comprehensive Safety Monitoring” grid (brochure). */
export type SafeguardBrochureBullet =
  | string
  | {
      text: string
      href: string
    }

export interface SafeguardBrochureCard {
  id: string
  name: string
  description?: string
  bullets?: SafeguardBrochureBullet[]
  /** When false, bullet lines render without list markers (default: true). */
  bulletsAsList?: boolean
  icon: string
}

export const safeguardBrochureCards: SafeguardBrochureCard[] = [
  {
    id: "certified-safety",
    name: "Certified Safety",
    description: "Functional and AI Safety certified, including",
    bullets: [
      "ISO\u00A013849-1 (Cat\u00A03/PL\u00A0d)",
      "ISO\u00A061508 (SIL\u00A03)",
      "ISO\u00A022440",
    ],
    icon: "badge-check",
  },
  {
    id: "collaboration-ready",
    name: "Collaboration Ready",
    description:
      "Aligned with ISO\u00A010218 guidelines for safe human-robot interaction to share workspaces without static physical guards",
    icon: "handshake",
  },
  {
    id: "high-speed-fault-detection",
    name: "High-Speed Fault Detection",
    description:
      "Rapid hazard mitigation with a validated fault-detection interval under 50\u00A0ms",
    icon: "zap",
  },
  {
    id: "pilot-program",
    name: "Join our Pilot Program today!",
    bullets: [
      "Offer: Installation & operation for 4 weeks at $0 cost",
      "Goal: Validate efficiency gains on your specific floor plan",
    ],
    bulletsAsList: false,
    icon: "rocket",
  },
]

/** Interactive “Where It Works” section — industry selectors + lead-gen CTAs. */
export interface SafeguardIndustryApplication {
  id: string
  name: string
  icon: "factory" | "truck" | "car" | "warehouse"
  /** Conversational hook shown on the selector card. */
  hook: string
  /** Expanded pain narrative in the detail panel. */
  pain: string
  /** SafeGuard outcome — the “so what”. */
  outcome: string
  highlights: string[]
  stat: { value: string; label: string }
  /** Maps to `contactIndustryOptions` on the demo form. */
  demoIndustry: string
  /** Pre-filled demo message for this use case. */
  demoMessage: string
  /** Optional link to a related industry page. */
  industryHref?: string
}

export const safeguardApplicationsSection = {
  label: "Applications",
  title: "Industries Using SafeGuard",
  description:
    "From manufacturing floors to autonomous vehicle depots, SafeGuard ensures safe operations",
  ctaFallback: {
    headline: "Not sure where you fit?",
    body: "Tell us about your operation — we'll map SafeGuard to your floor plan in a 30-minute walkthrough.",
    primaryLabel: "Schedule a Demo",
    primaryHref: "/demo?interest=software&message=I%27m%20interested%20in%20SafeGuard%20and%20would%20like%20to%20see%20how%20it%20applies%20to%20my%20operation.",
    secondaryLabel: "Talk to Sales",
    secondaryHref: "/contact",
  },
  industries: [
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: "factory",
      hook: "Robots frozen every time someone walks by?",
      pain:
        "Static LiDAR zones treat every human as a hard stop — cutting throughput by 20% or more on busy production lines.",
      outcome:
        "SafeGuard replaces rigid fences with dynamic safety zones that shrink, expand, and yield in real time — so cobots keep moving when it's safe.",
      highlights: [
        "ISO 13849-1 Cat 3 / PL d certified safety layer",
        "Human-robot collaboration without physical cages",
        "Pilot program: 4 weeks on your floor, $0 install",
      ],
      stat: { value: "20%+", label: "throughput recovered" },
      demoIndustry: "manufacturing",
      demoMessage:
        "I'm interested in SafeGuard for our manufacturing floor and would like to discuss a pilot on our production line.",
    },
    {
      id: "logistics",
      name: "Logistics",
      icon: "truck",
      hook: "Safety that can't keep pace with depot speed?",
      pain:
        "High-velocity logistics depots need robots that move fast — but legacy safety forces constant stops at every crossing and hand-off point.",
      outcome:
        "SafeGuard monitors mixed human-robot traffic and adjusts zones dynamically, keeping AMRs flowing without compromising safety.",
      highlights: [
        "Real-time hazard detection under 50 ms",
        "Works alongside existing fleet management",
        "Audit-ready compliance logging built in",
      ],
      stat: { value: "<50 ms", label: "fault detection interval" },
      demoIndustry: "warehousing",
      demoMessage:
        "I'm interested in SafeGuard for our logistics depot and want to understand how dynamic safety zones improve AMR throughput.",
      industryHref: "/industries/logistics",
    },
    {
      id: "autonomous-fleets",
      name: "Autonomous Fleets",
      icon: "car",
      hook: "Mixed traffic. Zero margin for error.",
      pain:
        "Autonomous vehicles share space with pedestrians, equipment, and legacy systems — static safety can't adapt to that complexity.",
      outcome:
        "Software-defined safety zones scale from pilot depots to full production fleets, with real-time awareness of every moving object in the zone.",
      highlights: [
        "Dynamic zones for mixed AV and human traffic",
        "Integrates with V2X and fleet orchestration",
        "Scale from pilot to production without rewiring",
      ],
      stat: { value: "L4", label: "operational autonomy support" },
      demoIndustry: "automotive",
      demoMessage:
        "I'm interested in SafeGuard for our autonomous fleet operations and would like to see how dynamic safety zones work in mixed-traffic environments.",
      industryHref: "/industries/autonomous-fleets",
    },
    {
      id: "warehousing",
      name: "Warehousing",
      icon: "warehouse",
      hook: "AMRs stopping at every aisle crossing?",
      pain:
        "Warehouse AMRs spend more time waiting on static safety triggers than moving inventory — and every unnecessary stop costs you picks per hour.",
      outcome:
        "SafeGuard lets AMRs navigate shared aisles intelligently, slowing or rerouting only when a real hazard is detected — not on every proximity ping.",
      highlights: [
        "Congregate Detection for busy intersections",
        "Reduce false stops from legacy mat and fence systems",
        "Validate gains on your floor in 4 weeks, $0 install",
      ],
      stat: { value: "4 wks", label: "$0 pilot on your floor" },
      demoIndustry: "warehousing",
      demoMessage:
        "I'm interested in SafeGuard for our warehouse AMR fleet and want to explore the free 4-week pilot program.",
    },
  ] satisfies SafeguardIndustryApplication[],
}

export function buildSafeguardDemoHref(industry: SafeguardIndustryApplication) {
  const params = new URLSearchParams({
    industry: industry.demoIndustry,
    interest: "software",
    message: industry.demoMessage,
  })
  return `/demo?${params.toString()}`
}

export const safeguardFeatures: ProductFeature[] = [
  {
    id: "threat-detection",
    name: "Threat Detection",
    slug: "threat-detection",
    tagline: "Real-Time Threat Detection for Industrial AMRs and industrial robots",
    description: "Advanced AI-powered threat detection that identifies anomalies, potential hazards, and safety risks in real-time across your robotic infrastructure.",
    benefits: [
      "Prevent incidents before they occur with predictive alerts",
      "Reduce downtime through early anomaly detection",
      "Protect personnel and assets with 24/7 monitoring",
      "Integrate seamlessly with existing safety systems"
    ],
    keyFeatures: [
      "AI-powered anomaly detection",
      "Multi-sensor fusion for comprehensive coverage",
      "Configurable threat severity levels",
      "Automatic incident logging and reporting",
      "Integration with emergency stop systems"
    ],
    icon: "shield-alert",
    useCases: [
      "Manufacturing floor safety monitoring",
      "Autonomous vehicle operation zones",
      "Human-robot collaborative workspaces",
      "Warehouse and logistics operations"
    ]
  },
  {
    id: "compliance-monitoring",
    name: "Compliance Monitoring",
    slug: "compliance-monitoring",
    tagline: "Automated Compliance Monitoring for Robotic Operations",
    description: "Ensure continuous regulatory compliance with automated monitoring, audit trails, and reporting for industrial safety standards.",
    benefits: [
      "Maintain ISO and OSHA compliance automatically",
      "Reduce audit preparation time by 80%",
      "Generate compliance reports on demand",
      "Track safety metrics across all operations"
    ],
    keyFeatures: [
      "Automated ISO 10218 and ISO/TS 15066 compliance checking",
      "Real-time safety zone monitoring",
      "Digital audit trails and documentation",
      "Customizable compliance dashboards",
      "Regulatory reporting automation"
    ],
    icon: "clipboard-check",
    useCases: [
      "Safety compliance auditing",
      "Regulatory reporting and documentation",
      "Risk assessment and management",
      "Safety certification maintenance"
    ]
  },
  {
    id: "real-time-alerting",
    name: "Real-Time Alerting",
    slug: "real-time-alerting",
    tagline: "Instant Anomaly Alerts for Critical Infrastructure",
    description: "Receive instant notifications when anomalies or safety events are detected, enabling rapid response and incident mitigation.",
    benefits: [
      "Respond to incidents within seconds",
      "Customize alert routing by severity and type",
      "Reduce false positives with intelligent filtering",
      "Maintain complete alert history and analytics"
    ],
    keyFeatures: [
      "Multi-channel alerting (SMS, email, push, webhook)",
      "Intelligent alert escalation",
      "Geographic and role-based routing",
      "Alert acknowledgment and resolution tracking",
      "Integration with incident management systems"
    ],
    icon: "bell",
    useCases: [
      "Emergency response coordination",
      "Maintenance team notifications",
      "Supervisor and manager alerts",
      "Integration with facility management systems"
    ]
  },
  {
    id: "predictive-maintenance",
    name: "Predictive Maintenance",
    slug: "predictive-maintenance",
    tagline: "AI-Powered Predictive Maintenance for Fleet and Facility Assets",
    description: "Leverage machine learning to predict equipment failures before they happen, optimize maintenance schedules, and maximize uptime.",
    benefits: [
      "Reduce unplanned downtime by up to 70%",
      "Extend equipment lifespan through optimized maintenance",
      "Lower maintenance costs with predictive scheduling",
      "Improve resource allocation and planning"
    ],
    keyFeatures: [
      "Machine learning failure prediction models",
      "Remaining useful life (RUL) estimates",
      "Maintenance schedule optimization",
      "Parts inventory forecasting",
      "Integration with CMMS and ERP systems"
    ],
    icon: "wrench",
    useCases: [
      "Robot fleet maintenance planning",
      "Conveyor and material handling systems",
      "Charging infrastructure monitoring",
      "Sensor and safety system health tracking"
    ]
  }
]
