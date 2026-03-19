import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { autolockFeatures } from '@/lib/content/autolock'

export const metadata: Metadata = {
  title: 'Secure Vehicle Authentication and Charging Access Control',
  description: 'Enterprise-grade security and access management for charging infrastructure with usage tracking.'
}

export default function AccessControlPage() {
  const feature = autolockFeatures.find(f => f.slug === 'access-control')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="AutoDuck"
      productSlug="autolock"
    />
  )
}
