import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import * as LucideIcons from 'lucide-react'

interface ProductFeature {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  benefits: string[]
  keyFeatures: string[]
  icon: string
  useCases: string[]
}

interface ProductFeatureDetailProps {
  feature: ProductFeature
  productName: string
  productSlug: string
  breadcrumbs?: { label: string; href: string }[]
}

export function ProductFeatureDetail({
  feature,
  productName,
  productSlug,
}: ProductFeatureDetailProps) {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, LucideIcons.LucideIcon> = {
      'shield-alert': LucideIcons.ShieldAlert,
      'clipboard-check': LucideIcons.ClipboardCheck,
      'bell': LucideIcons.Bell,
      'wrench': LucideIcons.Wrench,
      'plug': LucideIcons.Plug,
      'network': LucideIcons.Network,
      'warehouse': LucideIcons.Warehouse,
      'shield-check': LucideIcons.ShieldCheck,
      'radio': LucideIcons.Radio,
      'map-pin': LucideIcons.MapPin,
      'plane': LucideIcons.Plane,
      'bar-chart': LucideIcons.BarChart,
    }
    return iconMap[iconName] || LucideIcons.Box
  }

  const Icon = getIcon(feature.icon)

  return (
    <>
      {/* Breadcrumbs */}
      <div style={{ background: 'var(--it-bg)', borderBottom: '1px solid var(--it-border)' }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--it-text-muted)' }}>
            <Link href="/" className="transition-colors hover:opacity-80" style={{ color: 'var(--it-text-muted)' }}>Home</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href="/products" className="transition-colors hover:opacity-80" style={{ color: 'var(--it-text-muted)' }}>Products</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href={`/products/${productSlug}`} className="transition-colors hover:opacity-80" style={{ color: 'var(--it-text-muted)' }}>{productName}</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--it-text-primary)' }}>{feature.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="it-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--it-blue-subtle)' }}>
                <Icon className="w-10 h-10" style={{ color: 'var(--it-blue)' }} />
              </div>
              <Badge
                variant="outline"
                className="border-it-border text-it-text-secondary"
              >
                {productName}
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance" style={{ color: 'var(--it-text-primary)' }}>
              {feature.name}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-balance" style={{ color: 'var(--it-text-secondary)' }}>
              {feature.tagline}
            </p>
            <p className="text-lg mb-10 text-pretty" style={{ color: 'var(--it-text-muted)' }}>
              {feature.description}
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
                <Link href={`/products/${productSlug}`}>View All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features — white section */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--it-light-surface)' }}>
        <PageShell>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Key Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--it-light-text-primary)' }}>Key Benefits</h2>
              <div className="space-y-4">
                {feature.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(5, 150, 105, 0.08)' }}>
                        <LucideIcons.Check className="w-4 h-4" style={{ color: 'var(--it-light-safeguard)' }} />
                      </div>
                    </div>
                    <p className="text-lg text-pretty" style={{ color: 'var(--it-light-text-secondary)' }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--it-light-text-primary)' }}>Key Features</h2>
              <div className="space-y-4">
                {feature.keyFeatures.map((keyFeature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(37, 99, 235, 0.08)' }}>
                        <LucideIcons.Zap className="w-4 h-4" style={{ color: 'var(--it-light-blue)' }} />
                      </div>
                    </div>
                    <p className="text-lg text-pretty" style={{ color: 'var(--it-light-text-secondary)' }}>{keyFeature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Use Cases — light gray section */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--it-light-bg)', borderTop: '1px solid var(--it-light-border)', borderBottom: '1px solid var(--it-light-border)' }}>
        <PageShell>
          <SectionHeader
            theme="light"
            label="Applications"
            title="Use Cases"
            description={`Common applications of ${feature.name} across industries`}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {feature.useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-xl p-6 flex items-start gap-3"
                style={{ background: 'var(--it-light-surface)', border: '1px solid var(--it-light-border)', boxShadow: 'var(--it-light-shadow-sm)' }}
              >
                <LucideIcons.Target className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--it-light-blue)' }} />
                <span className="font-semibold text-pretty" style={{ color: 'var(--it-light-text-primary)' }}>{useCase}</span>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* CTA */}
      <CtaBanner
        title={`Ready to Deploy ${feature.name}?`}
        description="See how this feature can transform your operations"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
