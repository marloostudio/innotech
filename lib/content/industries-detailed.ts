export interface Industry {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  challenges: string[]
  solutions: string[]
  benefits: string[]
  metrics: { label: string; value: string; description: string }[]
  relatedProducts: string[]
  icon: string
}

export const industries: Industry[] = [
  {
    id: "logistics",
    name: "Logistics",
    slug: "logistics",
    tagline: "Autonomous EV Solutions for Logistics and Delivery Fleets",
    description: "Transform your logistics operations with autonomous charging, fleet orchestration, and safety systems designed for high-velocity delivery operations.",
    challenges: [
      "Manual charging creates operational bottlenecks",
      "Rising labor costs impact profitability",
      "Need for 24/7 fleet availability",
      "Complex depot operations and scheduling",
      "Vehicle safety and damage prevention"
    ],
    solutions: [
      "Automated robotic charging for delivery vehicles",
      "Intelligent fleet orchestration and routing",
      "Depot process automation and vehicle management",
      "Real-time safety monitoring and collision prevention",
      "Predictive maintenance for fleet reliability"
    ],
    benefits: [
      "Reduce depot operational costs by up to 60%",
      "Enable 24/7 autonomous delivery operations",
      "Increase fleet utilization by 35%",
      "Eliminate charging labor costs",
      "Improve safety and reduce vehicle damage"
    ],
    metrics: [
      { label: "Cost Reduction", value: "60%", description: "in depot operational costs" },
      { label: "Fleet Utilization", value: "+35%", description: "increase in vehicle availability" },
      { label: "Charging Efficiency", value: "99.5%", description: "successful autonomous connections" }
    ],
    relatedProducts: ["AutoDuck", "SafeGuard", "FleetCommander"],
    icon: "truck"
  },
  {
    id: "autonomous-fleets",
    name: "Autonomous Fleets",
    slug: "autonomous-fleets",
    tagline: "Infrastructure and Support for Driverless Vehicle Fleets",
    description: "Comprehensive infrastructure solutions for autonomous vehicle fleets including charging, V2X communication, and fleet coordination.",
    challenges: [
      "Autonomous vehicles need automated charging",
      "Vehicle coordination in shared spaces",
      "Precise localization for docking and navigation",
      "Safety systems for mixed autonomous and human traffic",
      "Fleet monitoring and operational oversight"
    ],
    solutions: [
      "Fully automated charging for overnight and opportunity charging",
      "V2V and V2I communication for coordination",
      "Cm-level localization and tracking for precise positioning",
      "Dynamic safety zones and collision avoidance",
      "Centralized fleet management and monitoring"
    ],
    benefits: [
      "Enable true autonomous operations without human intervention",
      "Maximize fleet uptime and operational efficiency",
      "Ensure safe operations in complex environments",
      "Scale from pilot to full production fleets",
      "Comprehensive operational visibility and control"
    ],
    metrics: [
      { label: "Uptime", value: "99.8%", description: "fleet availability" },
      { label: "Autonomy Level", value: "L4", description: "full operational autonomy" },
      { label: "Safety", value: "Zero", description: "charging-related incidents" }
    ],
    relatedProducts: ["AutoDuck", "RADARLink", "SafeGuard"],
    icon: "car"
  },
  {
    id: "automated-depot",
    name: "Automated Depot",
    slug: "automated-depot",
    tagline: "Fully Automated Vehicle Depot Management",
    description: "End-to-end depot automation including vehicle check-in, charging assignment, maintenance routing, and dispatch coordination.",
    challenges: [
      "Manual depot processes are slow and labor-intensive",
      "Poor visibility into vehicle and bay status",
      "Inefficient use of charging infrastructure",
      "Difficulty coordinating maintenance and charging",
      "Scaling challenges with fleet growth"
    ],
    solutions: [
      "Automated vehicle check-in and bay assignment",
      "Intelligent charging queue management",
      "Integrated maintenance and inspection routing",
      "Real-time depot monitoring and control",
      "Scalable platform supporting thousands of vehicles"
    ],
    benefits: [
      "Reduce depot labor costs by 70%",
      "Increase charging infrastructure utilization",
      "Improve vehicle turnaround time by 50%",
      "Enable lights-out depot operations",
      "Scale seamlessly with fleet growth"
    ],
    metrics: [
      { label: "Labor Reduction", value: "70%", description: "in depot staffing requirements" },
      { label: "Turnaround Time", value: "-50%", description: "faster vehicle processing" },
      { label: "Infrastructure Use", value: "+40%", description: "charging bay utilization" }
    ],
    relatedProducts: ["AutoDuck", "SafeGuard", "FleetCommander"],
    icon: "warehouse"
  },
  {
    id: "port",
    name: "Port Operations",
    slug: "port",
    tagline: "Autonomous Systems for Port and Container Terminal Operations",
    description: "Specialized solutions for port environments including autonomous cargo movers, reach stackers, and terminal tractors with V2X coordination.",
    challenges: [
      "Heavy equipment requires high-power charging",
      "Congested environments with safety risks",
      "Need for precise vehicle positioning",
      "24/7 operations with minimal downtime",
      "Coordination across diverse equipment types"
    ],
    solutions: [
      "Heavy-duty robotic charging up to 350kW",
      "V2V and V2X communication for terminal coordination",
      "Centimeter-level localization for container handling",
      "Automated equipment safety and collision avoidance",
      "Integrated terminal management system connectivity"
    ],
    benefits: [
      "Enable 24/7 autonomous terminal operations",
      "Improve equipment utilization and throughput",
      "Reduce operator safety risks",
      "Increase container handling efficiency",
      "Lower operational costs per container"
    ],
    metrics: [
      { label: "Throughput", value: "+25%", description: "increase in container handling" },
      { label: "Safety", value: "95%", description: "reduction in equipment incidents" },
      { label: "Uptime", value: "99.5%", description: "equipment availability" }
    ],
    relatedProducts: ["AutoDuck", "RADARLink", "SafeGuard"],
    icon: "ship"
  },
  {
    id: "airport-shopping-mall",
    name: "Airport & Shopping Mall",
    slug: "airport-shopping-mall",
    tagline: "Smart Mobility Automation for Airports and Commercial Centres",
    description: "Autonomous shuttle, cargo transport, and service vehicle solutions for airports and large commercial facilities.",
    challenges: [
      "Complex multi-level facilities with GPS denied areas",
      "High pedestrian density and safety requirements",
      "Need for frequent vehicle charging without disruption",
      "Coordination of multiple autonomous systems",
      "Passenger experience and safety expectations"
    ],
    solutions: [
      "Indoor cm-level localization and tracking for GPS-denied navigation",
      "Autonomous charging for shuttles and service vehicles",
      "Advanced pedestrian detection and avoidance",
      "Coordinated multi-vehicle scheduling",
      "Real-time passenger information integration"
    ],
    benefits: [
      "Improve passenger and visitor experience",
      "Reduce operational costs for mobility services",
      "Enable 24/7 autonomous operations",
      "Enhance safety in high-traffic areas",
      "Scale easily across facilities"
    ],
    metrics: [
      { label: "Cost Savings", value: "55%", description: "in mobility operations" },
      { label: "Passenger Safety", value: "Zero", description: "incidents since deployment" },
      { label: "Service Availability", value: "24/7", description: "continuous operations" }
    ],
    relatedProducts: ["AutoDuck", "RADARLink", "SafeGuard"],
    icon: "plane"
  },
  {
    id: "mining",
    name: "Mining",
    slug: "mining",
    tagline: "Ruggedised Autonomous Charging and Monitoring for Mining Operations",
    description: "Heavy-duty solutions designed for harsh mining environments with autonomous haul trucks, loaders, and support vehicles.",
    challenges: [
      "Extreme environmental conditions (dust, temperature, vibration)",
      "Heavy equipment with high power demands",
      "Remote locations with limited infrastructure",
      "Safety in hazardous mining environments",
      "GPS unreliable in underground operations"
    ],
    solutions: [
      "Ruggedized robotic charging for mining vehicles",
      "Underground localization without GPS",
      "Vehicle-to-vehicle collision avoidance",
      "Predictive maintenance in harsh conditions",
      "Remote fleet monitoring and control"
    ],
    benefits: [
      "Enable autonomous mining operations 24/7",
      "Improve worker safety by removing humans from hazards",
      "Increase equipment productivity and utilization",
      "Reduce fuel/energy costs through optimization",
      "Extend equipment life through predictive maintenance"
    ],
    metrics: [
      { label: "Productivity", value: "+30%", description: "increase in equipment utilization" },
      { label: "Safety", value: "Zero", description: "operator exposure to hazards" },
      { label: "Uptime", value: "99%", description: "fleet availability" }
    ],
    relatedProducts: ["AutoDuck", "RADARLink", "SafeGuard"],
    icon: "mountain"
  }
]
