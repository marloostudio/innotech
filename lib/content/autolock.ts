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

export const autolockProduct = {
  name: "AutoLock",
  tagline: "Autonomous Charging and Fleet Orchestration",
  description: "AutoLock delivers fully automated EV charging and fleet management for autonomous vehicles, commercial fleets, and mobile robots. No human intervention required.",
  hero: {
    title: "AutoLock",
    subtitle: "Autonomous Charging and Fleet Orchestration",
    description: "Robotic charging, intelligent fleet scheduling, and depot automation for the future of mobility"
  }
}

export const autolockFeatures: ProductFeature[] = [
  {
    id: "autonomous-charging",
    name: "Autonomous Charging",
    slug: "autonomous-charging",
    tagline: "Robotic EV Charging with No Human Intervention",
    description: "Fully automated robotic charging system that connects to vehicles without human assistance, supporting multiple vehicle types and charging standards.",
    benefits: [
      "Eliminate manual charging labor costs",
      "Enable 24/7 autonomous fleet operations",
      "Support CCS, CHAdeMO, and proprietary connectors",
      "Achieve 99.5% successful connection rate"
    ],
    keyFeatures: [
      "Robotic arm with precision positioning",
      "Multi-protocol charging support (up to 350kW)",
      "Automatic connector alignment and insertion",
      "Weather-resistant outdoor operation",
      "Integration with vehicle telematics"
    ],
    icon: "plug",
    useCases: [
      "Autonomous vehicle fleets",
      "Electric commercial delivery vans",
      "Airport shuttle and ground support vehicles",
      "Mobile robot charging stations"
    ]
  },
  {
    id: "fleet-orchestration",
    name: "Fleet Orchestration",
    slug: "fleet-orchestration",
    tagline: "Intelligent Multi-Vehicle Scheduling and Coordination",
    description: "Advanced fleet management platform that optimizes charging schedules, coordinates vehicle movements, and maximizes fleet utilization.",
    benefits: [
      "Maximize fleet uptime through intelligent scheduling",
      "Reduce energy costs with smart charging strategies",
      "Coordinate multiple vehicles across shared infrastructure",
      "Scale from 10 to 1000+ vehicles on one platform"
    ],
    keyFeatures: [
      "AI-powered charging queue optimization",
      "Dynamic load balancing across chargers",
      "Route and mission-based charging planning",
      "Real-time fleet status monitoring",
      "Energy cost optimization algorithms"
    ],
    icon: "network",
    useCases: [
      "Commercial delivery fleet management",
      "Autonomous shuttle coordination",
      "Shared mobility operations",
      "Industrial vehicle fleets"
    ]
  },
  {
    id: "process-automation",
    name: "Process Automation",
    slug: "process-automation",
    tagline: "Depot and Charging Process Automation for Commercial Fleets",
    description: "End-to-end automation of depot operations including vehicle check-in, charging assignment, maintenance routing, and dispatch.",
    benefits: [
      "Reduce depot operational costs by up to 60%",
      "Eliminate manual vehicle routing and tracking",
      "Automate maintenance and inspection scheduling",
      "Improve vehicle turnaround time"
    ],
    keyFeatures: [
      "Automated vehicle check-in/check-out",
      "Dynamic parking and charging bay assignment",
      "Maintenance and inspection routing",
      "Automated pre-trip vehicle preparation",
      "Integration with fleet management systems"
    ],
    icon: "warehouse",
    useCases: [
      "Commercial EV depot automation",
      "Autonomous vehicle staging areas",
      "Shared fleet facilities",
      "Transit and shuttle operations"
    ]
  },
  {
    id: "access-control",
    name: "Access Control",
    slug: "access-control",
    tagline: "Secure Vehicle Authentication and Charging Access Control",
    description: "Enterprise-grade security and access management for charging infrastructure with vehicle authentication and usage tracking.",
    benefits: [
      "Prevent unauthorized charging access",
      "Track usage by vehicle, driver, or department",
      "Enable multi-tenant depot operations",
      "Generate detailed billing and usage reports"
    ],
    keyFeatures: [
      "Vehicle-to-charger authentication",
      "Role-based access control (RBAC)",
      "Usage tracking and billing integration",
      "Audit logs for all charging sessions",
      "API for third-party integrations"
    ],
    icon: "shield-check",
    useCases: [
      "Multi-tenant depot facilities",
      "Corporate fleet charging management",
      "Shared mobility charging networks",
      "Public-private partnership operations"
    ]
  }
]
