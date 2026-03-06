import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, FileText, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Whitepapers — InnoTech Systems",
  description: "Technical whitepapers and architecture briefs.",
}

const dummyWhitepapers = [
  {
    title: "SafeGuard Architecture Overview",
    description: "Technical architecture for the Robotic Monitoring System: sensor fusion, edge processing, and integration with existing safety infrastructure.",
    topic: "SafeGuard",
    accent: "var(--it-card-accent-safeguard)",
  },
  {
    title: "AutoLock Fleet Integration Guide",
    description: "Integrating autonomous charging and Charge Depot workflows with fleet management systems. APIs, webhooks, and deployment patterns.",
    topic: "AutoLock",
    accent: "var(--it-card-accent-autolock)",
  },
  {
    title: "RADARLink: V2X and Localization",
    description: "V2X communication, precise localization, and drone tracking. Use cases for mining, logistics, and smart infrastructure.",
    topic: "RADARLink",
    accent: "var(--it-card-accent-solutions)",
  },
  {
    title: "Congregate Detection Best Practices",
    description: "Configuring and tuning Congregate Detection for high-traffic and industrial environments. False-positive reduction and alerting strategies.",
    topic: "SafeGuard",
    accent: "var(--it-card-accent-blue)",
  },
  {
    title: "Mining and Industrial Deployments",
    description: "Deployment patterns for harsh environments: connectivity, power, and maintenance. Case studies from mining and heavy industry.",
    topic: "Industry",
    accent: "var(--it-card-accent-orange)",
  },
]

export default function WhitepapersPage() {
  return (
    <>
      <div style={{ borderBottom: "1px solid var(--it-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
            <Link href="/resources" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Resources</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Whitepapers</span>
          </nav>
        </div>
      </div>

      <section className="px-6 lg:px-8 py-16 md:py-24" style={{ background: "var(--it-bg)" }}>
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-ibm-mono)" }}>
            Resources
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-chakra)" }}>
            Technical Whitepapers and Architecture Briefs
          </h1>
          <p className="text-lg max-w-[680px] mb-16" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
            In-depth technical documents and architecture briefs for SafeGuard, AutoLock, and RADARLink. Request access to download the latest versions.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dummyWhitepapers.map((wp) => (
              <article
                key={wp.title}
                className="it-card rounded-xl border p-6 flex flex-col h-full transition-all duration-150 hover:border-(--it-card-hover-border)"
                style={{ borderLeftWidth: 3, borderLeftColor: wp.accent }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 rounded-lg p-2" style={{ background: "var(--it-surface-raised)" }}>
                    <FileText className="w-5 h-5" style={{ color: "var(--it-text-muted)" }} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono tracking-widest uppercase mb-1" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-ibm-mono)" }}>
                      {wp.topic}
                    </p>
                    <h2 className="text-lg font-semibold leading-tight" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-chakra)" }}>
                      {wp.title}
                    </h2>
                  </div>
                </div>
                <p className="text-sm flex-1 mb-5" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans)", lineHeight: 1.6 }}>
                  {wp.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-90"
                  style={{ color: "var(--it-blue)", fontFamily: "var(--font-dm-sans)" }}
                >
                  <Download className="w-4 h-4" strokeWidth={1.5} />
                  Request PDF
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
