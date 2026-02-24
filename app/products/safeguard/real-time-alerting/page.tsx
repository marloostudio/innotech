import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { safeguardFeatures } from '@/lib/content/safeguard'

export const metadata: Metadata = {
  title: 'Instant Anomaly Alerts for Critical Infrastructure',
  description: 'Receive instant notifications when anomalies or safety events are detected, enabling rapid response.'
}

export default function RealTimeAlertingPage() {
  const feature = safeguardFeatures.find(f => f.slug === 'real-time-alerting')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="SafeGuard"
      productSlug="safeguard"
    />
  )
}
