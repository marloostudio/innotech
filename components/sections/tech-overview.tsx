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

/** Overrides shadcn Tabs defaults (muted track + ring shadows) for a calmer InnoTech look. */
const listLight =
  "inline-flex w-full flex-col gap-1 p-1.5 sm:flex-row sm:items-stretch sm:gap-1.5 rounded-xl border border-it-light-border bg-slate-200/35 shadow-none h-auto"
const listDark =
  "inline-flex w-full flex-col gap-1 p-1.5 sm:flex-row sm:items-stretch sm:gap-1.5 rounded-xl border border-it-border bg-it-surface-raised shadow-none h-auto"

const triggerBase =
  "flex-1 min-h-[3rem] justify-center rounded-lg border-0 px-4 py-3 text-sm font-medium transition-[color,background,box-shadow] duration-200 shadow-none outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:opacity-50 data-[state=active]:shadow-none sm:text-base"

const triggerLightInactive =
  "text-it-light-text-muted bg-transparent hover:bg-white/60 hover:text-it-light-text-secondary data-[state=active]:bg-white data-[state=active]:text-it-light-text-primary data-[state=active]:ring-1 data-[state=active]:ring-slate-300/80 data-[state=active]:shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
const triggerLightFocus = "focus-visible:ring-it-light-blue/40"

const triggerDarkInactive =
  "text-it-text-muted bg-transparent hover:bg-it-surface/80 hover:text-it-text-secondary data-[state=active]:bg-it-bg data-[state=active]:text-it-text-primary data-[state=active]:ring-1 data-[state=active]:ring-it-border data-[state=active]:shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
const triggerDarkFocus = "focus-visible:ring-it-blue/35"

export function TechOverview({ title, description, pillars, variant, alt }: TechOverviewProps) {
  const headerTheme = variant === "light-bg" ? "light" : "dark"
  const isLightSection = variant === "light-bg" || variant === "light-bg-2"
  return (
    <Section variant={variant} alt={alt}>
      <SectionHeader theme={headerTheme} title={title} description={description} />
      <Tabs defaultValue={pillars[0]?.id} className="w-full">
        <TabsList className={isLightSection ? listLight : listDark}>
          {pillars.map((pillar) => (
            <TabsTrigger
              key={pillar.id}
              value={pillar.id}
              className={cn(
                triggerBase,
                isLightSection
                  ? cn(triggerLightInactive, triggerLightFocus)
                  : cn(triggerDarkInactive, triggerDarkFocus)
              )}
            >
              {pillar.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {pillars.map((pillar) => (
          <TabsContent key={pillar.id} value={pillar.id} className="mt-8">
            <Card
              className={cn(
                isLightSection
                  ? "border-it-light-border bg-it-light-surface shadow-(--it-light-shadow-sm)"
                  : "border-it-border bg-it-surface-raised shadow-(--it-shadow-sm)"
              )}
            >
              <CardHeader>
                <CardTitle
                  className={cn("text-2xl", isLightSection ? "text-it-light-text-primary" : "text-it-text-primary")}
                >
                  {pillar.title}
                </CardTitle>
                <CardDescription
                  className={cn("text-base pt-2", isLightSection ? "text-it-light-text-secondary" : "text-it-text-secondary")}
                >
                  {pillar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pillar.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className={cn("h-5 w-5 mt-0.5 shrink-0", isLightSection ? "text-it-light-blue" : "text-it-blue")}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <span className={cn(isLightSection ? "text-it-light-text-secondary" : "text-it-text-muted")}>
                        {feature}
                      </span>
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
