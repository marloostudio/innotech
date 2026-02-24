export interface Industry {
  id: string
  title: string
  tagline: string
  description: string
  challenges: string[]
  solutions: string[]
  icon: string
}

export const industries: Industry[] = [
  {
    id: "automotive",
    title: "Automotive",
    tagline: "Advanced automation for modern vehicle manufacturing",
    description: "The automotive industry demands precision, speed, and flexibility. Our robotics solutions power assembly lines, quality control, and logistics operations for leading automotive manufacturers worldwide.",
    challenges: [
      "High-volume production with zero-defect requirements",
      "Complex assembly processes requiring precision",
      "Just-in-time logistics and inventory management",
      "Frequent model changes and line reconfiguration",
      "Stringent safety and compliance standards"
    ],
    solutions: [
      "Robotic welding and assembly systems",
      "Automated quality inspection with computer vision",
      "AGV-based material delivery to assembly lines",
      "Flexible manufacturing cells for model variants",
      "Paint shop automation and material handling"
    ],
    icon: "car"
  },
  {
    id: "aerospace",
    title: "Aerospace & Defense",
    tagline: "Precision robotics for mission-critical manufacturing",
    description: "Aerospace manufacturing requires exceptional precision and traceability. Our solutions handle complex geometries, exotic materials, and stringent documentation requirements with reliability and accuracy.",
    challenges: [
      "Ultra-precise machining and assembly tolerances",
      "Low-volume, high-complexity production",
      "Extensive documentation and traceability needs",
      "Handling of advanced composite materials",
      "Clean room and controlled environment requirements"
    ],
    solutions: [
      "Automated drilling and fastening systems",
      "Composite layup and inspection robots",
      "Precision measurement and quality control",
      "Clean room compatible autonomous systems",
      "Digital twin integration for process validation"
    ],
    icon: "plane"
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    tagline: "Autonomous systems for infrastructure management",
    description: "Energy infrastructure requires constant monitoring and maintenance across vast, often hazardous areas. Our autonomous robots inspect, maintain, and operate in environments too dangerous or remote for human workers.",
    challenges: [
      "Infrastructure spanning large geographic areas",
      "Hazardous environments (high voltage, confined spaces)",
      "24/7 monitoring and rapid response requirements",
      "Aging infrastructure requiring frequent inspection",
      "Regulatory compliance and safety standards"
    ],
    solutions: [
      "Autonomous inspection drones and ground robots",
      "Pipeline and transmission line monitoring",
      "Substation and facility automation",
      "Predictive maintenance with thermal imaging",
      "Emergency response and hazard detection"
    ],
    icon: "zap"
  },
  {
    id: "warehousing",
    title: "Warehousing & Distribution",
    tagline: "Intelligent automation for modern logistics",
    description: "E-commerce and just-in-time delivery have transformed logistics operations. Our autonomous systems handle the speed, accuracy, and flexibility required by modern warehousing and fulfillment operations.",
    challenges: [
      "Rapid order fulfillment with high accuracy",
      "Peak season capacity fluctuations",
      "SKU proliferation and inventory complexity",
      "Labor shortages and high turnover",
      "Integration with existing WMS and infrastructure"
    ],
    solutions: [
      "Autonomous mobile robots for goods movement",
      "Robotic picking and packing systems",
      "Automated storage and retrieval systems (AS/RS)",
      "Dynamic inventory slotting and optimization",
      "Real-time tracking and analytics dashboards"
    ],
    icon: "warehouse"
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    tagline: "Automation that enhances patient care",
    description: "Healthcare facilities require reliable automation that maintains strict hygiene standards and integrates seamlessly with clinical workflows. Our solutions improve efficiency while allowing staff to focus on patient care.",
    challenges: [
      "Staff time diverted from patient care",
      "Medication delivery errors and delays",
      "Laboratory throughput bottlenecks",
      "Strict hygiene and sterilization requirements",
      "Integration with EMR and hospital systems"
    ],
    solutions: [
      "Autonomous medication and supply delivery",
      "Laboratory automation and specimen handling",
      "Pharmacy robotic dispensing systems",
      "UV-C disinfection robots",
      "Linen and waste management automation"
    ],
    icon: "heart-pulse"
  },
  {
    id: "agriculture",
    title: "Agriculture & Food Production",
    tagline: "Sustainable farming through intelligent automation",
    description: "Modern agriculture faces pressure to increase yields while reducing environmental impact. Our autonomous systems enable precision farming, optimizing resource use and reducing waste through data-driven insights.",
    challenges: [
      "Labor shortages during critical seasons",
      "Optimizing water and chemical usage",
      "Monitoring large acreage efficiently",
      "Crop disease and pest detection",
      "Weather variability and climate challenges"
    ],
    solutions: [
      "Autonomous harvesting robots",
      "Precision spraying and fertilization",
      "Computer vision for crop health monitoring",
      "Automated planting and seeding systems",
      "Soil analysis and yield prediction"
    ],
    icon: "sprout"
  }
]
