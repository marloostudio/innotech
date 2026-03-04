import * as LucideIcons from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, type SectionVariant } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

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
  variant?: SectionVariant
  alt?: boolean
  /** When true, each card shows a 4/3 image placeholder on the right (or left if imageOnLeft) */
  showImagePlaceholder?: boolean
  /** When true with showImagePlaceholder, image is on the left and stuck to top/bottom/left */
  imageOnLeft?: boolean
  /** When true, hide the icon in each card */
  hideIcon?: boolean
}

export function FeatureGrid({ 
  title, 
  description, 
  badge,
  features, 
  columns = 4,
  variant,
  alt,
  showImagePlaceholder,
  imageOnLeft,
  hideIcon,
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

  const headerTheme = variant === "light-bg" ? "light" : "dark"
  return (
    <Section variant={variant} alt={alt}>
      <SectionHeader title={title} description={description} badge={badge} theme={headerTheme} />
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
        {features.map((feature) => {
          const Icon = getIcon(feature.icon)
          const isImageLeft = showImagePlaceholder && imageOnLeft
          return (
            <Card key={feature.id} className={cn("border border-it-light-border bg-it-light-surface shadow-[var(--it-light-shadow-sm)] hover:border-it-light-blue/50 transition-colors overflow-hidden", isImageLeft && "py-0")}>
              <div className={showImagePlaceholder ? `grid grid-cols-1 md:grid-cols-2 gap-0 ${isImageLeft ? "md:grid-flow-dense" : ""}` : ""}>
                {showImagePlaceholder && (
                  <div
                    className={
                      isImageLeft
                        ? "relative min-h-[180px] md:min-h-0 md:col-[1] md:row-span-1 md:self-stretch overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                        : "relative min-h-[180px] md:min-h-0 p-4 flex items-center"
                    }
                  >
                    <ImagePlaceholder
                      aspectRatio="4/3"
                      alt={`${feature.title} — solution`}
                      label={feature.title}
                      className={cn(
                        "border-0",
                        isImageLeft
                          ? "absolute inset-0 w-full h-full rounded-none !aspect-auto min-h-0"
                          : "w-full h-full min-h-[160px]"
                      )}
                      variant="light"
                    />
                  </div>
                )}
                <div className={cn(isImageLeft && "md:col-[2] py-6")}>
                  <CardHeader>
                    {!hideIcon && (
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--it-light-blue-subtle)] mb-4">
                        <Icon className="h-6 w-6 text-it-light-blue" strokeWidth={1.5} />
                      </div>
                    )}
                    <CardTitle className="text-xl text-it-light-text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-it-light-text-secondary">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
