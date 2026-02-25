import { PillarHero } from "@/components/sections/pillar-hero"
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
  heroContent,
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
      {/* PillarHero: dark (unchanged) */}
      <PillarHero {...heroContent} />
      {/* Hero — full-width 21/9 placeholder */}
      <div className="w-full px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <ImagePlaceholder
            aspectRatio="21/9"
            alt="Hero — Aerial/Fleet Footage"
            label="Hero — Aerial/Fleet Footage"
          />
        </div>
      </div>
      {/* LogoCloud: white */}
      <LogoCloud logos={trustLogos} />
      {/* FeatureGrid: light — solutions grid with 4/3 placeholder per card */}
      <FeatureGrid 
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
        features={solutionsOverview}
        variant="light"
        showImagePlaceholder
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
      <PageShell>
        <div className="max-w-4xl mx-auto">
          <ImagePlaceholder
            aspectRatio="16/9"
            alt="Product Overview — AutoLock in Action"
            label="Product Overview — AutoLock in Action"
          />
        </div>
      </PageShell>
      {/* FAQ: white */}
      <Faq items={faqItems} variant="white" />
      {/* CtaBanner: dark (unchanged) */}
      <CtaBanner {...finalCta} />
    </>
  )
}
