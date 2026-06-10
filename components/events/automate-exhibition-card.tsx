import { CalendarDays, CalendarPlus, MapPin, MapPinned, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { automateEvent } from "@/lib/content/exhibition-automate"
import { cn } from "@/lib/utils"

function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `InnoTech Systems — ${automateEvent.name} ${automateEvent.year}`,
    dates: automateEvent.calendarDatesAllDay,
    details: `Trade show — ${automateEvent.venue}, ${automateEvent.city}. ${automateEvent.booth}, ${automateEvent.hallOrZone}.`,
    location: `${automateEvent.venue}, ${automateEvent.city}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

type AutomateExhibitionCardProps = {
  className?: string
  variant?: "light" | "dark"
}

export function AutomateExhibitionCard({ className, variant = "light" }: AutomateExhibitionCardProps) {
  const isDark = variant === "dark"

  return (
    <div
      className={cn(
        "rounded-xl border px-5 py-4 md:px-6 md:py-5",
        isDark
          ? "border-[var(--it-border-bright)] bg-it-blue-subtle shadow-(--it-shadow-glow-blue-soft)"
          : "border-it-light-border bg-it-light-surface shadow-(--it-light-shadow-md)",
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <CalendarDays
          className={cn(
            "w-5 h-5 shrink-0 md:w-6 md:h-6",
            isDark ? "text-it-blue" : "text-it-light-blue",
          )}
          strokeWidth={1.5}
          aria-hidden
        />
        <span
          className={cn(
            "whitespace-nowrap text-sm md:text-base font-mono uppercase tracking-widest",
            isDark ? "text-it-text-secondary" : "text-it-light-text-muted",
          )}
        >
          Exhibition dates
        </span>
      </div>
      <p
        className={cn(
          "text-left text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none",
          isDark ? "text-it-blue" : "text-it-light-blue",
        )}
        style={{ fontFamily: "var(--font-chakra)" }}
      >
        {automateEvent.dateRange}
      </p>
      <div
        className={cn(
          "mt-4 pt-4 space-y-2 text-sm md:text-base border-t",
          isDark ? "border-it-blue-border" : "border-it-light-border",
        )}
      >
        <p
          className={cn(
            "inline-flex items-center gap-2",
            isDark ? "text-it-text-secondary" : "text-it-light-text-secondary",
          )}
        >
          <MapPin
            className={cn(
              "w-4 h-4 shrink-0",
              isDark ? "text-it-text-muted" : "text-it-light-text-muted",
            )}
            strokeWidth={1.5}
            aria-hidden
          />
          {automateEvent.venue}, {automateEvent.city}
        </p>
        <p
          className={cn(
            "inline-flex items-center gap-2",
            isDark ? "text-it-text-secondary" : "text-it-light-text-secondary",
          )}
        >
          <Store
            className={cn(
              "w-4 h-4 shrink-0",
              isDark ? "text-it-text-muted" : "text-it-light-text-muted",
            )}
            strokeWidth={1.5}
            aria-hidden
          />
          Booth{" "}
          <span className={cn("font-mono", isDark ? "text-it-blue" : "text-it-light-blue")}>
            {automateEvent.booth}
          </span>
          <span className={isDark ? "text-it-text-muted" : "text-it-light-text-muted"} aria-hidden>
            {" "}
            ·{" "}
          </span>
          {automateEvent.hallOrZone}
        </p>
      </div>
      <div className="mt-5 flex flex-row gap-3">
        <Button
          variant="outline"
          size="default"
          className={cn(
            "h-11 min-w-0 flex-1",
            isDark
              ? "border-it-blue-border text-it-text-primary hover:bg-it-blue-subtle"
              : "border-it-light-border text-it-light-text-primary hover:bg-it-light-blue-subtle",
          )}
          asChild
        >
          <a href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer">
            <CalendarPlus className="w-4 h-4" strokeWidth={1.5} aria-hidden />
            Add to calendar
          </a>
        </Button>
        <Button
          variant="outline"
          size="default"
          className={cn(
            "h-11 min-w-0 flex-1",
            isDark
              ? "border-it-blue-border text-it-text-primary hover:bg-it-blue-subtle"
              : "border-it-light-border text-it-light-text-primary hover:bg-it-light-blue-subtle",
          )}
          asChild
        >
          <a href={automateEvent.boothMapCta.href} target="_blank" rel="noopener noreferrer">
            <MapPinned className="w-4 h-4" strokeWidth={1.5} aria-hidden />
            {automateEvent.boothMapCta.label}
          </a>
        </Button>
      </div>
    </div>
  )
}
