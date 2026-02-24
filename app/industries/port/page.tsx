import { Metadata } from 'next'
import { IndustryDetail } from '@/components/industry-detail'
import { industries } from '@/lib/content/industries-detailed'

export const metadata: Metadata = {
  title: 'Autonomous Systems for Port and Container Terminal Operations',
  description: 'Specialized solutions for port environments including autonomous cargo movers, reach stackers, and terminal tractors.'
}

export default function PortPage() {
  const industry = industries.find(i => i.slug === 'port')!
  return <IndustryDetail industry={industry} />
}
