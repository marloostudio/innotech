import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { autolockFeatures } from '@/lib/content/autolock'

export const metadata: Metadata = {
  title: 'Robotic EV Charging with No Human Intervention',
  description: 'Fully automated robotic charging system supporting multiple vehicle types and charging standards.'
}

export default function AutonomousChargingPage() {
  const feature = autolockFeatures.find(f => f.slug === 'autonomous-charging')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="AutoDuck"
      productSlug="autolock"
    />
  )
}
