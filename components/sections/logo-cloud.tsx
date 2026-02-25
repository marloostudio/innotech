import { PageShell } from "@/components/page-shell"

interface LogoCloudProps {
  title?: string
  logos: string[]
}

export function LogoCloud({ title = "Trusted by industry leaders", logos }: LogoCloudProps) {
  return (
    <section className="it-section-mid py-16 md:py-20">
      <PageShell>
        <div className="space-y-8">
          <p className="text-center text-sm font-medium text-it-text-muted uppercase tracking-wider">
            {title}
          </p>
          <div className="overflow-hidden">
            <div
              className="flex w-max gap-8 items-center"
              style={{ animation: "logo-scroll 60s linear infinite" }}
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center justify-center min-h-12 rounded-lg py-4 px-6 font-semibold text-sm text-it-text-muted border border-[var(--it-border)] bg-[var(--it-surface)]"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  )
}
