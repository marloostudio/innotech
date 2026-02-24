import * as LucideIcons from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

interface FeatureGridProps {
  title: string
  description?: string
  badge?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ 
  title, 
  description, 
  badge,
  features, 
  columns = 4 
}: FeatureGridProps) {
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
    
    return iconMap[iconName] || LucideIcons.Box
  }

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  }

  return (
    <Section>
      <SectionHeader title={title} description={description} badge={badge} />
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
        {features.map((feature) => {
          const Icon = getIcon(feature.icon)
          return (
            <Card key={feature.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
