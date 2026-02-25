import type { Metadata } from "next"
import Link from "next/link"
import { Target, Eye, Award, Users } from "lucide-react"

import { PillarHero } from "@/components/sections/pillar-hero"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "About InnoTech Systems",
  description: "Learn about InnoTech Systems' mission to empower industries through intelligent automation and our commitment to innovation in robotics."
}

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in robotics and autonomous systems, investing heavily in R&D to deliver cutting-edge solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in engineering, safety, and customer service, ensuring every deployment exceeds expectations."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with our clients as long-term partners, understanding their unique challenges and growing alongside their businesses."
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our relationships with customers, partners, and employees."
  }
]

const quickLinks = [
  { title: "Our Story", href: "/company/our-story", description: "How InnoTech Systems came to be" },
  { title: "Our Team", href: "/company/team", description: "The people behind the technology" },
  { title: "Mission & Values", href: "/company/values", description: "What drives us forward" },
  { title: "Careers", href: "/company/careers", description: "Join the InnoTech team" }
]

export default function CompanyPage() {
  return (
    <>
      <PillarHero
        badge="Company"
        h1="We're Building the Infrastructure Layer for Autonomous Mobility."
        h2="Founded in San Francisco. Built by engineers who got frustrated that vehicles were getting smarter while the infrastructure around them stayed manual."
        description="InnoTech Systems was founded to close the gap between autonomous vehicles and the physical infrastructure they depend on. Today our team works across robotics, AI, power electronics, and communications to build systems that are deployed in some of the world's most demanding operational environments."
        primaryCta={{ label: "Meet the Team", href: "/company/team" }}
        secondaryCta={{ label: "View Open Roles", href: "/company/careers" }}
      />

      <PageShell>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            InnoTech Systems provides the critical infrastructure that enables autonomous operations across industries. From robotic charging systems to safety monitoring and V2X connectivity, our products work together to create comprehensive solutions for the future of mobility.
          </p>
          <p>
            Founded by experts in robotics, automotive systems, and enterprise software, we understand the unique challenges of deploying autonomous systems at scale. Our focus is on delivering reliable, production-ready solutions that integrate seamlessly with existing operations.
          </p>
          <p>
            What sets us apart is our commitment to real-world deployment. We don&apos;t just develop technology—we partner with clients to ensure successful implementation, providing ongoing support and continuous improvement.
          </p>
        </div>
      </PageShell>

      <Separator />

      <PageShell>
        <SectionHeader 
          title="Explore InnoTech"
          description="Learn more about who we are and what we stand for"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {quickLinks.map((link) => (
            <Card key={link.href} className="group bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow">
              <CardContent className="pt-6">
                <Link href={link.href} className="block">
                  <h3 className="text-xl font-semibold mb-2 text-it-light-text-primary group-hover:text-it-light-blue transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-it-light-text-muted">{link.description}</p>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageShell>

      <section className="bg-muted/30 py-16 lg:py-24">
        <PageShell>
          <SectionHeader 
            title="Our Values"
            description="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--it-light-blue-subtle)]">
                        <Icon className="h-5 w-5 text-it-light-blue" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-it-light-text-primary">{value.title}</h3>
                    </div>
                    <p className="text-it-light-text-secondary leading-relaxed text-pretty">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </PageShell>
      </section>

      <CtaBanner 
        title="Let's Build the Future Together"
        description="Whether you're exploring autonomous systems for the first time or scaling existing operations, we're here to help."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "View Careers", href: "/company/careers" }}
      />
    </>
  )
}
