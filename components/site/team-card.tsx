"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { cn } from "@/lib/utils"

export interface TeamCardProps {
  name: string
  title: string
  bio?: string
  imageSrc?: string
  linkedin?: string
  twitter?: string
  github?: string
  /** Compact horizontal layout for denser grids (e.g. Engineering list) */
  compact?: boolean
}

const iconSize = 16

export function TeamCard({
  name,
  title,
  bio,
  imageSrc,
  linkedin,
  twitter,
  github,
  compact = false,
}: TeamCardProps) {
  if (compact) {
    return (
      <article
        className={cn(
          "flex items-center gap-4 rounded-lg border-l-[3px] p-4 transition-colors duration-150",
          "hover:bg-it-surface-raised"
        )}
        style={{
          background: "var(--it-surface)",
          borderLeftColor: "var(--it-blue)",
        }}
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-it-surface-raised">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="56px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-it-border">
              <span className="text-[10px] font-medium truncate px-1 max-w-full" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-ibm-mono), 'IBM Plex Mono', monospace" }}>
                {name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className="font-semibold text-sm truncate"
            style={{
              color: "var(--it-text-primary)",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            }}
          >
            {name}
          </h3>
          <p
            className="text-sm truncate"
            style={{
              color: "var(--it-blue)",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            }}
          >
            {title}
          </p>
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        "rounded-xl border overflow-hidden transition-all duration-200 ease-out",
        "hover:translate-y-[-2px] hover:shadow-(--it-shadow-md)"
      )}
      style={{
        background: "var(--it-surface)",
        borderColor: "var(--it-border)",
      }}
    >
      <div className="aspect-square w-full relative overflow-hidden rounded-t-xl rounded-b-none">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full">
            <ImagePlaceholder
              aspectRatio="1/1"
              alt={name}
              label={name}
              className="rounded-t-xl rounded-b-none border-0 border-b border-dashed border-b-it-border h-full w-full"
            />
          </div>
        )}
      </div>
      <div className="p-5 space-y-2">
        <h3
          className="font-semibold text-base"
          style={{
            color: "var(--it-text-primary)",
            fontFamily: "var(--font-sans), 'Inter', sans-serif",
          }}
        >
          {name}
        </h3>
        <p
          className="font-medium text-sm"
          style={{
            color: "var(--it-blue)",
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          }}
        >
          {title}
        </p>
        {bio ? (
          <p
            className="text-sm line-clamp-3"
            style={{
              color: "var(--it-text-secondary)",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            }}
          >
            {bio}
          </p>
        ) : null}
        <div className="flex items-center gap-3 pt-2">
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-it-text-muted hover:text-it-text-primary"
              aria-label={`${name} on LinkedIn`}
            >
              <Linkedin size={iconSize} strokeWidth={1.5} />
            </Link>
          )}
          {twitter && (
            <Link
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-it-text-muted hover:text-it-text-primary"
              aria-label={`${name} on Twitter`}
            >
              <Twitter size={iconSize} strokeWidth={1.5} />
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-it-text-muted hover:text-it-text-primary"
              aria-label={`${name} on GitHub`}
            >
              <Github size={iconSize} strokeWidth={1.5} />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
