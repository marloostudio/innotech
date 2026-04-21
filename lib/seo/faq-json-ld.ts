/**
 * FAQPage structured data (schema.org) for Google Search.
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */

export interface FaqStructuredDataItem {
  question: string
  answer: string
}

export function buildFaqPageJsonLd(
  items: readonly FaqStructuredDataItem[],
  options?: { pageUrl?: string }
): Record<string, unknown> {
  const graph: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  if (options?.pageUrl) {
    graph.url = options.pageUrl
  }

  return graph
}
