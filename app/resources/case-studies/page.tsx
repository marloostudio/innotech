import type { Metadata } from "next"
import Link from "next/link"
import { Building2, ArrowRight } from "lucide-react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { caseStudyListings } from "@/lib/content/case-studies-data"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world implementations and success stories showcasing how InnoTech Systems' robotics solutions transform enterprise operations.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Resources", href: "/resources" }, { label: "Case Studies" }]} />
      <Section>
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

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudyListings.map((study) => (
            <Card
              key={study.id}
              id={`case-study-${study.id}`}
              className="flex flex-col scroll-mt-24 bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow"
            >
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

      <Section className="bg-muted/30">
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
