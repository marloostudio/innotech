export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  features: string[]
  applications: string[]
  icon: string
}

export const productCategories = [
  { id: "amr", label: "Autonomous Mobile Robots" },
  { id: "manipulators", label: "Robotic Manipulators" },
  { id: "inspection", label: "Inspection Systems" },
  { id: "software", label: "Software Platforms" }
]

export const products: Product[] = [
  {
    id: "amr-1000",
    name: "AMR-1000 Series",
    category: "amr",
    tagline: "Heavy-duty autonomous mobile robots for industrial environments",
    description: "The AMR-1000 series delivers powerful autonomous material transport with a 1000kg payload capacity. Built for demanding manufacturing and warehousing environments with advanced navigation and safety systems.",
    features: [
      "1000kg payload capacity",
      "360° LiDAR and camera array",
      "8-hour battery life with auto-charging",
      "Fleet management integration",
      "Configurable modular platform"
    ],
    applications: [
      "Material transport in manufacturing",
      "Warehouse picking and putaway",
      "Pallet movement",
      "Line-side delivery"
    ],
    icon: "bot"
  },
  {
    id: "amr-500",
    name: "AMR-500 Series",
    category: "amr",
    tagline: "Compact autonomous robots for flexible workflows",
    description: "Agile and versatile AMRs designed for dynamic environments. Perfect for light-duty transport, collaborative workflows, and space-constrained facilities.",
    features: [
      "500kg payload capacity",
      "Compact footprint (800mm x 600mm)",
      "AI-powered navigation",
      "Collaborative safety features",
      "Quick-swap battery system"
    ],
    applications: [
      "Small parts delivery",
      "Laboratory automation",
      "Hospital logistics",
      "Retail back-of-house operations"
    ],
    icon: "bot"
  },
  {
    id: "cobot-arm",
    name: "CollabArm Series",
    category: "manipulators",
    tagline: "Collaborative robotic arms for precision tasks",
    description: "Safe, flexible robotic manipulators designed to work alongside human operators. Seven-axis design provides superior dexterity and reach for complex assembly and handling tasks.",
    features: [
      "7-axis articulation",
      "Force-torque sensing",
      "Tool-less end effector changes",
      "Visual programming interface",
      "ISO/TS 15066 certified"
    ],
    applications: [
      "Assembly operations",
      "Pick and place",
      "Machine tending",
      "Quality inspection"
    ],
    icon: "proportions"
  },
  {
    id: "vision-pro",
    name: "VisionPro System",
    category: "inspection",
    tagline: "AI-powered visual inspection for quality control",
    description: "Advanced computer vision system combining high-resolution imaging with deep learning for automated defect detection and quality assurance.",
    features: [
      "Multi-camera array up to 12MP",
      "Real-time defect classification",
      "Adaptive learning algorithms",
      "Sub-millimeter precision",
      "Integration with production lines"
    ],
    applications: [
      "Surface defect detection",
      "Dimensional verification",
      "Color and texture analysis",
      "Component presence validation"
    ],
    icon: "eye"
  },
  {
    id: "fleet-commander",
    name: "FleetCommander",
    category: "software",
    tagline: "Centralized platform for autonomous fleet management",
    description: "Enterprise software for orchestrating, monitoring, and optimizing multi-robot operations. Real-time analytics and predictive insights for maximum efficiency.",
    features: [
      "Real-time fleet monitoring",
      "Dynamic task allocation",
      "Traffic management and routing",
      "Predictive maintenance alerts",
      "RESTful API and webhooks"
    ],
    applications: [
      "Multi-robot coordination",
      "Operational analytics",
      "System integration",
      "Performance optimization"
    ],
    icon: "network"
  },
  {
    id: "safety-suite",
    name: "SafetyGuard Suite",
    category: "software",
    tagline: "Comprehensive safety monitoring and compliance",
    description: "Advanced safety management software ensuring compliant and secure human-robot collaboration. Real-time monitoring, audit trails, and automated safety reporting.",
    features: [
      "Real-time safety zone monitoring",
      "Incident logging and analysis",
      "Compliance reporting (ISO standards)",
      "Emergency response automation",
      "Access control integration"
    ],
    applications: [
      "Workplace safety management",
      "Regulatory compliance",
      "Risk assessment",
      "Safety auditing"
    ],
    icon: "shield-check"
  }
]
