import { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbStrip } from '@/components/breadcrumb-strip'
import { PageShell, Section } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
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
      {/* Hero Section — two-column with 16/9 placeholder on right */}
      <section className="it-hero-safeguard py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <Badge variant="outline" className="mb-4">Product</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
                {safeguardProduct.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
                {safeguardProduct.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto lg:mx-0 text-pretty">
                {safeguardProduct.hero.description}
              </p>
              <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/demo">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="w-full">
              <ImagePlaceholder
                aspectRatio="16/9"
                alt="SafeGuard Product Hero"
                label="SafeGuard Product Hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Static vs dynamic safety narrative */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <PageShell>
          <div className="max-w-[680px] mb-14 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-chakra text-balance mb-6">
              {safeguardStaticSafetyNarrative.headline}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              {safeguardStaticSafetyNarrative.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-16 lg:mb-20">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight">
                {safeguardStaticSafetyNarrative.pillars[0].title}
              </h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                {safeguardStaticSafetyNarrative.pillars[0].description}
              </p>
            </div>
            <div className="lg:pt-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-primary text-balance leading-tight font-chakra">
                {safeguardStaticSafetyNarrative.pillars[1].title}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {safeguardStaticSafetyNarrative.legacyProblems.map((item) => (
              <Card
                key={item.title}
                className="bg-background border-l-[3px] border-l-primary shadow-sm"
              >
                <CardHeader>
                  <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
          {safeguardBrochureCards.map((card, index) => {
            const Icon = getIcon(card.icon)
            const imageLeft = index % 2 === 1
            return (
              <Card key={card.id} className="group bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] border-l-[3px] border-l-[var(--it-light-safeguard)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {imageLeft && (
                    <div className="relative min-h-[200px] md:min-h-0 p-4 flex items-stretch">
                      <ImagePlaceholder
                        aspectRatio="4/3"
                        alt={`SafeGuard — ${card.name}`}
                        label={`SafeGuard — ${card.name}`}
                        className="w-full h-full min-h-[180px]"
                        variant="light"
                      />
                    </div>
                  )}
                  <div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg bg-[var(--it-light-safeguard)]/10 mb-4">
                          <Icon className="w-6 h-6 text-it-light-safeguard" strokeWidth={1.5} />
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2 text-it-light-text-primary">
                        {card.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {card.bullets ? (
                        <ul className="text-it-light-text-muted mb-6 space-y-3 text-pretty list-disc pl-5">
                          {card.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-it-light-text-muted mb-6 text-pretty">{card.description}</p>
                      )}
                      <Button variant="outline" asChild className="border-it-light-border text-it-light-text-secondary group-hover:bg-it-light-safeguard group-hover:text-white transition-colors">
                        <Link href="/contact">
                          {card.bullets ? "Join the pilot" : "Contact us"}
                          <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                  {!imageLeft && (
                    <div className="relative min-h-[200px] md:min-h-0 p-4 flex items-stretch">
                      <ImagePlaceholder
                        aspectRatio="4/3"
                        alt={`SafeGuard — ${card.name}`}
                        label={`SafeGuard — ${card.name}`}
                        className="w-full h-full min-h-[180px]"
                        variant="light"
                      />
                    </div>
                  )}
                </div>
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
        description="See how SafeGuard brings software-defined safety to your robotic operations"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
