import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react"

import { Section } from "@/components/page-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog",
  description: "Industry insights, technology trends, and best practices in robotics and automation from InnoTech Systems."
}

// Placeholder blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of Collaborative Robotics in Manufacturing",
    excerpt: "Exploring how collaborative robots are transforming production lines and enabling safer human-robot interaction in industrial environments.",
    category: "Technology",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "5 Key Considerations for Warehouse Automation",
    excerpt: "A practical guide for logistics managers evaluating autonomous mobile robots and warehouse management systems.",
    category: "Best Practices",
    author: "Michael Rodriguez",
    date: "March 8, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "AI-Powered Quality Inspection: Beyond Visual Defects",
    excerpt: "How machine learning is revolutionizing quality control by detecting anomalies invisible to the human eye.",
    category: "AI & Vision",
    author: "Dr. James Park",
    date: "March 1, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "ROI Deep Dive: Measuring Automation Success",
    excerpt: "Framework for calculating and tracking the financial impact of robotics investments beyond simple cost savings.",
    category: "Business",
    author: "Lisa Thompson",
    date: "February 22, 2024",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Safety Standards in Autonomous Systems",
    excerpt: "Understanding ISO 10218 and ISO/TS 15066 compliance requirements for industrial and collaborative robotics.",
    category: "Safety",
    author: "David Kim",
    date: "February 15, 2024",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Predictive Maintenance: From Reactive to Proactive",
    excerpt: "How autonomous inspection robots and IoT sensors are enabling predictive maintenance strategies that reduce downtime.",
    category: "Maintenance",
    author: "Dr. Sarah Chen",
    date: "February 8, 2024",
    readTime: "7 min read"
  }
]

export default function BlogPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b border-it-border" style={{ background: "var(--it-bg)" }}>
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-it-text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <Link href="/resources" className="hover:text-it-text-primary transition-colors">Resources</Link>
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-it-text-primary">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero → dark */}
      <Section variant="dark">
        <div className="space-y-4 mb-12 text-center">
          <span className="inline-flex items-center rounded-full px-3 py-1 it-ribbon-badge font-medium bg-it-blue-subtle text-it-blue">
            Blog
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-it-text-primary"
            style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
          >
            Industry Insights and Technology Perspectives
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty text-it-text-muted">
            Expert perspectives on robotics, automation, and digital transformation
          </p>
        </div>
      </Section>

      {/* Article Grid → light-bg */}
      <Section variant="light-bg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col bg-it-light-surface border border-it-light-border shadow-(--it-light-shadow-sm) hover:shadow-(--it-light-shadow-md) transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-it-light-blue-subtle text-it-light-blue border-0">{post.category}</Badge>
                  <span className="text-xs text-it-light-text-muted">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2 text-it-light-text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base pt-2 line-clamp-3 text-it-light-text-secondary">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between text-sm text-it-light-text-muted mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full" type="button" disabled title="Full articles coming soon">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <p className="text-it-light-text-muted">
            Showing 6 of 25+ articles
          </p>
        </div>
      </Section>
    </>
  )
}
