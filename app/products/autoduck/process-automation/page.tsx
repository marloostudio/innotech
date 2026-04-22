import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { autolockFeatures } from '@/lib/content/autolock'

export const metadata: Metadata = {
  title: 'Depot and Charging Process Automation for Commercial Fleets',
  description: 'End-to-end automation of depot operations including vehicle check-in, charging, and dispatch.'
}

export default function ProcessAutomationPage() {
  const feature = autolockFeatures.find(f => f.slug === 'process-automation')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="AutoDuck"
      productSlug="autoduck"
    />
  )
}
