# AMAÏA Botanic - Luxury Design System & Animation Guide

## 🎨 Overview

This document describes the comprehensive luxury design system and animation framework implemented for AMAÏA Botanic. The design is inspired by high-end brands like Apple, Cartier, Aesop, and Hermès, focusing on elegance, sophistication, and botanical luxury.

## 🚀 New Features Added

### 1. **Premium Animation System** (`src/lib/animations.ts`)

A comprehensive motion library built with Framer Motion featuring:

#### Core Animation Variants
- `fadeIn` - Subtle opacity transitions
- `fadeInUp/Down` - Directional fade animations
- `slideUp/InLeft/InRight` - Smooth sliding motions
- `scaleIn/scaleInSubtle` - Gentle scaling effects
- `staggerContainer/staggerItem` - Sequential reveal animations
- `staggerGrid/staggerGridItem` - Grid-based staggered animations

#### Interaction Variants
- `hoverScale` - Micro-interactions for cards
- `hoverLift` - Elevation effects on hover
- `buttonHover` - Sophisticated button interactions
- `modalBackdrop/Content` - Modal entrance animations
- `drawerSlide` - Smooth drawer transitions

#### Luxury-Specific Animations
- `heroReveal` - Premium hero section animation
- `parallaxFloat` - Subtle floating motion
- `goldShimmer` - Elegant shimmer effects
- `scrollReveal/scrollScale` - Scroll-triggered animations

#### Ready-to-Use Presets
```typescript
import { luxuryPresets } from "@/lib/animations";

// Usage examples:
<motion.div {...luxuryPresets.hero}>Hero Content</motion.div>
<motion.div {...luxuryPresets.section}>Section Content</motion.div>
<motion.div {...luxuryPresets.productCard}>Product Card</motion.div>
<motion.button {...luxuryPresets.button}>Button</motion.button>
```

### 2. **Smooth Scrolling System** (`src/lib/smoothScrolling.ts`)

Lenis-powered smooth scrolling with:
- Luxury-tuned easing curves
- React hooks for easy integration
- Utility functions for programmatic scrolling
- Performance optimizations for mobile

#### Usage
```typescript
import { useSmoothScrolling, useScrollTo } from "@/lib/smoothScrolling";

// Initialize smooth scrolling
useSmoothScrolling();

// Programmatic scrolling
const { scrollTo, scrollToTop } = useScrollTo();
scrollTo("#target-element", { duration: 1.2, offset: -100 });
```

### 3. **Enhanced Design Tokens**

#### Color Palette
```css
/* Primary botanical colors */
--botanical-sage: 100 22% 42%          /* Refined sage green */
--botanical-gold: 45 88% 58%           /* Elegant gold accent */
--botanical-cream: 38 40% 96%          /* Soft cream background */

/* New luxury additions */
--botanical-pearl: 0 0% 98%            /* Pure pearl white */
--botanical-charcoal: 30 8% 25%        /* Sophisticated charcoal */
--botanical-rose-gold: 15 75% 65%      /* Warm rose gold */
--botanical-champagne: 48 45% 88%      /* Champagne highlights */
```

#### Typography System
```css
/* Luxury font stacks */
font-family: "Playfair Display", Georgia, serif    /* Headlines */
font-family: "Inter", -apple-system, sans-serif    /* Body text */
font-family: "Cormorant Garamond", serif          /* Luxury accents */
```

#### Shadow System
```css
--shadow-soft: 0 2px 12px rgba(0, 0, 0, 0.04)
--shadow-elegant: 0 4px 20px rgba(0, 0, 0, 0.06)
--shadow-luxury: 0 8px 32px rgba(0, 0, 0, 0.08)
--shadow-luxury-hover: 0 12px 40px rgba(0, 0, 0, 0.12)
--shadow-glow: 0 0 24px hsl(45 88% 58% / 0.2)
```

### 4. **Component-Level Utility Classes**

#### Luxury Button Styles
```css
.btn-luxury           /* Primary botanical gradient button */
.btn-luxury-outline   /* Outlined sage button */
.btn-luxury-gold      /* Gold accent button */
```

#### Interactive Elements
```css
.card-luxury          /* Premium card with hover effects */
.text-shimmer         /* Gold shimmer text effect */
.divider-luxury       /* Elegant gradient divider */
.focus-luxury         /* Accessible focus styling */
.loading-luxury       /* Sophisticated loading states */
```

## 🎭 Animation Implementation Examples

### HomePage Enhancements
- **Hero Section**: Parallax background with staggered text reveals
- **Feature Cards**: Icon hover rotations with scale effects
- **Product Grid**: Staggered appearance with image scale-on-hover
- **CTA Section**: Card-level hover lift with button interactions

### Navigation Enhancements
- **Logo**: Rotation and scale on hover
- **Menu Items**: Smooth layout animations for active states
- **Mobile Menu**: Slide-down with staggered item reveals
- **Cart Drawer**: Improved transitions (implemented via CartDrawer)

### Performance Optimizations
- **GPU Acceleration**: Transform-based animations
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Efficient Triggers**: `whileInView` with optimized viewport settings
- **Memory Management**: Proper cleanup of animation states

## 📱 Responsive Considerations

### Mobile Optimizations
- Reduced animation complexity on touch devices
- Disabled smooth scrolling on mobile for performance
- Touch-friendly interaction areas (44px minimum)
- Simplified animations for slower devices

### Desktop Enhancements
- Full animation suite enabled
- Hover states and micro-interactions
- Smooth scrolling for luxury feel
- Advanced parallax and float effects

## 🎯 Brand Alignment

### Luxury Positioning
- **Timing**: 0.4-0.8s durations for elegance
- **Easing**: Custom cubic-bezier curves for sophistication
- **Subtlety**: Micro-interactions rather than flashy effects
- **Consistency**: Unified animation language across components

### Botanical Theme
- **Nature-Inspired**: Gentle, organic motion patterns
- **Growth Metaphors**: Slide-up animations suggesting botanical growth
- **Harmony**: Staggered animations mimicking natural rhythms
- **Zen Philosophy**: Calm, peaceful interaction feedback

## 🔧 Extension Guide

### Adding New Animations
1. Define variants in `src/lib/animations.ts`
2. Add to luxury presets if commonly used
3. Import and apply to components
4. Test on multiple devices and connection speeds

### Custom Animation Example
```typescript
// Define new variant
export const customFade: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: luxuryEasing }
  }
};

// Use in component
<motion.div
  variants={customFade}
  initial="hidden"
  whileInView="visible"
  viewport={viewportSettings}
>
  Content
</motion.div>
```

## 🎨 Design Philosophy

### Luxury Principles
1. **Less is More**: Subtle, refined animations over flashy effects
2. **Purposeful Motion**: Every animation serves a clear UX purpose
3. **Emotional Design**: Animations that evoke calmness and luxury
4. **Premium Feel**: High-quality, smooth, consistent motion language

### Technical Excellence
1. **Performance First**: 60fps animations on all devices
2. **Accessibility**: Respect for motion preferences
3. **Progressive Enhancement**: Graceful fallbacks for older devices
4. **Maintainability**: Well-organized, reusable animation system

## 🚀 Future Enhancements

### Planned Additions
- [ ] Advanced parallax scrolling effects
- [ ] Intersection Observer optimizations
- [ ] 3D CSS transform animations
- [ ] Page transition animations
- [ ] Loading sequence choreography
- [ ] Cart animation micro-interactions

### Performance Monitoring
- Monitor Core Web Vitals impact
- A/B test animation complexity
- User engagement metrics with animations
- Device-specific performance profiling

---

**AMAÏA Botanic Design System v2.0**  
*Crafted with love in Paris, inspired by botanical luxury* 🌿✨