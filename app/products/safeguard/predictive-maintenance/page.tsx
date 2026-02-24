import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { safeguardFeatures } from '@/lib/content/safeguard'

export const metadata: Metadata = {
  title: 'AI-Powered Predictive Maintenance for Fleet and Facility Assets',
  description: 'Leverage machine learning to predict equipment failures before they happen and maximize uptime.'
}

export default function PredictiveMaintenancePage() {
  const feature = safeguardFeatures.find(f => f.slug === 'predictive-maintenance')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="SafeGuard"
      productSlug="safeguard"
    />
  )
}
