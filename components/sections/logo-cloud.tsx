import { cn } from "@/lib/utils"
import { PageShell } from "@/components/page-shell"

interface LogoCloudProps {
  title?: string
  logos: string[]
}

export function LogoCloud({ title = "Trusted by industry leaders", logos }: LogoCloudProps) {
  return (
    <section className="it-section-mid py-12">
      <PageShell>
      <div className="space-y-8">
        <p className="text-center text-sm font-medium text-it-text-muted uppercase tracking-wider">
          {title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-h-12 rounded-lg py-4 px-6 font-semibold text-sm text-it-text-muted border border-[var(--it-border)] bg-[var(--it-surface)]"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      </PageShell>
    </section>
  )
}
