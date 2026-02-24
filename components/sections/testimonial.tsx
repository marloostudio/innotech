import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

interface TestimonialProps {
  title: string
  client: string
  challenge: string
  solution: string
  note?: string
}

export function Testimonial({ title, client, challenge, solution, note }: TestimonialProps) {
  return (
    <Section className="bg-muted/30">
      <SectionHeader 
        title="Real Results from Real Implementations" 
        badge="Case Study"
      />
      <Card className="max-w-4xl mx-auto">
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{client}</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Badge variant="outline" className="mb-2">Challenge</Badge>
              <p className="text-muted-foreground">{challenge}</p>
            </div>
            
            <div>
              <Badge variant="outline" className="mb-2">Solution</Badge>
              <p className="text-muted-foreground">{solution}</p>
            </div>
          </div>

          {note && (
            <p className="text-sm text-muted-foreground italic border-t pt-4">
              Note: {note}
            </p>
          )}
        </CardContent>
      </Card>
    </Section>
  )
}
