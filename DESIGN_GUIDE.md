# Random ID Generator Design System

A modern, tech-focused design system featuring dark themes, orange accents, and clean UI components for generating random identifiers.

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

Random ID Generator embodies a modern tech aesthetic with:

- **Dark Theme** - Deep gray backgrounds with subtle transparency
- **Orange Accents** - Vibrant orange for interactive elements and brand identity
- **Clean Minimalism** - Focused on functionality with minimal ornamentation
- **Tech-Focused** - Monospace fonts for IDs, gradient buttons, backdrop blur effects
- **Generous Spacing** - Breathing room for content and readability
- **Subtle Transparency** - Backdrop blur and semi-transparent surfaces

---

## Color Palette

### Primary Colors (Orange Accents)

```css
/* Orange - Primary Brand Color */
orange-400: #FB923C  /* Active states, hover text, borders */
orange-500: #F97316  /* Button gradients start */
orange-600: #EA580C  /* Button gradients end, logo */
orange-700: #C2410C  /* Button hover states */
```

### Background Colors

```css
/* Dark Gray - Base Palette */
gray-900: #111827  /* Primary background, navbar */
gray-800: #1F2937  /* Secondary background, cards */
gray-700: #374151  /* Borders, dividers */
gray-600: #4B5563  /* Secondary borders */
```

### Text Colors

```css
/* Text Hierarchy */
white:      #FFFFFF  /* Primary headings, ID display */
gray-200:   #E5E7EB  /* Logo text, nav text */
gray-300:   #D1D5DB  /* Body text, nav links */
gray-400:   #9CA3AF  /* Subtitles, secondary text */
gray-500:   #6B7280  /* Labels, muted text */
```

### Gradients

```css
/* Background Gradients */
bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  /* Page backgrounds */

/* Button Gradients */
bg-gradient-to-r from-orange-500 to-orange-600  /* Primary buttons */
hover:from-orange-600 hover:to-orange-700      /* Button hover */

/* Logo Gradient */
bg-gradient-to-br from-orange-500 to-orange-600  /* Logo background */
```

### Usage Guidelines

- **Orange 400-600**: Primary actions, active states, brand moments, hover states
- **Gray 900**: Primary backgrounds, navbar
- **Gray 800**: Cards, secondary surfaces
- **Gray 700**: Borders, dividers (with 30-50% opacity)
- **White/Gray 200-300**: Text hierarchy
- **Gray 400-500**: Secondary text, labels

---

## Typography

### Font Family

```css
/* Primary Font */
font-family: 'Geist Sans', system-ui, sans-serif;  /* Body text, UI elements */

/* Monospace Font */
font-family: 'Geist Mono', monospace;  /* ID displays, code */
```

**Geist Sans** is used for all UI text, while **Geist Mono** is used exclusively for displaying generated IDs.

### Font Weights

```css
font-light: 300  /* Primary weight - used for 90% of text */
```

**Primary Weight**: `font-light` (300) - Used for all text elements

### Text Sizes

```css
/* Display Headings */
text-6xl  /* 60px - Page titles (md breakpoint) */
text-4xl  /* 36px - Page titles (mobile) */

/* Headings */
text-lg   /* 18px - ID display text */
text-sm   /* 14px - Body text, buttons */
text-xs   /* 12px - Labels, uppercase tags */
```

### Letter Spacing

```css
tracking-tight   /* -0.025em - Large headings */
tracking-wide    /* 0.025em - Logo, nav text */
tracking-wider   /* 0.05em - Buttons, labels, uppercase text */
```

**Usage**: Uppercase text always uses `tracking-wider` for readability

### Text Styles

#### Page Title
```tsx
className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight"
```

#### Subtitle
```tsx
className="text-gray-400 font-light"
```

#### ID Display
```tsx
className="font-mono text-lg text-white break-all"
```

#### Uppercase Label
```tsx
className="text-xs text-gray-500 font-light tracking-wider uppercase mb-2 block"
```

#### Body Text
```tsx
className="text-gray-300 font-light text-sm leading-relaxed"
```

#### Section Heading
```tsx
className="text-sm text-gray-400 font-light tracking-wider uppercase mb-3"
```

---

## Components

### Buttons

#### Primary Button (Copy)
```tsx
<button className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-light tracking-wider uppercase hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2">
  Copy
</button>
```

#### Secondary Button (Refresh)
```tsx
<button className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 text-sm font-light tracking-wider uppercase hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200 flex items-center justify-center gap-2">
  Refresh
</button>
```

**Design Principles**:
- Rectangular, no rounded corners
- Uppercase with wider tracking
- Light font weight
- Generous padding (px-6 py-3)
- Gradient for primary, border for secondary
- Smooth hover transitions

### Cards

#### Generator Display Card
```tsx
<div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12 mb-8">
  {/* Card content */}
</div>
```

**Features**:
- Semi-transparent dark background (50% opacity)
- Backdrop blur effect
- Subtle borders (50% opacity)
- Generous padding (responsive: p-8 on mobile, p-12 on desktop)
- No border-radius

#### Info Section Card
```tsx
<div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 p-6">
  {/* Info content */}
</div>
```

**Features**:
- Lighter transparency (30% opacity)
- Smaller padding (p-6)
- Subtle backdrop blur

#### ID Display Box
```tsx
<div className="bg-gray-900/50 border border-gray-700/30 p-6 font-mono text-lg text-white break-all">
  {id || "Generating..."}
</div>
```

**Features**:
- Darker background (gray-900 at 50% opacity)
- Monospace font
- White text
- Break-all for long IDs
- Subtle border

### Navigation

#### Navbar
```tsx
<nav className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-700/30 shadow-lg">
  {/* Nav content */}
</nav>
```

**Features**:
- Sticky positioning
- Solid dark background (gray-900)
- Backdrop blur
- Subtle bottom border
- Shadow for depth

#### Navbar Link (Default)
```tsx
<Link className="px-4 py-2 text-sm font-light tracking-wider uppercase transition-colors text-gray-300 hover:text-orange-400">
  Link
</Link>
```

#### Navbar Link (Active)
```tsx
<Link className="px-4 py-2 text-sm font-light tracking-wider uppercase transition-colors text-orange-400 border-b-2 border-orange-400">
  Link
</Link>
```

**Features**:
- Uppercase with wider tracking
- Orange-400 for active state
- Border-bottom-2 for active indicator
- Smooth color transitions

#### Dropdown Menu
```tsx
<div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 backdrop-blur-md border border-gray-700/50 shadow-2xl">
  {/* Dropdown items */}
</div>
```

#### Dropdown Item
```tsx
<Link className="block px-4 py-2.5 text-sm font-light tracking-wider uppercase transition-colors border-b border-gray-700/30 last:border-b-0 text-gray-300 hover:text-orange-400 hover:bg-gray-700/50">
  Item
</Link>
```

#### Dropdown Item (Active)
```tsx
<Link className="block px-4 py-2.5 text-sm font-light tracking-wider uppercase transition-colors text-orange-400 bg-orange-500/10 border-l-2 border-orange-400">
  Item
</Link>
```

### Form Inputs

#### Text Input
```tsx
<input className="w-full bg-gray-900/50 border border-gray-700/30 p-3 font-mono text-white text-sm focus:outline-none focus:border-orange-500 transition-colors" />
```

**Features**:
- Dark background with transparency
- Monospace font for consistency
- Orange focus border
- Smooth transitions

### Logo

```tsx
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
  <span className="text-white text-xs font-light tracking-wider">ID</span>
</div>
```

**Features**:
- Square gradient background
- White text
- Shadow for depth
- Compact size (8x8)

---

## Spacing & Layout

### Container

```tsx
className="container mx-auto px-6"
```

**Max Widths**:
- Content: `max-w-3xl` (768px) - Generator pages
- Full width: `container` (responsive) - Navbar

### Page Layout

```tsx
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <div className="container mx-auto px-6 py-16">
    <div className="max-w-3xl mx-auto">{children}</div>
  </div>
</div>
```

**Features**:
- Full viewport height
- Gradient background
- Centered content with max-width
- Generous vertical padding (py-16)

### Padding Scale

```css
p-6   /* 24px - Info sections, input padding */
p-8   /* 32px - Generator cards (mobile) */
p-12  /* 48px - Generator cards (desktop) */

py-16 /* 64px - Page vertical padding */
```

### Margin Scale

```css
mb-4   /* 16px - Title spacing */
mb-6   /* 24px - Section spacing */
mb-8   /* 32px - Card spacing */
mb-12  /* 48px - Title section spacing */
```

### Gap Scale

```css
gap-2  /* 8px - Icon spacing */
gap-4  /* 16px - Button groups */
```

---

## Animations & Transitions

### Transition Durations

```css
transition-colors          /* 150ms - Text color, border color */
transition-all             /* 150ms - Multi-property */
duration-200              /* 200ms - Button hover states */
```

### Common Animations

#### Hover Color Change
```tsx
className="text-gray-300 hover:text-orange-400 transition-colors"
```

#### Hover Border
```tsx
className="border-gray-600 hover:border-orange-500 transition-all duration-200"
```

#### Hover Background
```tsx
className="hover:bg-orange-500/10 transition-all duration-200"
```

#### Gradient Hover
```tsx
className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
```

#### Dropdown Toggle
```tsx
className="transition-transform duration-200"
// Rotate on open: rotate-180
```

---

## Layout Patterns

### Generator Page Layout
```tsx
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <div className="container mx-auto px-6 py-16">
    <div className="max-w-3xl mx-auto">
      {/* Title Section */}
      <TitleSection title="..." subtitle="..." />
      
      {/* Generator Display */}
      <GeneratorDisplay label="..." generateFn={...} />
      
      {/* Info Section */}
      <InfoSection title="..." info="..." />
    </div>
  </div>
</div>
```

### Navbar Layout
```tsx
<nav className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-700/30 shadow-lg">
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      {/* Desktop Navigation */}
      {/* Mobile Menu Button */}
    </div>
    {/* Mobile Navigation */}
  </div>
</nav>
```

### Generator Display Component
```tsx
<div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12 mb-8">
  <div className="mb-6">
    <label className="text-xs text-gray-500 font-light tracking-wider uppercase mb-2 block">
      {label}
    </label>
    <div className="bg-gray-900/50 border border-gray-700/30 p-6 font-mono text-lg text-white break-all">
      {id}
    </div>
  </div>
  {/* Action Buttons */}
</div>
```

---

## Design Tokens Summary

### Quick Reference

```tsx
// Brand Colors
const colors = {
  primary: 'orange-400',
  primaryGradient: 'from-orange-500 to-orange-600',
  primaryHover: 'from-orange-600 to-orange-700',
  background: 'gray-900',
  surface: 'gray-800',
  surfaceLight: 'gray-800/50',
  border: 'gray-700/50',
  text: 'white',
  textPrimary: 'gray-200',
  textSecondary: 'gray-300',
  textMuted: 'gray-400',
  textLabel: 'gray-500'
};

// Typography
const typography = {
  fontFamily: 'Geist Sans',
  fontMono: 'Geist Mono',
  defaultWeight: 'font-light',
  defaultSize: 'text-sm',
  uppercase: 'uppercase tracking-wider'
};

// Spacing
const spacing = {
  containerPadding: 'px-6',
  pagePadding: 'py-16',
  cardPadding: 'p-8 md:p-12',
  sectionPadding: 'p-6'
};

// Borders
const borders = {
  default: 'border border-gray-700/50',
  light: 'border border-gray-700/30',
  active: 'border-b-2 border-orange-400'
};

// Effects
const effects = {
  backdropBlur: 'backdrop-blur-md',
  backdropBlurLight: 'backdrop-blur-sm',
  shadow: 'shadow-lg',
  shadowXl: 'shadow-2xl'
};
```

---

## Best Practices

### DO ✅

- Use `font-light` for all text
- Use `tracking-wider` with uppercase text
- Use orange-400-600 for interactive elements
- Use semi-transparent backgrounds (30-50% opacity)
- Use backdrop blur for depth
- Use monospace font for ID displays
- Maintain dark theme consistency
- Use smooth transitions (200ms)
- Keep rectangular shapes (no rounded corners)
- Use generous spacing

### DON'T ❌

- Use bold or semibold fonts
- Use rounded corners (`rounded-*`)
- Use bright, saturated colors outside orange palette
- Use small padding/spacing
- Mix light and dark themes
- Overuse shadows
- Use tight letter-spacing on uppercase
- Create busy layouts
- Use opacity > 50% for card backgrounds

---

## Component Architecture

### Modular Components

The design system uses modular, reusable components:

- **TitleSection**: Page titles and subtitles
- **GeneratorDisplay**: ID display with copy/refresh buttons
- **GeneratorDisplayWithInput**: ID display with input fields
- **InfoSection**: Information cards
- **Navbar**: Navigation with dropdowns

Each component is self-contained and follows the design tokens above.

---

## File References

- **Navbar**: `app/components/Navbar.tsx`
- **TitleSection**: `app/components/TitleSection.tsx`
- **GeneratorDisplay**: `app/components/GeneratorDisplay.tsx`
- **GeneratorDisplayWithInput**: `app/components/GeneratorDisplayWithInput.tsx`
- **InfoSection**: `app/components/InfoSection.tsx`
- **Layout**: `app/(generators)/layout.tsx`
- **Global Styles**: `app/globals.css`
- **Root Layout**: `app/layout.tsx`

---

**Last Updated**: January 2025
**Design System Version**: 2.0
**Theme**: Dark Tech-Focused
