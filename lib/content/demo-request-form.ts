export const demoProductValues = ["safeguard", "autoduck", "radar-link", "all"] as const
export type DemoProductValue = (typeof demoProductValues)[number]

const PRODUCT_LABELS: Record<DemoProductValue, string> = {
  safeguard: "SafeGuard — Safety Monitoring",
  autoduck: "AutoDuck — Autonomous Charging",
  "radar-link": "RADARLink — V2X Communication",
  all: "All Products",
}

export function demoProductLabel(value: string): string {
  if (demoProductValues.includes(value as DemoProductValue)) {
    return PRODUCT_LABELS[value as DemoProductValue]
  }
  return value
}
