# InnoTech Systems - B2B Robotics Website

A production-ready Next.js 16 website for InnoTech Systems, a B2B robotics and autonomous systems company.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Enterprise Design**: Dark theme, Chakra Petch / DM Sans / IBM Plex Mono, shadcn/ui components
- **Home Hero**: Hero Style v2 with canvas particle/robot background (HeroV2 + HeroCanvas); trust marquee (“Trusted by innovative companies worldwide”); Comprehensive Automation Solutions with image-left cards
- **SEO Optimized**: Metadata per route, semantic HTML, accessibility
- **Fully Responsive**: Mobile-first, sticky nav, mobile drawer (Framer Motion)
- **Reusable Components**: PillarHero, HeroV2, FeatureGrid, LogoCloud, IndustryGrid, TechOverview, CtaBanner, Faq, etc.
- **Content Model**: Structured content in `/lib/content/`; site config and version in `lib/site.ts`
- **Type Safe**: Full TypeScript coverage
- **Versioning**: App version (semver) in footer and `lib/site.ts`; CHANGELOG follows semantic versioning

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with Navbar + Footer
│   ├── page.tsx                   # Home (HeroV2 + HeroCanvas, trust marquee, solutions grid)
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
│   │   ├── hero-v2.tsx           # Home hero (style v2)
│   │   ├── hero-canvas.tsx       # Canvas background (particles/robots)
│   │   ├── hero.tsx              # Legacy hero
│   │   ├── pillar-hero.tsx       # Pillar page hero (optional background)
│   │   ├── logo-cloud.tsx        # Trust logos (marquee scroll)
│   │   ├── feature-grid.tsx      # Feature cards (optional image left, hide icon)
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
│   ├── site.ts                   # Site config + APP_VERSION (semver)
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
- **Headings**: Chakra Petch (H1–H4); **Body**: DM Sans; **Mono/metadata**: IBM Plex Mono (see `.cursor/rules/design-and-naming.mdc`). Home hero v2 uses system-ui per style guide.
- **Scale**: Responsive with Tailwind; design tokens in `app/globals.css` (`@theme inline`).

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
- **Hero v2** — Eyebrow, H1 “Intelligent Infrastructure” / “for Autonomous Mobility”, subhead, Request a Demo / Explore Solutions; canvas particle/robot background (HeroCanvas); 60vh height so trust section is above the fold.
- **Trust marquee** — “Trusted by innovative companies worldwide”; logos scroll slowly right-to-left (4× repeat, seamless loop).
- **Comprehensive Automation Solutions** — FeatureGrid with image on left (edge-to-edge), no icons.
- Industries grid, Technology tabs, Case study teaser, Stats, FAQ, Final CTA.

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

Edit `/lib/site.ts` (and bump `APP_VERSION` when releasing; see CHANGELOG.md):

```typescript
export const APP_VERSION = "1.1.0"  // semver: major.minor.patch
export const siteConfig = {
  name: "Your Company Name",
  version: APP_VERSION,
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

- Global styles and tokens: `app/globals.css` (Tailwind v4, `@theme inline`; no tailwind.config.ts)
- Design rules: `.cursorrules`, `.cursor/rules/design-and-naming.mdc`
- Component styles: Tailwind + CSS variables (no raw hex in components)

## 🎨 Reusable Components

### Section Components

Section components accept props for reusability. Example (pillar page hero):

```tsx
import { PillarHero } from "@/components/sections/pillar-hero"

<PillarHero
  h1="Your Headline"
  h2="Subheadline"
  description="..."
  primaryCta={{ label: "CTA", href: "/link" }}
  secondaryCta={{ label: "CTA 2", href: "/link2" }}
/>
```

Home uses `HeroV2` with optional `background={<HeroCanvas />}`.

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

Built with ❤️ using Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Version in footer from `lib/site.ts`. See CHANGELOG.md for version history.
