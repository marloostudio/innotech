/** App version (semver: major.minor.patch). Bump in CHANGELOG and here together. */
export const APP_VERSION = "1.4.8"

/** Canonical origin (no trailing slash). Set `NEXT_PUBLIC_SITE_URL` in production. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.innotech-sys.com"

export const siteConfig = {
  name: "InnoTech Systems",
  version: APP_VERSION,
  description: "Leading provider of advanced robotics, AMRs and industrial robots for enterprise automation",
  /** Header, footer, and other brand placements — file under `public/images/brand/` */
  brand: {
    logoSrc: "/images/brand/innotech-logo.png",
    logoAlt: "InnoTech Systems — Tomorrow in Mind",
  },
  company: {
    name: "InnoTech Systems",
    tagline: "Intelligent Infrastructure for Autonomous Mobility",
    email: "info@innotech-sys.com",
    address: "2834 Paraiso Way\nLa Crescenta-Montrose, CA 91214"
  },
  social: {
    linkedin: "https://www.linkedin.com/company/innotech-sys",
    twitter: "https://x.com/innotechsys",
    github: "https://github.com/innotech-systems"
  }
}
