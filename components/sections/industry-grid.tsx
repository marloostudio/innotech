import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

interface Industry {
  id: string
  title: string
  description: string
  icon: string
}

interface IndustryGridProps {
  title: string
  description?: string
  industries: Industry[]
  showCta?: boolean
}

export function IndustryGrid({ title, description, industries, showCta = false }: IndustryGridProps) {
  const getIcon = (iconName: string) => {
    // Map common icon names to Lucide icon components
    const iconMap: Record<string, LucideIcons.LucideIcon> = {
      'factory': LucideIcons.Factory,
      'truck': LucideIcons.Truck,
      'search': LucideIcons.Search,
      'wrench': LucideIcons.Wrench,
      'car': LucideIcons.Car,
      'plane': LucideIcons.Plane,
      'heart-pulse': LucideIcons.HeartPulse,
      'zap': LucideIcons.Zap,
      'warehouse': LucideIcons.Warehouse,
      'sprout': LucideIcons.Sprout,
      'package': LucideIcons.Package,
      'settings': LucideIcons.Settings,
      'users': LucideIcons.Users,
      'shield': LucideIcons.Shield,
      'cpu': LucideIcons.Cpu,
      'eye': LucideIcons.Eye,
      'network': LucideIcons.Network,
      'building': LucideIcons.Building,
      'layers': LucideIcons.Layers,
    }
    
    return iconMap[iconName] || LucideIcons.Building2
  }

  return (
    <Section className="bg-muted/30">
      <SectionHeader title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => {
          const Icon = getIcon(industry.icon)
          return (
            <Card key={industry.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {industry.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
      {showCta && (
        <div className="flex justify-center mt-12">
          <Link href="/industries">
            <Button variant="outline" size="lg">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </Section>
  )
}
