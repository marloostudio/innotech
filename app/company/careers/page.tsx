import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { CtaBanner } from "@/components/sections/cta-banner"
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

const openRoles = [
  {
    title: "Senior Robotics Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Computer Vision Engineer",
    location: "Remote (US)",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Product Manager - Autonomous Systems",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Product"
  },
  {
    title: "Customer Success Engineer",
    location: "Chicago, IL / Remote",
    type: "Full-time",
    department: "Customer Success"
  }
]

export default function CareersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href="/company" className="hover:text-foreground transition-colors">Company</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Careers</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Careers</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Join the Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Build the infrastructure for autonomous operations
            </p>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              We&apos;re looking for talented engineers, designers, and operators to help us scale autonomous systems infrastructure worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <PageShell>
        <SectionHeader 
          title="Why InnoTech?"
          description="Benefits and perks of working with us"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title} className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]">
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
      </PageShell>

      {/* Open Roles */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <PageShell>
          <SectionHeader 
            title="Open Positions"
            description="Current opportunities to join InnoTech Systems"
          />
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <Card key={index} className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-it-light-text-primary">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-it-light-text-muted">
                        <div className="flex items-center gap-1">
                          <LucideIcons.MapPin className="w-4 h-4" />
                          {role.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <LucideIcons.Briefcase className="w-4 h-4" />
                          {role.type}
                        </div>
                        <Badge variant="outline">{role.department}</Badge>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Apply</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
<p className="text-it-light-text-muted mb-4">
            Don&apos;t see the right role? We&apos;re always interested in hearing from talented people.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </PageShell>
      </section>

      {/* CTA */}
      <CtaBanner 
        title="Ready to Make an Impact?"
        description="Join us in building the future of autonomous operations"
        primaryCta={{ label: "View All Positions", href: "/company/careers" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
