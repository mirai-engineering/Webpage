# Mirai Engineering - Brand Guidelines for Presentations

## 🎨 Color Palette

### Primary Colors

| Color Name | HEX Code | RGB | Usage |
|------------|----------|-----|-------|
| **Primary Purple** | `#6B46C1` | rgb(107, 70, 193) | Main brand color, buttons, headers |
| **Purple Light** | `#8B5CF6` | rgb(139, 92, 246) | Accents, hover states |
| **Purple Dark** | `#553C9A` | rgb(85, 60, 154) | Dark mode, shadows |
| **Vibrant Purple** | `#7C3AED` | rgb(124, 58, 237) | Highlights, CTAs |

### Secondary Colors

| Color Name | HEX Code | RGB | Usage |
|------------|----------|-----|-------|
| **Primary Blue** | `#3B82F6` | rgb(59, 130, 246) | Secondary brand color, links |
| **Blue Dark** | `#1E40AF` | rgb(30, 64, 175) | Dark accents |
| **Blue Light** | `#60A5FA` | rgb(96, 165, 250) | Light accents |

### Neutral Colors

| Color Name | HEX Code | RGB | Usage |
|------------|----------|-----|-------|
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Backgrounds, text on dark |
| **Gray 50** | `#F9FAFB` | rgb(249, 250, 251) | Very light background |
| **Gray 100** | `#F3F4F6` | rgb(243, 244, 246) | Light background |
| **Gray 200** | `#E5E7EB` | rgb(229, 231, 235) | Borders, dividers |
| **Gray 300** | `#D1D5DB` | rgb(209, 213, 219) | Disabled states |
| **Gray 400** | `#9CA3AF` | rgb(156, 163, 175) | Placeholder text |
| **Gray 500** | `#6B7280` | rgb(107, 114, 128) | Secondary text |
| **Gray 600** | `#4B5563` | rgb(75, 85, 99) | Body text |
| **Gray 700** | `#374151` | rgb(55, 65, 81) | Primary text |
| **Gray 800** | `#1F2937` | rgb(31, 41, 55) | Headings |
| **Gray 900** | `#111827` | rgb(17, 24, 39) | Darkest text |

### Status Colors

| Color Name | HEX Code | RGB | Usage |
|------------|----------|-----|-------|
| **Success** | `#10B981` | rgb(16, 185, 129) | Success messages, positive metrics |
| **Warning** | `#F59E0B` | rgb(245, 158, 11) | Warnings, alerts |
| **Error** | `#EF4444` | rgb(239, 68, 68) | Errors, destructive actions |
| **Info** | `#3B82F6` | rgb(59, 130, 246) | Information, tips |

---

## 🎨 Gradients

### Primary Gradient
```
linear-gradient(135deg, #6B46C1 0%, #3B82F6 100%)
```
**Use for:** Headers, hero sections, call-to-action buttons

### Hero Gradient
```
linear-gradient(135deg, #1E40AF 0%, #553C9A 50%, #6B46C1 100%)
```
**Use for:** Full-page hero backgrounds, presentation covers

### Button Gradient
```
linear-gradient(135deg, #6B46C1 0%, #553C9A 100%)
```
**Use for:** Buttons, interactive elements

### Card Overlay
```
linear-gradient(135deg, rgba(107, 70, 193, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)
```
**Use for:** Subtle backgrounds, card overlays

---

## 🖼️ Logos

### Available Logo Files

**Location:** `/assets/images/logos/`

1. **logo.png**
   - Main logo (transparent background)
   - Use for: Dark backgrounds, presentations, web
   - Format: PNG with transparency

2. **logo-white-background.png**
   - Logo with white background
   - Use for: Light backgrounds, documents, favicon
   - Format: PNG

3. **linkedin_logo.png**
   - LinkedIn-specific logo variant
   - Format: PNG

### Logo Usage Guidelines

#### For Presentations:

**Dark Backgrounds:**
- Use `logo.png` (transparent/white logo)
- Recommended background colors:
  - Primary Purple (#6B46C1)
  - Gray 900 (#111827)
  - Hero Gradient

**Light Backgrounds:**
- Use `logo-white-background.png` OR `logo.png` with appropriate colors
- Recommended background colors:
  - White (#FFFFFF)
  - Gray 50 (#F9FAFB)
  - Gray 100 (#F3F4F6)

---

## ✍️ Typography

### Primary Font: **Figtree**

**Google Fonts Import:**
```
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
```

**Font Family:** `'Figtree', system-ui, -apple-system, sans-serif`

**Available Weights:**
- 300 (Light)
- 400 (Regular) - Default body text
- 500 (Medium) - Tags, labels
- 600 (Semi-bold) - Subheadings
- 700 (Bold) - Headings, titles
- 800 (Extra-bold)
- 900 (Black) - Hero titles

### For PowerPoint/Canva:

**If Figtree is not available, use fallbacks:**
1. **Primary Fallback:** System UI fonts (native to OS)
2. **Web Fallback:** Arial, Helvetica
3. **Modern Alternative:** Inter, DM Sans, or Manrope

---

## 📐 Typography Scale for Presentations

### Slide Titles
- **Font:** Figtree Bold (700)
- **Size:** 44-54pt
- **Color:** Primary Purple (#6B46C1) or Gradient
- **Effect:** Can use gradient text effect

### Section Headers
- **Font:** Figtree Semi-bold (600)
- **Size:** 32-40pt
- **Color:** Gray 900 (#111827) or Primary Purple

### Body Text
- **Font:** Figtree Regular (400)
- **Size:** 18-24pt
- **Color:** Gray 700 (#374151)
- **Line Height:** 1.5-1.6

### Captions/Small Text
- **Font:** Figtree Regular (400)
- **Size:** 14-16pt
- **Color:** Gray 600 (#4B5563)

### Emphasis Text
- **Font:** Figtree Semi-bold (600)
- **Color:** Primary Purple (#6B46C1)

---

## 🎯 Presentation Design Recommendations

### Title Slide
- Background: Hero Gradient
- Logo: White/transparent version (logo.png)
- Title Color: White (#FFFFFF)
- Subtitle Color: Light purple tint (#C4B5FD)

### Content Slides
- Background: White (#FFFFFF) or Gray 50 (#F9FAFB)
- Accent Color: Primary Purple (#6B46C1)
- Text: Gray 700-900 for hierarchy

### Section Dividers
- Background: Primary Gradient
- Text: White (#FFFFFF)
- Font: Bold (700)

### Data/Charts
- Primary Color: Primary Purple (#6B46C1)
- Secondary Color: Primary Blue (#3B82F6)
- Success/Positive: Success Green (#10B981)
- Warning: Warning Orange (#F59E0B)

---

## 📊 Quick Reference - Color Swatches

### Copy-Paste for Canva/PowerPoint

**Primary Colors:**
```
#6B46C1 (Purple)
#3B82F6 (Blue)
#FFFFFF (White)
#111827 (Dark)
```

**Gradients (for manual creation):**
```
Left: #6B46C1 → Right: #3B82F6 (135° angle)
```

---

## 🎨 Canva Specific Instructions

1. **Upload Custom Colors:**
   - Go to "Brand Kit" in Canva
   - Add these HEX codes as brand colors:
     - #6B46C1 (Primary)
     - #8B5CF6 (Light)
     - #3B82F6 (Blue)
     - #374151 (Text)
     - #FFFFFF (White)

2. **Upload Fonts:**
   - If using Canva Pro, upload Figtree font files
   - Alternative: Use "Lexend" or "Inter" as closest matches

3. **Upload Logos:**
   - Upload both logo.png and logo-white-background.png
   - Set as brand assets

---

## 💡 PowerPoint Specific Instructions

1. **Theme Colors:**
   - Go to Design → Colors → Customize Colors
   - Set Accent 1: #6B46C1
   - Set Accent 2: #3B82F6
   - Set Dark 1: #111827
   - Set Light 1: #FFFFFF

2. **Fonts:**
   - Install Figtree font on your system
   - Set as theme font: Design → Fonts → Customize Fonts
   - Heading: Figtree Bold
   - Body: Figtree Regular

3. **Gradient Backgrounds:**
   - Format Background → Gradient Fill
   - Type: Linear, Angle 135°
   - Stop 1: #6B46C1 at 0%
   - Stop 2: #3B82F6 at 100%

---

## ✅ Brand Consistency Checklist

- [ ] Use Figtree font (or approved fallback)
- [ ] Primary color is Purple (#6B46C1)
- [ ] Gradients use 135° angle
- [ ] Logo has proper spacing/padding
- [ ] Text hierarchy follows guidelines
- [ ] Colors are from approved palette
- [ ] Dark text (#374151) on light backgrounds
- [ ] White text on dark/gradient backgrounds

---

**Last Updated:** 2025
**Contact:** hello@mirai-engineering.com
**Website:** https://mirai-engineering.com

