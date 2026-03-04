import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
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
  return <Icon className="w-10 h-10" style={{ color: 'var(--it-solutions)' }} />
}

interface SolutionDetailProps {
  solution: Solution
}

export function SolutionDetail({ solution }: SolutionDetailProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <div style={{ background: 'var(--it-bg)', borderBottom: '1px solid var(--it-border)' }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--it-text-muted)' }}>
            <Link href="/solutions" className="transition-colors hover:opacity-80" style={{ color: 'var(--it-text-muted)' }}>Solutions</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--it-text-primary)' }}>{solution.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section — two-column with 3/2 placeholder on right */}
      <section className="it-hero-solutions py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg" style={{ background: 'rgba(180, 125, 255, 0.12)' }}>
                  <SolutionIcon name={solution.icon} />
                </div>
                <Badge
                  variant="outline"
                  className="border-it-solutions text-it-solutions"
                >
                  Solution
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance" style={{ color: 'var(--it-text-primary)' }}>
                {solution.name}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-balance" style={{ color: 'var(--it-text-secondary)' }}>
                {solution.tagline}
              </p>
              <p className="text-lg mb-10 text-pretty" style={{ color: 'var(--it-text-muted)' }}>
                {solution.description}
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
            <div className="w-full">
              <ImagePlaceholder
                aspectRatio="3/2"
                alt={`${solution.name} — In Use`}
                label={`${solution.name} — In Use`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & How It Works */}
      <section className="it-section-alt py-20 lg:py-28">
        <PageShell>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-it-text-primary">Common Challenges</h2>
              <div className="space-y-4">
                {solution.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-it-danger/10">
                        <LucideIcons.AlertCircle className="w-4 h-4 text-it-danger" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-lg text-pretty text-it-text-secondary">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-it-text-primary">How It Works</h2>
              <div className="space-y-4">
                {solution.howItWorks.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold bg-it-blue text-it-bg">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-lg text-pretty text-it-text-secondary">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Benefits */}
      <section className="it-section py-20 lg:py-28">
        <PageShell>
          <SectionHeader
            label="Benefits"
            title="Value Delivered"
            description="Key business outcomes from implementing this solution"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {solution.benefits.map((benefit, index) => (
              <div
                key={index}
                className="it-chip-dark rounded-xl p-6 flex items-start gap-3 border-l-[3px] border-l-it-safeguard"
              >
                <LucideIcons.CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-it-safeguard" strokeWidth={1.5} />
                <span className="font-semibold text-pretty text-it-text-primary">{benefit}</span>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Related Products */}
      {solution.relatedProducts && solution.relatedProducts.length > 0 && (
        <section className="it-section-mid py-20 lg:py-28">
          <PageShell>
            <SectionHeader
              theme="dark"
              label="Products"
              title="Powered By"
              description="InnoTech products that enable this solution"
            />

            <div className="flex flex-wrap gap-4 justify-center">
              {solution.relatedProducts.map((product) => (
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
        title={`Ready to Deploy ${solution.name}?`}
        description="See how this solution can transform your operations"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  )
}
