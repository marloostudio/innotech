Cursor Prompt — Update CHANGELOG.md and app/changelog/page.tsx

You are updating the InnoTech changelog in two places:

CHANGELOG.md → internal/source-of-truth changelog

app/changelog/page.tsx → live front-end changelog page

Your job is to update both files so they stay aligned, but each should serve its own purpose.

Context to keep in mind

I often have multiple Cursor agent chats open at the same time.

Because of that:

this prompt may be used to add multiple batches of work into the changelog over time

some changes may be recorded before I upload, commit, or push to Git

the version number may intentionally stay the same across multiple updates until I decide to bump it

do not automatically force a version bump every time this prompt is used

If I do not explicitly ask for a new version number:

assume the current working version may still be open

append, merge, or refine entries under the existing target version

avoid creating duplicate headings for the same version

consolidate repeated items into cleaner wording

Only create a new version entry when:

I explicitly request a version bump, or

the scope clearly justifies closing the current version and starting a new one

When in doubt, keep the same version and improve the existing entry.

Purpose of each file

1) CHANGELOG.md

This is the full technical record.
It should remain based on Keep a Changelog and Semantic Versioning.
It can include file paths, component names, implementation details, and developer-level notes.

2) app/changelog/page.tsx

This is the public-facing/front-end release history.
It must be easier to scan, easier to understand, and written in cleaner user-facing language.
Do not dump raw technical notes directly into the UI.
Translate technical work into clear product, design, UX, content, and navigation outcomes.

Core Rules

A. Keep both files aligned

Every release in CHANGELOG.md must also appear on app/changelog/page.tsx

Version number and timestamp must match exactly

Front-end wording should reflect the same changes, but in a simplified and cleaner structure

B. Use a globally recognized timestamp

For every new or updated release entry going forward, include:

Date

Time

Timezone abbreviation

UTC is required

Preferred formats:

In CHANGELOG.md: 2026-03-05 22:15 UTC

In front end: Released: 5 Mar 2026, 22:15 UTC

Do not use date only for new updates going forward.

C. Follow semantic versioning carefully

Major = breaking or major product/design/site structure changes

Minor = new features, meaningful sections, important UX improvements, substantial enhancements

Patch = bug fixes, visual polish, wording changes, copy updates, smaller UX refinements

Important:

Do not bump the version automatically just because new work was done

The same version may be updated multiple times before Git push or release finalization

Only bump when explicitly requested or clearly justified

D. Avoid duplication

Before updating:

check whether the target version already exists

check whether the same change is already documented

merge similar notes instead of repeating them

do not create duplicate version headings

do not create near-duplicate bullets with slightly different wording

E. Preserve two writing styles

For CHANGELOG.md

Use these sections when relevant:

Added

Changed

Fixed

Removed

Keep full technical specificity.

For app/changelog/page.tsx

For each release, present content in this structure:

Version

Timestamp

One-line summary

Highlights

Optional grouped details by page or area

Optional technical details only if the UI already supports a hidden or expandable details section

Front-end text should:

be short

be scannable

avoid unnecessary file paths

avoid raw JSX unless hidden inside technical details

focus on user-visible outcomes

Front-End Writing Style Rules

When converting technical notes into public changelog wording:

Do this

“Improved visual rhythm across key pages”

“Refined blog hero typography”

“Updated contact CTA styling for better contrast”

“Improved layout consistency on product and solution pages”

“Added breadcrumbs to Blog and FAQ pages for easier navigation”

Avoid this unless inside technical details

raw file paths

JSX snippets like <Section variant="light-bg">

overly dense implementation language

component-level notes without explaining the visible outcome

Good front-end release structure example

SummaryImproved layout consistency across key pages and refined section styling for a smoother browsing experience.

Highlights

Homepage section rhythm improved

Product and solution layouts made more consistent

Blog hero typography refined

Contact CTA styling updated

Technical Hygiene Rules

When updating CHANGELOG.md

keep markdown formatting clean

maintain correct heading levels

keep newest entries first

preserve compare links at the bottom if the file uses them

if needed, update link references for newly finalized versions

if the version remains open, update that existing version instead of creating a new one

When updating app/changelog/page.tsx

preserve the existing component structure and styling conventions

keep newest release first

ensure the page remains visually easy to scan

prefer grouped bullets over dense paragraphs

do not let entries become long walls of text

keep the wording human-friendly and public-facing

Required workflow every time this prompt is used

When I ask you to update the changelog, do all of the following:

Review what the current chat changed

Identify whether those changes belong under the existing open version or require a new version

If I did not explicitly request a new version, default to updating the current version

Update or create the correct entry in CHANGELOG.md

Update the matching release entry in app/changelog/page.tsx

Add or preserve a UTC timestamp

Rewrite front-end notes into clean, user-friendly wording

Merge duplicate or overlapping items

Keep both files aligned

Keep the front-end changelog optimized for readability and eye scanning

Preferred front-end content model

When editing app/changelog/page.tsx, prefer a release object like this if compatible with the current implementation:

{
  version: "v1.4.9",
  timestamp: "5 Mar 2026, 22:15 UTC",
  summary: "Improved changelog readability and refined navigation clarity across the site.",
  highlights: [
    "Added release timestamps in UTC",
    "Improved front-end changelog structure for faster scanning",
    "Refined wording for public-facing release notes"
  ],
  sections: [
    {
      title: "Changelog",
      items: [
        "Release entries now include a full timestamp in a globally recognized timezone.",
        "Version summaries and highlights are easier to scan."
      ]
    }
  ]
}

If the current implementation uses a different object shape, keep that shape, but apply the same content principles.

Translating technical notes into front-end wording

Always convert from implementation detail to visible outcome.

Examples:

“Wrapped feature section in light-bg section component”becomes“Improved feature section readability with a lighter content block”

“Updated SectionHeader theme to light”becomes“Refined section heading contrast for better readability”

“Added breadcrumb strip to blog and FAQ”becomes“Added breadcrumbs to Blog and FAQ pages for easier navigation”

“Adjusted navbar dropdown close timing”becomes“Improved dropdown usability so navigation feels easier and more forgiving”

Final instruction

Update both files directly and keep them synchronized.

Do not only update one.
Do not make the front-end changelog overly technical.
Do not make the markdown changelog overly vague.
Do not bump the version unless explicitly requested or clearly necessary.

The markdown changelog should remain complete for developers.
The front-end changelog should remain clear for end users.

When the current version is still open, continue refining and expanding that version cleanly instead of creating duplicates.

