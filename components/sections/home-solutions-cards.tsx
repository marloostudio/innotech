import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { solutionsOverview } from "@/lib/content/home"

export function HomeSolutionsCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-3">
      {solutionsOverview.map((feature) => (
        <Card
          key={feature.id}
          className="h-full gap-0 border border-it-light-border bg-it-light-surface py-0 shadow-[var(--it-light-shadow-sm)] hover:border-it-light-blue/50 hover:shadow-[var(--it-light-shadow-md)] transition-all duration-200"
        >
          <CardHeader className="px-4 pt-3 pb-0">
            <CardTitle className="text-lg leading-snug tracking-tight text-it-light-text-primary">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-3 pt-0">
            <CardDescription className="text-base leading-relaxed text-it-light-text-secondary">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
