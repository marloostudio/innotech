import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { radarLinkFeatures } from '@/lib/content/radar-link'

export const metadata: Metadata = {
  title: 'Drone Detection & Tracking — RADARLink',
  description: 'Advanced radar-based system for detecting, tracking, and identifying drones in your operational airspace.'
}

export default function DroneTrackingPage() {
  const feature = radarLinkFeatures.find(f => f.slug === 'drone-tracking')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="RADARLink"
      productSlug="radar-link"
    />
  )
}
