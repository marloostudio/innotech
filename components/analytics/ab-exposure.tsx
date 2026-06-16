"use client"

import { useEffect } from "react"

interface AbExposureProps {
  experimentId: string
  variant: string
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/** Push an A/B exposure event to GTM dataLayer once per page load. */
export function AbExposure({ experimentId, variant }: AbExposureProps) {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? []
    window.dataLayer.push({
      event: "ab_exposure",
      ab_experiment_id: experimentId,
      ab_variant: variant,
    })
  }, [experimentId, variant])

  return null
}
