export interface BlogPostListing {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
}

/** Placeholder listings on `/resources/blog` (no per-post URLs yet). Hub is password-gated; crawlers get 403 — see `PASSWORD_GATED_HUB_PATH_PREFIXES` in `@/lib/site-access`. */
export const blogPostListings: BlogPostListing[] = [
  {
    id: 1,
    title: "The Future of Collaborative Robotics in Manufacturing",
    excerpt:
      "Exploring how collaborative robots are transforming production lines and enabling safer human-robot interaction in industrial environments.",
    category: "Technology",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "5 Key Considerations for Warehouse Automation",
    excerpt:
      "A practical guide for logistics managers evaluating autonomous mobile robots and warehouse management systems.",
    category: "Best Practices",
    author: "Michael Rodriguez",
    date: "March 8, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "AI-Powered Quality Inspection: Beyond Visual Defects",
    excerpt:
      "How machine learning is revolutionizing quality control by detecting anomalies invisible to the human eye.",
    category: "AI & Vision",
    author: "Dr. James Park",
    date: "March 1, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "ROI Deep Dive: Measuring Automation Success",
    excerpt:
      "Framework for calculating and tracking the financial impact of robotics investments beyond simple cost savings.",
    category: "Business",
    author: "Lisa Thompson",
    date: "February 22, 2024",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Safety Standards in Autonomous Systems",
    excerpt:
      "Understanding ISO 10218 and ISO/TS 15066 compliance requirements for industrial and collaborative robotics.",
    category: "Safety",
    author: "David Kim",
    date: "February 15, 2024",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Predictive Maintenance: From Reactive to Proactive",
    excerpt:
      "How autonomous inspection robots and IoT sensors are enabling predictive maintenance strategies that reduce downtime.",
    category: "Maintenance",
    author: "Dr. Sarah Chen",
    date: "February 8, 2024",
    readTime: "7 min read",
  },
]
