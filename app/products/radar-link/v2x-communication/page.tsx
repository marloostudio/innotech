import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { radarLinkFeatures } from '@/lib/content/radar-link'

export const metadata: Metadata = {
  title: 'Vehicle-to-Everything Communication for Connected Autonomy',
  description: 'Enable seamless communication between vehicles, infrastructure, and control systems.'
}

export default function V2XCommunicationPage() {
  const feature = radarLinkFeatures.find(f => f.slug === 'v2x-communication')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="RADARLink"
      productSlug="radar-link"
    />
  )
}
