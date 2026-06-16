/**
 * HubSpot contact property internal names (from portal export 2026-06-16).
 * Only writable properties we populate from website forms are listed here.
 */
export const HS_CONTACT = {
  email: "email",
  firstname: "firstname",
  lastname: "lastname",
  company: "company",
  phone: "phone",
  jobtitle: "jobtitle",
  industry: "industry",
  message: "message",
  jobFunction: "job_function",
  seniority: "seniority",
  website: "website",
  city: "city",
  state: "state",
  country: "country",
  countryCode: "hs_country_region_code",
  stateCode: "hs_state_code",
  employmentSeniority: "hs_seniority",
  lifecycleStage: "lifecyclestage",
  leadStatus: "hs_lead_status",
  analyticsSource: "hs_analytics_source",
  latestSource: "hs_latest_source",
} as const

/** HubSpot enumeration values for traffic / offline API leads */
export const HS_OFFLINE_SOURCE = "OFFLINE" as const
