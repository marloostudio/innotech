import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { CtaBanner } from "@/components/sections/cta-banner"
import { PillarHero } from "@/components/sections/pillar-hero"
import { Shield, Lightbulb, Leaf, Users, Globe, Star, Award, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Values — InnoTech Systems",
  description: "What drives us — our mission and core values.",
  robots: { index: false, follow: false },
}

const heroProps = {
  h1: "What Drives Us",
  h2: "Our mission and core values guide how we build products and work with customers.",
  description: "Seven principles that shape our culture, decisions, and the solutions we deliver.",
  primaryCta: { label: "Contact Our Team", href: "/contact" },
  secondaryCta: { label: "Our Story & Team", href: "/company#our-story" },
}

const values = [
  { icon: Shield, title: "Safety First", description: "[CONTENT NEEDED] We design for safety and compliance in every system we ship." },
  { icon: Lightbulb, title: "Innovation", description: "[CONTENT NEEDED] We push the boundaries of what's possible in autonomy and robotics." },
  { icon: Leaf, title: "Sustainability", description: "[CONTENT NEEDED] Our solutions enable cleaner, more efficient operations." },
  { icon: Users, title: "Customer Success", description: "[CONTENT NEEDED] We succeed when our customers succeed." },
  { icon: Globe, title: "Global Impact", description: "[CONTENT NEEDED] We build for deployment at scale, across regions and industries." },
  { icon: Star, title: "Excellence", description: "[CONTENT NEEDED] We hold ourselves to the highest standards of quality and reliability." },
  { icon: Award, title: "Integrity", description: "[CONTENT NEEDED] We operate with transparency and integrity in everything we do." },
]

export default function ValuesPage() {
  return (
    <>
      <div style={{ borderBottom: "1px solid var(--it-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <Link href="/company" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Company</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Values</span>
          </nav>
        </div>
      </div>

      <PillarHero {...heroProps} badge="Company" />

      <PageShell>
        <SectionHeader
          title="Our Core Values"
          description="Seven principles that guide our work"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border p-6 transition-colors hover:border-[var(--it-blue-border)]"
              style={{
                background: "var(--it-surface)",
                borderColor: "var(--it-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--it-blue-subtle)" }}
              >
                <Icon className="w-6 h-6" style={{ color: "var(--it-blue)" }} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-sans), 'Inter', sans-serif" }}>
                {title}
              </h3>
              <p className="text-sm" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </PageShell>

      <CtaBanner
        title="Contact Our Team"
        description="Learn more about how we work and what we value."
        primaryCta={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCta={{ label: "Our Team", href: "/company#our-story" }}
      />
    </>
  )
}
