import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section, type SectionVariant } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

interface TestimonialProps {
  title: string
  client: string
  challenge: string
  solution: string
  note?: string
  variant?: SectionVariant
  alt?: boolean
}

const lightBgVariants = ["light-bg", "light-bg-2"] as const

export function Testimonial({ title, client, challenge, solution, note, variant, alt }: TestimonialProps) {
  const headerTheme = variant && lightBgVariants.includes(variant as (typeof lightBgVariants)[number]) ? "light" : "dark"
  const isLightSection = variant && lightBgVariants.includes(variant as (typeof lightBgVariants)[number])
  return (
    <Section variant={variant} alt={alt}>
      <SectionHeader 
        theme={headerTheme}
        title="Real Results from Real Implementations" 
        badge="Case Study"
      />
      <Card className={cn(
      "max-w-4xl mx-auto",
      isLightSection
        ? "bg-it-light-surface border-it-light-border shadow-[var(--it-light-shadow-sm)]"
        : "bg-[var(--it-surface-raised)] border-it-border shadow-[var(--it-shadow-sm)]"
    )}>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className={cn("text-2xl font-bold mb-2", isLightSection ? "text-it-light-text-primary" : "text-it-text-primary")}>{title}</h3>
            <p className={cn(isLightSection ? "text-it-light-text-muted" : "text-it-text-muted")}>{client}</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Badge variant="outline" className={cn("mb-2", isLightSection ? "border-it-light-border text-it-light-text-secondary" : "border-it-border text-it-text-secondary")}>Challenge</Badge>
              <p className={cn(isLightSection ? "text-it-light-text-secondary" : "text-it-text-secondary")}>{challenge}</p>
            </div>
            
            <div>
              <Badge variant="outline" className={cn("mb-2", isLightSection ? "border-it-light-border text-it-light-text-secondary" : "border-it-border text-it-text-secondary")}>Solution</Badge>
              <p className={cn(isLightSection ? "text-it-light-text-secondary" : "text-it-text-secondary")}>{solution}</p>
            </div>
          </div>

          {note && (
            <p className={cn("text-sm italic border-t pt-4", isLightSection ? "text-it-light-text-muted border-it-light-border" : "text-it-text-muted border-it-border")}>
              Note: {note}
            </p>
          )}
        </CardContent>
      </Card>
    </Section>
  )
}
