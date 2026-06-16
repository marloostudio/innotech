import type { Metadata } from "next"

import { SvgDisplayRow } from "@/components/demo/svg-display-row"

export const metadata: Metadata = {
  title: "SVG Demo",
  description: "Internal sandbox for SVG layout and display.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function DemoPage() {
  return (
    <section className="flex w-full flex-1 flex-col">
      <SvgDisplayRow />
    </section>
  )
}
