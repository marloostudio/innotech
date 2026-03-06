import { CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"
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
  const headerTheme = variant === "light-bg" ? "light" : "dark"
  const isLightSection = variant === "light-bg" || variant === "light-bg-2"
  return (
    <Section variant={variant} alt={alt}>
      <SectionHeader theme={headerTheme} title={title} description={description} />
      <Tabs defaultValue={pillars[0]?.id} className="w-full">
        <TabsList className={cn(
          "grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-0 p-0 rounded-lg overflow-hidden",
          isLightSection
            ? "bg-it-light-surface-2 border border-it-light-border shadow-(--it-light-shadow-sm)"
            : "bg-[var(--it-surface)] border border-it-border shadow-(--it-shadow-sm)"
        )}>
          {pillars.map((pillar) => (
            <TabsTrigger 
              key={pillar.id} 
              value={pillar.id}
              className={cn(
              "text-sm md:text-base py-3.5 px-4 border-l-[3px] border-l-transparent rounded-none transition-colors duration-150",
              isLightSection
                ? "text-it-light-text-muted data-[state=active]:bg-(--it-light-blue-subtle) data-[state=active]:text-it-light-text-primary data-[state=active]:border-l-it-light-blue data-[state=active]:font-medium data-[state=active]:shadow-none"
                : "text-it-text-muted data-[state=active]:bg-[var(--it-blue-subtle)] data-[state=active]:text-it-text-primary data-[state=active]:border-l-it-blue data-[state=active]:font-medium data-[state=active]:shadow-none"
            )}
            >
              {pillar.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {pillars.map((pillar) => (
          <TabsContent key={pillar.id} value={pillar.id} className="mt-6">
            <Card className={cn(
                isLightSection
                  ? "bg-it-light-surface border border-it-light-border shadow-(--it-light-shadow-sm)"
                  : "bg-[var(--it-surface-raised)] border border-it-border shadow-(--it-shadow-sm)"
              )}>
              <CardHeader>
                <CardTitle className={cn("text-2xl", isLightSection ? "text-it-light-text-primary" : "text-it-text-primary")}>{pillar.title}</CardTitle>
                <CardDescription className={cn("text-base pt-2", isLightSection ? "text-it-light-text-secondary" : "text-it-text-secondary")}>
                  {pillar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pillar.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className={cn("h-5 w-5 mt-0.5 shrink-0", isLightSection ? "text-it-light-blue" : "text-it-blue")} strokeWidth={1.5} />
                      <span className={cn(isLightSection ? "text-it-light-text-muted" : "text-it-text-muted")}>{feature}</span>
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
