import type { Metadata } from "next"

import { SvgDisplayRow } from "@/components/demo/svg-display-row"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "SVG Demo",
  description: "Internal sandbox for SVG layout and display.",
  robots: { index: false, follow: false },
}

export default function DemoPage() {
  return (
    <section className="flex flex-1 flex-col w-full">
      <PageShell>
        <div className="w-full">
          <SvgDisplayRow />
        </div>
      </PageShell>
    </section>
  )
}
