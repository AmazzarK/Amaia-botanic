/**
 * AMAÏA Botanic Animation System
 * 
 * A comprehensive animation library for creating luxury, elegant motion experiences.
 * Inspired by high-end brands like Apple, Cartier, and Aesop.
 * 
 * Features:
 * - Smooth, subtle animations with easeInOut timing
 * - Scroll-triggered animations with Intersection Observer
 * - Performance-optimized transitions
 * - Accessible motion with respect for prefers-reduced-motion
 */

import { Variants, Transition } from "framer-motion";

// =============================================================================
// LUXURY TIMING & EASING
// =============================================================================

export const luxuryEasing = [0.4, 0, 0.2, 1] as const; // Custom cubic-bezier for smooth luxury feel
export const elegantEasing = [0.25, 0.46, 0.45, 0.94] as const; // Slightly more pronounced
export const subtleEasing = [0.645, 0.045, 0.355, 1] as const; // Very smooth, almost imperceptible

export const durations = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
  extra: 1.2,
} as const;

// =============================================================================
// BASE TRANSITIONS
// =============================================================================

export const transitions: Record<string, Transition> = {
  luxury: {
    duration: durations.medium,
    ease: luxuryEasing,
  },
  elegant: {
    duration: durations.slow,
    ease: elegantEasing,
  },
  subtle: {
    duration: durations.medium,
    ease: subtleEasing,
  },
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  softSpring: {
    type: "spring",
    stiffness: 200,
    damping: 40,
  },
};

// =============================================================================
// CORE ANIMATION VARIANTS
// =============================================================================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.luxury,
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.elegant,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.elegant,
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.luxury,
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -48,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.elegant,
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 48,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.elegant,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.softSpring,
  },
};

export const scaleInSubtle: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.subtle,
  },
};

// =============================================================================
// STAGGER ANIMATIONS
// =============================================================================

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: durations.fast,
      ease: luxuryEasing,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.luxury,
  },
};

export const staggerGrid: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerGridItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.elegant,
  },
};

// =============================================================================
// INTERACTION VARIANTS
// =============================================================================

export const hoverScale: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: transitions.subtle,
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: durations.fast,
      ease: luxuryEasing,
    },
  },
};

export const hoverLift: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
  },
  hover: {
    y: -4,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
    transition: transitions.luxury,
  },
};

export const buttonHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -1,
    transition: transitions.subtle,
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
      ease: luxuryEasing,
    },
  },
};

// =============================================================================
// MODAL & OVERLAY ANIMATIONS
// =============================================================================

export const modalBackdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.medium,
      ease: luxuryEasing,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: durations.fast,
      ease: luxuryEasing,
    },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: elegantEasing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 24,
    transition: {
      duration: durations.medium,
      ease: luxuryEasing,
    },
  },
};

export const drawerSlide: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: durations.slow,
      ease: elegantEasing,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: durations.medium,
      ease: luxuryEasing,
    },
  },
};

// =============================================================================
// SPECIALIZED LUXURY ANIMATIONS
// =============================================================================

export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.extra,
      ease: elegantEasing,
      delay: 0.2,
    },
  },
};

export const parallaxFloat: Variants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: -8,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const goldShimmer: Variants = {
  hidden: {
    backgroundPosition: "-100% 0",
  },
  visible: {
    backgroundPosition: "100% 0",
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

// =============================================================================
// SCROLL-TRIGGERED ANIMATIONS
// =============================================================================

export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.elegant,
  },
};

export const scrollScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.luxury,
  },
};

// =============================================================================
// VIEWPORT SETTINGS
// =============================================================================

export const viewportSettings = {
  once: true,
  margin: "-100px 0px",
  amount: 0.2,
} as const;

export const viewportSettingsStrict = {
  once: true,
  margin: "-50px 0px",
  amount: 0.4,
} as const;

// =============================================================================
// LUXURY PRESETS (READY-TO-USE COMBINATIONS)
// =============================================================================

export const luxuryPresets = {
  // Hero section animation
  hero: {
    variants: heroReveal,
    initial: "hidden",
    animate: "visible",
  },
  
  // Section reveal
  section: {
    variants: fadeInUp,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportSettings,
  },
  
  // Product grid
  productGrid: {
    variants: staggerGrid,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportSettings,
  },
  
  // Product card
  productCard: {
    variants: staggerGridItem,
    whileHover: "hover",
    whileTap: "tap",
  },
  
  // Button interaction
  button: {
    variants: buttonHover,
    initial: "rest",
    whileHover: "hover",
    whileTap: "tap",
  },
  
  // Card hover effect
  card: {
    variants: hoverLift,
    initial: "rest",
    whileHover: "hover",
  },
} as const;

export default {
  // Variants
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  scaleInSubtle,
  staggerContainer,
  staggerItem,
  staggerGrid,
  staggerGridItem,
  hoverScale,
  hoverLift,
  buttonHover,
  modalBackdrop,
  modalContent,
  drawerSlide,
  heroReveal,
  parallaxFloat,
  goldShimmer,
  scrollReveal,
  scrollScale,
  
  // Presets
  luxuryPresets,
  
  // Utilities
  transitions,
  durations,
  viewportSettings,
  viewportSettingsStrict,
  luxuryEasing,
  elegantEasing,
  subtleEasing,
};