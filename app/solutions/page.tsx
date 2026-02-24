import type { Metadata } from "next"
import * as LucideIcons from "lucide-react"

import { PillarHero } from "@/components/sections/pillar-hero"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CtaBanner } from "@/components/sections/cta-banner"

import { solutions } from "@/lib/content/solutions"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Comprehensive automation solutions for manufacturing, logistics, inspection, maintenance, healthcare, and agriculture industries."
}

export default function SolutionsPage() {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[
      iconName.split('-').map((word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('').replace(/[^a-zA-Z0-9]/g, '')
    ] as LucideIcons.LucideIcon
    
    return Icon || LucideIcons.Box
  }

  return (
    <>
      <PillarHero
        badge="Solutions"
        h1="Start with the Problem. We'll Map You to the Right Solution."
        h2="Autonomous charging, dynamic safety, and intelligent connectivity — each designed to eliminate a specific operational bottleneck."
        description="Not every operator knows which product they need. This section organises our capabilities by the challenge you're trying to solve — whether that's removing humans from high-voltage charging environments, coordinating dozens of autonomous vehicles in a shared space, or tracking assets across a GNSS-denied facility."
        primaryCta={{ label: "Find Your Solution", href: "#manufacturing" }}
        secondaryCta={{ label: "Book a Consultation", href: "/contact" }}
      />

      <Section className="py-8">
        <div className="space-y-8">
          {solutions.map((solution, index) => {
            const Icon = getIcon(solution.icon)
            
            return (
              <div key={solution.id}>
                <Card className="overflow-hidden" id={solution.id}>
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl">{solution.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {solution.tagline}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {solution.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="default">Benefits</Badge>
                        </div>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <LucideIcons.CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">Capabilities</Badge>
                        </div>
                        <ul className="space-y-2">
                          {solution.capabilities.map((capability, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <LucideIcons.Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < solutions.length - 1 && <Separator className="my-8" />}
              </div>
            )
          })}
        </div>
      </Section>

      <CtaBanner 
        headline="Ready to Implement These Solutions?"
        description="Let's discuss how our solutions can transform your operations and deliver measurable results."
        ctaText="Schedule a Consultation"
        ctaHref="/contact"
      />
    </>
  )
}
