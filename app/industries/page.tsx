import type { Metadata } from "next"
import * as LucideIcons from "lucide-react"

import { PillarHero } from "@/components/sections/pillar-hero"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CtaBanner } from "@/components/sections/cta-banner"

import { industries } from "@/lib/content/industries"

export const metadata: Metadata = {
  title: "Industries",
  description: "Robotics and automation solutions for automotive, aerospace, energy, warehousing, healthcare, and agriculture industries."
}

export default function IndustriesPage() {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[
      iconName.split('-').map((word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('').replace(/[^a-zA-Z0-9]/g, '')
    ] as LucideIcons.LucideIcon
    
    return Icon || LucideIcons.Building2
  }

  return (
    <>
      <PillarHero
        badge="Industries"
        h1="Built for the Industries That Can't Afford Downtime."
        h2="From deep-mine haul roads to airport ground transport hubs — InnoTech deploys where the operational stakes are highest."
        description="Each industry we serve has distinct infrastructure demands, safety regulations, and operational rhythms. Our systems are configured — not just sold — to fit your environment. Select your industry to see how InnoTech is applied in your context."
        primaryCta={{ label: "Find Your Industry", href: "#automotive" }}
        secondaryCta={{ label: "Request a Site Assessment", href: "/contact" }}
      />

      <Section className="py-8">
        <div className="space-y-8">
          {industries.map((industry, index) => {
            const Icon = getIcon(industry.icon)
            
            return (
              <div key={industry.id}>
                <Card className="overflow-hidden bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] border-l-[3px] border-l-[var(--it-light-industries)]" id={industry.id}>
                  <CardHeader className="bg-it-light-surface-2">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--it-light-blue-subtle)] flex-shrink-0">
                        <Icon className="h-7 w-7 text-it-light-blue" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl text-it-light-text-primary">{industry.title}</CardTitle>
                        <CardDescription className="text-base mt-2 text-it-light-text-secondary">
                          {industry.tagline}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p className="text-it-light-text-secondary leading-relaxed text-lg">
                      {industry.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="destructive">Challenges</Badge>
                        </div>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm text-it-light-text-muted flex items-start gap-2">
                              <LucideIcons.AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="default">Our Solutions</Badge>
                        </div>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm text-it-light-text-muted flex items-start gap-2">
                              <LucideIcons.CheckCircle2 className="h-4 w-4 text-it-light-blue mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < industries.length - 1 && <Separator className="my-8" />}
              </div>
            )
          })}
        </div>
      </Section>

      <CtaBanner 
        headline="Let's Solve Your Industry Challenges"
        description="Connect with our industry specialists to explore how we can address your specific automation needs."
        ctaText="Get Started"
        ctaHref="/contact"
      />
    </>
  )
}
