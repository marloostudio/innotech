import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'V2I Communication for Smarter Roads and Terminal Operations',
  description: 'Connect vehicles with infrastructure systems for optimized routing and traffic management.'
}

export default function ConnectivityV2IPage() {
  const solution = solutions.find(s => s.slug === 'connectivity-v2i')!
  return <SolutionDetail solution={solution} />
}
