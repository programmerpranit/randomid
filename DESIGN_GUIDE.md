# Trendy Bollywood Design System

A luxury fashion editorial design system featuring elegant typography, refined color palettes, and sophisticated UI components.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Components](#components)
5. [Spacing & Layout](#spacing--layout)
6. [Animations & Transitions](#animations--transitions)

---

## Design Philosophy

Trendy Bollywood embodies luxury editorial design with:

- **Elegant Simplicity** - Clean lines, minimal ornamentation
- **Sophisticated Typography** - Light weights, generous spacing
- **Premium Materials** - Subtle borders, refined shadows
- **Timeless Aesthetic** - Editorial magazine quality
- **Intentional Whitespace** - Breathing room for content

---

## Color Palette

### Primary Colors

```css
/* Amber/Gold - Primary Brand Color */
amber-50:  #FFFBEB  /* Subtle backgrounds */
amber-100: #FEF3C7  /* Light accents, borders */
amber-200: #FDE68A  /* Dividers */
amber-300: #FCD34D  /* Hover states, borders */
amber-600: #D97706  /* Text accents */
amber-700: #B45309  /* Icons, emphasis */
amber-800: #92400E  /* Primary text, buttons */
amber-900: #78350F  /* Dark buttons, headings */
```

### Neutral Colors

```css
/* Stone/Gray - Base Palette */
stone-50:  #FAFAF9  /* Page backgrounds */
white:     #FFFFFF  /* Cards, surfaces */
gray-400:  #9CA3AF  /* Disabled states */
gray-500:  #6B7280  /* Secondary text */
gray-600:  #4B5563  /* Body text */
gray-700:  #374151  /* Dark text */
gray-900:  #111827  /* Headings */
```

### Gradients

```css
/* Primary Gradient - Brand Identity */
from-amber-800 via-amber-600 to-amber-900

/* Background Gradients */
from-stone-50 via-white to-amber-50/30
from-amber-900 via-amber-800 to-amber-900

/* Overlay Gradients */
from-black/60 via-black/20 to-transparent
from-black/20 to-transparent
```

### Usage Guidelines

- **Amber 800-900**: Primary actions, active states, brand moments
- **Amber 100-300**: Borders, subtle backgrounds, hover states
- **Gray 600-900**: Text hierarchy
- **White/Stone-50**: Backgrounds, cards

---

## Typography

### Font Family

```css
font-family: 'Outfit', sans-serif;
```

**Outfit** is used exclusively across all text elements for consistency.

### Font Weights

```css
font-extralight: 200  /* Large display headings */
font-light: 300       /* Most text, body copy, labels */
font-normal: 400      /* (Rarely used) */
font-medium: 500      /* Emphasis within light text */
font-semibold: 600    /* (Avoid - not part of aesthetic) */
font-bold: 700        /* (Avoid - not part of aesthetic) */
```

**Primary Weight**: `font-light` (300) - Used for 90% of text

### Text Sizes

```css
/* Display Headings */
text-8xl  /* 96px - Homepage hero */
text-7xl  /* 72px - Page headers */
text-6xl  /* 60px - Section titles */
text-5xl  /* 48px - Blog titles */

/* Headings */
text-4xl  /* 36px - H2 */
text-3xl  /* 30px - H2 in blog content */
text-2xl  /* 24px - H3, card titles */
text-xl   /* 20px - H4, blog card titles */

/* Body Text */
text-lg   /* 18px - Article body, descriptions */
text-base /* 16px - Standard body */
text-sm   /* 14px - Secondary text */

/* Labels & Meta */
text-xs   /* 12px - Labels, tags, meta info */
text-[10px] /* 10px - Small tags, uppercase labels */
```

### Letter Spacing

```css
tracking-tight      /* -0.025em - Large headings */
tracking-normal     /* 0em - Body text (default) */
tracking-wide       /* 0.025em - Brand name */
tracking-wider      /* 0.05em - Buttons, CTAs */
tracking-widest     /* 0.1em - Small labels, tags */
tracking-[0.3em]    /* 0.3em - Premium labels */
```

**Usage**: Uppercase text always uses wide tracking for readability

### Line Height

```css
leading-tight       /* 1.25 - Large headlines */
leading-normal      /* 1.5 - (default) */
leading-relaxed     /* 1.625 - Body paragraphs */
leading-[1.1]       /* 1.1 - Compact headlines */
```

### Text Styles

#### Display Heading (Hero)
```tsx
className="text-6xl md:text-8xl font-extralight tracking-tight text-gray-900"
```

#### Page Title
```tsx
className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight"
```

#### Section Heading
```tsx
className="text-4xl md:text-5xl font-extralight text-gray-900"
```

#### Body Text
```tsx
className="text-lg font-light text-gray-700 leading-relaxed"
```

#### Uppercase Label
```tsx
className="text-xs font-light tracking-widest uppercase text-gray-600"
```

#### Premium Badge
```tsx
className="text-xs font-light tracking-[0.3em] uppercase border border-amber-200 text-amber-900"
```

---

## Components

### Buttons

#### Primary Button
```tsx
<button className="px-8 py-3 bg-amber-900 text-white text-xs tracking-wider uppercase font-light hover:shadow-lg transition-all">
  Button Text
</button>
```

#### Secondary Button (Outlined)
```tsx
<button className="px-8 py-3 border border-amber-300 text-amber-900 text-xs tracking-wider uppercase font-light hover:bg-amber-50 transition-all">
  Button Text
</button>
```

#### Text Button
```tsx
<button className="text-sm font-light text-amber-800 hover:text-amber-900 transition-colors">
  Button Text
</button>
```

**Design Principles**:
- Rectangular, no rounded corners
- Uppercase with wide tracking
- Light font weight
- Generous padding (px-8 py-3 minimum)
- Subtle hover effects

### Cards

#### Blog Card
```tsx
<article className="flex flex-col h-full bg-white border border-amber-100/50 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
  {/* Image with aspect-[4/3] */}
  {/* Content with p-6 */}
</article>
```

**Features**:
- White background
- Subtle amber borders (50% opacity)
- Clean edges (no border-radius)
- Hover: darker border + shadow
- Image scales on hover (scale-105)

#### Content Card
```tsx
<div className="bg-white/95 backdrop-blur-sm border border-amber-100/50 p-8 md:p-12 shadow-xl">
  {/* Card content */}
</div>
```

### Tags

```tsx
<span className="text-[10px] font-light tracking-widest uppercase text-amber-800 border border-amber-300 px-3 py-1">
  Tag Name
</span>
```

**Features**:
- Outlined style (border, no fill)
- Very small text (10px)
- Wide tracking
- Uppercase
- Amber color scheme

### Navigation Links

#### Navbar Link
```tsx
<Link className="text-sm tracking-wider uppercase font-light text-gray-600 hover:text-amber-800">
  Link
</Link>
```

#### Active Navbar Link
```tsx
<Link className="text-sm tracking-wider uppercase font-light text-amber-800 border-b-2 border-amber-800">
  Link
</Link>
```

### Form Inputs

#### Text Input
```tsx
<input className="w-full border-none outline-none text-sm bg-transparent font-light placeholder:text-gray-400 border-b border-amber-200 focus:border-amber-600 pb-2" />
```

**Features**:
- Bottom border only
- Minimal styling
- Light font weight
- Amber focus state

### Filter Buttons

#### Selected State
```tsx
<button className="px-5 py-2.5 text-xs font-light tracking-wider uppercase bg-amber-900 text-white shadow-md">
  All
</button>
```

#### Unselected State
```tsx
<button className="px-5 py-2.5 text-xs font-light tracking-wider uppercase bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200">
  Category
</button>
```

### Pagination

#### Page Button
```tsx
<button className="w-9 h-9 font-light text-sm bg-amber-900 text-white shadow-md">
  1
</button>
```

#### Inactive Page
```tsx
<button className="w-9 h-9 font-light text-sm text-gray-700 hover:bg-amber-50 border border-amber-200">
  2
</button>
```

#### Navigation Arrow
```tsx
<button className="w-9 h-9 border border-amber-300 text-amber-800 hover:bg-amber-50 hover:border-amber-600">
  <svg strokeWidth="1.5">...</svg>
</button>
```

---

## Spacing & Layout

### Container
```tsx
className="container mx-auto px-6"
```

**Max Widths**:
- Content: `max-w-5xl` (1024px)
- Wide content: `max-w-6xl` (1152px)
- Full width: `max-w-7xl` (1280px)

### Padding Scale
```css
p-6   /* 24px - Card padding */
p-8   /* 32px - Section padding */
p-12  /* 48px - Large section padding */

py-12 /* 48px - Section vertical */
py-16 /* 64px - Large section vertical */
py-24 /* 96px - Hero sections */
py-32 /* 128px - Large hero sections */
```

### Margin Scale
```css
mb-6   /* 24px - Standard spacing */
mb-8   /* 32px - Section spacing */
mb-12  /* 48px - Large section spacing */
mb-16  /* 64px - Major sections */

mt-16  /* 64px - Section top margin */
mt-32  /* 128px - Footer spacing */
```

### Gap Scale
```css
gap-2  /* 8px - Tag spacing */
gap-3  /* 12px - Button groups */
gap-5  /* 20px - Mobile menu items */
gap-8  /* 32px - Section content */
gap-10 /* 40px - Feature cards */
gap-12 /* 48px - Layout columns */
```

---

## Animations & Transitions

### Transition Durations
```css
transition-colors          /* 150ms - Text color changes */
transition-all             /* 150ms - Multi-property */
duration-300              /* 300ms - Hover states */
duration-500              /* 500ms - Image transforms */
```

### Common Animations

#### Hover Scale (Images)
```tsx
className="group-hover:scale-105 transition-transform duration-500"
```

#### Hover Shadow
```tsx
className="hover:shadow-lg transition-all"
```

#### Hover Border
```tsx
className="hover:border-amber-600 transition-colors"
```

#### Link Underline
```tsx
className="hover:underline transition-all"
```

---

## Layout Patterns

### Hero Section
```tsx
<section className="container mx-auto px-6 py-24 md:py-32 text-center">
  <div className="max-w-5xl mx-auto">
    {/* Badge */}
    <div className="inline-block mb-8 px-8 py-2 border border-amber-200 text-amber-900 font-light text-xs tracking-[0.3em] uppercase">
      Label
    </div>

    {/* Heading */}
    <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-[1.1] tracking-tight text-gray-900">
      Title
    </h1>

    {/* Description */}
    <p className="text-lg md:text-xl text-gray-600 mb-14 leading-relaxed font-light max-w-2xl mx-auto">
      Description text
    </p>
  </div>
</section>
```

### Colored Hero Banner
```tsx
<section className="bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 py-24 md:py-32 px-6">
  <div className="container mx-auto text-center">
    {/* White/light text content */}
  </div>
</section>
```

### Content Section
```tsx
<section className="container mx-auto px-6 py-24 md:py-32">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
      Section Title
    </h2>
    <p className="text-gray-600 font-light">Subtitle</p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {/* Grid items */}
  </div>
</section>
```

### Footer
```tsx
<footer className="border-t border-amber-100/50 bg-stone-50/80 backdrop-blur-sm mt-32">
  <div className="container mx-auto px-6 py-12 text-center">
    <div className="flex items-center justify-center gap-3 mb-6">
      <Image src="/logo.png" alt="Trendy Bollywood" width={40} height={40} />
      <span className="text-xl font-light tracking-wide bg-gradient-to-r from-amber-800 via-amber-600 to-amber-900 bg-clip-text text-transparent">
        Trendy Bollywood
      </span>
    </div>
    <p className="text-gray-500 text-xs font-light tracking-wider uppercase">
      © {new Date().getFullYear()} Trendy Bollywood. All rights reserved.
    </p>
  </div>
</footer>
```

---

## Design Tokens Summary

### Quick Reference

```tsx
// Brand Colors
const colors = {
  primary: 'amber-900',
  primaryLight: 'amber-100',
  accent: 'amber-800',
  border: 'amber-100/50',
  hoverBorder: 'amber-300',
  background: 'stone-50',
  surface: 'white',
  text: 'gray-900',
  textSecondary: 'gray-600',
  textMuted: 'gray-500'
};

// Typography
const typography = {
  fontFamily: 'Outfit',
  defaultWeight: 'font-light',
  headingWeight: 'font-extralight',
  defaultSize: 'text-base',
  uppercase: 'uppercase tracking-wider'
};

// Spacing
const spacing = {
  containerPadding: 'px-6',
  sectionPadding: 'py-24 md:py-32',
  cardPadding: 'p-6',
  gap: 'gap-8'
};

// Borders
const borders = {
  default: 'border border-amber-100/50',
  hover: 'hover:border-amber-300',
  none: 'border-none'
};

// Shadows
const shadows = {
  card: 'shadow-sm',
  cardHover: 'hover:shadow-lg',
  elevated: 'shadow-xl'
};
```

---

## Best Practices

### DO ✅

- Use `font-light` for most text
- Use `font-extralight` for large headlines
- Add `tracking-wider` or `tracking-widest` to uppercase text
- Use amber colors for brand moments
- Keep borders subtle (50% opacity)
- Use rectangular shapes (no rounded corners)
- Maintain generous whitespace
- Use subtle hover animations

### DON'T ❌

- Use bold or semibold fonts
- Use rounded corners (`rounded-*`)
- Use bright, saturated colors
- Use small padding/spacing
- Use tight letter-spacing on uppercase
- Mix multiple font families
- Overuse shadows
- Create busy layouts

---

## File References

- **Navbar**: `src/components/common/Navbar.tsx`
- **Blog Card**: `src/components/blog/BlogCard.tsx`
- **Homepage**: `src/app/(public)/(home)/page.tsx`
- **Blog List**: `src/app/(public)/blogs/BlogsListPage.tsx`
- **Blog Detail**: `src/app/(public)/blogs/[slug]/BlogDetailPage.tsx`
- **Global Styles**: `src/app/globals.css`
- **Root Layout**: `src/app/layout.tsx`

---

**Last Updated**: January 2025
**Design System Version**: 1.0
