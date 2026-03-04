import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/page-shell"
import { CtaBanner } from "@/components/sections/cta-banner"
import { TeamCard } from "@/components/site/team-card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team — The People Behind the Technology",
  description: "Meet the experts building the infrastructure for autonomous operations.",
}

const executiveLeadership = [
  { name: "Dr. Fred Daneshgaran", title: "CEO and Co-Founder", linkedin: "#", twitter: "#" },
  { name: "Kash Olia", title: "CTO and Co-Founder", linkedin: "#", twitter: "#" },
]

const advisors = [
  {
    name: "Dr. Marina Mondin",
    title: "Advisor",
    expertise: "Artificial Intelligence and Machine Learning",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Piergiorgio lanza",
    title: "Advisor",
    expertise: "Machine Vision and AI",
    linkedin: "#",
    twitter: "#",
  },
]

const engineeringAndOperations = [
  { name: "Nayer Shahri", title: "Finance Manager", linkedin: "#", twitter: "#" },
  { name: "Behzad Zarifkar", title: "Sr. Mechanical Engineer", linkedin: "#", twitter: "#" },
  { name: "Fausto Lizzio", title: "Mechanical Engineer", linkedin: "#", twitter: "#" },
  {
    name: "Antonio Marangi",
    title: "Software Engineer",
    expertise: "Localization and Mapping",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jason May",
    title: "Software Engineer",
    expertise: "Path Planning",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ramtin Haddadzadeh",
    title: "Controls Engineer",
    expertise: "Autopilot",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lara Daneshgaran",
    title: "Software & Computer Engineer",
    expertise: "Machine Learning and AI Systems, Autonomous Robotics",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Shiva Omidzadeh",
    title: "Engineer",
    expertise: "Autonomous Robotics, Electrical and Systems Engineering",
    linkedin: "#",
    twitter: "#",
  },
]

const consultants = [
  {
    name: "Amir Riahi",
    title: "Consultant",
    expertise: "Microcontroller Programming, Systems Engineering, Automotive Systems",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Claudio DonGiovanni",
    title: "Consultant",
    expertise: "Mechanical System Design, Robotics, CAD and Simulations",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Andrea Bottega",
    title: "Consultant",
    expertise: "3D Manufacturing, CAD and Simulations",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Paolo Trabuio",
    title: "Consultant",
    expertise: "3D CAD Modeling, Precision Measurements, Robotics",
    linkedin: "#",
    twitter: "#",
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b" style={{ borderColor: "var(--it-border)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
            <Link href="/company" className="transition-colors hover:opacity-80" style={{ color: "var(--it-text-muted)" }}>Company</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span style={{ color: "var(--it-text-primary)" }}>Team</span>
          </div>
        </div>
      </div>

      {/* Hero — compact */}
      <section className="py-10 lg:py-14" style={{ background: "var(--it-hero-gradient)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 border-it-border" style={{ color: "var(--it-text-secondary)" }}>
              Our Team
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-balance" style={{ color: "var(--it-text-primary)" }}>
              The Team Behind the Technology
            </h1>
            <p className="text-lg text-pretty" style={{ color: "var(--it-text-muted)" }}>
              Passionate experts building the future of autonomous operations
            </p>
          </div>
        </div>
      </section>

      {/* Single section: Leadership, Advisors, Engineering, Culture */}
      <Section variant="white">
        <div className="space-y-12 lg:space-y-14">
          {/* Leadership + Advisors in one row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-1" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
                Executive Leadership
              </h2>
              <p className="text-sm mb-6" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                Strategy and technology vision
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {executiveLeadership.map((person) => (
                  <TeamCard key={person.name} {...person} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
                Advisors
              </h2>
              <p className="text-sm mb-6" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                AI, ML, and technology strategy
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advisors.map((person) => (
                  <TeamCard key={person.name} {...person} />
                ))}
              </div>
            </div>
          </div>

          {/* Engineering & Operations */}
          <div>
            <h2 className="text-xl font-semibold mb-1" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
              Engineering & Operations
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              Building and supporting our products and operations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringAndOperations.map((person) => (
                <TeamCard key={person.name} {...person} />
              ))}
            </div>
          </div>

          {/* Consultants */}
          <div>
            <h2 className="text-xl font-semibold mb-1" style={{ color: "var(--it-text-primary)", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
              Consultants
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--it-text-muted)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              Specialists supporting our engineering programs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultants.map((person) => (
                <TeamCard key={person.name} {...person} />
              ))}
            </div>
          </div>

          {/* Our Culture — one short paragraph */}
          <div className="pt-4 border-t" style={{ borderColor: "var(--it-border)" }}>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-3" style={{ color: "var(--it-text-primary)", fontFamily: "var(--it-font-heading)" }}>
              Our Culture
            </h2>
            <p className="text-base max-w-3xl" style={{ color: "var(--it-text-secondary)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
              We&apos;re builders at heart—engineers, designers, and operators who love solving hard problems. We value collaboration, continuous learning, and a bias toward action. We&apos;re mission-driven: enabling the autonomous revolution that will transform how goods move, how factories operate, and how work gets done.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Join the InnoTech Team"
        description="Explore opportunities to work on cutting-edge autonomous systems technology"
        primaryCta={{ label: "View Open Positions", href: "/company/careers" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
