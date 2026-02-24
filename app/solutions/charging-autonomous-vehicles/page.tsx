import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Autonomous EV Charging for Self-Driving Vehicle Fleets',
  description: 'Enable fully autonomous operations with robotic charging that requires no human intervention.'
}

export default function ChargingAutonomousVehiclesPage() {
  const solution = solutions.find(s => s.slug === 'charging-autonomous-vehicles')!
  return <SolutionDetail solution={solution} />
}
