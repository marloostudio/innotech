export const HOME_SOLUTIONS_EXPERIMENT = {
  id: "home_solutions_section",
  cookieName: "it_ab_home_solutions",
  paramName: "ab_home_solutions",
} as const

export type HomeSolutionsVariant = "a" | "b"

export const HOME_SOLUTIONS_VARIANTS: HomeSolutionsVariant[] = ["a", "b"]

export function isHomeSolutionsVariant(value: string | undefined | null): value is HomeSolutionsVariant {
  return value === "a" || value === "b"
}

export function pickHomeSolutionsVariant(): HomeSolutionsVariant {
  return Math.random() < 0.5 ? "a" : "b"
}
