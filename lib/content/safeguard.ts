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

export const safeguardProduct = {
  name: "SafeGuard",
  tagline: "Software-Defined Safety for Robots",
  description: "SafeGuard provides real-time monitoring and predictive safety solutions for industrial and autonomous robotic operations. Our AI-powered platform ensures compliance, prevents incidents, and enables safe human-robot collaboration.",
  hero: {
    title: "SafeGuard™",
    subtitle: "Software-Defined Safety for Robots",
    description: "Real-time hazard detection, compliance monitoring, and predictive maintenance for AMRs and industrial robots"
  }
}

/** “Static Safety is Dead” — problem/solution narrative (main product page). */
export const safeguardStaticSafetyNarrative = {
  headline: "Static Safety is Dead",
  intro:
    "Legacy safety systems treat every human presence as a hard stop, forcing a compromise between safety and throughput. A software-defined safety layer that upgrades your existing fleet with Dynamic Intelligence.",
  pillars: [
    {
      title: "Speed Dependent Zoning",
      description:
        "The safety field changes based on the robot's velocity and trajectory.",
    },
    {
      title: "Safety at the Speed of Sight",
    },
  ],
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
export interface SafeguardBrochureCard {
  id: string
  name: string
  description?: string
  bullets?: string[]
  icon: string
}

export const safeguardBrochureCards: SafeguardBrochureCard[] = [
  {
    id: "certified-safety",
    name: "Certified Safety",
    description:
      "Functional and AI Safety certified, including ISO 13849-1 (Cat 3/Performance Level d), ISO 61508 (SIL 3), and ISO 22440",
    icon: "badge-check",
  },
  {
    id: "collaboration-ready",
    name: "Collaboration Ready",
    description:
      "Aligned with ISO 10218 guidelines for safe human-robot interaction to share workspaces without static physical guards",
    icon: "handshake",
  },
  {
    id: "high-speed-fault-detection",
    name: "High-Speed Fault Detection",
    description:
      "Rapid hazard mitigation with a validated Fault Detection Time Interval of under 50 milliseconds",
    icon: "zap",
  },
  {
    id: "pilot-program",
    name: "Join our Pilot Program today!",
    bullets: [
      "Offer: Installation & operation for 4 weeks at $0 cost",
      "Goal: Validate efficiency gains on your specific floor plan",
      "Requirement: Letter of Intent tied to certification roadmap",
    ],
    icon: "rocket",
  },
]

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
