import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Playbooks — InnoTech Systems",
  description: "Implementation playbooks and best practice guides.",
}

export default function PlaybooksPage() {
  return (
    <>
      <div style={{ borderBottom: "1px solid var(--it-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <Link href="/" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Home</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <Link href="/resources" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Resources</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Playbooks</span>
          </nav>
        </div>
      </div>

      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24" style={{ background: "var(--it-hero-gradient)" }}>
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-sans), 'Inter', sans-serif" }}>
            Implementation Playbooks
          </h1>
          <p className="text-lg" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            Best practice guides and playbooks are coming soon. Subscribe to be notified when we publish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 font-medium transition-colors"
              style={{ background: "var(--it-blue)", color: "var(--it-bg)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
            >
              Subscribe for Updates
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 font-medium border transition-colors"
              style={{ borderColor: "var(--it-border)", color: "var(--it-text-primary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
