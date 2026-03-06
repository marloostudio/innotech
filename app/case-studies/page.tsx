import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PillarHero } from "@/components/sections/pillar-hero"
import { PageShell, Section } from "@/components/page-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies — Real Results Across Industries",
  description: "See how InnoTech solutions are transforming operations across logistics, manufacturing, port, and mining industries."
}

const caseStudies = [
  {
    title: "Autonomous Logistics Fleet - 150 Vehicle Deployment",
    industry: "Logistics",
    challenge: "Major delivery company needed automated charging for growing autonomous delivery fleet",
    solution: "AutoLock robotic charging with fleet orchestration",
    results: [
      "99.7% successful autonomous charging connections",
      "60% reduction in depot operational costs",
      "Zero charging-related downtime in 12 months"
    ],
    status: "Coming Soon"
  },
  {
    title: "Port Terminal Automation - Container Operations",
    industry: "Port Operations",
    challenge: "Container terminal required V2X coordination for autonomous reach stackers and AGVs",
    solution: "RADARLink V2X communication with Cm-level Localization and Tracking",
    results: [
      "25% increase in container handling throughput",
      "Zero equipment collisions since deployment",
      "Sub-5cm positioning accuracy for container stacking"
    ],
    status: "Coming Soon"
  },
  {
    title: "Mining Operation - Underground Haul Truck Fleet",
    industry: "Mining",
    challenge: "Underground mine needed GPS-denied localization and automated charging for autonomous haul trucks",
    solution: "RADARLink Cm-level Localization and Tracking + AutoLock heavy-duty charging",
    results: [
      "30% increase in equipment utilization",
      "Continuous 24/7 autonomous operations",
      "Zero operator exposure to underground hazards"
    ],
    status: "Coming Soon"
  },
  {
    title: "Manufacturing Safety - Human-Robot Collaboration",
    industry: "Manufacturing",
    challenge: "Automotive manufacturer needed dynamic safety monitoring for collaborative robot work cells",
    solution: "SafeGuard real-time threat detection and compliance monitoring",
    results: [
      "Zero safety incidents since deployment",
      "40% increase in work cell productivity",
      "Automated ISO 10218 compliance reporting"
    ],
    status: "Coming Soon"
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Case Studies" }]} />
      <PillarHero
        badge="Case Studies"
        h1="Outcomes, Not Promises."
        h2="Real deployments. Measurable results. Documented from implementation through to steady-state operation."
        description="Every case study in this library documents a specific operational challenge, the InnoTech solution applied, and the outcomes measured post-deployment. Filter by industry or product line to find the scenario closest to yours."
        primaryCta={{ label: "Browse Case Studies", href: "#case-studies-grid" }}
        secondaryCta={{ label: "Request a Proposal", href: "/contact" }}
      />

      {/* Case Studies Grid */}
      <Section id="case-studies-grid" variant="light">
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-it-light-text-secondary">{study.industry}</Badge>
                  <Badge variant="outline" className="border-it-light-border text-it-light-text-secondary">{study.status}</Badge>
                </div>
                <CardTitle className="text-xl mb-4 text-pretty text-it-light-text-primary">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-it-light-text-muted mb-2">CHALLENGE</h4>
                    <p className="text-sm text-pretty text-it-light-text-secondary">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-it-light-text-muted mb-2">SOLUTION</h4>
                    <p className="text-sm text-pretty text-it-light-text-secondary">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-it-light-text-muted mb-2">RESULTS</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-it-light-text-secondary">
                          <LucideIcons.CheckCircle className="w-4 h-4 text-it-light-blue flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-pretty">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-it-light-text-muted mb-6">
            Detailed case studies coming soon. Contact us to learn more about these deployments.
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/demo">Request a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Transform Your Operations?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join leading companies deploying autonomous systems with InnoTech infrastructure
            </p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/demo">Schedule a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
      </Section>
    </>
  )
}
