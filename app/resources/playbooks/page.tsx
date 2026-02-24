import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Playbooks — InnoTech Systems",
  description: "Implementation playbooks and best practice guides.",
}

export default function PlaybooksPage() {
  return (
    <main className="min-h-screen px-6 py-32 max-w-3xl mx-auto"
      style={{ background: "var(--it-bg)" }}>
      <p className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
        Resources
      </p>
      <h1 className="text-4xl font-bold mb-6"
        style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-chakra)" }}>
        Implementation Playbooks and Best Practice Guides
      </h1>
      <p style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
        This page is coming soon. <a href="/contact"
          style={{ color: "var(--it-blue)" }}>Contact us</a> in the meantime.
      </p>
    </main>
  )
}
