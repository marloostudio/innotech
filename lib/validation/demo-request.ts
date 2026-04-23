import { z } from "zod"

import { demoProductValues } from "@/lib/content/demo-request-form"

const productEnum = z.enum(demoProductValues)

export const demoRequestPayloadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(1, "Company is required").max(200),
  role: z.string().trim().min(1, "Role is required").max(200),
  product: productEnum,
  message: z.string().trim().max(8000),
})

export type DemoRequestPayload = z.infer<typeof demoRequestPayloadSchema>
