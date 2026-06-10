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
          compact
          badge="Our Story"
          h1="How InnoTech Systems Came to Be"
          description="From a founding vision to building the infrastructure powering autonomous operations worldwide"
          align="left"
        />
      </div>

      <Section variant="light-bg" id="executive-leadership" className="scroll-mt-24 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-start">
          <div className="max-w-[680px] space-y-3 text-base text-it-light-text-secondary leading-normal">
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

          <div className="min-w-0 lg:max-w-lg lg:justify-self-end w-full">
            <h2 className="font-chakra text-xl font-semibold mb-1 text-it-light-text-primary">
              Executive Leadership
            </h2>
            <p className="text-sm mb-4 text-it-light-text-muted">
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
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
