import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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
  breadcrumbs = []
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
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <Link href={`/products/${productSlug}`} className="hover:text-foreground transition-colors">{productName}</Link>
            <LucideIcons.ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{feature.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-primary/10">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <Badge variant="outline">{productName}</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {feature.name}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {feature.tagline}
            </p>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              {feature.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/products/${productSlug}`}>View All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <PageShell>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="space-y-4">
              {feature.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <LucideIcons.Check className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-lg text-pretty">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="space-y-4">
              {feature.keyFeatures.map((keyFeature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <LucideIcons.Zap className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-lg text-pretty">{keyFeature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>

      <Separator />

      {/* Use Cases */}
      <PageShell>
        <SectionHeader
          label="Applications"
          title="Use Cases"
          description={`Common applications of ${feature.name} across industries`}
        />
        
        <div className="grid sm:grid-cols-2 gap-6">
          {feature.useCases.map((useCase, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <LucideIcons.Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-pretty">{useCase}</span>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </PageShell>

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
