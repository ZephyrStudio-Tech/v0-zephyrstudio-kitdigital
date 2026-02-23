# ZephyrStudio - Premium B2B Landing Page

A high-conversion B2B landing page for ZephyrStudio, a digital agency specializing in European "Kit Digital" grants.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4** with custom design tokens
- **Framer Motion** for premium animations
- **Lucide React** for icons
- **shadcn/ui** for accessible components

## Design System

### Color Palette (Tech Startup / Terminal Aesthetic)
- **Obsidian**: `#030305` - Background
- **Zephyr Blue**: `#0018d8` - Primary
- **Neon Cyan**: `#00e5ff` - Accent
- **Deep Indigo**: `#4338ca` - Secondary

### Typography
- **Space Grotesk** - Headings (bold, tight tracking)
- **Inter** - Body text
- **JetBrains Mono** - Terminal-style elements, badges, code snippets

## Key Features

1. **Animated Mesh Gradient Background** - Slowly animated orbs with heavy blur
2. **Glassmorphism UI** - Cards with backdrop-blur, white/10 borders
3. **Scroll-Triggered Animations** - Framer Motion fade-up staggers
4. **Sticky Header** - Glassmorphism navigation
5. **Infinite Marquee** - Tech stack showcase
6. **Bento Grid Portfolio** - Asymmetrical project showcase
7. **Mobile-Optimized Reviews** - Horizontal snap-scroll
8. **Accessible FAQ Accordion** - Smooth animations
9. **Terminal-Style Elements** - Monospace badges, code-like UI

## Project Structure

```
app/
├── page.tsx          # Main landing page with all sections
├── layout.tsx        # Root layout with fonts
└── globals.css       # Custom design tokens and utilities

components/
├── header.tsx                # Sticky glassmorphism header
├── marquee.tsx              # Infinite scroll tech stack
├── animated-background.tsx  # Mesh gradient orbs
└── ui/                     # shadcn/ui components
```

## Sections

1. Header (Sticky Glassmorphism)
2. Hero Section with terminal badge
3. Infinite Marquee
4. Authority & SEO Block
5. Packages (4-column grid with "INCL. MAC" badges)
6. Projects Bento Grid (5-item asymmetrical layout)
7. Reviews (Mobile horizontal scroll)
8. Resources/Blog (3-column grid)
9. FAQ Accordion
10. Final CTA Banner
11. Footer

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Performance Optimizations

- Next.js Image optimization
- Framer Motion scroll-based animations (viewport triggers)
- CSS backdrop-blur for glassmorphism
- Responsive mobile-first design
- Semantic HTML for SEO

## Accessibility

- Proper heading hierarchy (H1, H2, H3)
- ARIA-compliant accordion components
- Keyboard navigation support
- Color contrast optimized for WCAG compliance
