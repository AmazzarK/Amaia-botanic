/**
 * Smooth Scrolling Utility with Lenis
 * 
 * Provides buttery smooth scrolling experience for the luxury brand aesthetic.
 * Integrates with React and Framer Motion for enhanced user experience.
 */

import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

// =============================================================================
// LENIS CONFIGURATION
// =============================================================================

export const lenisConfig = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom luxury easing
  direction: 'vertical' as const,
  gestureDirection: 'vertical' as const,
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false, // Disable on touch devices for better performance
  touchMultiplier: 2,
  infinite: false,
};

// =============================================================================
// GLOBAL LENIS INSTANCE
// =============================================================================

let lenisInstance: Lenis | null = null;

export const initSmoothScrolling = () => {
  if (typeof window === 'undefined') return null;
  
  if (lenisInstance) {
    lenisInstance.destroy();
  }
  
  lenisInstance = new Lenis(lenisConfig);
  
  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  return lenisInstance;
};

export const destroySmoothScrolling = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

export const getLenisInstance = () => lenisInstance;

// =============================================================================
// REACT HOOKS
// =============================================================================

/**
 * Hook to initialize smooth scrolling in a React component
 */
export const useSmoothScrolling = () => {
  const lenisRef = useRef<Lenis | null>(null);
  
  useEffect(() => {
    lenisRef.current = initSmoothScrolling();
    
    return () => {
      destroySmoothScrolling();
    };
  }, []);
  
  return lenisRef.current;
};

/**
 * Hook to scroll to a specific element smoothly
 */
export const useScrollTo = () => {
  const scrollTo = (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (!lenisInstance) return;
    
    const element = typeof target === 'string' ? document.querySelector(target) as HTMLElement : target;
    if (!element) return;
    
    lenisInstance.scrollTo(element, {
      offset: options?.offset || 0,
      duration: options?.duration || 1.2,
      easing: lenisConfig.easing,
    });
  };
  
  const scrollToTop = (options?: { duration?: number }) => {
    if (!lenisInstance) return;
    
    lenisInstance.scrollTo(0, {
      duration: options?.duration || 1.2,
      easing: lenisConfig.easing,
    });
  };
  
  return { scrollTo, scrollToTop };
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Temporarily stop smooth scrolling (useful for modals, drawers)
 */
export const stopSmoothScrolling = () => {
  if (lenisInstance) {
    lenisInstance.stop();
  }
};

/**
 * Resume smooth scrolling
 */
export const startSmoothScrolling = () => {
  if (lenisInstance) {
    lenisInstance.start();
  }
};

/**
 * Get current scroll progress (0 to 1)
 */
export const getScrollProgress = () => {
  if (!lenisInstance) return 0;
  return lenisInstance.progress;
};

export default {
  initSmoothScrolling,
  destroySmoothScrolling,
  useSmoothScrolling,
  useScrollTo,
  stopSmoothScrolling,
  startSmoothScrolling,
  getScrollProgress,
  getLenisInstance,
};