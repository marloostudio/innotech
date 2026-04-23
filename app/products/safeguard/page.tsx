import { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbStrip } from '@/components/breadcrumb-strip'
import { PageShell, Section } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { safeguardProduct, safeguardBrochureCards, safeguardStaticSafetyNarrative } from '@/lib/content/safeguard'
import * as LucideIcons from 'lucide-react'

export const metadata: Metadata = {
  title: 'SafeGuard™ — Software-Defined Safety for Robots',
  description: 'Real-time hazard detection, compliance monitoring, and predictive maintenance for AMRs and industrial robots.'
}

export default function SafeGuardPage() {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, LucideIcons.LucideIcon> = {
      'badge-check': LucideIcons.BadgeCheck,
      handshake: LucideIcons.Handshake,
      zap: LucideIcons.Zap,
      rocket: LucideIcons.Rocket,
    }
    return iconMap[iconName] || LucideIcons.Shield
  }

  return (
    <>
      <BreadcrumbStrip items={[{ label: "Products", href: "/products" }, { label: "SafeGuard" }]} />
      <section className="it-hero-safeguard py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <Badge variant="outline" className="mb-4">
              Product
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">{safeguardProduct.hero.title}</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">{safeguardProduct.hero.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto lg:mx-0 text-pretty">{safeguardProduct.hero.description}</p>
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

      {/* Static vs dynamic safety narrative */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <PageShell>
          <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-12 lg:items-start">
            {/* Left 1/3 — narrative */}
            <div className="w-full lg:w-1/2 lg:min-w-0 shrink-0 space-y-6 text-center lg:text-left mb-12 lg:mb-0">
              <div className="inline-block mx-auto lg:mx-0">
                <span className="inline-flex items-center rounded-full px-3 py-1 it-ribbon-badge font-medium bg-(--it-light-blue-subtle) text-it-light-blue">
                  {safeguardStaticSafetyNarrative.ribbonLabel}
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-chakra text-balance">
                {safeguardStaticSafetyNarrative.headline}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                {safeguardStaticSafetyNarrative.intro}
              </p>
            </div>

            {/* Right 2/3 — problem cards stacked */}
            <div className="w-full lg:w-1/2 lg:min-w-0 flex flex-col gap-6">
              {safeguardStaticSafetyNarrative.legacyProblems.map((item) => (
                <Card
                  key={item.title}
                  className="bg-white border-l-[3px] border-l-primary shadow-sm gap-0"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold leading-snug text-it-light-text-primary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-it-light-text-secondary text-pretty leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      {/* Features Grid → light-bg */}
      <Section variant="light-bg">
        <SectionHeader
          theme="light"
          label="Features"
          title="Comprehensive Safety Monitoring"
          description="Certification, collaboration, fault response, and a pilot program built for your floor plan"
        />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {safeguardBrochureCards.map((card) => {
            const Icon = getIcon(card.icon)
            return (
              <Card
                key={card.id}
                className="group bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] border-l-[3px] border-l-[var(--it-light-safeguard)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow"
              >
                <CardHeader className="grid-cols-1">
                  <div className="flex flex-row items-start gap-4">
                    <div className="p-3.5 rounded-lg bg-[var(--it-light-safeguard)]/10 shrink-0">
                      <Icon className="w-8 h-8 text-it-light-safeguard" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      <CardTitle className="text-2xl text-it-light-text-primary leading-snug">
                        {card.name}
                      </CardTitle>
                      <CardDescription className="text-base text-it-light-text-secondary">
                        {card.tagline}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {card.bullets ? (
                    <ul className="text-[15px] text-it-light-text-secondary space-y-0.5 text-pretty leading-snug list-disc pl-5 [&_li]:py-0">
                      {card.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[15px] text-it-light-text-secondary text-pretty leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Industries Using SafeGuard → dark (it-section-mid) */}
      <section className="it-section-mid py-20 lg:py-28">
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

      {/* CTA Section */}
      <CtaBanner
        title="Ready to Enhance Your Safety Systems?"
        description="See how SafeGuard brings software-defined safety to your robotic operations"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
