import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { CtaBanner } from "@/components/sections/cta-banner"
import { TeamCard } from "@/components/site/team-card"
import { PillarHero } from "@/components/sections/pillar-hero"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Board & Advisors — InnoTech Systems",
  description: "Strategic guidance from industry leaders.",
}

const supervisoryBoard = [
  {
    name: "Dr. Helena Voss",
    title: "Chair, Supervisory Board",
    bio: "[CONTENT NEEDED] Former executive and board member in automotive and mobility. Provides governance and strategic oversight.",
  },
  {
    name: "James Morrison",
    title: "Supervisory Board Member",
    bio: "[CONTENT NEEDED] Finance and scaling experience. Advises on growth and capital strategy.",
  },
  {
    name: "Dr. Yuki Tanaka",
    title: "Supervisory Board Member",
    bio: "[CONTENT NEEDED] Technology and product leadership. Ensures alignment between strategy and execution.",
  },
]

const technicalAdvisoryBoard = [
  {
    name: "Prof. David Klein",
    title: "Technical Advisor — Autonomy",
    bio: "[CONTENT NEEDED] Academic and industry expert in autonomous systems and robotics. Advises on R&D direction.",
  },
  {
    name: "Dr. Rachel Okonkwo",
    title: "Technical Advisor — Safety & Standards",
    bio: "[CONTENT NEEDED] Safety certification and standards. Guides compliance and certification strategy.",
  },
  {
    name: "Marcus Webb",
    title: "Technical Advisor — Infrastructure",
    bio: "[CONTENT NEEDED] EV and charging infrastructure veteran. Advises on deployment and integration.",
  },
]

const industryAdvisors = [
  {
    name: "Sarah Lin",
    title: "Industry Advisor — Logistics",
    bio: "[CONTENT NEEDED] Former logistics and fleet operations leader. Brings operator perspective.",
  },
  {
    name: "Thomas Berg",
    title: "Industry Advisor — Ports & Terminals",
    bio: "[CONTENT NEEDED] Port and terminal operations background. Advises on maritime and port use cases.",
  },
]

const heroProps = {
  h1: "Strategic Guidance from Industry Leaders",
  h2: "Our supervisory board and advisory councils bring decades of experience in mobility, autonomy, and enterprise technology.",
  description: "InnoTech benefits from strategic and technical guidance from leaders who have built and scaled companies in automotive, robotics, and infrastructure.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "Our Team", href: "/company/team" },
}

export default function BoardAdvisorsPage() {
  return (
    <>
      <div style={{ borderBottom: "1px solid var(--it-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <Link href="/company" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Company</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Board & Advisors</span>
          </nav>
        </div>
      </div>

      <PillarHero {...heroProps} badge="Company" />

      <PageShell>
        <SectionHeader
          title="Supervisory Board"
          description="Governance and strategic oversight"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {supervisoryBoard.map((person) => (
            <TeamCard key={person.name} {...person} />
          ))}
        </div>
      </PageShell>

      <PageShell>
        <SectionHeader
          title="Technical Advisory Board"
          description="Expert guidance on technology, safety, and standards"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {technicalAdvisoryBoard.map((person) => (
            <TeamCard key={person.name} {...person} />
          ))}
        </div>
      </PageShell>

      <PageShell>
        <SectionHeader
          title="Industry Advisors"
          description="Operator and industry perspective"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industryAdvisors.map((person) => (
            <TeamCard key={person.name} {...person} />
          ))}
        </div>
      </PageShell>

      <CtaBanner
        title="Get in Touch"
        description="For questions about our board or advisory councils, contact our team."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Team", href: "/company/team" }}
      />
    </>
  )
}
