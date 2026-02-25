import { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { radarLinkProduct, radarLinkFeatures } from '@/lib/content/radar-link'
import * as LucideIcons from 'lucide-react'

export const metadata: Metadata = {
  title: 'Radar Link — V2X Communication, Localization and Tracking',
  description: 'Connect, locate, and track autonomous assets with radar-based intelligence.'
}

export default function RadarLinkPage() {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, LucideIcons.LucideIcon> = {
      'radio': LucideIcons.Radio,
      'map-pin': LucideIcons.MapPin,
      'plane': LucideIcons.Plane,
      'bar-chart': LucideIcons.BarChart,
    }
    return iconMap[iconName] || LucideIcons.Radar
  }

  return (
    <>
      {/* Hero Section — two-column with 16/9 placeholder on right */}
      <section className="it-hero-solutions py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <Badge variant="outline" className="mb-4">Product</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
                {radarLinkProduct.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
                {radarLinkProduct.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto lg:mx-0 text-pretty">
                {radarLinkProduct.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                alt="Radar Link Product Hero"
                label="Radar Link Product Hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <PageShell>
        <SectionHeader
          label="Features"
          title="Complete Connectivity & Localization Platform"
          description="Four integrated modules enabling connected, coordinated autonomous operations"
        />
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {radarLinkFeatures.map((feature, index) => {
            const Icon = getIcon(feature.icon)
            const imageLeft = index % 2 === 1
            return (
              <Card key={feature.id} className="group bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] border-l-[3px] border-l-[var(--it-light-blue)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {imageLeft && (
                    <div className="relative min-h-[200px] md:min-h-0 p-4 flex items-stretch">
                      <ImagePlaceholder
                        aspectRatio="4/3"
                        alt={`Radar Link — ${feature.name}`}
                        label={`Radar Link — ${feature.name}`}
                        className="w-full h-full min-h-[180px]"
                        variant="light"
                      />
                    </div>
                  )}
                  <div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg bg-[var(--it-light-blue-subtle)] mb-4">
                          <Icon className="w-6 h-6 text-it-light-blue" strokeWidth={1.5} />
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2 text-it-light-text-primary">
                        <Link 
                          href={`/products/radar-link/${feature.slug}`}
                          className="hover:text-it-light-blue transition-colors"
                        >
                          {feature.name}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base text-it-light-text-secondary">{feature.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-it-light-text-muted mb-4 text-pretty">{feature.description}</p>
                      <Button variant="outline" asChild className="border-it-light-border text-it-light-text-secondary group-hover:bg-it-light-blue group-hover:text-white transition-colors">
                        <Link href={`/products/radar-link/${feature.slug}`}>
                          Learn More
                          <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                  {!imageLeft && (
                    <div className="relative min-h-[200px] md:min-h-0 p-4 flex items-stretch">
                      <ImagePlaceholder
                        aspectRatio="4/3"
                        alt={`Radar Link — ${feature.name}`}
                        label={`Radar Link — ${feature.name}`}
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
      </PageShell>

      {/* Use Cases Section */}
      <section className="it-section-mid py-16 lg:py-24">
        <PageShell>
          <SectionHeader
            label="Applications"
            title="Industries Using Radar Link"
            description="From autonomous fleets to critical infrastructure, Radar Link enables connected mobility"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Autonomous Vehicles", icon: LucideIcons.Car },
              { name: "Port Operations", icon: LucideIcons.Ship },
              { name: "Mining", icon: LucideIcons.Mountain },
              { name: "Smart Cities", icon: LucideIcons.Building2 }
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
        title="Ready to Connect Your Autonomous Fleet?"
        description="See how Radar Link can enable coordinated autonomous operations with V2X connectivity"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
