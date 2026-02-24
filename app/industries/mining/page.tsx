import { Metadata } from 'next'
import { IndustryDetail } from '@/components/industry-detail'
import { industries } from '@/lib/content/industries-detailed'

export const metadata: Metadata = {
  title: 'Ruggedised Autonomous Charging and Monitoring for Mining Operations',
  description: 'Heavy-duty solutions designed for harsh mining environments with autonomous haul trucks, loaders, and support vehicles.'
}

export default function MiningPage() {
  const industry = industries.find(i => i.slug === 'mining')!
  return <IndustryDetail industry={industry} />
}
