import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { autolockFeatures } from '@/lib/content/autolock'

export const metadata: Metadata = {
  title: 'Intelligent Multi-Vehicle Scheduling and Coordination',
  description: 'Advanced fleet management platform that optimizes charging schedules and maximizes fleet utilization.'
}

export default function FleetOrchestrationPage() {
  const feature = autolockFeatures.find(f => f.slug === 'fleet-orchestration')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="AutoDuck"
      productSlug="autolock"
    />
  )
}
