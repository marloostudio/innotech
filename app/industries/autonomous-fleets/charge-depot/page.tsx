import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Charge Depot — InnoTech Systems",
  description: "Overnight autonomous charging for electric fleets.",
}

export default function ChargeDepotPage() {
  return (
    <main className="min-h-screen px-6 py-32 max-w-3xl mx-auto"
      style={{ background: "var(--it-bg)" }}>
      <p className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--it-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
        Industries
      </p>
      <h1 className="text-4xl font-bold mb-6"
        style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-chakra)" }}>
        Overnight Autonomous Charging for Electric Fleets
      </h1>
      <p style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans)" }}>
        This page is coming soon. <a href="/contact"
          style={{ color: "var(--it-blue)" }}>Contact us</a> in the meantime.
      </p>
    </main>
  )
}
