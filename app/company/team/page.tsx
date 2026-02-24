import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import * as LucideIcons from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team — The People Behind the Technology",
  description: "Meet the experts building the infrastructure for autonomous operations."
}

const teams = [
  {
    name: "Leadership",
    icon: LucideIcons.Users,
    description: "Industry veterans with decades of experience in automotive systems, robotics, and enterprise software leading our strategic vision."
  },
  {
    name: "Engineering",
    icon: LucideIcons.Code,
    description: "World-class engineers specializing in robotics, AI, computer vision, embedded systems, and full-stack software development."
  },
  {
    name: "Product",
    icon: LucideIcons.Lightbulb,
    description: "Product managers and designers translating customer needs into innovative solutions that solve real-world problems."
  },
  {
    name: "Customer Success",
    icon: LucideIcons.Headphones,
    description: "Implementation specialists, support engineers, and account managers ensuring successful deployments and ongoing success."
  },
  {
    name: "Operations",
    icon: LucideIcons.Settings,
    description: "Supply chain, manufacturing, and logistics experts ensuring reliable delivery and deployment of our systems."
  },
  {
    name: "Business Development",
    icon: LucideIcons.TrendingUp,
    description: "Sales and partnership teams expanding our reach and building relationships across industries and regions."
  }
]

export default function TeamPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href="/company" className="hover:text-foreground transition-colors">Company</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Team</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              The Team Behind the Technology
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Passionate experts dedicated to building the future of autonomous operations
            </p>
          </div>
        </div>
      </section>

      {/* Teams */}
      <PageShell>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => {
            const Icon = team.icon
            return (
              <Card key={team.name}>
                <CardContent className="pt-6 space-y-4 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{team.name}</h3>
                  <p className="text-muted-foreground text-pretty">
                    {team.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </PageShell>

      {/* Culture */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <PageShell>
          <SectionHeader 
            title="Our Culture"
            description="What it's like to work at InnoTech"
          />
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              We&apos;re builders at heart—engineers, designers, and operators who love solving hard problems. Our team brings together expertise from automotive, robotics, software, and industrial automation to create solutions that work in the real world.
            </p>
            <p>
              We value collaboration, continuous learning, and a bias toward action. We believe the best solutions come from diverse perspectives and aren&apos;t afraid to challenge assumptions or try new approaches.
            </p>
            <p>
              Most importantly, we&apos;re mission-driven. We&apos;re not just building products—we&apos;re enabling the autonomous revolution that will transform how goods move, how factories operate, and how work gets done.
            </p>
          </div>
        </PageShell>
      </section>

      {/* CTA */}
      <CtaBanner 
        title="Join the InnoTech Team"
        description="Explore opportunities to work on cutting-edge autonomous systems technology"
        primaryCta={{ label: "View Open Positions", href: "/company/careers" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
