import { Metadata } from 'next'
import { IndustryDetail } from '@/components/industry-detail'
import { industries } from '@/lib/content/industries-detailed'

export const metadata: Metadata = {
  title: 'Autonomous EV Solutions for Logistics and Delivery Fleets',
  description: 'Transform your logistics operations with autonomous charging, fleet orchestration, and safety systems.'
}

export default function LogisticsPage() {
  const industry = industries.find(i => i.slug === 'logistics')!
  return <IndustryDetail industry={industry} />
}
