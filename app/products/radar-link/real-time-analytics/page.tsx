import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { radarLinkFeatures } from '@/lib/content/radar-link'

export const metadata: Metadata = {
  title: 'Predictive Insights and System Monitoring via Radar Intelligence',
  description: 'Transform radar data into actionable insights with real-time analytics and predictive algorithms.'
}

export default function RealTimeAnalyticsPage() {
  const feature = radarLinkFeatures.find(f => f.slug === 'real-time-analytics')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="RADARLink"
      productSlug="radar-link"
    />
  )
}
