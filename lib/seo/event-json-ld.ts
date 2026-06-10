import { automateEvent } from "@/lib/content/exhibition-automate"
import { siteConfig, siteUrl } from "@/lib/site"

function ymdFromCompact(raw: string): string {
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`
}

/** Event structured data for the Automate trade-show landing page. */
export function buildAutomateEventJsonLd(): Record<string, unknown> {
  const pageUrl = `${siteUrl}/events/automate-2026`
  const [startRaw, endRawExclusive] = automateEvent.calendarDatesAllDay.split("/")
  const startDate = ymdFromCompact(startRaw)

  const endDay = new Date(
    Date.UTC(
      Number(endRawExclusive.slice(0, 4)),
      Number(endRawExclusive.slice(4, 6)) - 1,
      Number(endRawExclusive.slice(6, 8)),
    ),
  )
  endDay.setUTCDate(endDay.getUTCDate() - 1)
  const endDate = endDay.toISOString().slice(0, 10)

  const city = automateEvent.city.split(",")[0]?.trim() ?? automateEvent.city

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${siteConfig.company.name} at ${automateEvent.name} ${automateEvent.year}`,
    description:
      "Meet InnoTech Systems at Automate 2026 — live demos of SafeGuard, AutoDuck, and RADARLink for autonomous fleets.",
    startDate,
    endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: automateEvent.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: "IL",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteUrl,
    },
    url: pageUrl,
  }
}
