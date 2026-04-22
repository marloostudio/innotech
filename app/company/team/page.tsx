import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/page-shell"
import { CtaBanner } from "@/components/sections/cta-banner"
import { TeamCard } from "@/components/site/team-card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team — The People Behind the Technology",
  description: "Meet the experts building the infrastructure for autonomous operations.",
}

const fredBio =
  "InnoTech Systems was founded in early 2018 by Fred Daneshgaran with the purpose of helping people and improving the quality of their lives using Artificial Intelligence technology. Dr. Daneshgaran brings a wealth of experience from his involvement in several startup companies and his extensive R&D background in telecommunications, RF systems, VLSI, and quantum electronics."

const executiveLeadership = [
  {
    name: "Fred Daneshgaran",
    title: "CEO and Co-Founder",
    bio: fredBio,
    linkedin: "https://www.linkedin.com/in/fred-daneshgaran-a4284b7/",
    twitter: "#",
    omitImage: true as const,
  },
]

export default function TeamPage() {
  return (
    <>
      <div className="border-b" style={{ borderColor: "var(--it-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            <Link href="/company" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>
              Company
            </Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Team</span>
          </div>
        </div>
      </div>

      <section className="py-10 lg:py-14" style={{ background: "var(--it-hero-gradient)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 border-it-border" style={{ color: "var(--it-text-secondary)" }}>
              Our Team
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-balance" style={{ color: "var(--it-text-primary)" }}>
              The Team Behind the Technology
            </h1>
            <p className="text-lg text-pretty" style={{ color: "var(--it-text-muted)" }}>
              Passionate experts building the future of intelligent infrastructure
            </p>
          </div>
        </div>
      </section>

      <Section variant="white">
        <div>
          <h2
            className="text-xl font-semibold mb-1"
            style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Executive Leadership
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            Strategy and technology vision
          </p>
          <div className="max-w-2xl">
            {executiveLeadership.map((person) => (
              <TeamCard
                key={person.name}
                name={person.name}
                title={person.title}
                bio={person.bio}
                linkedin={person.linkedin}
                omitImage={person.omitImage}
              />
            ))}
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Get in touch"
        description="Learn how InnoTech can support your autonomous operations"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Request a Demo", href: "/demo" }}
      />
    </>
  )
}
