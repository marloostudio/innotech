import type { Metadata } from "next"
import Link from 'next/link'
import * as LucideIcons from "lucide-react"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CtaBanner } from "@/components/sections/cta-banner"
import { ProductsHeroFadeSlider, type ProductsHeroFadeSlide } from "@/components/sections/products-hero-fade-slider"

export const metadata: Metadata = {
  title: "Our Products — SafeGuard, AutoDuck & RADARLink",
  description: "Autonomous charging, safety monitoring, and V2X connectivity for the future of AMRs and industrial robots."
}

const products = [
  {
    id: "safeguard",
    name: "SafeGuard",
    slug: "safeguard",
    tagline: "Software-Defined Safety for Robots",
    description: "Real-time hazard detection, compliance monitoring, and predictive maintenance for AMRs and industrial robots. Ensure safe operations and regulatory compliance.",
    icon: LucideIcons.Shield,
  },
  {
    id: "autolock",
    name: "AutoDuck",
    slug: "autoduck",
    tagline: "Autonomous Charging and Fleet Orchestration",
    description: "Fully automated robotic charging and fleet management for autonomous vehicles, commercial fleets, and mobile robots. No human intervention required.",
    icon: LucideIcons.Zap,
  },
  {
    id: "radar-link",
    name: "RADARLink",
    slug: "radar-link",
    tagline: "V2X Communication, Cm-level Localization and Drone Tracking",
    description: "Vehicle-to-everything communication, centimeter-level localization, and drone tracking for connected autonomous ecosystems.",
    icon: LucideIcons.Radio,
  }
]

const heroSlides: ProductsHeroFadeSlide[] = [
  { src: "/images/products/hero/products-hero-1.png", alt: "Products overview visual 1" },
  { src: "/images/products/hero/products-hero-2.png", alt: "Products overview visual 2" },
  { src: "/images/products/hero/products-hero-3.png", alt: "Products overview visual 3" },
  { src: "/images/products/hero/products-hero-4.png", alt: "Products overview visual 4" },
]

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Products" }]} />
      <section
        style={{ background: "var(--it-bg)", color: "var(--it-text-primary)" }}
        className="relative w-full min-h-0 pt-0 pb-0 md:pb-0"
      >
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:pr-0 grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[420px] lg:min-h-[648px]">
          <div className="w-full">
            <div className="max-w-4xl space-y-6 pt-20 md:pt-24 pb-20 md:pb-28">
              <Badge variant="outline" className="mb-2 border-it-border text-it-text-secondary">
                Products
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Three Product Lines. One Autonomous Platform.
              </h1>

              <h2
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-balance"
                style={{ color: "var(--it-text-muted)" }}
              >
                SafeGuard, AutoDuck, and RADARLink — engineered to work independently or as a fully integrated system.
              </h2>

              <p className="text-lg text-pretty max-w-3xl" style={{ color: "var(--it-text-muted)" }}>
                Every InnoTech product is built for environments where reliability is non-negotiable: extreme temperatures, 24/7 operations, hazardous conditions, and complex multi-vehicle coordination. Choose the capability you need today and expand as your operation grows.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
                <Link href="/products#safeguard">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-it-blue text-it-bg hover:bg-it-blue-hover"
                  >
                    Compare Product Lines
                    <LucideIcons.ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-it-border text-it-text-primary hover:bg-it-surface"
                  >
                    Talk to our experts
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full min-h-[420px] lg:min-h-[648px] overflow-hidden">
            <ProductsHeroFadeSlider slides={heroSlides} />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <Section
        variant="light-bg"
        style={{ backgroundColor: "var(--it-light-surface)" }}
      >
        <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => {
            const Icon = product.icon
            return (
              <Card
                key={product.id}
                className="flex flex-col bg-it-light-surface border border-it-light-border shadow-(--it-light-shadow-sm) transition-shadow duration-200 hover:shadow-(--it-light-shadow-md)"
              >
                <CardHeader className="grid-cols-1">
                  <div className="flex flex-row items-start gap-4">
                    <div className="p-3.5 rounded-lg bg-(--it-light-blue-subtle) shrink-0">
                      <Icon className="w-8 h-8 text-it-light-blue" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      <CardTitle className="text-2xl text-it-light-text-primary leading-snug">{product.name}</CardTitle>
                      <CardDescription className="text-base text-it-light-text-secondary">{product.tagline}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-it-light-text-muted mb-6 text-pretty">{product.description}</p>
                  
                  <div className="mt-auto">
                    <Button
                      asChild
                      size="lg"
                      className="group w-full h-12 bg-it-light-cta text-it-text-primary hover:bg-it-light-cta-hover hover:brightness-90"
                    >
                      <Link href={`/products/${product.slug}`}>
                        Explore {product.name}
                        <LucideIcons.ArrowRight
                          strokeWidth={1.5}
                          className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                        />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
            })}
          </div>
      </Section>

      {/* Why InnoTech Section */}
      <Section className="it-section-mid">
        <SectionHeader
            label="Why InnoTech"
            title="Built for the Future of Autonomous Operations"
            description="Our products are designed to work together, creating a comprehensive infrastructure for AMRs and industrial robots"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <LucideIcons.Layers className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrated Platform</h3>
              <p className="text-muted-foreground text-pretty">
                A fully integrated ecosystem, powering the future of autonomous infrastructure.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <LucideIcons.TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-muted-foreground text-pretty">
                Prove it in the pilot. Dominate in production. Scale your fleet without the growing pains.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <LucideIcons.Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Grade</h3>
              <p className="text-muted-foreground text-pretty">
                Deploy with absolute certainty. We deliver the rigorous security, reliability, and compliance that mission-critical environments demand.
              </p>
            </div>
          </div>
      </Section>

      {/* CTA */}
      <CtaBanner 
        title="Ready to Transform Your Operations?"
        description="See how InnoTech products can enable your autonomous future"
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  )
}
