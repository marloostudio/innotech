import type { Metadata } from "next"
import { Faq } from "@/components/sections/faq"
import { faqItems } from "@/lib/content/faq"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about InnoTech Systems products, support, and engagement.",
}

export default function FAQPage() {
  return (
    <>
      <Faq
        title="Frequently Asked Questions"
        description="Our consultation and sales team can address your common questions or book a session to go over your project."
        items={faqItems}
        variant="white"
      />
    </>
  )
}
