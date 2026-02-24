import type { Metadata } from "next"
import Link from 'next/link'
import * as LucideIcons from "lucide-react"

import { PillarHero } from "@/components/sections/pillar-hero"
import { PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Our Products — SafeGuard, AutoLock & Radar Link",
  description: "Autonomous charging, safety monitoring, and V2X connectivity for the future of autonomous systems."
}

const products = [
  {
    id: "safeguard",
    name: "SafeGuard",
    slug: "safeguard",
    tagline: "Intelligent Safety Monitoring for Robotic Environments",
    description: "Real-time threat detection, compliance monitoring, and predictive maintenance for autonomous systems. Ensure safe operations and regulatory compliance.",
    icon: LucideIcons.Shield,
    features: [
      "Real-time threat detection",
      "Automated compliance monitoring",
      "Instant anomaly alerts",
      "Predictive maintenance"
    ]
  },
  {
    id: "autolock",
    name: "AutoLock",
    slug: "autolock",
    tagline: "Autonomous Charging and Fleet Orchestration",
    description: "Fully automated robotic charging and fleet management for autonomous vehicles, commercial fleets, and mobile robots. No human intervention required.",
    icon: LucideIcons.Zap,
    features: [
      "Robotic autonomous charging",
      "Intelligent fleet orchestration",
      "Depot process automation",
      "Secure access control"
    ]
  },
  {
    id: "radar-link",
    name: "Radar Link",
    slug: "radar-link",
    tagline: "V2X Communication, Localization and Tracking",
    description: "Vehicle-to-everything communication, centimeter-level localization, and drone tracking for connected autonomous ecosystems.",
    icon: LucideIcons.Radio,
    features: [
      "V2V and V2I communication",
      "Centimeter-level localization",
      "Drone tracking & identification",
      "Real-time analytics"
    ]
  }
]

export default function ProductsPage() {
  return (
    <>
      <PillarHero
        badge="Products"
        h1="Three Product Lines. One Autonomous Platform."
        h2="SafeGuard, AutoLock, and Radar Link — engineered to work independently or as a fully integrated system."
        description="Every InnoTech product is built for environments where reliability is non-negotiable: extreme temperatures, 24/7 operations, hazardous conditions, and complex multi-vehicle coordination. Choose the capability you need today and expand as your operation grows."
        primaryCta={{ label: "Compare Product Lines", href: "/products#safeguard" }}
        secondaryCta={{ label: "Talk to an Engineer", href: "/contact" }}
      />

      {/* Products Grid */}
      <PageShell>
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Card key={product.id} className="flex flex-col">
                <CardHeader>
                  <div className="p-4 rounded-lg bg-primary/10 w-fit mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 text-pretty">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <LucideIcons.Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild className="w-full">
                      <Link href={`/products/${product.slug}`}>
                        Explore {product.name}
                        <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </PageShell>

      {/* Why InnoTech Section */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <PageShell>
          <SectionHeader
            label="Why InnoTech"
            title="Built for the Future of Autonomous Operations"
            description="Our products are designed to work together, creating a comprehensive infrastructure for autonomous systems"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <LucideIcons.Layers className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrated Platform</h3>
              <p className="text-muted-foreground text-pretty">
                All products work seamlessly together for complete autonomous infrastructure
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <LucideIcons.TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-muted-foreground text-pretty">
                From pilot programs to full production fleets, scale with confidence
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <LucideIcons.Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Grade</h3>
              <p className="text-muted-foreground text-pretty">
                Proven reliability, security, and compliance for mission-critical operations
              </p>
            </div>
          </div>
        </PageShell>
      </section>

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
