import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  title?: string
  description?: string
  items: FaqItem[]
}

export function Faq({ 
  title = "Frequently Asked Questions", 
  description,
  items 
}: FaqProps) {
  return (
    <Section>
      <SectionHeader title={title} description={description} />
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
