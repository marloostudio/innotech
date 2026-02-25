import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Values — InnoTech Systems",
  description: "What drives us — our mission and core values.",
}

export default function ValuesPage() {
  return (
    <main className="min-h-screen px-6 py-32 max-w-3xl mx-auto"
      style={{ background: "var(--it-light-bg)" }}>
      <p className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
        Company
      </p>
      <h1 className="text-4xl font-bold mb-6"
        style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-chakra)" }}>
        What Drives Us — Our Mission and Core Values
      </h1>
      <p style={{ color: "var(--it-light-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
        This page is coming soon. <a href="/contact"
          style={{ color: "var(--it-light-blue)" }}>Contact us</a> in the meantime.
      </p>
    </main>
  )
}
