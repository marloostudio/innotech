import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { CtaBanner } from "@/components/sections/cta-banner"
import { PillarHero } from "@/components/sections/pillar-hero"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Partners — InnoTech Systems",
  description: "Technology and industry partners.",
}

const heroProps = {
  h1: "Built on Strategic Partnerships",
  h2: "We work with technology leaders and industry partners to deliver integrated solutions for autonomous operations.",
  description: "From hardware and software integration to joint go-to-market, our partnerships extend our reach and strengthen our platform.",
  primaryCta: { label: "Become a Partner", href: "/contact" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
}

export default function PartnersPage() {
  return (
    <>
      <div style={{ borderBottom: "1px solid var(--it-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <Link href="/company" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Company</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Partners</span>
          </nav>
        </div>
      </div>

      <PillarHero {...heroProps} badge="Company" />

      <PageShell>
        <SectionHeader
          title="Our Partners"
          description="Technology and industry alliances"
        />
        <p className="max-w-3xl mx-auto text-center mb-12 text-lg" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
          [CONTENT NEEDED] InnoTech collaborates with OEMs, technology providers, and system integrators to deliver end-to-end solutions. Partnership copy and logos to be added by the client.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-[2/1] rounded-xl flex items-center justify-center border border-dashed"
              style={{
                background: "var(--it-surface-raised)",
                borderColor: "var(--it-border)",
              }}
            >
              <span className="text-xs" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace" }}>
                Partner Logo
              </span>
            </div>
          ))}
        </div>
      </PageShell>

      <CtaBanner
        title="Interested in Partnering?"
        description="Whether you're a technology provider, integrator, or operator, we'd like to hear from you."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Products", href: "/products" }}
      />
    </>
  )
}
