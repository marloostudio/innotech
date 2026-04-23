import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PillarHero } from "@/components/sections/pillar-hero"
import { PageShell, Section } from "@/components/page-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"
import { marketingCaseStudyListings } from "@/lib/content/case-studies-hub"

export const metadata: Metadata = {
  title: "Case Studies — Real Results Across Industries",
  description: "See how InnoTech solutions are transforming operations across logistics, manufacturing, port, and mining industries.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

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
          {marketingCaseStudyListings.map((study) => (
            <Card
              key={study.id}
              id={`marketing-case-${study.id}`}
              className="flex flex-col scroll-mt-24 bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]"
            >
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
