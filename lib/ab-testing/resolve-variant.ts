import { cookies } from "next/headers"

import {
  HOME_SOLUTIONS_EXPERIMENT,
  isHomeSolutionsVariant,
  type HomeSolutionsVariant,
} from "@/lib/ab-testing/home-solutions-experiment"

/** Resolve the assigned variant from URL override or persisted cookie (set in middleware). */
export async function resolveHomeSolutionsVariant(
  searchParams?: Record<string, string | string[] | undefined>,
): Promise<HomeSolutionsVariant> {
  const forced = searchParams?.[HOME_SOLUTIONS_EXPERIMENT.paramName]
  const forcedValue = Array.isArray(forced) ? forced[0] : forced
  if (isHomeSolutionsVariant(forcedValue)) {
    return forcedValue
  }

  const cookieStore = await cookies()
  const stored = cookieStore.get(HOME_SOLUTIONS_EXPERIMENT.cookieName)?.value
  if (isHomeSolutionsVariant(stored)) {
    return stored
  }

  return "a"
}
