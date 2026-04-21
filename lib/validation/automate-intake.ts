import { z } from "zod"

import { automateIntakeForm } from "@/lib/content/exhibition-automate"

function optionsToEnum<T extends readonly { value: string }[]>(
  options: T
): [string, ...string[]] {
  const values = options.map((o) => o.value)
  if (values.length === 0) {
    throw new Error("automateIntakeForm: organization/role options must not be empty")
  }
  return values as [string, ...string[]]
}

const organizationEnum = z.enum(optionsToEnum(automateIntakeForm.fields.organization.options))
const roleEnum = z.enum(optionsToEnum(automateIntakeForm.fields.role.options))

export const automateIntakePayloadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(1, "Company is required").max(200),
  jobTitle: z.string().trim().min(1, "Job title is required").max(200),
  organization: organizationEnum,
  role: roleEnum,
  interest: z.string().trim().min(1, "Please add a short message").max(8000),
})

export type AutomateIntakePayload = z.infer<typeof automateIntakePayloadSchema>
