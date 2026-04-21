import { z } from "zod"

import { contactIndustryOptions, contactInterestOptions } from "@/lib/content/contact-form"

const industryValues = contactIndustryOptions.map((o) => o.value) as [string, ...string[]]
const interestValues = contactInterestOptions.map((o) => o.value) as [string, ...string[]]

const optionalIndustry = z.union([z.enum(industryValues), z.literal("")])
const optionalInterest = z.union([z.enum(interestValues), z.literal("")])

export const contactPayloadSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(1, "Company is required").max(200),
  phone: z.string().trim().max(40),
  industry: optionalIndustry,
  interest: optionalInterest,
  message: z.string().trim().min(1, "Message is required").max(8000),
})

export type ContactPayload = z.infer<typeof contactPayloadSchema>
