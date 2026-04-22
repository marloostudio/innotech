import type { Metadata } from "next"
import Link from "next/link"
import { PageShell, Section } from "@/components/page-shell"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Badge } from "@/components/ui/badge"
import * as LucideIcons from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story — How InnoTech Systems Came to Be",
  description: "The journey of InnoTech Systems from founding vision to autonomous infrastructure leader."
}

export default function OurStoryPage() {
  return (
    <>
      {/* Breadcrumbs → dark */}
      <div className="border-b border-it-border" style={{ background: "var(--it-bg)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-it-text-muted">
            <Link href="/company" className="hover:text-it-text-primary transition-colors">Company</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span className="text-it-text-primary">Our Story</span>
          </div>
        </div>
      </div>

      {/* Hero → dark */}
      <section className="py-20 lg:py-28 it-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-it-border text-it-text-muted">Our Story</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance text-it-text-primary">
              How InnoTech Systems Came to Be
            </h1>
            <p className="text-xl text-it-text-secondary text-pretty">
              From a founding vision to building the infrastructure powering autonomous operations worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Story prose → dark */}
      <Section variant="dark">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-it-text-secondary leading-relaxed">
          <p>
            InnoTech Systems was born from a simple observation: as autonomous vehicles and robotic systems advanced rapidly, the supporting infrastructure lagged behind. Companies were building incredible autonomous technology, but lacked the practical solutions needed to deploy them at scale.
          </p>
          <p>
            Our founders—veterans of the automotive, robotics, and software industries—recognized that three critical problems needed solving: autonomous charging without human intervention, comprehensive safety monitoring for human-robot environments, and reliable vehicle-to-everything communication.
          </p>
          <p>
            Rather than tackle these as separate problems, we built an integrated platform. SafeGuard monitors safety and compliance. AutoDuck handles autonomous charging and fleet orchestration. RADARLink provides V2X connectivity and precise localization. Together, they create the foundation for autonomous operations.
          </p>
          <p>
            Today, InnoTech solutions power autonomous fleets, industrial robots, and mobile systems across logistics, manufacturing, port operations, and mining. But we&apos;re just getting started—the autonomous revolution is accelerating, and we&apos;re committed to providing the infrastructure that makes it possible.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Join Us on the Journey"
        description="Be part of building the infrastructure for autonomous operations"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  )
}
