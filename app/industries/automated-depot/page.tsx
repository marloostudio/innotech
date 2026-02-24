import { Metadata } from 'next'
import { IndustryDetail } from '@/components/industry-detail'
import { industries } from '@/lib/content/industries-detailed'

export const metadata: Metadata = {
  title: 'Fully Automated Vehicle Depot Management',
  description: 'End-to-end depot automation including vehicle check-in, charging assignment, maintenance routing, and dispatch coordination.'
}

export default function AutomatedDepotPage() {
  const industry = industries.find(i => i.slug === 'automated-depot')!
  return <IndustryDetail industry={industry} />
}
