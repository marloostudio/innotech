import type { Metadata } from "next"
import { getChangelogEntries } from "@/lib/changelog"
import { ChangelogLayout } from "@/components/changelog-layout"
import { Section } from "@/components/page-shell"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release history and notable changes to the InnoTech Systems site and products.",
}

export default function ChangelogPage() {
  const entries = getChangelogEntries()

  return (
    <>
      <PillarHero
        badge="Changelog"
        h1="Release history"
        h2="Versions and notable changes"
        description="What’s new across the site: design updates, new features, and improvements, grouped by area with optional technical details."
        compact
        align="left"
      />

      <Section variant="light" alt id="releases">
        <ChangelogLayout entries={entries} />
      </Section>

      <CtaBanner
        title="Questions or feedback?"
        description="Get in touch for technical support or product enquiries."
        primaryCta={{ label: "Contact us", href: "/contact" }}
      />
    </>
  )
}
