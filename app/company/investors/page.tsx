import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { CtaBanner } from "@/components/sections/cta-banner"
import { PillarHero } from "@/components/sections/pillar-hero"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Investor Relations — InnoTech Systems",
  description: "Invest in the future of autonomous infrastructure.",
}

const heroProps = {
  h1: "Invest in the Future of Autonomous Infrastructure",
  h2: "InnoTech is building the critical backbone for autonomous fleets, charging, and safety — and we're backed by partners who share our long-term vision.",
  description: "Learn about our market opportunity, competitive edge, and how to request our investor materials.",
  primaryCta: { label: "Request Investor Deck", href: "/contact" },
  secondaryCta: { label: "Contact IR", href: "/contact" },
}

export default function InvestorsPage() {
  return (
    <>
      <div style={{ borderBottom: "1px solid var(--it-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <Link href="/company" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Company</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Investors</span>
          </nav>
        </div>
      </div>

      <PillarHero {...heroProps} badge="Company" />

      <PageShell>
        <SectionHeader
          title="Market Opportunity"
          description="The autonomous infrastructure space is expanding rapidly"
        />
        <div className="max-w-3xl space-y-4" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          <p className="text-lg">
            [CONTENT NEEDED] Autonomous vehicles and industrial robotics require new infrastructure for charging, safety, and communication. InnoTech addresses this with integrated products and a clear path to scale.
          </p>
          <p className="text-sm" style={{ color: "var(--it-text-muted)" }}>
            [CONFIRM WITH LEGAL BEFORE PUBLISHING] Market size and growth figures to be provided in investor materials.
          </p>
        </div>
      </PageShell>

      <PageShell>
        <SectionHeader
          title="Competitive Edge"
          description="Why InnoTech is positioned to lead"
        />
        <div className="max-w-3xl space-y-4" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          <p className="text-lg">
            [CONTENT NEEDED] Integrated platform (SafeGuard, AutoDuck, RADARLink), proven deployments, and a team with deep domain expertise in autonomy and industrial systems.
          </p>
        </div>
      </PageShell>

      <PageShell>
        <SectionHeader
          title="Funding History"
          description="Our journey and milestones"
        />
        <div className="max-w-3xl space-y-4" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          <p className="text-lg">
            [CONTENT NEEDED] Overview of funding stages and key milestones.
          </p>
          <p className="text-sm" style={{ color: "var(--it-text-muted)" }}>
            [CONFIRM WITH LEGAL BEFORE PUBLISHING] All financial figures and round details to be confirmed before publication.
          </p>
        </div>
      </PageShell>

      <CtaBanner
        title="Request Our Investor Deck"
        description="Get the full picture: market opportunity, traction, and financials. Contact our team to request materials."
        primaryCta={{ label: "Request Investor Deck", href: "/contact" }}
        secondaryCta={{ label: "Contact IR", href: "/contact" }}
      />
    </>
  )
}
