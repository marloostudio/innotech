import { Metadata } from 'next'
import { ProductFeatureDetail } from '@/components/product-feature-detail'
import { radarLinkFeatures } from '@/lib/content/radar-link'

export const metadata: Metadata = {
  title: 'Centimetre-Level Indoor and Outdoor Localization',
  description: 'Ultra-precise positioning system providing centimeter-level accuracy in GPS-denied environments.'
}

export default function MicroLocalizationPage() {
  const feature = radarLinkFeatures.find(f => f.slug === 'micro-localization')!
  
  return (
    <ProductFeatureDetail
      feature={feature}
      productName="RADARLink"
      productSlug="radar-link"
    />
  )
}
