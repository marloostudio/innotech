import { execSync } from "child_process"
import { readFileSync } from "fs"
import { join } from "path"

/** Parsed single change with area and optional technical path for display grouping */
export interface ParsedChange {
  /** Area/category for grouping (e.g. "Homepage", "Product Pages") */
  area: string
  /** User-facing one-line description (paths stripped) */
  userFacing: string
  /** Raw bullet text for technical details */
  raw: string
  /** File paths extracted for technical details section */
  paths: string[]
  variant: "added" | "changed" | "fixed"
}

export interface ChangelogEntry {
  version: string
  date: string
  /** Git commit/push time (ISO) when available, e.g. from tag v{version} */
  gitPushedAt?: string
  /** Optional one-line summary (parsed from ### Summary in MD, or derived) */
  summary?: string
  /** Optional short highlights (parsed from ### Highlights, or derived from first bullets) */
  highlights?: string[]
  added: string[]
  changed: string[]
  fixed: string[]
  /** Parsed changes for UI: by area, user-facing text, technical paths */
  parsed?: {
    byArea: Map<string, ParsedChange[]>
    all: ParsedChange[]
    technicalPaths: string[]
  }
}

/** Get commit date (ISO) for tag v{version}; returns undefined if tag missing or git fails */
function getGitTagDate(version: string, cwd: string): string | undefined {
  try {
    const tag = `v${version}`
    const out = execSync(`git log -1 --format=%cI ${tag}`, {
      encoding: "utf-8",
      cwd,
      stdio: ["pipe", "pipe", "pipe"],
    })
    return out.trim() || undefined
  } catch {
    return undefined
  }
}

const RELEASE_HEADER = /^## \[([^\]]+)\]\s*[–-]\s*(\d{4}-\d{2}-\d{2})/gm
const SECTION_HEADER = /^### (Added|Changed|Fixed)\s*$/m

/** Extract area from bold lead e.g. "**Homepage**" or "**Product pages**" */
const BOLD_LEAD = /^\*\*([^*]+)\*\*/
/** File path in parens: (`app/...`) or (path) */
const PATH_IN_PARENS = /\s*\(`([^`]+)`\)|\s*\(([^)]*\.(?:tsx?|css|md|js|mjs)(?:\s*,\s*[^)]*)?)\)/g

const AREA_NORMALIZE: Record<string, string> = {
  "homepage": "Homepage",
  "product pages": "Product Pages",
  "solution pages": "Solution Pages",
  "about / our story": "About / Our Story",
  "our story": "About / Our Story",
  "blog": "Blog",
  "contact": "Contact",
  "design tokens": "Design System",
  "design token": "Design System",
  "section component": "Design System",
  "cta banner": "Design System",
  "sectionheader": "Design System",
  "footer": "Footer",
  "navbar": "Navigation",
  "nav bar": "Navigation",
  "legal pages": "Legal",
  "team page": "Company / Team",
  "careers page": "Careers",
  "company": "Company",
  "resources": "Resources",
  "feature grid": "Components",
  "industry grid": "Components",
  "stats": "Components",
  "tech overview": "Components",
  "testimonial": "Components",
  "breadcrumb": "Breadcrumbs",
  "hero": "Hero",
  "whitepapers page": "Resources",
  "faq": "FAQ",
}

function normalizeArea(area: string): string {
  const key = area.toLowerCase().trim()
  return AREA_NORMALIZE[key] ?? area.trim().replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Parse one bullet into area, user-facing text (paths stripped), and paths for technical section */
function parseBullet(
  raw: string,
  variant: "added" | "changed" | "fixed"
): ParsedChange {
  const paths: string[] = []
  const backtickPaths = [...raw.matchAll(/`([^`]+)`/g)].map((m) => m[1].trim())
  for (const p of backtickPaths) {
    if (p && (p.includes("/") || /\.(tsx?|css|md|js|mjs)$/.test(p))) paths.push(p)
  }
  const parenMatch = raw.match(/\(([^)]+)\)/)
  if (parenMatch && paths.length === 0) {
    const inside = parenMatch[1]
    if (inside.includes("/") || /\.(tsx?|css|md|js|mjs)/.test(inside)) {
      inside.split(",").forEach((s) => {
        const t = s.trim().replace(/^`|`$/g, "")
        if (t && (t.includes("/") || /\.(tsx?|css|md|js|mjs)$/.test(t))) paths.push(t)
      })
    }
  }
  // Strip parenthetical path parts for user-facing text (keep content before/after)
  let userFacing = raw
    .replace(/\s*\(`[^`]+`\)\s*/g, " ")
    .replace(/\s*\([^)]*\/[^)]+\)\s*/g, " ")
    .replace(/\s*\([^)]*\.(?:tsx?|css|md|js|mjs)[^)]*\)\s*/gi, " ")
    .replace(/\s{2,}/g, " ")
    .trim()

  let area = "General"
  const boldMatch = userFacing.match(BOLD_LEAD)
  if (boldMatch) {
    area = normalizeArea(boldMatch[1])
    userFacing = userFacing.slice(boldMatch[0].length).replace(/^\s*[–-]\s*/, "").trim()
  }
  if (!userFacing) userFacing = raw.replace(/\s*\([^)]+\)\s*/g, " ").trim() || raw

  return { area, userFacing, raw, paths, variant }
}

function buildParsed(entry: {
  added: string[]
  changed: string[]
  fixed: string[]
}): ChangelogEntry["parsed"] {
  const all: ParsedChange[] = []
  const byArea = new Map<string, ParsedChange[]>()
  const technicalPaths: string[] = []

  for (const raw of entry.added) {
    const p = parseBullet(raw, "added")
    all.push(p)
    if (!byArea.has(p.area)) byArea.set(p.area, [])
    byArea.get(p.area)!.push(p)
    technicalPaths.push(...p.paths)
  }
  for (const raw of entry.changed) {
    const p = parseBullet(raw, "changed")
    all.push(p)
    if (!byArea.has(p.area)) byArea.set(p.area, [])
    byArea.get(p.area)!.push(p)
    technicalPaths.push(...p.paths)
  }
  for (const raw of entry.fixed) {
    const p = parseBullet(raw, "fixed")
    all.push(p)
    if (!byArea.has(p.area)) byArea.set(p.area, [])
    byArea.get(p.area)!.push(p)
    technicalPaths.push(...p.paths)
  }

  return {
    byArea,
    all,
    technicalPaths: [...new Set(technicalPaths)],
  }
}

/** Derive one-line summary from first change or default */
function deriveSummary(parsed: ChangelogEntry["parsed"], added: string[], changed: string[]): string {
  const first = parsed?.all[0]?.userFacing ?? added[0] ?? changed[0]
  if (!first) return "Various updates and improvements."
  const oneLine = first.replace(/\s*\([^)]+\)\s*/g, " ").trim()
  const sentence = oneLine.split(/[.!?]\s/)[0]
  if (sentence && sentence.length < 120) return sentence + (oneLine.includes(".") ? "" : ".")
  return oneLine.slice(0, 100).trim() + (oneLine.length > 100 ? "…" : ".")
}

/** Derive up to 5 highlights from first bullets (user-facing) */
function deriveHighlights(parsed: ChangelogEntry["parsed"], max = 5): string[] {
  if (!parsed?.all.length) return []
  return parsed.all.slice(0, max).map((p) => p.userFacing)
}

function parseChangelogMarkdown(content: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = []
  const raw = content

  const lines = raw.split(/\r?\n/)
  const linkRefLineIndex = lines.findIndex((line) => /^\[[^\]]+\]:\s*https/.test(line))
  const body =
    linkRefLineIndex === -1 ? raw : lines.slice(0, linkRefLineIndex).join("\n")

  RELEASE_HEADER.lastIndex = 0
  const blocks: { version: string; date: string; start: number; end: number }[] = []

  const allMatches = [...body.matchAll(RELEASE_HEADER)]
  for (let i = 0; i < allMatches.length; i++) {
    const m = allMatches[i]
    const start = m.index! + m[0].length
    const end = i + 1 < allMatches.length ? allMatches[i + 1].index! : body.length
    blocks.push({ version: m[1], date: m[2], start, end })
  }

  for (const block of blocks) {
    const slice = body.slice(block.start, block.end)
    let summary: string | undefined
    let highlights: string[] | undefined
    const added: string[] = []
    const changed: string[] = []
    const fixed: string[] = []

    const sliceLines = slice.split(/\r?\n/)
    let i = 0
    while (i < sliceLines.length) {
      const line = sliceLines[i]
      if (line.match(/^### Summary\s*$/)) {
        i++
        const parts: string[] = []
        while (i < sliceLines.length && !sliceLines[i].startsWith("###") && !sliceLines[i].match(/^-\s+/)) {
          const t = sliceLines[i].trim()
          if (t) parts.push(t)
          i++
        }
        if (parts.length) summary = parts.join(" ").trim()
        continue
      }
      if (line.match(/^### Highlights\s*$/)) {
        i++
        highlights = []
        while (i < sliceLines.length && sliceLines[i].match(/^-\s+(.+)$/)) {
          const m = sliceLines[i].match(/^-\s+(.+)$/)
          if (m) highlights.push(m[1].trim())
          i++
        }
        continue
      }
      i++
    }

    let current: "added" | "changed" | "fixed" | null = null
    for (const line of sliceLines) {
      const sectionMatch = line.match(/^### (Added|Changed|Fixed)\s*$/)
      if (sectionMatch) {
        current = sectionMatch[1].toLowerCase() as "added" | "changed" | "fixed"
        continue
      }
      const bullet = line.match(/^-\s+(.+)$/)
      if (bullet && current) {
        const text = bullet[1].trim()
        if (text && text !== "(Nothing yet.)" && text !== "(No fixes in this release.)") {
          if (current === "added") added.push(text)
          else if (current === "changed") changed.push(text)
          else fixed.push(text)
        }
      }
    }

    const parsed = buildParsed({ added, changed, fixed })
    const entry: ChangelogEntry = {
      version: block.version,
      date: block.date,
      summary: summary ?? deriveSummary(parsed, added, changed),
      highlights: highlights?.length ? highlights : deriveHighlights(parsed),
      added,
      changed,
      fixed,
      parsed,
    }
    entries.push(entry)
  }

  return entries
}

export function getChangelogEntries(): ChangelogEntry[] {
  const cwd = process.cwd()
  const path = join(cwd, "CHANGELOG.md")
  const content = readFileSync(path, "utf-8")
  const entries = parseChangelogMarkdown(content)
  for (const entry of entries) {
    const pushed = getGitTagDate(entry.version, cwd)
    if (pushed) entry.gitPushedAt = pushed
  }
  return entries
}
