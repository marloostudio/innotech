import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { HomeSolutionsCards } from "@/components/sections/home-solutions-cards"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

const SOLUTIONS_IMAGE = "/images/home/solutions-variant-b-secondary.png"

/** Variant B — image left, stacked cards right (A/B test layout). */
export function HomeSolutionsVariantB() {
  return (
    <Section variant="light-bg-2" containerClassName="px-10 lg:px-12">
      <SectionHeader
        theme="light"
        title="Comprehensive Automation Solutions"
        description="End-to-end robotics and autonomous systems designed for enterprise operations"
      />
      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="w-full min-w-0">
          <ImagePlaceholder
            src={SOLUTIONS_IMAGE}
            alt="SafeGuard live view diagram — field-of-view safety zones with human motion tracking"
            aspectRatio="21/9"
            variant="light"
            objectFit="contain"
            transparentBackground
            className="w-full border-0"
          />
        </div>
        <HomeSolutionsCards />
      </div>
    </Section>
  )
}
