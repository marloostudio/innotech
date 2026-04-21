"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/** Fires once on mount for GTM / Tag Manager triggers (use with URL `/thank-you?source=…`). */
export function ThankYouDataLayer({ source }: { source: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "form_submission_success",
      form_source: source,
    })
  }, [source])
  return null
}
