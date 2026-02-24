import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Dynamic Safety Zones and Collision Avoidance for Industrial Robots',
  description: 'Advanced safety monitoring for industrial robotic work cells with dynamic safety zones.'
}

export default function SafetyIndustrialRobotsPage() {
  const solution = solutions.find(s => s.slug === 'safety-industrial-robots')!
  return <SolutionDetail solution={solution} />
}
