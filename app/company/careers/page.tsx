import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PageShell, Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import * as LucideIcons from "lucide-react"

export const metadata: Metadata = {
  title: "Careers at InnoTech Systems",
  description: "Join the team building the infrastructure for autonomous operations."
}

const benefits = [
  { icon: LucideIcons.Heart, title: "Comprehensive Health Coverage", description: "Medical, dental, and vision insurance for you and your family" },
  { icon: LucideIcons.PiggyBank, title: "Competitive Compensation", description: "Market-leading salaries plus equity in a high-growth company" },
  { icon: LucideIcons.Palmtree, title: "Flexible Time Off", description: "Generous PTO policy plus company holidays" },
  { icon: LucideIcons.GraduationCap, title: "Learning & Development", description: "Conference attendance, courses, and continuous learning budget" },
  { icon: LucideIcons.Home, title: "Hybrid Work", description: "Flexible work arrangements with remote and in-office options" },
  { icon: LucideIcons.Users, title: "Team Events", description: "Regular team building, offsites, and social events" }
]

export default function CareersPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Company", href: "/company" }, { label: "Careers" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Careers</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Ready to Make an Impact?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Join us in building the future of autonomous operations.
            </p>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              Learn about life at InnoTech, our benefits, and how we work together below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-it-light-surface py-20 lg:py-28">
        <PageShell>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p
              className="text-lg text-pretty"
              style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
            >
              We are not currently hiring, check this page soon for updates.
            </p>
            <Button
              variant="outline"
              className="border-it-light-border text-it-light-text-primary"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </PageShell>
      </section>

      {/* Benefits */}
      <Section variant="dark">
        <SectionHeader
          title="Why InnoTech?"
          description="Benefits and perks of working with us"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card
                key={benefit.title}
                className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]"
              >
                <CardContent className="pt-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--it-light-blue-subtle)]">
                    <Icon className="w-6 h-6 text-it-light-blue" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-it-light-text-primary">{benefit.title}</h3>
                  <p className="text-sm text-it-light-text-muted text-pretty">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

    </>
  )
}
