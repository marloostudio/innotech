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

export function AutomateIntakeForm() {
  const f = automateIntakeForm.fields
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
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
    <Card className="border border-it-light-border bg-it-light-surface border-l-[3px] border-l-it-light-blue shadow-(--it-light-shadow-md)">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-it-light-text-primary">
          {automateIntakeForm.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="contact-form-light space-y-4" onSubmit={handleSubmit}>
          {/* Honeypot — leave empty; submission is ignored if filled */}
          <div className="sr-only" aria-hidden>
            <label htmlFor="intake-website">Company website</label>
            <input id="intake-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0 space-y-2">
              <Label htmlFor="intake-name" className="text-it-light-text-primary">
                {f.name.label} *
              </Label>
              <Input
                id="intake-name"
                name="name"
                type="text"
                placeholder={f.name.placeholder}
                required
                autoComplete="name"
              />
            </div>
            <div className="min-w-0 space-y-2">
              <Label htmlFor="intake-email" className="text-it-light-text-primary">
                {f.email.label} *
              </Label>
              <Input
                id="intake-email"
                name="email"
                type="email"
                placeholder={f.email.placeholder}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0 space-y-2">
              <Label htmlFor="intake-company" className="text-it-light-text-primary">
                {f.company.label} *
              </Label>
              <Input
                id="intake-company"
                name="company"
                type="text"
                placeholder={f.company.placeholder}
                required
                autoComplete="organization"
              />
            </div>
            <div className="min-w-0 space-y-2">
              <Label htmlFor="intake-job-title" className="text-it-light-text-primary">
                {f.jobTitle.label} *
              </Label>
              <Input
                id="intake-job-title"
                name="jobTitle"
                type="text"
                placeholder={f.jobTitle.placeholder}
                required
                autoComplete="organization-title"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0 space-y-2">
              <Label htmlFor="intake-organization" className="text-it-light-text-primary">
                {f.organization.label} *
              </Label>
              <select
                id="intake-organization"
                name="organization"
                required
                defaultValue=""
                className={nativeSelectClass}
              >
                <option value="" disabled>
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
              <Label htmlFor="intake-role" className="text-it-light-text-primary">
                {f.role.label} *
              </Label>
              <select
                id="intake-role"
                name="role"
                required
                defaultValue=""
                className={nativeSelectClass}
              >
                <option value="" disabled>
                  {f.role.placeholder}
                </option>
                {f.role.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="intake-interest"
              className="text-it-light-text-primary items-start leading-relaxed"
            >
              {f.interest.label} *
            </Label>
            <Textarea
              id="intake-interest"
              name="interest"
              placeholder={f.interest.placeholder}
              rows={4}
              required
              className="min-h-[100px] resize-y"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isPending}>
            {isPending ? "Sending…" : automateIntakeForm.submitLabel}
          </Button>

          <p className="text-sm text-it-light-text-muted text-center text-pretty">
            By submitting this form, you agree to our{" "}
            <Link href="/legal/privacy-policy" className="text-it-light-blue underline-offset-4 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/legal/terms" className="text-it-light-blue underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
