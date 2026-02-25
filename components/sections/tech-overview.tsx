import { CheckCircle2 } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, type SectionVariant } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

interface TechPillar {
  id: string
  title: string
  description: string
  features: string[]
}

interface TechOverviewProps {
  title: string
  description?: string
  pillars: TechPillar[]
  variant?: SectionVariant
  alt?: boolean
}

export function TechOverview({ title, description, pillars, variant, alt }: TechOverviewProps) {
  return (
    <Section variant={variant} alt={alt}>
      <SectionHeader title={title} description={description} />
      <Tabs defaultValue={pillars[0]?.id} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto bg-it-light-surface-2 border border-it-light-border">
          {pillars.map((pillar) => (
            <TabsTrigger 
              key={pillar.id} 
              value={pillar.id}
              className="text-sm md:text-base py-3 text-it-light-text-secondary data-[state=active]:bg-it-light-surface data-[state=active]:text-it-light-text-primary data-[state=active]:border-it-light-border"
            >
              {pillar.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {pillars.map((pillar) => (
          <TabsContent key={pillar.id} value={pillar.id} className="mt-6">
            <Card className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)]">
              <CardHeader>
                <CardTitle className="text-2xl text-it-light-text-primary">{pillar.title}</CardTitle>
                <CardDescription className="text-base pt-2 text-it-light-text-secondary">
                  {pillar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pillar.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-it-light-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span className="text-it-light-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  )
}
