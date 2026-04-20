import type { Metadata } from "next"
import { BreadcrumbStrip } from "@/components/breadcrumb-strip"

export const metadata: Metadata = {
  title: "Open Roles — InnoTech Systems",
  description: "Hiring updates and open positions at InnoTech Systems.",
}

export default function OpenRolesPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Company", href: "/company" }, { label: "Careers", href: "/company/careers" }, { label: "Open Roles" }]} />
      <main className="min-h-screen px-6 py-32 max-w-3xl mx-auto"
        style={{ background: "var(--it-light-bg)" }}>
      <p className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--it-light-text-dim)", fontFamily: "var(--font-ibm-mono)" }}>
        Careers
      </p>
      <h1 className="text-4xl font-bold mb-6"
        style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
        Open roles
      </h1>
      <p className="text-lg text-pretty" style={{ color: "var(--it-light-text-primary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
        We are not currently hiring, check this page soon for updates.
      </p>
      <p className="mt-6" style={{ color: "var(--it-light-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
        <a href="/contact" style={{ color: "var(--it-light-blue)" }}>Contact us</a> if you&apos;d like to get in touch.
      </p>
    </main>
    </>
  )
}
