import { Section } from "@/components/page-shell"

interface LogoCloudProps {
  title?: string
  logos: string[]
}

export function LogoCloud({ title = "Trusted by industry leaders", logos }: LogoCloudProps) {
  return (
    <Section className="py-12 bg-muted/30">
      <div className="space-y-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-12 text-muted-foreground font-semibold text-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
