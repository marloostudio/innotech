import type { Metadata } from "next"
import type { ReactNode } from "react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { PillarHero } from "@/components/sections/pillar-hero"
import { Section } from "@/components/page-shell"
import { TeamCard } from "@/components/site/team-card"

export const metadata: Metadata = {
  title: "About InnoTech Systems",
  description:
    "Learn about InnoTech Systems' mission, our story, executive leadership, and commitment to intelligent automation and robotics.",
}

const fredBio =
  "InnoTech Systems was founded in early 2018 by Fred Daneshgaran with the purpose of helping people and improving the quality of their lives using Artificial Intelligence technology.\nDr. Daneshgaran brings a wealth of experience from his involvement in several startup companies and his extensive R&D background in telecommunications, RF systems, VLSI, and quantum electronics."

const executiveLeadership = [
  {
    name: "Fred Daneshgaran",
    title: "CEO and Co-Founder",
    bio: fredBio,
    linkedin: "https://www.linkedin.com/in/fred-daneshgaran-a4284b7/",
    omitImage: true as const,
  },
]

function Em({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-it-light-text-primary">{children}</strong>
}

export default function CompanyPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Company" }]} />

      <div id="our-story" className="scroll-mt-24">
        <PillarHero
          badge="Our Story"
          h1="How InnoTech Systems Came to Be"
          description="From a founding vision to building the infrastructure powering autonomous operations worldwide"
        />
      </div>

      <Section variant="light-bg">
        <div className="max-w-3xl mx-auto space-y-4 text-lg text-it-light-text-secondary leading-relaxed">
          <p>
            InnoTech Systems was born from a simple observation: as autonomous vehicles and robotic systems advanced rapidly,{" "}
            <Em>the supporting infrastructure lagged behind</Em>. Companies were building incredible autonomous technology, but lacked the practical solutions needed to <Em>deploy them at scale</Em>.
          </p>
          <p>
            Our founders—veterans of the automotive, robotics, and software industries—recognized that <Em>three critical problems</Em> needed solving: <Em>autonomous charging without human intervention</Em>,{" "}
            <Em>comprehensive safety monitoring for human-robot environments</Em>, and <Em>reliable vehicle-to-everything communication</Em>.
          </p>
          <p>
            Rather than tackle these as separate problems, we built an <Em>integrated platform</Em>. <Em>SafeGuard</Em> monitors safety and compliance. <Em>AutoDuck</Em> handles autonomous charging and fleet orchestration.{" "}
            <Em>RADARLink</Em> provides V2X connectivity and precise localization. Together, they create <Em>the foundation for autonomous operations</Em>.
          </p>
        </div>
      </Section>

      <Section variant="white" id="executive-leadership" className="scroll-mt-24">
        <div className="mx-auto max-w-3xl text-center">
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
          <div>
            {executiveLeadership.map((person) => (
              <TeamCard
                key={person.name}
                name={person.name}
                title={person.title}
                bio={person.bio}
                linkedin={person.linkedin}
                omitImage={person.omitImage}
                centered
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
