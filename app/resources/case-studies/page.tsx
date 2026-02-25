import type { Metadata } from "next"
import Link from "next/link"
import { Building2, ArrowRight } from "lucide-react"

import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world implementations and success stories showcasing how InnoTech Systems' robotics solutions transform enterprise operations."
}

// Placeholder case studies
const caseStudies = [
  {
    id: 1,
    client: "Leading Automotive Manufacturer",
    industry: "Automotive",
    title: "Automated Assembly Line Transformation",
    challenge: "Needed to increase production capacity by 40% while maintaining quality standards and worker safety.",
    solution: "Deployed 50+ collaborative robots with AI vision systems across multiple assembly lines.",
    outcome: "Achieved 45% throughput increase with 99.7% quality rate",
    tags: ["Manufacturing", "Collaborative Robots", "AI Vision"]
  },
  {
    id: 2,
    client: "Major E-Commerce Fulfillment Center",
    industry: "Warehousing",
    title: "Autonomous Warehouse Optimization",
    challenge: "Peak season demand exceeded manual picking capacity, causing delivery delays and customer dissatisfaction.",
    solution: "Implemented 30 AMR-1000 units with dynamic routing and WMS integration.",
    outcome: "Reduced order fulfillment time by 60%, eliminated peak season delays",
    tags: ["Logistics", "AMR", "Warehouse Automation"]
  },
  {
    id: 3,
    client: "Aerospace Components Manufacturer",
    industry: "Aerospace",
    title: "Precision Inspection for Complex Parts",
    challenge: "Manual inspection processes couldn't keep pace with production and missed subtle defects.",
    solution: "Deployed VisionPro systems with custom algorithms for aerospace-grade quality control.",
    outcome: "Defect detection improved by 85%, inspection time reduced by 70%",
    tags: ["Inspection", "Computer Vision", "Quality Control"]
  },
  {
    id: 4,
    client: "Regional Hospital Network",
    industry: "Healthcare",
    title: "Hospital Logistics Automation",
    challenge: "Nursing staff spending excessive time on medication delivery and supply transport.",
    solution: "Implemented autonomous delivery robots for medications, linens, and supplies across 3 facilities.",
    outcome: "Freed 15% of nursing time for patient care, zero delivery errors",
    tags: ["Healthcare", "Logistics", "Safety"]
  },
  {
    id: 5,
    client: "Energy Infrastructure Provider",
    industry: "Energy",
    title: "Autonomous Pipeline Inspection",
    challenge: "Manual pipeline inspections were costly, dangerous, and provided limited data coverage.",
    solution: "Deployed autonomous inspection robots with thermal imaging and predictive analytics.",
    outcome: "90% reduction in inspection costs, 3x increase in coverage frequency",
    tags: ["Energy", "Inspection", "Predictive Maintenance"]
  },
  {
    id: 6,
    client: "Large-Scale Agricultural Operation",
    industry: "Agriculture",
    title: "Precision Farming with Autonomous Robots",
    challenge: "Labor shortages and need to optimize water and fertilizer usage across 5000+ acres.",
    solution: "Implemented autonomous crop monitoring and precision application systems.",
    outcome: "25% reduction in water usage, 30% increase in yield per acre",
    tags: ["Agriculture", "Sustainability", "Autonomous Systems"]
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pt-24 pb-20 md:pb-28">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          Case Studies — Real Results Across Industries
        </h1>
        <SectionHeader 
          title="Success Stories"
          description="Real results from real deployments across industries"
          badge="Case Studies"
        />
      </Section>

      <Section className="py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.id} className="flex flex-col bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-it-light-border text-it-light-text-secondary">{study.industry}</Badge>
                  <Building2 className="h-5 w-5 text-it-light-text-muted" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-2xl text-it-light-text-primary">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-base pt-2 text-it-light-text-secondary">
                  {study.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-it-light-text-muted uppercase mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-it-light-text-secondary">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-it-light-text-muted uppercase mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-it-light-text-secondary">
                      {study.solution}
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-it-light-blue uppercase mb-1">
                      Outcome
                    </p>
                    <p className="text-sm font-medium text-it-light-text-primary">
                      {study.outcome}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="w-full">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-it-light-text-muted italic">
            Note: Case studies represent typical implementations and results. Client names are anonymized. Contact us for detailed references.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30 py-20 md:py-28">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-muted-foreground">
            Let&apos;s discuss how we can help you achieve similar results in your operations.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}
