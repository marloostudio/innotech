import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, FileText, Video, Download, ArrowRight } from "lucide-react"

import { PillarHero } from "@/components/sections/pillar-hero"
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Resources",
  description: "Access our library of case studies, blog posts, white papers, and documentation to learn more about robotics and automation."
}

const resourceCategories = [
  {
    title: "Blog",
    description: "Industry insights, technology trends, and best practices in robotics and automation",
    icon: BookOpen,
    href: "/resources/blog",
    count: "25+ articles"
  },
  {
    title: "Case Studies",
    description: "Real-world implementations and success stories from our clients across industries",
    icon: FileText,
    href: "/resources/case-studies",
    count: "15+ case studies"
  },
  {
    title: "White Papers",
    description: "In-depth technical analysis and research on automation technologies",
    icon: Download,
    href: "#whitepapers",
    count: "Coming soon"
  },
  {
    title: "Video Library",
    description: "Product demonstrations, customer testimonials, and educational content",
    icon: Video,
    href: "#videos",
    count: "Coming soon"
  }
]

const featuredTopics = [
  {
    category: "Implementation",
    title: "Best Practices for Robotics Integration",
    description: "A comprehensive guide to planning and executing successful automation projects"
  },
  {
    category: "Technology",
    title: "Understanding Autonomous Navigation",
    description: "Deep dive into the algorithms and sensors that power self-driving robots"
  },
  {
    category: "ROI",
    title: "Calculating Automation ROI",
    description: "Framework for evaluating the financial impact of robotics investments"
  }
]

export default function ResourcesPage() {
  return (
    <>
      <PillarHero
        badge="Resources"
        h1="The Technical Library for Autonomous Operations."
        h2="Whitepapers, playbooks, product demos, and industry analysis — written for engineers and operations leaders, not marketers."
        description="InnoTech's resource library is built for the people who evaluate, specify, and operate autonomous infrastructure. Whether you're building a business case, assessing technical fit, or troubleshooting an existing deployment, start here."
        primaryCta={{ label: "Browse All Resources", href: "#" }}
        secondaryCta={{ label: "Subscribe for Updates", href: "/contact" }}
      />

      <Section className="py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {resourceCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] hover:shadow-[var(--it-light-shadow-md)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--it-light-blue-subtle)] mb-4">
                    <Icon className="h-6 w-6 text-it-light-blue" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl text-it-light-text-primary">{category.title}</CardTitle>
                  <CardDescription className="text-base pt-2 text-it-light-text-secondary">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-it-light-text-muted">{category.count}</span>
                    <Link href={category.href}>
                      <Button variant="ghost" size="sm">
                        Browse
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-it-light-text-primary">Featured Topics</h2>
            <p className="text-it-light-text-muted">Popular resources from our library</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTopics.map((topic, index) => (
              <Card key={index} className="bg-it-light-surface border border-it-light-border shadow-[var(--it-light-shadow-sm)] hover:border-it-light-blue/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="text-sm font-medium text-it-light-blue mb-2">
                    {topic.category}
                  </div>
                  <CardTitle className="text-xl text-it-light-text-primary">{topic.title}</CardTitle>
                  <CardDescription className="text-base pt-2 text-it-light-text-secondary">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Need Technical Support?</h2>
          <p className="text-lg text-muted-foreground">
            Our support team is available 24/7 to help with technical questions, troubleshooting, and optimization.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Contact Support
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}
