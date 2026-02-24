import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { safeguardFeatures } from '@/lib/content/safeguard'

export const metadata: Metadata = {
  title: 'Real-Time Threat Detection for Industrial and Autonomous Systems',
  description: 'Advanced AI-powered threat detection for robotic environments with predictive alerts and 24/7 monitoring.'
}

export default function ThreatDetectionPage() {
  const feature = safeguardFeatures.find(f => f.slug === 'threat-detection')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="SafeGuard"
      productSlug="safeguard"
    />
  )
}
