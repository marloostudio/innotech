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

export function Testimonial({ title, client, challenge, solution, note, variant, alt }: TestimonialProps) {
  return (
    <Section variant={variant} alt={alt} className={!variant ? "bg-it-light-surface-2" : undefined}>
      <SectionHeader 
        title="Real Results from Real Implementations" 
        badge="Case Study"
      />
      <Card className="max-w-4xl mx-auto bg-it-light-surface border-it-light-border shadow-[var(--it-light-shadow-sm)]">
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-it-light-text-primary">{title}</h3>
            <p className="text-it-light-text-muted">{client}</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Badge variant="outline" className="mb-2 border-it-light-border text-it-light-text-secondary">Challenge</Badge>
              <p className="text-it-light-text-secondary">{challenge}</p>
            </div>
            
            <div>
              <Badge variant="outline" className="mb-2 border-it-light-border text-it-light-text-secondary">Solution</Badge>
              <p className="text-it-light-text-secondary">{solution}</p>
            </div>
          </div>

          {note && (
            <p className="text-sm text-it-light-text-muted italic border-t border-it-light-border pt-4">
              Note: {note}
            </p>
          )}
        </CardContent>
      </Card>
    </Section>
  )
}
