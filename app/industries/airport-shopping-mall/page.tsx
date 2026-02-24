import { Metadata } from 'next'
import { IndustryDetail } from '@/components/industry-detail'
import { industries } from '@/lib/content/industries-detailed'

export const metadata: Metadata = {
  title: 'Smart Mobility Automation for Airports and Commercial Centres',
  description: 'Autonomous shuttle, cargo transport, and service vehicle solutions for airports and large commercial facilities.'
}

export default function AirportShoppingMallPage() {
  const industry = industries.find(i => i.slug === 'airport-shopping-mall')!
  return <IndustryDetail industry={industry} />
}
