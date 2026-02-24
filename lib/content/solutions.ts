export interface Solution {
  id: string
  title: string
  tagline: string
  description: string
  benefits: string[]
  capabilities: string[]
  icon: string
}

export const solutions: Solution[] = [
  {
    id: "manufacturing",
    title: "Smart Manufacturing",
    tagline: "Transform production lines with intelligent automation",
    description: "Our comprehensive smart manufacturing solutions integrate collaborative robots, autonomous material handling, and real-time quality control to optimize your production operations. From assembly to packaging, we deliver end-to-end automation that adapts to your manufacturing needs.",
    benefits: [
      "Increase production throughput by up to 45%",
      "Reduce defect rates with AI-powered quality control",
      "Minimize downtime through predictive maintenance",
      "Scale operations without proportional labor costs",
      "Improve workplace safety with collaborative systems"
    ],
    capabilities: [
      "Automated assembly and welding",
      "Robotic material handling and kitting",
      "In-line visual inspection",
      "Flexible production cell design",
      "ERP and MES integration",
      "Real-time production analytics"
    ],
    icon: "factory"
  },
  {
    id: "logistics",
    title: "Autonomous Logistics",
    tagline: "Streamline warehouse and distribution operations",
    description: "Revolutionize your logistics operations with autonomous mobile robots, intelligent inventory management, and dynamic routing systems. Our solutions optimize material flow from receiving to shipping, reducing costs and improving accuracy.",
    benefits: [
      "Reduce order fulfillment time by up to 60%",
      "Improve inventory accuracy to 99%+",
      "Lower operational costs through labor optimization",
      "Scale capacity during peak seasons",
      "Enhance worker safety and ergonomics"
    ],
    capabilities: [
      "Automated goods-to-person picking",
      "Autonomous pallet transport",
      "Dynamic slotting optimization",
      "Cross-docking automation",
      "WMS and TMS integration",
      "Real-time inventory tracking"
    ],
    icon: "truck"
  },
  {
    id: "inspection",
    title: "Automated Inspection",
    tagline: "Ensure consistent quality with intelligent vision systems",
    description: "Deploy AI-powered visual inspection systems that detect defects with superhuman accuracy. Our solutions combine high-resolution imaging, machine learning, and real-time analytics to maintain the highest quality standards.",
    benefits: [
      "Detect defects as small as 0.1mm",
      "Achieve consistent inspection quality 24/7",
      "Reduce false positives with adaptive algorithms",
      "Generate comprehensive quality reports",
      "Integrate with production control systems"
    ],
    capabilities: [
      "Surface defect detection",
      "Dimensional measurement",
      "Color and texture analysis",
      "OCR and barcode verification",
      "X-ray and thermal imaging integration",
      "Statistical process control"
    ],
    icon: "scan-search"
  },
  {
    id: "maintenance",
    title: "Predictive Maintenance",
    tagline: "Prevent downtime with intelligent monitoring",
    description: "Leverage autonomous inspection robots and IoT sensors to continuously monitor your equipment health. Our predictive maintenance solutions use machine learning to identify potential failures before they occur, maximizing uptime.",
    benefits: [
      "Reduce unplanned downtime by up to 70%",
      "Extend equipment lifespan through optimal maintenance",
      "Lower maintenance costs with targeted interventions",
      "Improve safety by identifying hazards early",
      "Optimize maintenance scheduling and resource allocation"
    ],
    capabilities: [
      "Autonomous equipment inspection",
      "Vibration and thermal analysis",
      "Acoustic anomaly detection",
      "Predictive failure modeling",
      "CMMS integration",
      "Mobile maintenance alerts"
    ],
    icon: "wrench"
  },
  {
    id: "healthcare",
    title: "Healthcare Automation",
    tagline: "Enhance patient care with intelligent logistics",
    description: "Automate non-clinical tasks in hospitals and medical facilities, allowing healthcare professionals to focus on patient care. Our solutions handle medication delivery, supply transport, and laboratory automation with precision and reliability.",
    benefits: [
      "Free up nursing staff for patient care",
      "Ensure medication delivery accuracy",
      "Reduce supply chain errors",
      "Maintain strict hygiene standards",
      "Improve laboratory efficiency"
    ],
    capabilities: [
      "Medication cart delivery",
      "Laboratory specimen transport",
      "Linen and waste handling",
      "Surgical supply logistics",
      "Pharmacy automation",
      "Integration with hospital systems"
    ],
    icon: "heart-pulse"
  },
  {
    id: "agriculture",
    title: "Precision Agriculture",
    tagline: "Optimize farming with autonomous field robots",
    description: "Transform agricultural operations with autonomous robots for planting, monitoring, and harvesting. Our systems use computer vision and AI to optimize crop management, reduce waste, and increase yields.",
    benefits: [
      "Increase crop yields through precision care",
      "Reduce water and chemical usage",
      "Lower labor costs for routine tasks",
      "Monitor crop health in real-time",
      "Operate 24/7 in all conditions"
    ],
    capabilities: [
      "Autonomous harvesting",
      "Precision spraying and fertilization",
      "Crop health monitoring",
      "Weed identification and removal",
      "Soil analysis and mapping",
      "Yield prediction and analytics"
    ],
    icon: "sprout"
  }
]
