import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Autonomous Charging for Mobile Robots and Inspection Bots',
  description: 'Compact autonomous charging solutions for AMRs, inspection robots, and mobile platforms.'
}

export default function ChargingMARPage() {
  const solution = solutions.find(s => s.slug === 'charging-mar')!
  return <SolutionDetail solution={solution} />
}
