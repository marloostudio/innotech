import { cn } from "@/lib/utils"
import { Section, type SectionVariant } from "@/components/page-shell"

interface Stat {
  value: string
  label: string
  note?: string
}

interface StatsProps {
  stats: Stat[]
  title?: string
  variant?: SectionVariant
  alt?: boolean
}

export function Stats({ stats, title = "Performance Metrics", variant, alt }: StatsProps) {
  const isLightSection = variant === "light-bg" || variant === "light-bg-2"
  return (
    <Section variant={variant} alt={alt}>
      <div className="text-center space-y-12">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold",
          isLightSection ? "text-it-light-text-primary" : "text-it-text-primary it-heading-bright"
        )}>{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={cn(
                "text-4xl md:text-5xl font-bold",
                isLightSection ? "text-it-light-blue" : "text-it-blue"
              )}>
                {stat.value}
              </div>
              <div className={cn(
                "text-sm md:text-base",
                isLightSection ? "text-it-light-text-muted" : "text-it-text-muted"
              )}>
                {stat.label}
              </div>
              {stat.note && (
                <div className={cn(
                  "text-xs italic",
                  isLightSection ? "text-it-light-text-muted" : "text-it-text-dim"
                )}>
                  {stat.note}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className={cn(
          "text-sm max-w-2xl mx-auto",
          isLightSection ? "text-it-light-text-muted" : "text-it-text-dim"
        )}>
          Sample metrics—replace with validated data from actual deployments
        </p>
      </div>
    </Section>
  )
}
