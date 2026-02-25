import type { Metadata } from "next"

import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { TechOverview } from "@/components/sections/tech-overview"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Card, CardContent } from "@/components/ui/card"

import { technologyPillars } from "@/lib/content/home"

export const metadata: Metadata = {
  title: "Technology",
  description: "Advanced AI, computer vision, autonomous navigation, and enterprise integration powering our robotics solutions."
}

const technologyOverview = {
  title: "Cutting-Edge Technology Stack",
  description: "Our platform combines advanced AI, autonomous systems, and enterprise-grade integration to deliver reliable, scalable automation solutions.",
  content: [
    "At InnoTech Systems, we leverage state-of-the-art technologies to create robotics solutions that are not only powerful but also practical for real-world enterprise deployments.",
    "Our technology stack is built on three core pillars: AI & Computer Vision for intelligent perception, Autonomous Navigation for safe and efficient movement, and Enterprise Integration for seamless connectivity with your existing systems.",
    "Every component is designed with reliability, security, and scalability in mind, ensuring that our solutions grow with your business needs."
  ]
}

const additionalTech = [
  {
    title: "Safety & Compliance",
    description: "All systems are designed to meet international safety standards including ISO 10218 and ISO/TS 15066 for collaborative robotics. Multi-layered safety protocols ensure safe operation in dynamic human-robot collaboration environments."
  },
  {
    title: "Scalability",
    description: "Our modular architecture allows you to start with a single robot and scale to fleet operations seamlessly. Centralized management and cloud-based analytics support deployments from pilot projects to enterprise-wide implementations."
  },
  {
    title: "Security",
    description: "Enterprise-grade security with encrypted communications, role-based access control, and comprehensive audit logging. We support both cloud and on-premise deployments to meet your security requirements."
  },
  {
    title: "Continuous Innovation",
    description: "Our commitment to R&D ensures you benefit from the latest advances in robotics, AI, and automation. Regular software updates deliver new capabilities and improvements without hardware replacement."
  }
]

export default function TechnologyPage() {
  return (
    <>
      <Section className="pt-24 pb-12">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-chakra)" }}
        >
          Powering Autonomy Through Innovation
        </h1>
        <SectionHeader 
          title={technologyOverview.title}
          description={technologyOverview.description}
          badge="Technology"
        />
      </Section>

      <Section className="py-8">
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {technologyOverview.content.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <TechOverview 
          title="Core Technology Pillars"
          pillars={technologyPillars}
        />
      </Section>

      <Section className="bg-muted/30 py-16">
        <SectionHeader 
          title="Built for Enterprise"
          description="Beyond core capabilities, our technology is designed for the demands of enterprise operations"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {additionalTech.map((item, index) => (
            <Card key={index} className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]">
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-semibold text-it-light-text-primary">{item.title}</h3>
                <p className="text-it-light-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBanner 
        headline="See Our Technology in Action"
        description="Schedule a demo to experience how our advanced technology can transform your operations."
        ctaText="Request a Demo"
        ctaHref="/contact"
      />
    </>
  )
}
