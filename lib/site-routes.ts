/**
 * Route tree helpers for /currentpages.
 * Sitemap URLs are derived in app/sitemap.ts from discoverAppPageRoutes + isPublicCrawlablePath.
 */

export interface RouteTreeNode {
  segment: string
  label: string
  path: string
  children: RouteTreeNode[]
}

function formatSegmentLabel(segment: string): string {
  if (!segment) return "Home"
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

/** Build a nested tree from flat paths like "/company/team". */
export function buildRouteTree(paths: string[]): RouteTreeNode {
  const root: RouteTreeNode = {
    segment: "",
    label: "Home",
    path: "/",
    children: [],
  }

  const sorted = [...paths].sort((a, b) => a.localeCompare(b))

  for (const raw of sorted) {
    const path = raw === "" ? "/" : raw.startsWith("/") ? raw : `/${raw}`
    const segments = path === "/" ? [] : path.slice(1).split("/").filter(Boolean)

    let parent = root
    let acc = ""

    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i]
      acc = `${acc}/${seg}`
      const fullPath = acc
      let child = parent.children.find((c) => c.segment === seg)
      if (!child) {
        child = {
          segment: seg,
          label: formatSegmentLabel(seg),
          path: fullPath,
          children: [],
        }
        parent.children.push(child)
      }
      parent = child
    }
  }

  function sortRecursive(node: RouteTreeNode) {
    node.children.sort((a, b) => a.segment.localeCompare(b.segment))
    node.children.forEach(sortRecursive)
  }
  sortRecursive(root)

  return root
}
