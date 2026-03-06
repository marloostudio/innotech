import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Faq } from "@/components/sections/faq"
import { faqItems } from "@/lib/content/faq"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about InnoTech Systems products, support, and engagement.",
}

export default function FAQPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b border-it-border" style={{ background: "var(--it-bg)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-it-text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <Link href="/resources" className="hover:text-it-text-primary transition-colors">Resources</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-it-text-primary">FAQ</span>
          </nav>
        </div>
      </div>

      <Faq
        title="Frequently Asked Questions"
        description="Our consultation and sales team can address your common questions or book a session to go over your project."
        items={faqItems}
        variant="white"
      />
    </>
  )
}
