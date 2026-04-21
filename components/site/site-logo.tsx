"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"

type SiteLogoProps = {
  className?: string
  /** Tailwind height utility; width follows aspect ratio */
  heightClass?: string
  priority?: boolean
}

export function SiteLogo({ className, heightClass = "h-11", priority }: SiteLogoProps) {
  return (
    <Image
      src={siteConfig.brand.logoSrc}
      alt={siteConfig.brand.logoAlt}
      width={360}
      height={108}
      sizes="(max-width: 1024px) 260px, 320px"
      className={cn("w-auto max-w-[min(100%,320px)] object-contain object-left", heightClass, className)}
      priority={priority}
    />
  )
}
