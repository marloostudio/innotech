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
      <Section variant="light" alt id="releases" containerClassName="max-w-screen-2xl mx-auto px-8">
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
