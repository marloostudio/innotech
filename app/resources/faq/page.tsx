import type { Metadata } from "next"

import { BreadcrumbStrip } from "@/components/breadcrumb-strip"
import { Faq } from "@/components/sections/faq"
import { faqItems } from "@/lib/content/faq"
import { buildPageMetadata } from "@/lib/seo/page-metadata"
import { siteUrl } from "@/lib/site"

const faqCanonicalUrl = `${siteUrl}/resources/faq`

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description: "Frequently asked questions about InnoTech Systems products, support, and engagement.",
  path: "/resources/faq",
})

export default function FAQPage() {
  return (
    <>
      <BreadcrumbStrip
        items={[
          { label: "Resources" },
          { label: "FAQ" },
        ]}
      />

      <Faq
        title="Frequently Asked Questions"
        description="Our consultation and sales team can address your common questions or book a session to go over your project."
        items={faqItems}
        variant="white"
        pageUrl={faqCanonicalUrl}
      />
    </>
  )
}
