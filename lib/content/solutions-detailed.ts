export interface Solution {
  id: string
  name: string
  slug: string
  category: string
  tagline: string
  description: string
  challenges: string[]
  howItWorks: string[]
  benefits: string[]
  relatedProducts: string[]
  icon: string
}

export const solutionCategories = [
  { id: "charging", name: "Autonomous Charging Solutions" },
  { id: "safety", name: "Dynamic Safety Solutions" },
  { id: "connectivity", name: "Connectivity & Localization Solutions" }
]

export const solutions: Solution[] = [
  // Autonomous Charging Solutions
  {
    id: "charging-autonomous-vehicles",
    name: "Charging for Autonomous Vehicles",
    slug: "charging-autonomous-vehicles",
    category: "charging",
    tagline: "Autonomous EV Charging for Self-Driving Vehicle Fleets",
    description: "Enable fully autonomous operations with robotic charging that requires no human intervention. Our solution supports all major EV charging standards and integrates seamlessly with autonomous vehicle platforms.",
    challenges: [
      "Manual charging creates bottlenecks in autonomous operations",
      "Human labor costs reduce ROI of autonomous fleets",
      "24/7 operations require automated charging infrastructure",
      "Different vehicles require different charging protocols"
    ],
    howItWorks: [
      "Vehicle autonomously navigates to charging station",
      "AutoLock system authenticates and identifies vehicle",
      "Robotic arm precisely connects charging cable",
      "Charging session managed by fleet orchestration platform",
      "Vehicle released when charging complete or needed for mission"
    ],
    benefits: [
      "Enable true 24/7 autonomous fleet operations",
      "Eliminate charging labor costs",
      "Maximize fleet utilization and uptime",
      "Support mixed vehicle types and charging standards"
    ],
    relatedProducts: ["AutoLock", "FleetCommander"],
    icon: "plug"
  },
  {
    id: "charging-heavy-duty",
    name: "Charging for Heavy-Duty Vehicles",
    slug: "charging-heavy-duty",
    category: "charging",
    tagline: "Robotic Charging for Heavy-Duty and Commercial Vehicles",
    description: "Heavy-duty robotic charging solution designed for commercial trucks, buses, and industrial vehicles with high-power charging capabilities up to 350kW.",
    challenges: [
      "Heavy charging cables difficult for operators to handle",
      "Safety risks with high-voltage connections",
      "Depot throughput limited by manual charging",
      "Inconsistent connector placement across vehicle types"
    ],
    howItWorks: [
      "Vehicle parks in designated charging bay",
      "System locates charging port using computer vision",
      "Heavy-duty robotic arm lifts and connects cable",
      "Automated safety checks before energizing",
      "Automatic disconnection when charging complete"
    ],
    benefits: [
      "Reduce operator injury risk",
      "Increase depot throughput by 40%",
      "Support vehicles with varied connector locations",
      "Enable overnight unattended charging operations"
    ],
    relatedProducts: ["AutoLock"],
    icon: "truck"
  },
  {
    id: "charging-mar",
    name: "Charging for Mobile Autonomous Robots (MAR)",
    slug: "charging-mar",
    category: "charging",
    tagline: "Autonomous Charging for Mobile Robots and Inspection Bots",
    description: "Compact automated charging solutions for AMRs, inspection robots, and mobile platforms operating in warehouses, facilities, and industrial environments.",
    challenges: [
      "Robots need frequent opportunistic charging",
      "Limited space for charging infrastructure",
      "Multiple robot types with different power requirements",
      "Need for 24/7 unattended operation"
    ],
    howItWorks: [
      "Robot navigates to charging station during idle time",
      "Precision docking using cm-level localization and tracking",
      "Contact or inductive charging initiated automatically",
      "Robot returns to service when battery threshold reached",
      "Fleet orchestration manages charging queue"
    ],
    benefits: [
      "Enable continuous robot operations",
      "Minimize charging footprint in facilities",
      "Support heterogeneous robot fleets",
      "Reduce facility power infrastructure costs"
    ],
    relatedProducts: ["AutoLock", "RADARLink"],
    icon: "bot"
  },

  // Dynamic Safety Solutions
  {
    id: "safety-industrial-robots",
    name: "Safety for Industrial Robots",
    slug: "safety-industrial-robots",
    category: "safety",
    tagline: "Dynamic Safety Zones and Collision Avoidance for Industrial Robots",
    description: "Advanced safety monitoring for industrial robotic work cells with dynamic safety zones, real-time threat detection, and automatic emergency stops.",
    challenges: [
      "Static safety zones limit productivity",
      "Expensive safety cage infrastructure",
      "Difficult to reconfigure for new processes",
      "Limited visibility into safety incidents"
    ],
    howItWorks: [
      "Radar and vision sensors monitor work cell continuously",
      "AI detects humans, objects, and potential collisions",
      "Dynamic safety zones adapt to robot motion",
      "Automatic speed reduction or stop based on threat level",
      "All events logged for compliance and analysis"
    ],
    benefits: [
      "Increase productivity with dynamic safety zones",
      "Reduce safety infrastructure costs",
      "Enable flexible reconfiguration",
      "Maintain ISO 10218 compliance automatically"
    ],
    relatedProducts: ["SafeGuard", "RADARLink"],
    icon: "shield"
  },
  {
    id: "safety-mar",
    name: "Safety for Mobile Autonomous Robots",
    slug: "safety-mar",
    category: "safety",
    tagline: "Real-Time Safety Monitoring for Mobile Autonomous Robots",
    description: "Comprehensive safety solution for AMRs navigating dynamic environments with people, obstacles, and other vehicles.",
    challenges: [
      "Robots share space with workers and pedestrians",
      "Dynamic obstacles require real-time response",
      "Safety systems must work in varied lighting",
      "Need centralized safety monitoring across fleet"
    ],
    howItWorks: [
      "Multi-sensor fusion (LiDAR, radar, cameras) on each robot",
      "Real-time obstacle detection and avoidance",
      "Predictive path planning for collision prevention",
      "Fleet-level safety monitoring and coordination",
      "Incident alerts and automatic safety reports"
    ],
    benefits: [
      "Enable safe human-robot coexistence",
      "Reduce accident risk by 95%",
      "Maintain productivity in dynamic environments",
      "Comprehensive safety audit trails"
    ],
    relatedProducts: ["SafeGuard", "RADARLink"],
    icon: "bot"
  },
  {
    id: "safety-human-robot",
    name: "Human-Robot Collaboration Safety",
    slug: "safety-human-robot",
    category: "safety",
    tagline: "Safe Human-Robot Collaboration in Shared Workspaces",
    description: "Enable productive human-robot collaboration with intelligent safety systems that allow close proximity work while ensuring worker protection.",
    challenges: [
      "Traditional cages prevent collaboration",
      "Workers fear robot systems",
      "Productivity suffers with excessive safety margins",
      "Regulatory compliance for collaborative robots"
    ],
    howItWorks: [
      "Wearable tags or vision systems track worker positions",
      "Robot adjusts speed and trajectory based on human proximity",
      "Graduated safety zones (warning, slow, stop)",
      "Intuitive indicators show robot state to workers",
      "Continuous compliance monitoring and reporting"
    ],
    benefits: [
      "Enable true collaborative workflows",
      "Increase worker acceptance and trust",
      "Maximize productivity safely",
      "Meet ISO/TS 15066 requirements"
    ],
    relatedProducts: ["SafeGuard", "RADARLink"],
    icon: "users"
  },

  // Connectivity & Localization Solutions
  {
    id: "connectivity-v2v",
    name: "Vehicle-to-Vehicle (V2V) Communication",
    slug: "connectivity-v2v",
    category: "connectivity",
    tagline: "V2V Communication for Collision Prevention and Fleet Awareness",
    description: "Low-latency vehicle-to-vehicle communication enabling coordinated maneuvers, collision avoidance, and swarm behaviors.",
    challenges: [
      "Vehicles lack awareness of nearby traffic",
      "Collision risk in dense autonomous environments",
      "Inefficient routing and traffic flow",
      "Need for low-latency coordination"
    ],
    howItWorks: [
      "Each vehicle broadcasts position, speed, and trajectory",
      "Nearby vehicles receive and process V2V messages",
      "Collision prediction algorithms assess risks",
      "Coordinated maneuvers (passing, merging, platooning)",
      "All communications secured with cryptographic certificates"
    ],
    benefits: [
      "Reduce collision risk by 70%",
      "Enable platooning for efficiency gains",
      "Coordinate complex multi-vehicle maneuvers",
      "Sub-50ms communication latency"
    ],
    relatedProducts: ["RADARLink"],
    icon: "radio"
  },
  {
    id: "connectivity-v2i",
    name: "Vehicle-to-Infrastructure (V2I) Communication",
    slug: "connectivity-v2i",
    category: "connectivity",
    tagline: "V2I Communication for Smarter Roads and Terminal Operations",
    description: "Connect vehicles with infrastructure systems for optimized routing, traffic management, and operational coordination.",
    challenges: [
      "Vehicles operate with limited environmental information",
      "Infrastructure can't optimize for autonomous traffic",
      "Manual coordination limits efficiency",
      "Lack of real-time operational visibility"
    ],
    howItWorks: [
      "Infrastructure broadcasts traffic, hazards, and operational data",
      "Vehicles report position, destination, and status",
      "Central systems optimize routing and flow",
      "Dynamic traffic management based on real conditions",
      "Integration with facility management systems"
    ],
    benefits: [
      "Reduce congestion and wait times",
      "Enable dynamic routing optimization",
      "Improve facility throughput",
      "Provide operational visibility and control"
    ],
    relatedProducts: ["RADARLink", "AutoLock"],
    icon: "building"
  },
  {
    id: "micro-localization",
    name: "Indoor & Outdoor Cm-level Localization and Tracking",
    slug: "micro-localization",
    category: "connectivity",
    tagline: "Precise Localization for GNSS-Denied and Complex Environments",
    description: "Centimeter-level positioning in GPS-denied environments including warehouses, tunnels, underground facilities, and dense urban areas.",
    challenges: [
      "GPS unavailable or unreliable indoors",
      "Precise docking and navigation required",
      "Multi-floor and complex facility layouts",
      "Need for seamless indoor-outdoor transitions"
    ],
    howItWorks: [
      "UWB anchors and radar create localization network",
      "Vehicles equipped with localization tags",
      "Real-time position calculated via trilateration",
      "Fusion with onboard sensors for accuracy",
      "3D position and orientation provided to vehicle control"
    ],
    benefits: [
      "Achieve <5cm positioning accuracy",
      "Enable precise charging and docking",
      "Navigate complex multi-level facilities",
      "Support hundreds of simultaneous vehicles"
    ],
    relatedProducts: ["RADARLink"],
    icon: "map-pin"
  },
  {
    id: "drone-tracking",
    name: "Drone Tracking & Identification",
    slug: "drone-tracking",
    category: "connectivity",
    tagline: "Radar-Based Drone Detection, Tracking and Identification",
    description: "Comprehensive drone detection, tracking, and friend-or-foe identification for secure airspace management around facilities and operations.",
    challenges: [
      "Unauthorized drones pose security risks",
      "Difficult to distinguish authorized from unauthorized drones",
      "Need to coordinate with authorized drone operations",
      "Regulatory compliance for airspace management"
    ],
    howItWorks: [
      "Radar sensors detect drones up to 3km range",
      "Electronic drone ID (Remote ID) interrogation",
      "Friend-or-foe classification against authorized database",
      "Real-time 3D trajectory tracking",
      "Alerts and countermeasure triggers for unauthorized drones"
    ],
    benefits: [
      "Protect facilities from drone threats",
      "Enable safe authorized drone operations",
      "Maintain airspace situational awareness",
      "Meet regulatory airspace requirements"
    ],
    relatedProducts: ["RADARLink", "SafeGuard"],
    icon: "plane"
  }
]
