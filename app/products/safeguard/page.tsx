import { Metadata } from 'next'
import Image from 'next/image'
import { BreadcrumbStrip } from '@/components/breadcrumb-strip'
import { PageShell, Section } from '@/components/page-shell'
import { SectionHeader } from '@/components/section-header'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { CtaBanner } from '@/components/sections/cta-banner'
import { SafeGuardHero } from '@/components/products/safeguard-hero'
import {
  safeguardBrochureCards,
  safeguardStaticSafetyNarrative,
  safeguardImages,
} from '@/lib/content/safeguard'
import * as LucideIcons from 'lucide-react'

export const metadata: Metadata = {
  title: 'SafeGuard™ — Software-Defined Safety for Robots',
  description: 'Real-time hazard detection, compliance monitoring, and predictive maintenance for AMRs and industrial robots.'
}

export default function SafeGuardPage() {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, LucideIcons.LucideIcon> = {
      'badge-check': LucideIcons.BadgeCheck,
      handshake: LucideIcons.Handshake,
      zap: LucideIcons.Zap,
      rocket: LucideIcons.Rocket,
    }
    return iconMap[iconName] || LucideIcons.Shield
  }

  return (
    <>
      <BreadcrumbStrip items={[{ label: "Products", href: "/products" }, { label: "SafeGuard" }]} />
      <SafeGuardHero />

      {/* Static vs dynamic safety narrative */}
      <section id="safeguard-overview" className="py-20 lg:py-28 border-t border-border/50 scroll-mt-24">
        <PageShell>
          <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-12 lg:items-start">
            {/* Left 1/3 — narrative */}
            <div className="w-full lg:w-1/2 lg:min-w-0 shrink-0 space-y-6 text-center lg:text-left mb-12 lg:mb-0">
              <div className="inline-block mx-auto lg:mx-0">
                <span className="inline-flex items-center rounded-full px-3 py-1 it-ribbon-badge font-medium bg-(--it-light-blue-subtle) text-it-light-blue">
                  {safeguardStaticSafetyNarrative.ribbonLabel}
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight font-chakra text-balance">
                {safeguardStaticSafetyNarrative.headline}
              </h2>
              <p className="text-lg text-it-text-secondary text-pretty leading-relaxed">
                {safeguardStaticSafetyNarrative.intro}
              </p>
            </div>

            {/* Right 2/3 — problem cards stacked */}
            <div className="w-full lg:w-1/2 lg:min-w-0 flex flex-col gap-6">
              {safeguardStaticSafetyNarrative.legacyProblems.map((item) => (
                <Card
                  key={item.title}
                  className="it-problem-card bg-it-light-offwhite border border-it-light-border shadow-[var(--it-light-shadow-sm)] gap-0"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold leading-snug text-it-light-text-primary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-it-light-text-secondary text-pretty leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      {/* Features Grid → light-bg */}
      <Section variant="light-bg">
        <SectionHeader
          theme="light"
          label="Features"
          title="Comprehensive Safety Monitoring"
          description="Certification, collaboration, fault response, and a pilot program built for your floor plan"
        />
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 lg:gap-12 xl:gap-16 items-start">
          <div className="w-full min-w-0">
            <ImagePlaceholder
              src={safeguardImages.zoning}
              alt="SafeGuard dynamic zoning zones on a facility floor plan"
              aspectRatio="4/3"
              objectFit="contain"
              transparentBackground
              variant="light"
              className="border-0"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {safeguardBrochureCards.map((card) => {
              const Icon = getIcon(card.icon)
              return (
                <Card
                  key={card.id}
                  className="group bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow"
                >
                  <CardHeader className="grid-cols-1">
                    <div className="space-y-3">
                      <div className="flex flex-row items-start gap-4">
                        <div className="p-3.5 rounded-lg bg-[var(--it-light-safeguard)]/10 shrink-0">
                          <Icon className="w-8 h-8 text-it-light-safeguard" strokeWidth={1.5} />
                        </div>
                        <CardTitle className="text-2xl text-it-light-text-primary leading-snug min-w-0 flex-1">
                          {card.name.split("\n").map((line, index) => (
                            <span key={line} className={index > 0 ? "block" : undefined}>
                              {line}
                            </span>
                          ))}
                        </CardTitle>
                      </div>
                      {card.description ? (
                        <p className="text-[15px] text-it-light-text-secondary text-pretty leading-relaxed w-full">
                          {card.description}
                        </p>
                      ) : null}
                      {card.bullets ? (() => {
                        const useList = card.bulletsAsList !== false
                        const Wrapper = useList ? "ul" : "div"
                        const Item = useList ? "li" : "p"
                        const wrapperClassName = useList
                          ? "space-y-1.5 w-full list-disc ps-5 marker:text-it-light-safeguard"
                          : "space-y-1.5 w-full"
                        const itemClassName = useList
                          ? "text-[15px] text-it-light-text-secondary text-pretty leading-relaxed ps-1"
                          : "text-[15px] text-it-light-text-secondary text-pretty leading-relaxed w-full"

                        return (
                          <Wrapper className={wrapperClassName}>
                            {card.bullets.map((bullet) => {
                              const bulletText = typeof bullet === "string" ? bullet : bullet.text
                              const bulletHref = typeof bullet === "string" ? undefined : bullet.href
                              const colonIndex = bulletText.indexOf(": ")
                              const label =
                                colonIndex !== -1 ? bulletText.slice(0, colonIndex + 1) : null
                              const body =
                                colonIndex !== -1 ? bulletText.slice(colonIndex + 2) : bulletText

                              return (
                                <Item key={bulletText} className={itemClassName}>
                                  {label ? (
                                    <>
                                      <span className="font-semibold text-it-light-text-primary">
                                        {label}
                                      </span>{" "}
                                      {body}
                                    </>
                                  ) : (
                                    <span className="font-semibold text-it-light-text-primary">
                                      {bulletText}
                                    </span>
                                  )}
                                  {bulletHref ? (
                                    <>
                                      {" "}
                                      <a
                                        href={bulletHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex align-middle text-it-light-blue hover:text-it-light-blue-hover transition-colors duration-150"
                                        aria-label={`Open ${bulletText} in a new window`}
                                      >
                                        <LucideIcons.ExternalLink
                                          className="w-3.5 h-3.5"
                                          strokeWidth={1.5}
                                          aria-hidden
                                        />
                                      </a>
                                    </>
                                  ) : null}
                                </Item>
                              )
                            })}
                          </Wrapper>
                        )
                      })() : null}
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Industries Using SafeGuard → dark gradient + right background image */}
      <section className="it-section-safeguard-industries py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block lg:w-[54%]">
            <Image
              src={safeguardImages.featuresBackground}
              alt=""
              fill
              unoptimized
              className="object-contain object-right"
            />
          </div>
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: 'var(--it-safeguard-industries-image-fade)' }}
          />
        </div>

        <PageShell className="relative z-10">
          <div className="max-w-xl lg:max-w-2xl ml-4 lg:ml-6">
            <SectionHeader
              label="Applications"
              title="Industries Using SafeGuard"
              description="From manufacturing floors to autonomous vehicle depots, SafeGuard ensures safe operations"
              centered={false}
              className="mb-8"
            />

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Manufacturing", icon: LucideIcons.Factory },
                { name: "Logistics", icon: LucideIcons.Truck },
                { name: "Autonomous Fleets", icon: LucideIcons.Car },
                { name: "Warehousing", icon: LucideIcons.Warehouse },
              ].map((industry) => (
                <div
                  key={industry.name}
                  className="flex items-center gap-4 p-5 rounded-lg border border-it-border bg-[var(--it-surface-raised)] border-l-[3px] border-l-[var(--it-safeguard)] shadow-[var(--it-shadow-sm)] transition-[box-shadow,transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--it-safeguard-border)] hover:shadow-[var(--it-shadow-md)]"
                >
                  <industry.icon className="w-8 h-8 shrink-0 text-[var(--it-safeguard)]" strokeWidth={1.5} />
                  <h3 className="font-semibold text-it-text-primary">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <CtaBanner
        title="Ready to Enhance Your Safety Systems?"
        description="See how SafeGuard brings software-defined safety to your robotic operations"
        primaryCta={{ label: "Schedule a Demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
        titleSingleLine
      />
    </>
  )
}
