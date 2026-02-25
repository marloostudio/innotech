import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Badge } from "@/components/ui/badge"
import * as LucideIcons from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story — How InnoTech Systems Came to Be",
  description: "The journey of InnoTech Systems from founding vision to autonomous infrastructure leader."
}

const timeline = [
  {
    year: "2018",
    milestone: "Company Founded",
    description: "InnoTech Systems established with a vision to build the critical infrastructure needed for autonomous operations at scale."
  },
  {
    year: "2019",
    milestone: "First Pilot Deployment",
    description: "Successful pilot of autonomous charging system for electric delivery fleet, validating core technology."
  },
  {
    year: "2020",
    milestone: "SafeGuard Platform Launch",
    description: "Launched comprehensive safety monitoring platform for industrial and autonomous robotic operations."
  },
  {
    year: "2021",
    milestone: "AutoLock Production Release",
    description: "Released production version of AutoLock autonomous charging system for commercial fleets."
  },
  {
    year: "2022",
    milestone: "V2X Technology Integration",
    description: "Introduced Radar Link platform, enabling vehicle-to-everything communication and micro-localization."
  },
  {
    year: "2023",
    milestone: "International Expansion",
    description: "Expanded operations to Europe and Asia-Pacific to support global autonomous vehicle deployments."
  },
  {
    year: "2024",
    milestone: "100+ Fleet Deployments",
    description: "Reached milestone of 100+ production fleet deployments across logistics, port, and mining operations."
  }
]

export default function OurStoryPage() {
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
            <span className="text-foreground">Our Story</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Our Story</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              How InnoTech Systems Came to Be
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              From a founding vision to building the infrastructure powering autonomous operations worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <PageShell className="pt-16 md:pt-24 pb-8">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            InnoTech Systems was born from a simple observation: as autonomous vehicles and robotic systems advanced rapidly, the supporting infrastructure lagged behind. Companies were building incredible autonomous technology, but lacked the practical solutions needed to deploy them at scale.
          </p>
          <p>
            Our founders—veterans of the automotive, robotics, and software industries—recognized that three critical problems needed solving: autonomous charging without human intervention, comprehensive safety monitoring for human-robot environments, and reliable vehicle-to-everything communication.
          </p>
          <p>
            Rather than tackle these as separate problems, we built an integrated platform. SafeGuard monitors safety and compliance. AutoLock handles autonomous charging and fleet orchestration. Radar Link provides V2X connectivity and precise localization. Together, they create the foundation for autonomous operations.
          </p>
          <p>
            Today, InnoTech solutions power autonomous fleets, industrial robots, and mobile systems across logistics, manufacturing, port operations, and mining. But we&apos;re just getting started—the autonomous revolution is accelerating, and we&apos;re committed to providing the infrastructure that makes it possible.
          </p>
        </div>
      </PageShell>

      {/* Timeline */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <PageShell>
          <SectionHeader 
            title="Our Journey"
            description="Key milestones in building the future of autonomous infrastructure"
          />
          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2 min-h-[60px]" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{item.milestone}</h3>
                    <p className="text-muted-foreground text-pretty">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* CTA */}
      <CtaBanner 
        title="Join Us on the Journey"
        description="Be part of building the infrastructure for autonomous operations"
        primaryCta={{ label: "View Careers", href: "/company/careers" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
