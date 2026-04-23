import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Site access",
  robots: { index: false, follow: false },
}

export default function SiteGateLayout({ children }: { children: React.ReactNode }) {
  return children
}
