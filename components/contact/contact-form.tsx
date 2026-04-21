"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState, useTransition } from "react"
import { toast } from "sonner"

import { submitContact } from "@/app/actions/contact"
import { contactIndustryOptions, contactInterestOptions } from "@/lib/content/contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const [industry, setIndustry] = useState("")
  const [interest, setInterest] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    fd.set("industry", industry)
    fd.set("interest", interest)

    startTransition(async () => {
      const result = await submitContact(fd)
      if (result.ok) {
        form.reset()
        setIndustry("")
        setInterest("")
        router.push("/thank-you?source=contact")
        return
      }
      if (result.error === "validation") {
        toast.error("Please check the form fields and try again.")
        return
      }
      if (result.error === "config") {
        toast.error("This form is not configured yet. Please email us directly.")
        return
      }
      toast.error("Something went wrong. Please try again or email us directly.")
    })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="sr-only" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" placeholder="John" required autoComplete="given-name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required autoComplete="family-name" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john.doe@company.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company *</Label>
        <Input id="company" name="company" placeholder="Your Company Name" required autoComplete="organization" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" autoComplete="tel" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select
          value={industry === "" ? undefined : industry}
          onValueChange={(v) => setIndustry(v)}
        >
          <SelectTrigger id="industry" className="w-full">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {contactIndustryOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">Area of Interest</Label>
        <Select
          value={interest === "" ? undefined : interest}
          onValueChange={(v) => setInterest(v)}
        >
          <SelectTrigger id="interest" className="w-full">
            <SelectValue placeholder="What are you interested in?" />
          </SelectTrigger>
          <SelectContent>
            {contactInterestOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your automation needs, challenges, or questions..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? "Sending…" : "Submit Request"}
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
  )
}
