"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useTransition } from "react"
import { toast } from "sonner"

import { submitAutomateIntake } from "@/app/actions/automate-intake"
import { automateIntakeForm } from "@/lib/content/exhibition-automate"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const nativeSelectClass =
  "h-10 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50"

type AutomateIntakeFormProps = {
  /** Unique prefix for field ids when multiple forms appear on one page */
  idPrefix?: string
}

export function AutomateIntakeForm({ idPrefix = "intake" }: AutomateIntakeFormProps) {
  const f = automateIntakeForm.fields
  const fieldId = (name: string) => `${idPrefix}-${name}`
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    if (typeof window !== "undefined") {
      fd.set("context_page_url", window.location.href)
      fd.set("context_client_referrer", document.referrer || "")
    }
    startTransition(async () => {
      const result = await submitAutomateIntake(fd)
      if (result.ok) {
        form.reset()
        router.push("/thank-you?source=automate")
        return
      }
      if (result.error === "validation") {
        toast.error("Please check the form fields and try again.")
        return
      }
      if (result.error === "config") {
        toast.error("This form is not configured yet. Please try again later or contact us directly.")
        return
      }
      toast.error("Something went wrong. Please try again in a moment.")
    })
  }

  return (
    <Card className="border border-it-border bg-it-surface shadow-(--it-shadow-md) text-it-text-primary">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold it-heading-bright">
          {automateIntakeForm.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="contact-form-dark space-y-4" onSubmit={handleSubmit}>
          {/* Honeypot — leave empty; submission is ignored if filled */}
          <div className="sr-only" aria-hidden>
            <label htmlFor={fieldId("website")}>Company website</label>
            <input id={fieldId("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0 space-y-2">
              <Label htmlFor={fieldId("name")} className="text-it-text-primary">
                {f.name.label} *
              </Label>
              <Input
                id={fieldId("name")}
                name="name"
                type="text"
                placeholder={f.name.placeholder}
                required
                autoComplete="name"
              />
            </div>

            <div className="min-w-0 space-y-2">
              <Label htmlFor={fieldId("email")} className="text-it-text-primary">
                {f.email.label} *
              </Label>
              <Input
                id={fieldId("email")}
                name="email"
                type="email"
                placeholder={f.email.placeholder}
                required
                autoComplete="email"
              />
            </div>

            <div className="min-w-0 space-y-2">
              <Label htmlFor={fieldId("company")} className="text-it-text-primary">
                {f.company.label} *
              </Label>
              <Input
                id={fieldId("company")}
                name="company"
                type="text"
                placeholder={f.company.placeholder}
                required
                autoComplete="organization"
              />
            </div>

            <div className="min-w-0 space-y-2">
              <Label htmlFor={fieldId("job-title")} className="text-it-text-primary">
                {f.jobTitle.label}
              </Label>
              <Input
                id={fieldId("job-title")}
                name="jobTitle"
                type="text"
                placeholder={f.jobTitle.placeholder}
                autoComplete="organization-title"
              />
            </div>

            <div className="min-w-0 space-y-2">
              <Label htmlFor={fieldId("organization")} className="text-it-text-primary">
                {f.organization.label}
              </Label>
              <select
                id={fieldId("organization")}
                name="organization"
                defaultValue=""
                className={nativeSelectClass}
              >
                <option value="">
                  {f.organization.placeholder}
                </option>
                {f.organization.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0 space-y-2">
              <Label htmlFor={fieldId("role")} className="text-it-text-primary">
                {f.role.label}
              </Label>
              <select
                id={fieldId("role")}
                name="role"
                defaultValue=""
                className={nativeSelectClass}
              >
                <option value="">
                  {f.role.placeholder}
                </option>
                {f.role.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0 space-y-2 sm:col-span-2">
              <Label
                htmlFor={fieldId("interest")}
                className="text-it-text-primary items-start leading-relaxed"
              >
                {f.interest.label}
              </Label>
              <Textarea
                id={fieldId("interest")}
                name="interest"
                placeholder={f.interest.placeholder}
                rows={4}
                className="min-h-[100px] resize-y"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isPending}>
            {isPending ? "Sending…" : automateIntakeForm.submitLabel}
          </Button>

          <p className="text-xs text-it-text-muted text-center text-pretty">
            By submitting this form, you agree to our{" "}
            <Link href="/legal/privacy-policy" className="text-it-blue underline-offset-4 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/legal/terms" className="text-it-blue underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
