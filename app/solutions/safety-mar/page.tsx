import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Real-Time Safety Monitoring for Mobile Autonomous Robots',
  description: 'Comprehensive safety solution for AMRs navigating dynamic environments with people and obstacles.'
}

export default function SafetyMARPage() {
  const solution = solutions.find(s => s.slug === 'safety-mar')!
  return <SolutionDetail solution={solution} />
}
