import { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { safeguardProduct, safeguardFeatures } from '@/lib/content/safeguard'
import * as LucideIcons from 'lucide-react'

export const metadata: Metadata = {
  title: 'SafeGuard — Intelligent Safety Monitoring for Robotic Environments',
  description: 'Real-time threat detection, compliance monitoring, and predictive maintenance for autonomous systems.'
}

export default function SafeGuardPage() {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, LucideIcons.LucideIcon> = {
      'shield-alert': LucideIcons.ShieldAlert,
      'clipboard-check': LucideIcons.ClipboardCheck,
      'bell': LucideIcons.Bell,
      'wrench': LucideIcons.Wrench,
    }
    return iconMap[iconName] || LucideIcons.Shield
  }

  return (
    <>
      {/* Hero Section */}
      <section className="it-hero-safeguard py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Product</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              {safeguardProduct.hero.title}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {safeguardProduct.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
              {safeguardProduct.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <PageShell>
        <SectionHeader
          label="Features"
          title="Comprehensive Safety Monitoring"
          description="Four integrated modules providing end-to-end safety and compliance for your robotic operations"
        />
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {safeguardFeatures.map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Card key={feature.id} className="group bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] border-l-[3px] border-l-[var(--it-light-safeguard)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-[var(--it-light-safeguard)]/10 mb-4">
                      <Icon className="w-6 h-6 text-it-light-safeguard" strokeWidth={1.5} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2 text-it-light-text-primary">
                    <Link 
                      href={`/products/safeguard/${feature.slug}`}
                      className="hover:text-it-light-safeguard transition-colors"
                    >
                      {feature.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base text-it-light-text-secondary">{feature.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-it-light-text-muted mb-4 text-pretty">{feature.description}</p>
                  <Button variant="outline" asChild className="border-it-light-border text-it-light-text-secondary group-hover:bg-it-light-safeguard group-hover:text-white transition-colors">
                    <Link href={`/products/safeguard/${feature.slug}`}>
                      Learn More
                      <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </PageShell>

      {/* Use Cases Section */}
      <section className="it-section-mid py-16 lg:py-24">
        <PageShell>
          <SectionHeader
            label="Applications"
            title="Industries Using SafeGuard"
            description="From manufacturing floors to autonomous vehicle depots, SafeGuard ensures safe operations"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Manufacturing", icon: LucideIcons.Factory },
              { name: "Logistics", icon: LucideIcons.Truck },
              { name: "Autonomous Fleets", icon: LucideIcons.Car },
              { name: "Warehousing", icon: LucideIcons.Warehouse }
            ].map((industry) => (
              <div key={industry.name} className="flex flex-col items-center text-center p-6 bg-background rounded-lg border">
                <industry.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* CTA Section */}
      <CtaBanner
        title="Ready to Enhance Your Safety Systems?"
        description="See how SafeGuard can transform your robotic operations with intelligent safety monitoring"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
