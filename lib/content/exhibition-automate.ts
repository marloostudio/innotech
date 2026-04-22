/**
 * Copy for the Automate trade-show landing page (dates/booth/session are placeholders — update before publish).
 */

/** Official show wordmark (light artwork on transparent — use on dark surfaces or inside a dark band on light sections). */
export const automateShowLogoUrl =
  "https://www.automateshow.com/userAssets/content/logo.png" as const

export const automateEvent = {
  name: "Automate",
  year: 2026,
  venue: "Huntington Place",
  city: "Detroit, MI",
  /** All-day multi-day window for calendar links (YYYYMMDD / end exclusive) */
  calendarDatesAllDay: "20260512/20260516",
  /** Human-readable */
  dateRange: "May 12–15, 2026",
  booth: "#12053",
  hero: {
    eyebrow: "InnoTech at Automate 2026",
    titleLines: ["See intelligent infrastructure", "for autonomous fleets live"],
    subtitle:
      "Meet our team, explore SafeGuard™, AutoDuck, and RADARLink™, and watch how software-defined safety, autonomous charging, and precision connectivity come together on the show floor.",
  },
  session: {
    title: "Software-Defined Safety and Fleet Orchestration at Scale",
    speaker: "Session speaker TBD",
    when: "Wednesday, May 13 · Time TBD",
    room: "Room TBD",
    blurb:
      "Learn how leading operations unify safety monitoring, autonomous charging, and V2X-grade localization to run denser, more adaptive AMR programs—with measurable uptime and clearer compliance.",
  },
  pillars: {
    headline: "Intelligent infrastructure for real-world autonomy",
    intro:
      "Autonomous Mobile Robots (AMRs) unlock throughput only when software ties the fleet to the floor: hazards, missions, and connectivity in one loop. InnoTech bridges planning systems and robots with products built for production environments.",
    products: [
      {
        name: "SafeGuard",
        tag: "Safety monitoring",
        description:
          "Real-time hazard awareness, compliance signals, and predictive maintenance so humans and robots share space with confidence.",
        href: "/products/safeguard",
        accent: "safeguard" as const,
      },
      {
        name: "AutoDuck",
        tag: "Autonomous charging & orchestration",
        description:
          "Fleet-aware charging, access control, and mission orchestration that keeps vehicles productive without manual babysitting.",
        href: "/products/autoduck",
        accent: "autolock" as const,
      },
      {
        name: "RADARLink",
        tag: "V2X & micro-localization",
        description:
          "Centimeter-level localization, V2X messaging, and analytics for yards, ports, and complex indoor–outdoor handoffs.",
        href: "/products/radar-link",
        accent: "blue" as const,
      },
    ],
  },
  execution: {
    headline: "From business priorities to robot missions",
    title: "AutoDuck connects what you plan to what runs on the floor",
    body:
      "Translate production and logistics priorities into executable fleet behavior: who charges when, which zones need safety elevation, and how missions adapt when conditions change—without rip-and-replace of your existing stack.",
    cta: { label: "Explore AutoDuck", href: "/products/autoduck" },
  },
  useCasesIntro: {
    headline: "Where InnoTech drives automation",
    sub:
      "One platform narrative across operations that need safety, power, and precision positioning working together.",
  },
  /** Booth location and wayfinding — update hall, zone, and bullets when the show publishes the floor plan. */
  findUs: {
    title: "Booth & directions",
    intro:
      "Automate runs at Huntington Place, Detroit. Use the details below to reach our stand during exhibit hours—bring this booth number to your calendar invite or when you message the team.",
    hallOrZone: "Hall B — use the interactive map below to open our booth location.",
    directions: [
      "Pick up your badge at Automate registration, then follow signage to the main exhibit halls.",
      "Open the Map Your Show floor plan (link below) to view Hall B with booth #12053 selected.",
      "Our stand includes live demos—look for InnoTech branding and the SafeGuard, AutoDuck, and RADARLink story on the fascia.",
    ],
    /** Map Your Show — opens selected booth in a new browser tab */
    boothMapCta: {
      label: "Open booth map",
      href: "https://automate26.mapyourshow.com/8_0/floorplan/?hallID=B&selectedBooth=12053",
    },
    floorPlanCta: {
      label: "Automate show website",
      href: "https://www.automateshow.com/",
    },
  },
  useCases: [
    {
      title: "Human–robot collaboration zones",
      description:
        "Monitor dynamic mixed traffic and escalate interventions before incidents interrupt production.",
    },
    {
      title: "Autonomous charging at scale",
      description:
        "Orchestrate Charge Depot utilization and fleet power so vehicles are ready when missions spike.",
    },
    {
      title: "Warehouse AMR coordination",
      description:
        "Align throughput, staging, and handoffs with localization-grade awareness in dense aisles.",
    },
    {
      title: "Yard and port logistics",
      description:
        "Support outdoor transitions with V2X and micro-localization tuned for harsh, variable environments.",
    },
    {
      title: "Congregate Detection",
      description:
        "Spot crowd-ups and flow anomalies early to keep people safe and lines moving.",
    },
    {
      title: "Micro-localization for docking",
      description:
        "Hit tight pick-up and drop-off tolerances where GNSS alone is not enough.",
    },
    {
      title: "Compliance-ready monitoring",
      description:
        "Document safety posture and maintenance signals for audits without slowing operators down.",
    },
    {
      title: "Fleet analytics & alerting",
      description:
        "Turn robot and infrastructure telemetry into actionable signals for operations and engineering.",
    },
  ],
  liveCta: {
    headline: "Experience it on the floor",
    sub:
      "See live scenarios for safety escalation, charging orchestration, and multi-robot coordination—then map them to your environment with our team.",
    primary: { label: "Fill interest form", href: "#interest-intake" },
    secondary: { label: "Request a demo", href: "/demo" },
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

export type AutomateAccent = "safeguard" | "autolock" | "blue" | "solutions"

export const accentBorderClass: Record<AutomateAccent, string> = {
  safeguard: "border-l-[color:var(--it-safeguard)]",
  autolock: "border-l-[color:var(--it-autolock)]",
  blue: "border-l-[color:var(--it-blue)]",
  solutions: "border-l-[color:var(--it-solutions)]",
}
