import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Safe Human-Robot Collaboration in Shared Workspaces',
  description: 'Enable productive human-robot collaboration with intelligent safety systems.'
}

export default function SafetyHumanRobotPage() {
  const solution = solutions.find(s => s.slug === 'safety-human-robot')!
  return <SolutionDetail solution={solution} />
}
