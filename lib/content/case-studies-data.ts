export interface CaseStudyListing {
  id: number
  client: string
  industry: string
  title: string
  challenge: string
  solution: string
  outcome: string
  tags: string[]
}

/** Placeholder listings on `/resources/case-studies` (no per-study URLs yet). Hub is password-gated; crawlers get 403 — see `PASSWORD_GATED_HUB_PATH_PREFIXES` in `@/lib/site-access`. */
export const caseStudyListings: CaseStudyListing[] = [
  {
    id: 1,
    client: "Leading Automotive Manufacturer",
    industry: "Automotive",
    title: "Automated Assembly Line Transformation",
    challenge:
      "Needed to increase production capacity by 40% while maintaining quality standards and worker safety.",
    solution: "Deployed 50+ collaborative robots with AI vision systems across multiple assembly lines.",
    outcome: "Achieved 45% throughput increase with 99.7% quality rate",
    tags: ["Manufacturing", "Collaborative Robots", "AI Vision"],
  },
  {
    id: 2,
    client: "Major E-Commerce Fulfillment Center",
    industry: "Warehousing",
    title: "Autonomous Warehouse Optimization",
    challenge:
      "Peak season demand exceeded manual picking capacity, causing delivery delays and customer dissatisfaction.",
    solution: "Implemented 30 AMR-1000 units with dynamic routing and WMS integration.",
    outcome: "Reduced order fulfillment time by 60%, eliminated peak season delays",
    tags: ["Logistics", "AMR", "Warehouse Automation"],
  },
  {
    id: 3,
    client: "Aerospace Components Manufacturer",
    industry: "Aerospace",
    title: "Precision Inspection for Complex Parts",
    challenge: "Manual inspection processes couldn't keep pace with production and missed subtle defects.",
    solution: "Deployed VisionPro systems with custom algorithms for aerospace-grade quality control.",
    outcome: "Defect detection improved by 85%, inspection time reduced by 70%",
    tags: ["Inspection", "Computer Vision", "Quality Control"],
  },
  {
    id: 4,
    client: "Regional Hospital Network",
    industry: "Healthcare",
    title: "Hospital Logistics Automation",
    challenge: "Nursing staff spending excessive time on medication delivery and supply transport.",
    solution:
      "Implemented autonomous delivery robots for medications, linens, and supplies across 3 facilities.",
    outcome: "Freed 15% of nursing time for patient care, zero delivery errors",
    tags: ["Healthcare", "Logistics", "Safety"],
  },
  {
    id: 5,
    client: "Energy Infrastructure Provider",
    industry: "Energy",
    title: "Autonomous Pipeline Inspection",
    challenge: "Manual pipeline inspections were costly, dangerous, and provided limited data coverage.",
    solution: "Deployed autonomous inspection robots with thermal imaging and predictive analytics.",
    outcome: "90% reduction in inspection costs, 3x increase in coverage frequency",
    tags: ["Energy", "Inspection", "Predictive Maintenance"],
  },
  {
    id: 6,
    client: "Large-Scale Agricultural Operation",
    industry: "Agriculture",
    title: "Precision Farming with Autonomous Robots",
    challenge: "Labor shortages and need to optimize water and fertilizer usage across 5000+ acres.",
    solution: "Implemented autonomous crop monitoring and precision application systems.",
    outcome: "25% reduction in water usage, 30% increase in yield per acre",
    tags: ["Agriculture", "Sustainability", "Autonomous Systems"],
  },
]
