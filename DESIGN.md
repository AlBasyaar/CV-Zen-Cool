---
name: Zen'cool Neo-Brutalist
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#516070'
  on-secondary: '#ffffff'
  secondary-container: '#d5e4f8'
  on-secondary-container: '#576676'
  tertiary: '#4e565d'
  on-tertiary: '#ffffff'
  tertiary-container: '#676e76'
  on-tertiary-container: '#eaf1fa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d5e4f8'
  secondary-fixed-dim: '#b9c8db'
  on-secondary-fixed: '#0e1d2b'
  on-secondary-fixed-variant: '#3a4858'
  tertiary-fixed: '#dce3ec'
  tertiary-fixed-dim: '#c0c7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system adopts a **Neo-Brutalist** aesthetic to project a sense of "unshakeable reliability" for a professional AC service. By combining high-contrast colors, raw geometric shapes, and uncompromisingly thick borders, the UI communicates technical expertise and immediate clarity. 

The personality is bold, functional, and "cool." It avoids the softness of traditional SaaS designs in favor of a structural, blueprint-inspired layout that feels as engineered as the HVAC systems it represents. Floating dot grids and plus signs serve as decorative motifs to reinforce a precision-based, technical environment.

## Colors
The palette is built on a foundation of "Technical Blues." 

- **Primary (#2563EB):** Used for primary actions and key branding elements.
- **Accent (#DBEAFE):** Used for large surface areas or secondary buttons to provide a "cooling" visual relief.
- **Highlight (#EFF6FF):** Reserved for subtle section backgrounds to maintain high legibility.
- **Dark/Shadow (#1E3A8A):** The structural anchor. This color is used for all borders, hard shadows, and emphasized text.
- **Text (#0F172A):** A near-black blue for maximum readability without the harshness of pure black.

**Rules:** No gradients or blurs are permitted. All color transitions must be hard-edged.

## Typography
The typography pairing balances expressive character with technical legibility.

- **Syne** is used for headlines. Its ultra-bold weights provide the "loud" editorial feel required by the Neo-Brutalist style.
- **Space Grotesk** is the workhorse for body text and labels. Its monospaced-adjacent proportions complement the technical nature of AC servicing while remaining highly readable in dense lists or technical specs.

Headlines should utilize tight tracking (letter-spacing) to feel dense and impactful.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop and a **Fluid** model for mobile.

- **Grid:** A 12-column grid with 24px gutters.
- **Spacing Rhythm:** All spacing (padding, margins) must be increments of **4px**.
- **Layout Philosophy:** Elements should feel "stacked" or "tiled." Avoid excessive whitespace that feels empty; instead, use geometric "filler" elements like 8x8 dot grids in the primary shadow color to occupy large negative spaces.
- **Borders:** Containers should not bleed to the edge of the screen; they should maintain a clear margin to allow the hard offset shadows to remain visible.

## Elevation & Depth
Depth is created through **Hard Shadows** and **Physical Offsets** rather than light or blur.

- **The Shadow Rule:** Every interactive or elevated element must have a 4px to 6px offset shadow (bottom-right) using the `#1E3A8A` color. The shadow has **0px blur**.
- **The Border Rule:** Every card, button, and input field must have a 2px or 3px solid border in `#1E3A8A`.
- **Interaction:** On hover, elements should use a `translate(-2px, -2px)` transform. Simultaneously, the offset shadow should expand by 2px (e.g., if the shadow was 4px, it becomes 6px) to simulate the element physically lifting off the page.

## Shapes
The shape language is predominantly rectilinear. 

- **Corners:** Use a consistent `rounded-sm` (0.25rem / 4px) radius. This prevents the UI from feeling dangerously sharp while maintaining the rigid Brutalist structure.
- **Decorative Elements:** Use perfect circles for status indicators and 45-degree angled lines for section separators to evoke architectural drawings.
- **Geometric Accents:** Scatter small squares (8px, 16px) and plus signs (+) in the background to reinforce the "engineered" theme.

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, 3px solid `#1E3A8A` border, 4px hard shadow.
- **Secondary:** Background `#DBEAFE`, text `#1E3A8A`, 2px solid `#1E3A8A` border, 4px hard shadow.
- **Hover State:** `translate(-2px, -2px)` with shadow expansion.

### Cards
- **Container:** Background `#FFFFFF`, 3px solid `#1E3A8A` border, 6px hard shadow.
- **Header:** Often separated by a 2px horizontal rule in `#1E3A8A`.

### Input Fields
- **Default:** Background `#FFFFFF`, 2px solid `#1E3A8A` border. No shadow when inactive.
- **Focus:** 4px hard shadow appears immediately; background shifts to `#EFF6FF`.

### Chips & Tags
- Smaller versions of buttons with 2px borders and 2px hard shadows. Use `#DBEAFE` for category tags.

### Lists
- Each list item should be contained within a bounded box or separated by a heavy 2px horizontal line. Use the `label-lg` typography for list headers to maintain the technical manual feel.

### Status Indicators
- Use high-contrast "Success" (Green) and "Alert" (Red) but always apply the 2px solid `#1E3A8A` border to the indicator icon or dot.