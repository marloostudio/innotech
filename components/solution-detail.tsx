import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import * as LucideIcons from 'lucide-react'

interface Solution {
  id: string
  name: string
  slug: string
  category: string
  tagline: string
  description: string
  challenges: string[]
  howItWorks: string[]
  benefits: string[]
  relatedProducts: string[]
  icon: string
}

const SOLUTION_ICON_MAP: Record<string, LucideIcons.LucideIcon> = {
  plug: LucideIcons.Plug,
  truck: LucideIcons.Truck,
  bot: LucideIcons.Bot,
  shield: LucideIcons.Shield,
  users: LucideIcons.Users,
  radio: LucideIcons.Radio,
  building: LucideIcons.Building,
  "map-pin": LucideIcons.MapPin,
  plane: LucideIcons.Plane,
}

function SolutionIcon({ name }: { name: string }) {
  const Icon = SOLUTION_ICON_MAP[name] || LucideIcons.Box
  return <Icon className="w-10 h-10 text-primary" />
}

interface SolutionDetailProps {
  solution: Solution
}

export function SolutionDetail({ solution }: SolutionDetailProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{solution.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-primary/10">
                <SolutionIcon name={solution.icon} />
              </div>
              <Badge variant="outline">Solution</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {solution.name}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {solution.tagline}
            </p>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              {solution.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Speak with an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & How It Works */}
      <PageShell>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Challenges */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Common Challenges</h2>
            <div className="space-y-4">
              {solution.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                      <LucideIcons.AlertCircle className="w-4 h-4 text-destructive" />
                    </div>
                  </div>
                  <p className="text-lg text-pretty">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-4">
              {solution.howItWorks.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-lg text-pretty">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>

      <Separator />

      {/* Benefits */}
      <PageShell>
        <SectionHeader
          label="Benefits"
          title="Value Delivered"
          description="Key business outcomes from implementing this solution"
        />
        
        <div className="grid sm:grid-cols-2 gap-6">
          {solution.benefits.map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <LucideIcons.CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-pretty">{benefit}</span>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </PageShell>

      {/* Related Products */}
      {solution.relatedProducts && solution.relatedProducts.length > 0 && (
        <section className="bg-muted/50 py-16 lg:py-24">
          <PageShell>
            <SectionHeader
              label="Products"
              title="Powered By"
              description="InnoTech products that enable this solution"
            />
            
            <div className="flex flex-wrap gap-4 justify-center">
              {solution.relatedProducts.map((product) => (
                <Badge key={product} variant="secondary" className="text-base px-4 py-2">
                  {product}
                </Badge>
              ))}
            </div>
          </PageShell>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        title={`Ready to Deploy ${solution.name}?`}
        description="See how this solution can transform your operations"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
