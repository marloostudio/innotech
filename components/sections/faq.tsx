import Link from "next/link"
import { MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Section, type SectionVariant } from "@/components/page-shell"
import { buildFaqPageJsonLd } from "@/lib/seo/faq-json-ld"
import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  title?: string
  description?: string
  items: FaqItem[]
  variant?: SectionVariant
  alt?: boolean
  /** Stable id for anchor links and crawlers (default: `faq`). */
  sectionId?: string
  /** Emit FAQPage JSON-LD for Google rich results (default: true when items are non-empty). */
  jsonLd?: boolean
  /** Full canonical URL of this page for the FAQPage `url` field. */
  pageUrl?: string
}

export function Faq({
  title = "Frequently Asked Questions",
  description = "Our consultation and sales team can address your common questions or book a session to go over your project.",
  items,
  variant,
  alt,
  sectionId = "faq",
  jsonLd = true,
  pageUrl,
}: FaqProps) {
  const isLightBg = variant === "light-bg" || variant === "light-bg-2"
  const titleCls = isLightBg ? "text-it-light-text-primary" : "text-it-text-primary"
  const descCls = isLightBg ? "text-it-light-text-muted" : "text-it-text-muted"
  const triggerCls = isLightBg
    ? "text-it-light-text-primary opacity-90 hover:opacity-100 hover:no-underline transition-all duration-300 ease-out [&>svg]:text-it-light-text-muted"
    : "text-it-text-primary opacity-90 hover:opacity-100 hover:no-underline transition-all duration-300 ease-out [&>svg]:text-it-text-muted"
  const contentCls = isLightBg ? "text-it-light-text-secondary" : "text-it-text-secondary"
  const borderCls = isLightBg ? "border-it-light-border" : "border-it-border"

  const faqJsonLd =
    jsonLd && items.length > 0
      ? buildFaqPageJsonLd(items, pageUrl ? { pageUrl } : undefined)
      : null

  return (
    <Section variant={variant} alt={alt} id={sectionId}>
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-1 space-y-4">
          <h2
            className={cn(
              "font-inter text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance",
              titleCls
            )}
          >
            {title}
          </h2>
          {description && (
            <p className={cn("text-base md:text-lg leading-snug text-pretty max-w-xl", descCls)}>
              {description}
            </p>
          )}
          <Link href="/contact" className="block w-full">
            <Button
              size="lg"
              className={cn(
                "w-full gap-2 font-medium",
                isLightBg
                  ? "bg-it-light-blue text-white hover:bg-it-light-blue-hover"
                  : "bg-it-blue text-it-bg hover:opacity-90"
              )}
            >
              <MessageCircle className="size-5 shrink-0" strokeWidth={1.5} />
              Contact us
            </Button>
          </Link>
        </div>
        <div className="lg:col-span-2 w-full">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={cn("border-b last:border-b-0", borderCls)}
              >
                <AccordionTrigger className={cn("text-left py-4", triggerCls)}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={contentCls}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  )
}
