import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'V2V Communication for Collision Prevention and Fleet Awareness',
  description: 'Low-latency vehicle-to-vehicle communication enabling coordinated maneuvers and collision avoidance.'
}

export default function ConnectivityV2VPage() {
  const solution = solutions.find(s => s.slug === 'connectivity-v2v')!
  return <SolutionDetail solution={solution} />
}
