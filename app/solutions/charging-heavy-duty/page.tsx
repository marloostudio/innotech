import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Robotic Charging for Heavy-Duty and Commercial Vehicles',
  description: 'Heavy-duty robotic charging solution designed for commercial trucks, buses, and industrial vehicles.'
}

export default function ChargingHeavyDutyPage() {
  const solution = solutions.find(s => s.slug === 'charging-heavy-duty')!
  return <SolutionDetail solution={solution} />
}
