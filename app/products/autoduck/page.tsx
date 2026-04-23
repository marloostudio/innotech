import { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbStrip } from '@/components/breadcrumb-strip'
import { PageShell, Section } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { autolockProduct, autolockFeatures } from '@/lib/content/autolock'
import * as LucideIcons from 'lucide-react'

export const metadata: Metadata = {
  title: 'AutoDuck — Autonomous Charging and Fleet Orchestration',
  description: 'Robotic charging, intelligent fleet scheduling, and depot automation for the future of mobility.',
}

export default function AutoDuckPage() {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, LucideIcons.LucideIcon> = {
      plug: LucideIcons.Plug,
      network: LucideIcons.Network,
      warehouse: LucideIcons.Warehouse,
      'shield-check': LucideIcons.ShieldCheck,
    }
    return iconMap[iconName] || LucideIcons.Zap
  }

  return (
    <>
      <BreadcrumbStrip items={[{ label: "Products", href: "/products" }, { label: "AutoDuck" }]} />
      <section className="it-hero-solutions py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <Badge variant="outline" className="mb-4">
              Product
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">{autolockProduct.hero.title}</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">{autolockProduct.hero.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto lg:mx-0 text-pretty">{autolockProduct.hero.description}</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
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

      <Section variant="light-bg">
        <SectionHeader
          theme="light"
          label="Features"
          title="Complete Autonomous Charging Platform"
          description="Four integrated modules delivering end-to-end charging automation and fleet management"
        />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {autolockFeatures.map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Card
                key={feature.id}
                className="group bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] border-l-[3px] border-l-[var(--it-light-autolock)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow"
              >
                <CardHeader className="grid-cols-1">
                  <div className="flex flex-row items-start gap-4">
                    <div className="p-3.5 rounded-lg bg-[var(--it-light-autolock)]/10 shrink-0">
                      <Icon className="w-8 h-8 text-it-light-autolock" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      <CardTitle className="text-2xl text-it-light-text-primary leading-snug">
                        <Link href={`/products/autoduck/${feature.slug}`} className="hover:text-it-light-autolock transition-colors">
                          {feature.name}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base text-it-light-text-secondary">
                        {feature.tagline}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[15px] text-it-light-text-secondary text-pretty leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      <section className="it-section-mid py-20 lg:py-28">
        <PageShell>
          <SectionHeader
            label="Applications"
            title="Industries Using AutoDuck"
            description="From autonomous vehicles to commercial fleets, AutoDuck powers the future of mobility"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Autonomous Fleets", icon: LucideIcons.Car },
              { name: "Logistics", icon: LucideIcons.Truck },
              { name: "Public Transit", icon: LucideIcons.Bus },
              { name: "Port Operations", icon: LucideIcons.Ship },
            ].map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-it-light-border shadow-sm transition-[box-shadow,transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
              >
                <industry.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-it-light-text-primary">{industry.name}</h3>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <CtaBanner
        title="Ready to Automate Your Fleet Charging?"
        description="See how AutoDuck can transform your operations with fully autonomous charging and orchestration"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
