import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Radar-Based Drone Detection, Tracking and Identification',
  description: 'Comprehensive drone detection, tracking, and friend-or-foe identification for secure airspace management.'
}

export default function DroneTrackingPage() {
  const solution = solutions.find(s => s.slug === 'drone-tracking')!
  return <SolutionDetail solution={solution} />
}
