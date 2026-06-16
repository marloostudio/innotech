import { FeatureGrid } from "@/components/sections/feature-grid"
import { solutionsOverview } from "@/lib/content/home"

/** Control — icon-free cards on light background (current production layout). */
export function HomeSolutionsVariantA() {
  return (
    <FeatureGrid
      title="Comprehensive Automation Solutions"
      description="End-to-end robotics and autonomous systems designed for enterprise operations"
      features={solutionsOverview}
      columns={2}
      variant="light-bg"
      showImagePlaceholder={false}
      hideIcon
    />
  )
}
