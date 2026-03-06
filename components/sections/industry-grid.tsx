import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section, PageShell, type SectionVariant } from "@/components/page-shell"
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
  variant?: SectionVariant
}

export function IndustryGrid({ title, description, industries, showCta = false, variant }: IndustryGridProps) {
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

  const headerTheme = variant === "light-bg" || variant === "light-bg-2" ? "light" : "dark"
  const isLightSection = variant === "light-bg" || variant === "light-bg-2"
  const content = (
    <>
      <SectionHeader theme={headerTheme} title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => {
          const Icon = getIcon(industry.icon)
          return (
            <Card key={industry.id} className={cn(
              isLightSection
                ? "bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] hover:shadow-[var(--it-light-shadow-md)]"
                : "bg-[var(--it-surface-raised)] border border-it-border hover:border-[var(--it-card-hover-border)] hover:shadow-[var(--it-card-hover-shadow)]",
              "transition-all duration-200"
            )}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "flex shrink-0 items-center justify-center w-12 h-12 rounded-lg",
                    isLightSection ? "bg-[var(--it-light-blue-subtle)]" : "bg-[var(--it-blue-subtle)]"
                  )}>
                    <Icon className={cn("h-6 w-6", isLightSection ? "text-it-light-blue" : "text-it-blue")} strokeWidth={1.5} />
                  </div>
                  <CardTitle className={cn("text-2xl min-w-0", isLightSection ? "text-it-light-text-primary" : "text-it-text-primary")}>{industry.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className={cn("text-base", isLightSection ? "text-it-light-text-secondary" : "text-it-text-secondary")}>
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
            <Button variant="outline" size="lg" className={cn(
              isLightSection
                ? "border-it-light-border text-it-light-text-secondary hover:bg-it-light-surface-2 hover:text-it-light-text-primary"
                : "border-it-border text-it-text-secondary hover:bg-it-surface hover:text-it-text-primary hover:border-[var(--it-blue-border)]"
            )}>
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </Button>
          </Link>
        </div>
      )}
    </>
  )

  if (variant) {
    return (
      <Section variant={variant} alt={false}>
        {content}
      </Section>
    )
  }

  return (
    <section className="it-section-mid py-20 md:py-28">
      <PageShell>
        {content}
      </PageShell>
    </section>
  )
}
