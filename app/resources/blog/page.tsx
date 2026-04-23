import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react"

import { Section } from "@/components/page-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPostListings } from "@/lib/content/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Industry insights, technology trends, and best practices in robotics and automation from InnoTech Systems.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

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
          {blogPostListings.map((post) => (
            <Card
              key={post.id}
              id={`blog-post-${post.id}`}
              className="flex flex-col scroll-mt-24 bg-it-light-surface border border-it-light-border shadow-(--it-light-shadow-sm) hover:shadow-(--it-light-shadow-md) transition-shadow"
            >
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
