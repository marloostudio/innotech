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

export const radarLinkProduct = {
  name: "RADARLink",
  tagline: "V2X Communication, Cm-level Localization and Drone Tracking",
  description: "RADARLink enables precise vehicle-to-everything communication, centimeter-level localization and tracking, and autonomous drone tracking for connected mobility ecosystems.",
  hero: {
    title: "RADARLink",
    subtitle: "V2X Communication, Cm-level Localization and Drone Tracking",
    description: "Connect, locate, and track autonomous assets with radar-based intelligence"
  }
}

export const radarLinkFeatures: ProductFeature[] = [
  {
    id: "v2x-communication",
    name: "V2X Communication",
    slug: "v2x-communication",
    tagline: "Vehicle-to-Everything Communication for Connected Autonomy",
    description: "Enable seamless communication between vehicles, infrastructure, and control systems for coordinated autonomous operations.",
    benefits: [
      "Reduce collision risk through vehicle awareness",
      "Enable coordinated multi-vehicle maneuvers",
      "Support C-V2X and DSRC protocols",
      "Low-latency communication (<50ms)"
    ],
    keyFeatures: [
      "V2V, V2I, and V2N communication protocols",
      "5G and C-V2X support",
      "Security and authentication (IEEE 1609.2)",
      "High-bandwidth data exchange (up to 1 Gbps)",
      "Range up to 1000m in open environments"
    ],
    icon: "radio",
    useCases: [
      "Autonomous vehicle platooning",
      "Smart intersection management",
      "Port and terminal vehicle coordination",
      "Emergency vehicle priority systems"
    ]
  },
  {
    id: "micro-localization",
    name: "Cm-level Localization and Tracking",
    slug: "micro-localization",
    tagline: "Centimetre-Level Indoor and Outdoor Localization",
    description: "Ultra-precise positioning system providing centimeter-level accuracy in GPS-denied environments and complex operational areas.",
    benefits: [
      "Achieve <5cm positioning accuracy",
      "Operate in GPS-denied environments",
      "Enable precise docking and charging",
      "Support multi-floor and underground operations"
    ],
    keyFeatures: [
      "Ultra-wideband (UWB) and radar fusion",
      "Real-time kinematic (RTK) integration",
      "3D position and orientation tracking",
      "Seamless indoor-outdoor transitions",
      "Multi-vehicle simultaneous tracking"
    ],
    icon: "map-pin",
    useCases: [
      "Autonomous vehicle precise parking",
      "Warehouse robot navigation",
      "Underground mine vehicle tracking",
      "Airport ground support equipment"
    ]
  },
  {
    id: "drone-tracking",
    name: "Drone Tracking & Identification",
    slug: "drone-tracking",
    tagline: "Autonomous Drone Localization, Tracking and Friend-or-Foe Identification",
    description: "Advanced radar-based system for detecting, tracking, and identifying drones in your operational airspace with friend-or-foe classification.",
    benefits: [
      "Detect drones up to 3km away",
      "Classify authorized vs unauthorized drones",
      "Track multiple simultaneous drone targets",
      "Integrate with airspace management systems"
    ],
    keyFeatures: [
      "360° radar coverage with multi-sensor fusion",
      "Automatic drone classification and identification",
      "Real-time 3D trajectory tracking",
      "Electronic drone ID (Remote ID) integration",
      "Alert and countermeasure triggers"
    ],
    icon: "plane",
    useCases: [
      "Critical infrastructure protection",
      "Airport and port airspace monitoring",
      "Industrial facility security",
      "Autonomous drone fleet coordination"
    ]
  },
  {
    id: "real-time-analytics",
    name: "Real-Time Asset Tracking",
    slug: "real-time-analytics",
    tagline: "Predictive Insights and System Monitoring via Radar Intelligence",
    description: "Transform radar data into actionable insights with real-time analytics, predictive algorithms, and comprehensive system monitoring.",
    benefits: [
      "Gain visibility into all connected assets",
      "Predict traffic patterns and congestion",
      "Optimize routing and coordination",
      "Generate operational intelligence reports"
    ],
    keyFeatures: [
      "Real-time dashboards and visualization",
      "Predictive traffic and flow analysis",
      "Historical data analysis and replay",
      "Custom KPI tracking and reporting",
      "API for data integration and export"
    ],
    icon: "bar-chart",
    useCases: [
      "Fleet performance monitoring",
      "Traffic pattern analysis",
      "Operational efficiency optimization",
      "Incident investigation and analysis"
    ]
  }
]
