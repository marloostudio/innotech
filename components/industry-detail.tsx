import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import * as LucideIcons from 'lucide-react'

interface Industry {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  challenges: string[]
  solutions: string[]
  benefits: string[]
  metrics: { label: string; value: string; description: string }[]
  relatedProducts: string[]
  icon: string
}

const INDUSTRY_ICON_MAP: Record<string, LucideIcons.LucideIcon> = {
  truck: LucideIcons.Truck,
  car: LucideIcons.Car,
  warehouse: LucideIcons.Warehouse,
  ship: LucideIcons.Ship,
  plane: LucideIcons.Plane,
  mountain: LucideIcons.Mountain,
}

function IndustryIcon({ name }: { name: string }) {
  const Icon = INDUSTRY_ICON_MAP[name] || LucideIcons.Building
  return <Icon className="w-10 h-10" style={{ color: 'var(--it-industries)' }} />
}

interface IndustryDetailProps {
  industry: Industry
}

export function IndustryDetail({ industry }: IndustryDetailProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <div style={{ background: 'var(--it-bg)', borderBottom: '1px solid var(--it-border)' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--it-text-muted)' }}>
            <Link href="/" className="transition-colors hover:opacity-80" style={{ color: 'var(--it-text-muted)' }}>Home</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href="/industries" className="transition-colors hover:opacity-80" style={{ color: 'var(--it-text-muted)' }}>Industries</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--it-text-primary)' }}>{industry.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="it-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.12)' }}>
                <IndustryIcon name={industry.icon} />
              </div>
              <Badge
                variant="outline"
                className="border-it-industries text-it-industries"
              >
                Industry
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance" style={{ color: 'var(--it-text-primary)' }}>
              {industry.name}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-balance" style={{ color: 'var(--it-text-secondary)' }}>
              {industry.tagline}
            </p>
            <p className="text-lg mb-10 text-pretty" style={{ color: 'var(--it-text-muted)' }}>
              {industry.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                style={{ background: 'var(--it-blue)', color: 'var(--it-bg)' }}
              >
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-it-border hover:bg-white/5"
                style={{ color: 'var(--it-text-primary)' }}
              >
                <Link href="/contact">Speak with an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      {industry.metrics && industry.metrics.length > 0 && (
        <section className="it-section-mid py-12">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {industry.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: 'var(--it-industries)' }}>
                    {metric.value}
                  </div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--it-text-primary)' }}>{metric.label}</div>
                  <div className="text-sm" style={{ color: 'var(--it-text-muted)' }}>{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions — white section */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--it-light-surface)' }}>
        <PageShell>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--it-light-text-primary)' }}>Industry Challenges</h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(220, 38, 38, 0.08)' }}>
                        <LucideIcons.AlertCircle className="w-4 h-4" style={{ color: '#dc2626' }} />
                      </div>
                    </div>
                    <p className="text-lg text-pretty" style={{ color: 'var(--it-light-text-secondary)' }}>{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--it-light-text-primary)' }}>Our Solutions</h2>
              <div className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(5, 150, 105, 0.08)' }}>
                        <LucideIcons.Check className="w-4 h-4" style={{ color: 'var(--it-light-safeguard)' }} />
                      </div>
                    </div>
                    <p className="text-lg text-pretty" style={{ color: 'var(--it-light-text-secondary)' }}>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Benefits — light gray section */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--it-light-bg)', borderTop: '1px solid var(--it-light-border)', borderBottom: '1px solid var(--it-light-border)' }}>
        <PageShell>
          <SectionHeader
            theme="light"
            label="Benefits"
            title="Value Delivered"
            description="Key business outcomes from implementing InnoTech solutions"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {industry.benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl p-6 flex items-start gap-3"
                style={{ background: 'var(--it-light-surface)', border: '1px solid var(--it-light-border)', boxShadow: 'var(--it-light-shadow-sm)' }}
              >
                <LucideIcons.CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--it-light-safeguard)' }} />
                <span className="font-semibold text-pretty" style={{ color: 'var(--it-light-text-primary)' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Related Products */}
      {industry.relatedProducts && industry.relatedProducts.length > 0 && (
        <section className="it-section-mid py-16 lg:py-24">
          <PageShell>
            <SectionHeader
              theme="dark"
              label="Products"
              title="Recommended Products"
              description="InnoTech products designed for this industry"
            />

            <div className="flex flex-wrap gap-4 justify-center">
              {industry.relatedProducts.map((product) => (
                <Badge
                  key={product}
                  variant="secondary"
                  className="text-base px-4 py-2"
                  style={{
                    background: 'var(--it-surface-raised)',
                    border: '1px solid var(--it-border)',
                    color: 'var(--it-text-primary)',
                  }}
                >
                  {product}
                </Badge>
              ))}
            </div>
          </PageShell>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        title={`Ready to Transform ${industry.name}?`}
        description="See how InnoTech can enable autonomous operations in your industry"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
