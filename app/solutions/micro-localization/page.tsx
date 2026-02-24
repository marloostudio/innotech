import { Metadata } from 'next'
import { SolutionDetail } from '@/components/solution-detail'
import { solutions } from '@/lib/content/solutions-detailed'

export const metadata: Metadata = {
  title: 'Precise Localization for GNSS-Denied and Complex Environments',
  description: 'Centimeter-level positioning in GPS-denied environments including warehouses, tunnels, and underground facilities.'
}

export default function MicroLocalizationPage() {
  const solution = solutions.find(s => s.slug === 'micro-localization')!
  return <SolutionDetail solution={solution} />
}
