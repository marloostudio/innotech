import { HeroV2 } from "@/components/sections/hero-v2"
import { HeroCanvas } from "@/components/sections/hero-canvas"
import { LogoCloud } from "@/components/sections/logo-cloud"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { IndustryGrid } from "@/components/sections/industry-grid"
import { TechOverview } from "@/components/sections/tech-overview"
import { Testimonial } from "@/components/sections/testimonial"
import { Stats } from "@/components/sections/stats"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { PageShell } from "@/components/page-shell"

import {
  trustLogos,
  solutionsOverview,
  industriesServed,
  technologyPillars,
  caseStudyTeaser,
  statsPlaceholder,
  faqItems,
  finalCta
} from "@/lib/content/home"

export default function HomePage() {
  return (
    <>
      {/* Hero Style v2 — home only */}
      <HeroV2
        primaryCta={{ label: "Request a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore Solutions", href: "/products" }}
        background={<HeroCanvas />}
      />
      {/* LogoCloud: white */}
      <LogoCloud title="Trusted by innovative companies worldwide" logos={trustLogos} />
      {/* FeatureGrid: light — solutions grid with 4/3 placeholder per card */}
      <FeatureGrid 
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
        features={solutionsOverview}
        columns={2}
        variant="light-bg"
        showImagePlaceholder
        imageOnLeft
        hideIcon
      />
      {/* IndustryGrid: white */}
      <IndustryGrid 
        title="Serving Critical Industries"
        description="Proven solutions across manufacturing, logistics, healthcare, and beyond"
        industries={industriesServed}
        showCta
      />
      {/* TechOverview: light */}
      <TechOverview 
        title="Technology That Powers Innovation"
        description="Advanced AI, autonomous navigation, and enterprise integration in one platform"
        pillars={technologyPillars}
        variant="light"
        alt
      />
      {/* Testimonial / Case Study: white */}
      <Testimonial {...caseStudyTeaser} variant="white" />
      {/* Stats: light, alternating */}
      <Stats stats={statsPlaceholder} variant="light" alt />
      {/* Product Overview — 16/9 placeholder */}
      <section className="py-20 md:py-28" style={{ background: "var(--it-section-2)" }}>
        <PageShell>
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              aspectRatio="16/9"
              alt="Product Overview — AutoLock in Action"
              label="Product Overview — AutoLock in Action"
            />
          </div>
        </PageShell>
      </section>
      {/* FAQ: white */}
      <Faq items={faqItems} variant="white" />
      {/* CtaBanner: dark (unchanged) */}
      <CtaBanner {...finalCta} />
    </>
  )
}
