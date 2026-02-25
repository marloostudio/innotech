import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section, type SectionVariant } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

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
}

export function Faq({ 
  title = "Frequently Asked Questions", 
  description,
  items,
  variant,
  alt,
}: FaqProps) {
  return (
    <Section variant={variant} alt={alt}>
      <SectionHeader title={title} description={description} />
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-it-border">
            <AccordionTrigger className="text-left text-it-text-primary hover:text-it-blue [&>svg]:text-it-text-muted">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-it-text-secondary">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
