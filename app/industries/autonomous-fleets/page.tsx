import { Metadata } from 'next'
import { IndustryDetail } from '@/components/industry-detail'
import { industries } from '@/lib/content/industries-detailed'

export const metadata: Metadata = {
  title: 'Infrastructure and Support for Driverless Vehicle Fleets',
  description: 'Comprehensive infrastructure solutions for autonomous vehicle fleets including charging, V2X communication, and fleet coordination.'
}

export default function AutonomousFleetsPage() {
  const industry = industries.find(i => i.slug === 'autonomous-fleets')!
  return <IndustryDetail industry={industry} />
}
