import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Whitepapers — InnoTech Systems",
  description: "Technical whitepapers and architecture briefs.",
}

export default function WhitepapersPage() {
  return (
    <main className="min-h-screen px-6 py-32 max-w-3xl mx-auto"
      style={{ background: "var(--it-light-bg)" }}>
      <p className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
        Resources
      </p>
      <h1 className="text-4xl font-bold mb-6"
        style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-chakra)" }}>
        Technical Whitepapers and Architecture Briefs
      </h1>
      <p style={{ color: "var(--it-light-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
        This page is coming soon. <a href="/contact"
          style={{ color: "var(--it-light-blue)" }}>Contact us</a> in the meantime.
      </p>
    </main>
  )
}
