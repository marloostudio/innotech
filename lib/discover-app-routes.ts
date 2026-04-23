import { readdirSync, type Dirent } from "node:fs"
import { join } from "node:path"

const SKIP_DIR_NAMES = new Set(["api", "node_modules"])

/**
 * All URL paths that have an `app/.../page.tsx` file (App Router).
 * Home is `""`. Route groups `(name)` are omitted from the path.
 */
export function discoverAppPageRoutes(): string[] {
  const appRoot = join(process.cwd(), "app")
  const out = new Set<string>()

  function walk(dir: string, segments: string[]) {
    let entries: Dirent[]
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }

    if (entries.some((e) => e.isFile() && e.name === "page.tsx")) {
      out.add(segments.length ? "/" + segments.join("/") : "")
    }

    for (const e of entries) {
      if (!e.isDirectory()) continue
      const name = e.name
      if (name.startsWith("_") || name.startsWith(".")) continue
      if (SKIP_DIR_NAMES.has(name)) continue
      if (name.startsWith("@")) continue

      const nextSegments =
        name.startsWith("(") && name.endsWith(")") ? segments : [...segments, name]

      walk(join(dir, name), nextSegments)
    }
  }

  walk(appRoot, [])
  return [...out].sort((a, b) => {
    if (a === "") return -1
    if (b === "") return 1
    return a.localeCompare(b)
  })
}
