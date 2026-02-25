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
  return (
    <Section variant={variant} alt={alt}>
      <div className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-it-light-text-primary">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-it-light-blue">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-it-light-text-muted">
                {stat.label}
              </div>
              {stat.note && (
                <div className="text-xs text-it-light-text-muted italic">
                  {stat.note}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-it-light-text-muted max-w-2xl mx-auto">
          Sample metrics—replace with validated data from actual deployments
        </p>
      </div>
    </Section>
  )
}
