# InnoTech Systems - B2B Robotics Website

A production-ready Next.js 15 website scaffold for InnoTech Systems, a B2B robotics and autonomous systems company.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS
- **Enterprise Design**: Clean, professional B2B aesthetic with shadcn/ui components
- **SEO Optimized**: Metadata configuration per route, semantic HTML, accessibility
- **Fully Responsive**: Mobile-first design with sticky navigation and mobile menu
- **Reusable Components**: Modular section components for rapid page creation
- **Content Model**: Structured content in `/lib/content/` for easy CMS migration
- **Type Safe**: Full TypeScript coverage

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with Navbar + Footer
│   ├── page.tsx                   # Home page
│   ├── products/page.tsx          # Products catalog with tabs
│   ├── solutions/page.tsx         # Solutions overview
│   ├── industries/page.tsx        # Industries served
│   ├── technology/page.tsx        # Technology overview
│   ├── resources/
│   │   ├── page.tsx              # Resources hub
│   │   ├── blog/page.tsx         # Blog index
│   │   └── case-studies/page.tsx # Case studies
│   ├── about/page.tsx            # About us
│   └── contact/page.tsx          # Contact form
│
├── components/
│   ├── site/
│   │   ├── navbar.tsx            # Sticky navbar with mobile menu
│   │   └── footer.tsx            # Footer with links
│   ├── sections/
│   │   ├── hero.tsx              # Hero section
│   │   ├── logo-cloud.tsx        # Trust logos
│   │   ├── feature-grid.tsx      # Feature cards
│   │   ├── industry-grid.tsx     # Industry cards
│   │   ├── tech-overview.tsx     # Technology tabs
│   │   ├── testimonial.tsx       # Case study teaser
│   │   ├── stats.tsx             # Metrics display
│   │   ├── cta-banner.tsx        # Call-to-action banner
│   │   └── faq.tsx               # FAQ accordion
│   ├── page-shell.tsx            # Container components
│   ├── section-header.tsx        # Section header component
│   └── ui/                       # shadcn/ui components
│
├── lib/
│   ├── site.ts                   # Site configuration
│   ├── nav.ts                    # Navigation structure
│   ├── content/
│   │   ├── home.ts               # Home page content
│   │   ├── products.ts           # Product catalog
│   │   ├── solutions.ts          # Solutions content
│   │   └── industries.ts         # Industry content
│   └── utils.ts                  # Utility functions
│
└── public/                       # Static assets
```

## 🎨 Design System

### Colors
The site uses a professional B2B color scheme defined in `app/globals.css`:
- **Primary**: Dark tones for trust and authority
- **Accent**: Used sparingly for CTAs and highlights
- **Muted**: Backgrounds and secondary content

### Typography
- **Headings**: Geist font family, bold weights
- **Body**: Geist, comfortable line-height (1.5-1.6)
- **Scale**: Responsive text sizes using Tailwind classes

### Components
All UI components from shadcn/ui are pre-installed:
- Button, Card, Badge, Tabs, Accordion
- Sheet (mobile menu), Separator
- Form inputs, Select, Textarea

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Run development server**
   ```bash
   pnpm dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📝 Content Management

### Where to Edit Content

All content is centralized in `/lib/content/` for easy editing:

- **`lib/site.ts`** - Company info, contact details, social links
- **`lib/nav.ts`** - Navigation structure for header and footer
- **`lib/content/home.ts`** - Home page sections (hero, solutions, industries, FAQ, etc.)
- **`lib/content/products.ts`** - Product catalog with features and applications
- **`lib/content/solutions.ts`** - Solution descriptions, benefits, capabilities
- **`lib/content/industries.ts`** - Industry challenges and solutions

### Adding New Content

**Example: Add a new product**

Edit `/lib/content/products.ts`:

```typescript
{
  id: "new-product",
  name: "Product Name",
  category: "amr", // or manipulators, inspection, software
  tagline: "Brief description",
  description: "Detailed description...",
  features: ["Feature 1", "Feature 2"],
  applications: ["Use case 1", "Use case 2"],
  icon: "bot" // lucide-react icon name
}
```

**Example: Add a new FAQ**

Edit `/lib/content/home.ts`:

```typescript
{
  question: "Your question?",
  answer: "Your detailed answer..."
}
```

## 🎯 Key Pages

### Home Page (`/`)
Complete landing page with:
- Hero with CTAs
- Logo cloud (trust indicators)
- Solutions overview
- Industries grid
- Technology tabs
- Case study teaser
- Stats/metrics
- FAQ accordion
- Final CTA

### Products (`/products`)
Product catalog with:
- Category tabs (AMR, Manipulators, Inspection, Software)
- Detailed product cards
- Features and applications

### Solutions (`/solutions`)
Solution descriptions with:
- Benefits and capabilities
- Industry-specific applications

### Industries (`/industries`)
Industry expertise showcasing:
- Industry challenges
- Our solutions
- Sector-specific context

### Technology (`/technology`)
Technology overview with:
- Core technology pillars (tabs)
- Enterprise features
- Innovation commitment

### Resources (`/resources`)
Resource hub with:
- Blog index (`/resources/blog`)
- Case studies (`/resources/case-studies`)
- Placeholders for white papers and videos

### Company (`/company`)
Company information (canonical route; `/about` redirects here):
- Mission and values
- Team overview
- Company timeline
- Careers section

### Contact (`/contact`)
Contact form with:
- Multi-field form (name, email, company, industry, message)
- Contact information sidebar
- Sales and support emails

## 🔧 Customization

### Updating Site Config

Edit `/lib/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Company Name",
  description: "Your description",
  company: {
    name: "Your Company",
    email: "your@email.com",
    phone: "+1 (555) 000-0000",
    // ...
  }
}
```

### Updating Navigation

Edit `/lib/nav.ts` to modify header and footer links:

```typescript
export const mainNav: NavItem[] = [
  { title: "Link Name", href: "/path" },
  // ...
]
```

### Adding New Pages

1. Create page file: `app/your-page/page.tsx`
2. Add metadata export
3. Use section components from `/components/sections/`
4. Update navigation in `/lib/nav.ts`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline with Tailwind classes

## 🎨 Reusable Components

### Section Components

All section components accept props for reusability:

```tsx
import { Hero } from "@/components/sections/hero"

<Hero 
  headline="Your Headline"
  subheadline="Your subheadline"
  primaryCta={{ text: "CTA", href: "/link" }}
  secondaryCta={{ text: "CTA 2", href: "/link2" }}
/>
```

### Layout Components

```tsx
import { Section, PageShell } from "@/components/page-shell"
import { SectionHeader } from "@/components/section-header"

<Section className="py-16">
  <SectionHeader 
    title="Section Title"
    description="Description"
    badge="Optional Badge"
  />
  {/* Your content */}
</Section>
```

## 📱 Responsive Design

- **Mobile First**: All components are designed mobile-first
- **Breakpoints**: Uses Tailwind breakpoints (sm, md, lg, xl)
- **Mobile Menu**: Sheet component for mobile navigation
- **Touch Friendly**: Appropriate sizing for touch targets

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

```bash
pnpm build
```

Deploy the `.next` folder and required files.

## 📊 SEO

- Metadata configuration per route
- Open Graph tags
- Twitter cards
- Semantic HTML
- Proper heading structure

## 🔄 Future Enhancements

Ready for:
- CMS integration (content already structured)
- Blog functionality (placeholder pages ready)
- Form submission backend
- Analytics integration
- A/B testing
- Internationalization (i18n)

## 📄 License

Proprietary - InnoTech Systems

## 🤝 Support

For questions or support, contact: info@innotech-systems.com

---

Built with ❤️ using Next.js 15, React 19, TypeScript, and Tailwind CSS
