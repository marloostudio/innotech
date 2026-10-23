Cursor Prompt — Review Changelog, Assign Version if Needed, and Push to Main

You are preparing the InnoTech project for a direct push to the single main branch.

This project does not use feature branches for this workflow.
Do not create a new branch.
Do not suggest branching.
Do all work against main only.

Primary objective

Before pushing code, review the latest documented and undocumented work, make sure the changelog is correct, assign a proper version number if needed, then commit and push everything directly to main.

You must treat the changelog as part of the release hygiene, not as an optional extra.

Files to review

At minimum, review and keep aligned:

CHANGELOG.md

app/changelog/page.tsx

any other files changed in the current working tree

Important workflow context

I often have multiple Cursor agent chats open at the same time.
Because of that:

the same version may be updated multiple times before I push

some work may already be documented in the changelog

some work may still be missing from the changelog

the latest changes may justify keeping the same version or creating a new one

Your first job is to review the current state carefully before deciding on a version bump.

Required workflow

Step 1 — Review all current changes

Review:

uncommitted file changes

current changelog entries

whether the latest work is already documented

whether the most recent version is still acting like an open working version

Identify:

what changed in this latest batch of work

whether those changes are already captured accurately

whether entries are duplicated, missing, too technical, or inconsistent between files

Step 2 — Decide whether the version should stay the same or be bumped

Use semantic versioning carefully:

Major = breaking or major product/site structure changes

Minor = new features, new sections, substantial UX or functional improvements

Patch = copy edits, UI polish, bug fixes, smaller refinements

Rules:

Do not bump automatically

If the current latest version is still appropriate, keep it and refine that entry

If the latest changes clearly deserve a new version, assign the next proper version number

If creating a new version, move only the newest relevant items into that new entry cleanly

Avoid duplicate version headings

Avoid repeated bullets with slightly different wording

Step 3 — Update changelog files before Git push

Update both:

CHANGELOG.md

app/changelog/page.tsx

Requirements:

keep both files aligned

if version changed, reflect it in both files

add a timestamp in UTC

keep CHANGELOG.md technical and complete

keep app/changelog/page.tsx clear, concise, and user-facing

merge duplicate items if needed

keep newest version first

Step 4 — Validate before commit

Before committing:

confirm the changelog matches the actual latest work

confirm the front-end changelog is not overly technical

confirm there are no accidental duplicate entries

confirm the selected version number is reasonable

confirm changes are being committed directly to main

Step 5 — Commit and push directly to main

Do not branch.
Do not open a PR workflow.
Do not ask to create a feature branch.

Use Git directly on main.

Commit message rules

Do not always use the generic message:

Pages content updates

Instead, write a better commit message based on the real work done.

Good commit message examples:

chore: update changelog and release notes

feat: refine changelog structure and release history page

fix: align changelog entries and update release metadata

chore: finalize latest site updates and changelog

feat: add latest page updates and refresh changelog

Keep the commit message short, accurate, and tied to the actual work.

Git instructions

Unless there is a specific reason to do otherwise, use this flow:

git checkout main
git pull
git add .
git commit -m "<accurate commit message based on actual work>"
git push origin main

If there is nothing to commit, say so clearly instead of forcing an empty commit.

Changelog writing rules

For CHANGELOG.md

use Keep a Changelog structure where relevant:

Added

Changed

Fixed

Removed

include technical details where useful

include UTC timestamp for new or updated release entries going forward

keep formatting clean

Preferred timestamp format:

2026-03-05 22:15 UTC

For app/changelog/page.tsx

Each release entry should remain easy to scan.
Prefer:

version

timestamp

one-line summary

highlights

optional grouped sections

Translate technical implementation notes into user-facing outcomes.

Example:

“Adjusted dropdown close timing” → “Improved dropdown usability so navigation feels easier and more forgiving”

Do not fill the front-end changelog with raw file paths or JSX unless there is already an intentional hidden technical details pattern.

Decision standard for version bump

Before assigning a new version, explicitly check:

Is the current latest version still acting as an open working version?

Are the new changes already logically part of that version?

Would bumping now make the version history cleaner, or just more fragmented?

Does the scope of the newest changes really justify a new patch/minor/major version?

Default behavior:

if uncertain, keep the current version and improve the existing entry

only create a new version when there is a clear release boundary or meaningful version-worthy increment

Final instruction

Your full task is:

review the latest code and changelog state

decide whether a version bump is needed

if needed, assign the correct new version number

update CHANGELOG.md

update app/changelog/page.tsx

commit the work with a proper commit message

push directly to origin main

Do not create a branch.
Do not recommend a PR workflow.
Do not skip the changelog review.
Do not use a vague commit message unless the work is actually vague.

Everything should happen cleanly on the single main branch.

