import { CheckCircle2 } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/page-shell"
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
}

export function TechOverview({ title, description, pillars }: TechOverviewProps) {
  return (
    <Section>
      <SectionHeader title={title} description={description} />
      <Tabs defaultValue={pillars[0]?.id} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
          {pillars.map((pillar) => (
            <TabsTrigger 
              key={pillar.id} 
              value={pillar.id}
              className="text-sm md:text-base py-3"
            >
              {pillar.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {pillars.map((pillar) => (
          <TabsContent key={pillar.id} value={pillar.id} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                <CardDescription className="text-base pt-2">
                  {pillar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pillar.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
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
