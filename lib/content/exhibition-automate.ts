/**
 * Copy for the Automate trade-show landing page.
 */

/** Official show wordmark (light artwork on transparent — use on dark surfaces or inside a dark band on light sections). */
export const automateShowLogoUrl =
  "https://www.automateshow.com/userAssets/content/logo.png" as const

export const automateEvent = {
  name: "Automate",
  year: 2026,
  venue: "McCormick Place",
  city: "Chicago, IL",
  /** All-day multi-day window for calendar links (YYYYMMDD / end exclusive) */
  calendarDatesAllDay: "20260622/20260626",
  /** Human-readable */
  dateRange: "June 22–25, 2026",
  booth: "#12053",
  hallOrZone: "North Building",
  hero: {
    eyebrow: "InnoTech at Automate 2026",
    titleLines: ["See intelligent infrastructure", "for autonomous fleets live"],
  },
  orchestrationImage: {
    src: "/images/events/automate-2026/autoduck-orchestration-preview.jpg",
    alt: "Isometric illustration of a smart factory with robotic arms, conveyor belts, and human workers coordinated through AutoDuck fleet orchestration",
  },
  /** Map Your Show — opens selected booth in a new browser tab */
  boothMapCta: {
    label: "Booth map",
    href: "https://automate26.mapyourshow.com/8_0/floorplan/?hallID=B&selectedBooth=12053",
  },
  showWebsiteCta: {
    label: "Automate show website",
    href: "https://www.automateshow.com/",
  },
} as const

/**
 * Interest intake form — organization list is placeholder (“TBD”) until marketing finalizes taxonomy.
 * Role options follow common HubSpot / event-lead patterns (InOrbit’s page uses a HubSpot embed; labels align with typical B2B role picklists).
 */
export const automateIntakeForm = {
  title: "Meet us at Automate",
  fields: {
    name: { label: "Name", placeholder: "Your full name" },
    company: { label: "Company name", placeholder: "Organization" },
    jobTitle: { label: "Job title", placeholder: "Your role title" },
    email: { label: "Email", placeholder: "you@company.com" },
    organization: {
      label: "Organization type",
      placeholder: "Select an option",
      /** Replace with final segments when ready (currently placeholder / TBD). */
      options: [
        { value: "end-user-manufacturing", label: "End user — Manufacturing" },
        { value: "end-user-logistics", label: "End user — Warehousing & logistics" },
        { value: "end-user-other", label: "End user — Other industry (TBD)" },
        { value: "oem-robotics", label: "OEM / robotics supplier" },
        { value: "integrator", label: "System integrator / consultant" },
        { value: "software-tech", label: "Software / technology vendor" },
        { value: "academic", label: "Academic / research" },
        { value: "government", label: "Government / public sector" },
        { value: "other-org", label: "Other" },
      ],
    },
    role: {
      label: "Your role",
      placeholder: "Select an option",
      options: [
        { value: "c-suite", label: "C-suite / Owner / Board" },
        { value: "vp", label: "VP / SVP / Head of" },
        { value: "director", label: "Director" },
        { value: "manager", label: "Manager / Team lead" },
        { value: "engineer", label: "Engineer / Architect / Developer" },
        { value: "analyst", label: "Analyst / Specialist" },
        { value: "operations", label: "Operations" },
        { value: "it", label: "IT / Technology" },
        { value: "procurement", label: "Procurement / Supply chain" },
        { value: "consultant-external", label: "Consultant / Agency (external)" },
        { value: "other-role", label: "Other" },
      ],
    },
    interest: {
      label:
        "Please tell us more about your interest in InnoTech's products: SafeGuard, AutoDuck, and RADARLink",
      placeholder:
        "e.g. pilot scope, facility type, fleet size, timeline, or which product you want to dive into first…",
    },
  },
  submitLabel: "Submit",
} as const
