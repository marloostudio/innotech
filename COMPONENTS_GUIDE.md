# Component Reference Guide

This guide shows you how to use all the reusable components to build new pages quickly.

## 📐 Layout Components

### PageShell

Container component that provides consistent max-width and padding.

```tsx
import { PageShell } from "@/components/page-shell"

<PageShell>
  {/* Your content with automatic max-width and padding */}
</PageShell>

<PageShell className="py-20">
  {/* Add custom classes */}
</PageShell>
```

### Section

Full-width section with automatic padding and PageShell wrapper.

```tsx
import { Section } from "@/components/page-shell"

<Section>
  {/* Automatically includes PageShell wrapper and vertical padding */}
</Section>

<Section className="bg-muted/30" id="features">
  {/* Custom background and ID for anchor links */}
</Section>
```

### SectionHeader

Consistent header for sections with optional badge.

```tsx
import { SectionHeader } from "@/components/section-header"

<SectionHeader 
  title="Section Title"
  description="Optional description text"
/>

<SectionHeader 
  title="Section Title"
  description="Description"
  badge="Optional Badge"
  centered={false}  // Default is true
/>
```

---

## 🎯 Section Components

All section components are in `/components/sections/`

### Hero

Large hero section with headline, subheadline, and two CTAs.

```tsx
import { Hero } from "@/components/sections/hero"

<Hero 
  headline="Transform Your Operations"
  subheadline="Enterprise-grade solutions..."
  primaryCta={{
    text: "Request a Demo",
    href: "/contact"
  }}
  secondaryCta={{
    text: "Explore Solutions",
    href: "/solutions"
  }}
/>
```

**Props:**
- `headline` (string) - Main headline
- `subheadline` (string) - Supporting text
- `primaryCta` (object) - Primary button { text, href }
- `secondaryCta` (object) - Secondary button { text, href }

---

### LogoCloud

Display client/partner logos in a grid.

```tsx
import { LogoCloud } from "@/components/sections/logo-cloud"

<LogoCloud 
  logos={["Company A", "Company B", "Company C"]}
/>

<LogoCloud 
  title="Trusted by industry leaders"
  logos={trustLogos}
/>
```

**Props:**
- `logos` (string[]) - Array of logo names
- `title` (string, optional) - Title above logos

---

### FeatureGrid

Display features/solutions in a responsive grid with icons.

```tsx
import { FeatureGrid } from "@/components/sections/feature-grid"

const features = [
  {
    id: "feature-1",
    title: "Feature Name",
    description: "Feature description...",
    icon: "zap"  // lucide-react icon name
  }
]

<FeatureGrid 
  title="Our Features"
  description="Optional description"
  features={features}
  columns={4}  // 2, 3, or 4 (default: 4)
/>
```

**Props:**
- `title` (string) - Section title
- `description` (string, optional) - Section description
- `badge` (string, optional) - Badge above title
- `features` (array) - Array of feature objects
- `columns` (2 | 3 | 4) - Grid columns

**Feature Object:**
```typescript
{
  id: string
  title: string
  description: string
  icon: string  // lucide-react icon name
}
```

---

### IndustryGrid

Similar to FeatureGrid but styled for industries with optional CTA.

```tsx
import { IndustryGrid } from "@/components/sections/industry-grid"

const industries = [
  {
    id: "automotive",
    title: "Automotive",
    description: "Description...",
    icon: "car"
  }
]

<IndustryGrid 
  title="Industries We Serve"
  industries={industries}
  showCta={true}  // Shows "View All Industries" button
/>
```

**Props:**
- `title` (string) - Section title
- `description` (string, optional)
- `industries` (array) - Array of industry objects
- `showCta` (boolean) - Show "View All" button

---

### TechOverview

Technology pillars with tabs and feature lists.

```tsx
import { TechOverview } from "@/components/sections/tech-overview"

const pillars = [
  {
    id: "ai",
    title: "AI & Computer Vision",
    description: "Advanced perception systems...",
    features: [
      "3D object recognition",
      "Real-time path planning"
    ]
  }
]

<TechOverview 
  title="Core Technology"
  description="Optional description"
  pillars={pillars}
/>
```

**Props:**
- `title` (string)
- `description` (string, optional)
- `pillars` (array) - Array of tech pillar objects

**Pillar Object:**
```typescript
{
  id: string
  title: string
  description: string
  features: string[]
}
```

---

### Testimonial

Case study teaser with challenge/solution/note.

```tsx
import { Testimonial } from "@/components/sections/testimonial"

<Testimonial 
  title="Manufacturing Excellence"
  client="Leading Automotive Manufacturer"
  challenge="Needed to increase production..."
  solution="Deployed 50+ robots..."
  note="Sample case study—results represent typical use cases"
/>
```

**Props:**
- `title` (string) - Case study title
- `client` (string) - Client name
- `challenge` (string) - Problem statement
- `solution` (string) - Solution implemented
- `note` (string, optional) - Disclaimer note

---

### Stats

Display metrics/statistics in a grid.

```tsx
import { Stats } from "@/components/sections/stats"

const stats = [
  {
    value: "99.8%",
    label: "System Uptime",
    note: "Sample metric"
  }
]

<Stats 
  stats={stats}
  title="Performance Metrics"  // Optional, default shown
/>
```

**Props:**
- `stats` (array) - Array of stat objects
- `title` (string, optional) - Section title

**Stat Object:**
```typescript
{
  value: string      // "99.8%", "500+", etc.
  label: string      // "System Uptime"
  note?: string      // "Sample metric" (optional)
}
```

---

### CtaBanner

Full-width CTA banner with primary color background.

```tsx
import { CtaBanner } from "@/components/sections/cta-banner"

<CtaBanner 
  headline="Ready to Get Started?"
  description="Let's discuss your automation needs"
  ctaText="Request a Demo"
  ctaHref="/contact"
/>
```

**Props:**
- `headline` (string) - Main headline
- `description` (string) - Supporting text
- `ctaText` (string) - Button text
- `ctaHref` (string) - Button link

---

### Faq

FAQ section with accordion.

```tsx
import { Faq } from "@/components/sections/faq"

const faqItems = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range..."
  }
]

<Faq 
  title="Frequently Asked Questions"  // Optional
  description="Get answers..."         // Optional
  items={faqItems}
/>
```

**Props:**
- `title` (string, optional) - Section title
- `description` (string, optional)
- `items` (array) - Array of FAQ objects

**FAQ Object:**
```typescript
{
  question: string
  answer: string
}
```

---

## 🎨 Using Components Together

### Example: Building a New Page

```tsx
import { Section } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CtaBanner } from "@/components/sections/cta-banner"

export default function CustomPage() {
  const features = [
    {
      id: "1",
      title: "Feature One",
      description: "Description...",
      icon: "zap"
    }
  ]

  return (
    <>
      {/* Header Section */}
      <Section className="pt-24 pb-12">
        <SectionHeader 
          title="Page Title"
          description="Page description"
          badge="Optional"
        />
      </Section>

      {/* Content Section */}
      <Section>
        <FeatureGrid 
          title="Features"
          features={features}
          columns={3}
        />
      </Section>

      {/* CTA Section */}
      <CtaBanner 
        headline="Ready to Learn More?"
        description="Contact us today"
        ctaText="Get Started"
        ctaHref="/contact"
      />
    </>
  )
}
```

---

## 🧩 shadcn/ui Components

All shadcn/ui components are available in `/components/ui/`

### Common Components

#### Card
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

#### Button
```tsx
import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

#### Badge
```tsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

#### Tabs
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for tab 2
  </TabsContent>
</Tabs>
```

#### Accordion
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Separator
```tsx
import { Separator } from "@/components/ui/separator"

<Separator />
<Separator orientation="vertical" />
```

---

## 🎨 Styling Patterns

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards or content */}
</div>
```

### Spacing
```tsx
<div className="space-y-6">  {/* Vertical spacing */}
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div className="flex gap-4">  {/* Horizontal spacing with flexbox */}
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Background Colors
```tsx
<Section className="bg-muted/30">  {/* Light background */}
<Section className="bg-primary text-primary-foreground">  {/* Primary colored */}
```

### Text Styles
```tsx
<h2 className="text-3xl md:text-4xl font-bold">Headline</h2>
<p className="text-lg text-muted-foreground">Description</p>
<p className="text-sm text-muted-foreground">Small text</p>
```

---

## 🔍 Finding Components

### By Purpose
- **Layout**: `PageShell`, `Section` in `/components/page-shell.tsx`
- **Headers**: `SectionHeader` in `/components/section-header.tsx`
- **Navigation**: `Navbar`, `Footer` in `/components/site/`
- **Sections**: All in `/components/sections/`
- **UI Primitives**: All in `/components/ui/`

### By Page Type
- **Landing/Home**: Hero, LogoCloud, FeatureGrid, Stats, CtaBanner
- **Product/Service**: FeatureGrid, Tabs (from ui), Card (from ui)
- **About**: Timeline (custom), Stats, Card grid
- **Contact**: Form inputs (from ui), Card
- **Resources**: Card grid, Badge (from ui)

---

## 💡 Component Best Practices

### 1. Always Use Type-Safe Props
```tsx
// ✅ Good - use the defined interfaces
import { features } from "@/lib/content/home"
<FeatureGrid features={features} />

// ❌ Bad - inline objects without types
<FeatureGrid features={[{ title: "Test" }]} />
```

### 2. Reuse Existing Patterns
```tsx
// ✅ Good - use Section wrapper
<Section>
  <SectionHeader title="Title" />
  <FeatureGrid features={features} />
</Section>

// ❌ Bad - manual padding and container
<div className="py-16 container">
  <h2>Title</h2>
  <FeatureGrid features={features} />
</div>
```

### 3. Use Design Tokens
```tsx
// ✅ Good - use theme colors
<div className="bg-primary text-primary-foreground">

// ❌ Bad - hardcoded colors
<div className="bg-blue-600 text-white">
```

### 4. Keep Content Separate
```tsx
// ✅ Good - content in /lib/content/
import { products } from "@/lib/content/products"
<FeatureGrid features={products} />

// ❌ Bad - content inline in component
<FeatureGrid features={[{...}, {...}]} />
```

---

## 🚀 Quick Component Checklist

When creating a new page:
- [ ] Use `Section` wrapper for consistent spacing
- [ ] Use `SectionHeader` for section titles
- [ ] Import content from `/lib/content/`
- [ ] Use existing section components when possible
- [ ] End with `CtaBanner` for call-to-action
- [ ] Add metadata export for SEO
- [ ] Test on mobile view

---

## 📚 Additional Resources

- **shadcn/ui docs**: https://ui.shadcn.com
- **Lucide icons**: https://lucide.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js 15**: https://nextjs.org/docs

---

Need help? Check the existing pages in `/app/` for complete examples of how components are used together!
