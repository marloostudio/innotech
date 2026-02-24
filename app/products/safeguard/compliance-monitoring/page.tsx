import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { safeguardFeatures } from '@/lib/content/safeguard'

export const metadata: Metadata = {
  title: 'Automated Compliance Monitoring for Robotic Operations',
  description: 'Ensure continuous regulatory compliance with automated monitoring, audit trails, and reporting.'
}

export default function ComplianceMonitoringPage() {
  const feature = safeguardFeatures.find(f => f.slug === 'compliance-monitoring')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="SafeGuard"
      productSlug="safeguard"
    />
  )
}
