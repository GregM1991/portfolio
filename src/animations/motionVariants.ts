import { Variants } from "framer-motion";
import { APP_CONFIG } from "@/config/appConfig";

const { cubicBezier, defaultDuration, hoverScale, staggerDelay } =
  APP_CONFIG.animation;

/**
 * Consolidated Animation Variants
 * Single source of truth for all motion animations
 */

// Base Fade Animations
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  target: { opacity: 1 },
  exit: { opacity: 0 }
};

export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  target: {
    opacity: 1,
    transition: { duration: defaultDuration, ease: cubicBezier }
  }
};

// Slide Animations
export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  target: {
    opacity: 1,
    y: 0,
    transition: { duration: defaultDuration, ease: cubicBezier }
  }
};

export const slideDownVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  target: {
    opacity: 1,
    y: 0,
    transition: { duration: defaultDuration, ease: cubicBezier }
  }
};

export const slideLeftVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  target: {
    opacity: 1,
    x: 0,
    transition: { duration: defaultDuration, ease: cubicBezier }
  }
};

export const slideRightVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  target: {
    opacity: 1,
    x: 0,
    transition: { duration: defaultDuration, ease: cubicBezier }
  }
};

// Scale Animations
export const scaleVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  target: {
    opacity: 1,
    scale: 1,
    transition: { duration: defaultDuration, ease: cubicBezier }
  },
  hover: {
    scale: hoverScale,
    transition: { duration: 0.2 }
  }
};

// Staggered Container Animations
export const staggerContainer: Variants = {
  initial: {},
  target: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1
    }
  }
};

// Legacy Support (maintain backward compatibility)
export const fadeInUpVariants = slideUpVariants;
export const fadeInUpVariantsB = slideUpVariants;

// Animation Presets for Common Use Cases
export const ANIMATION_PRESETS = {
  // Card hover effect
  cardHover: {
    whileHover: {
      scale: hoverScale,
      transition: { duration: 0.2 }
    }
  },

  // Button press effect
  buttonPress: {
    whileTap: { scale: 0.95 }
  },

  // Page transition
  pageTransition: {
    initial: "initial",
    animate: "target",
    exit: "exit",
    variants: slideUpVariants
  },

  // Modal backdrop
  modalBackdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  },

  // Loading spinner
  spinner: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }
} as const;
