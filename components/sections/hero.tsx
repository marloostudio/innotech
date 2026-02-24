import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/page-shell"

interface HeroProps {
  headline: string
  subheadline: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
}

export function Hero({ headline, subheadline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <Section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
          {headline}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href={primaryCta.href}>
            <Button size="lg" className="w-full sm:w-auto">
              {primaryCta.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href={secondaryCta.href}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              {secondaryCta.text}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
