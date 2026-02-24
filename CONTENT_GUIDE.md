# Content Editing Guide

This guide shows you exactly where to edit content for each section of the website. All content is centralized in the `/lib` folder for easy management.

## 🏢 Company Information

**File:** `/lib/site.ts`

```typescript
export const siteConfig = {
  name: "InnoTech Systems",              // Company name (appears everywhere)
  description: "...",                    // Meta description for SEO
  company: {
    name: "InnoTech Systems",
    tagline: "...",                      // Footer tagline
    email: "info@innotech-systems.com",  // Main contact email
    phone: "+1 (555) 123-4567",         // Main phone
    address: {
      street: "123 Innovation Drive",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States"
    }
  },
  social: {
    linkedin: "https://linkedin.com/...",
    twitter: "https://twitter.com/...",
    github: "https://github.com/..."
  }
}
```

## 🧭 Navigation

**File:** `/lib/nav.ts`

### Header Navigation
```typescript
export const mainNav: NavItem[] = [
  { title: "Products", href: "/products" },
  { title: "Solutions", href: "/solutions" },
  // Add/remove/reorder items here
]
```

### Footer Navigation
```typescript
export const footerNav: NavSection[] = [
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/company" },
      // Add/remove footer links here
    ]
  }
]
```

## 🏠 Home Page Content

**File:** `/lib/content/home.ts`

### Hero Section
```typescript
export const heroContent = {
  headline: "Transform Your Operations...",
  subheadline: "Enterprise-grade...",
  primaryCta: {
    text: "Request a Demo",
    href: "/contact"
  },
  secondaryCta: {
    text: "Explore Solutions",
    href: "/solutions"
  }
}
```

### Trust Logos
```typescript
export const trustLogos = [
  "Company A",
  "Company B",
  // Replace with your client names
]
```

### Solutions Overview Cards
```typescript
export const solutionsOverview = [
  {
    id: "manufacturing",
    title: "Smart Manufacturing",
    description: "Automate production...",
    icon: "factory"  // lucide-react icon name
  }
]
```

### Industries Served
```typescript
export const industriesServed = [
  {
    id: "automotive",
    title: "Automotive",
    description: "Advanced robotics...",
    icon: "car"
  }
]
```

### Technology Pillars
```typescript
export const technologyPillars = [
  {
    id: "ai-vision",
    title: "AI & Computer Vision",
    description: "Advanced perception...",
    features: [
      "3D object recognition",
      "Real-time path planning",
      // Add/edit features
    ]
  }
]
```

### FAQ
```typescript
export const faqItems = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range..."
  }
]
```

### Stats/Metrics
```typescript
export const statsPlaceholder = [
  {
    value: "99.8%",
    label: "System Uptime",
    note: "Sample metric"  // Warning label
  }
]
```

### Final CTA
```typescript
export const finalCta = {
  headline: "Ready to Transform?",
  description: "Schedule a consultation...",
  ctaText: "Request a Demo",
  ctaHref: "/contact"
}
```

## 📦 Products

**File:** `/lib/content/products.ts`

### Product Categories
```typescript
export const productCategories = [
  { id: "amr", label: "Autonomous Mobile Robots" },
  // Add/edit categories
]
```

### Products
```typescript
export const products: Product[] = [
  {
    id: "amr-1000",
    name: "AMR-1000 Series",
    category: "amr",
    tagline: "Heavy-duty autonomous...",
    description: "The AMR-1000 series...",
    features: [
      "1000kg payload capacity",
      "360° LiDAR and camera array",
      // List key features
    ],
    applications: [
      "Material transport in manufacturing",
      "Warehouse picking and putaway",
      // List use cases
    ],
    icon: "bot"  // lucide-react icon
  }
]
```

## 🔧 Solutions

**File:** `/lib/content/solutions.ts`

```typescript
export const solutions: Solution[] = [
  {
    id: "manufacturing",
    title: "Smart Manufacturing",
    tagline: "Transform production lines...",
    description: "Our comprehensive smart...",
    benefits: [
      "Increase production throughput by up to 45%",
      // List measurable benefits
    ],
    capabilities: [
      "Automated assembly and welding",
      // List what the solution can do
    ],
    icon: "factory"
  }
]
```

## 🏭 Industries

**File:** `/lib/content/industries.ts`

```typescript
export const industries: Industry[] = [
  {
    id: "automotive",
    title: "Automotive",
    tagline: "Advanced automation for...",
    description: "The automotive industry...",
    challenges: [
      "High-volume production with zero-defect requirements",
      // List industry pain points
    ],
    solutions: [
      "Robotic welding and assembly systems",
      // List how you solve them
    ],
    icon: "car"
  }
]
```

## 📝 Content Best Practices

### Writing Style
- **Clear and Professional**: B2B enterprise tone
- **Benefits-Focused**: What value does it provide?
- **Specific but Not Technical**: Accessible to decision-makers
- **Action-Oriented**: Use active voice

### Headlines
- Keep under 60 characters for SEO
- Lead with the benefit or value proposition
- Use sentence case, not title case

### Descriptions
- First sentence should summarize the key point
- Use 2-3 sentences for card descriptions
- Full paragraphs for page descriptions

### CTAs (Calls to Action)
- Use action verbs: "Request", "Schedule", "Explore", "Get Started"
- Be specific: "Request a Demo" not just "Learn More"
- Create urgency: "Schedule Your Consultation Today"

### Icons
Available lucide-react icons:
- `factory`, `truck`, `car`, `plane`, `zap`, `heart-pulse`
- `warehouse`, `sprout`, `bot`, `eye`, `search`, `wrench`
- `network`, `shield-check`, `target`, `check-circle-2`

Full list: https://lucide.dev/icons

## 🎯 SEO Optimization

Each page has metadata in its page.tsx file:

```typescript
export const metadata: Metadata = {
  title: "Page Title",  // Keep under 60 chars
  description: "Page description...",  // Keep under 160 chars
}
```

### Title Formula
`[Topic] | InnoTech Systems` (automatically added by layout)

### Description Formula
Start with action verb + key benefit + target audience

Example: "Explore our comprehensive range of autonomous mobile robots, robotic manipulators, and inspection systems designed for enterprise automation."

## 🔄 Making Content Changes

### To Add New Content:

1. **New Product**: Add to `products` array in `/lib/content/products.ts`
2. **New Solution**: Add to `solutions` array in `/lib/content/solutions.ts`
3. **New Industry**: Add to `industries` array in `/lib/content/industries.ts`
4. **New FAQ**: Add to `faqItems` array in `/lib/content/home.ts`

### To Edit Existing Content:

1. Find the relevant file in `/lib/content/`
2. Locate the item by its `id` or position
3. Edit the fields you want to change
4. Save the file (hot reload will update the page)

### To Remove Content:

1. Find the item in the relevant content file
2. Delete the entire object from the array
3. Save the file

## ✅ Content Checklist

Before publishing content changes:

- [ ] All placeholders replaced with real content
- [ ] Contact information updated in `/lib/site.ts`
- [ ] Company name/branding consistent throughout
- [ ] All links point to correct destinations
- [ ] Stats and metrics are accurate (or marked as samples)
- [ ] No "Lorem ipsum" or placeholder text
- [ ] Icons match the content topic
- [ ] Spelling and grammar checked
- [ ] Mobile view tested
- [ ] All CTAs lead somewhere meaningful

## 🚀 Quick Edits

### Change Company Name Everywhere
Edit one place: `siteConfig.name` in `/lib/site.ts`

### Update Contact Info
Edit: `siteConfig.company` in `/lib/site.ts`

### Modify Main Navigation
Edit: `mainNav` array in `/lib/nav.ts`

### Change Home Hero
Edit: `heroContent` object in `/lib/content/home.ts`

### Update Footer Links
Edit: `footerNav` array in `/lib/nav.ts`

---

Need help? All content files have TypeScript interfaces that show you exactly what fields are required and optional. Your code editor will provide autocomplete and validation!
