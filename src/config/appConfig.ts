/**
 * Application Configuration
 * Centralized location for magic numbers and configuration constants
 */

export const APP_CONFIG = {
  // Testimonials Configuration
  testimonials: {
    totalCount: 4,
    maxIndex: 3, // totalCount - 1
    minIndex: 0,
    autoPlayDelay: 5000, // ms
  },

  // Contact Information
  contact: {
    email: "gregm31@live.com",
    phone: "+61 407 670 950",
    portfolioRepo: "https://github.com/GregM1991/portfolio",
    socialLinks: {
      github: "https://github.com/GregM1991",
      linkedin: "https://www.linkedin.com/in/greg-martin-76688678/",
      instagram: "https://www.instagram.com/grillustration_/",
      resume: "/greg-martin-resume-241124.pdf"
    }
  },

  // Animation Configuration
  animation: {
    defaultDuration: 0.5,
    defaultEase: "easeInOut",
    staggerDelay: 0.1,
    hoverScale: 1.05,
    // Framer Motion cubic bezier
    cubicBezier: [0.4, 0, 0.2, 1] as [number, number, number, number],
    
    // Legacy animation constants (for gradual migration)
    legacy: {
      cubicBezier: [0.29, 0.13, 0.3, 1] as [number, number, number, number],
      duration: 1.5,
      translateOffset: 50,
      smallTranslateOffset: 15
    },
    
    // Component-specific animation configs
    carousel: {
      transitionDuration: 0.5
    },
    socialLinks: {
      delayChildren: 0.8,
      staggerChildren: 0.25,
      translateX: -10,
      iconSize: 25
    },
    typewriter: {
      initialDelay: 2,
      staggerChildren: 0.1,
      duration: 1.5
    },
    gregLife: {
      imageTranslateOffset: -65,
      imageYOffset: 65,
      imageDelay: 0.25,
      doodleDelay: 1.5,
      doodleDuration: 0.5,
      doodleInitialScale: 0.5
    },
    randomBorderRadius: {
      minPercentage: 25,
      maxPercentage: 100,
      arrayLength: 4
    }
  },

  // Layout Configuration
  layout: {
    mobileBreakpoint: 768,
    tabletBreakpoint: 992,
    desktopBreakpoint: 1200,
    maxContentWidth: 1400,
    headerHeight: 80,
  },

  // Image Configuration
  images: {
    defaultQuality: 85,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  },

  // Performance Configuration
  performance: {
    intersectionObserverThreshold: 0.1,
    intersectionObserverRootMargin: "50px",
    debounceDelay: 300,
    throttleDelay: 16, // ~60fps
  },

  // Navigation Configuration
  navigation: {
    scrollBehavior: "smooth" as ScrollBehavior,
    scrollOffset: 80, // Account for fixed header
    keyboardDelay: 150,
  },

  // Network Configuration
  network: {
    retryAttempts: 3,
    retryDelay: 1000,
    timeoutDuration: 10000,
  },

  // File Size Limits
  files: {
    maxImageSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ["image/jpeg", "image/png", "image/webp"],
  },

  // UI Configuration
  ui: {
    tooltip: {
      sideOffset: 15
    },
    cardCarousel: {
      maxTransform: -80,
      transformStep: 16.6667
    }
  },
} as const;

// Type helpers for configuration
export type AppConfig = typeof APP_CONFIG;
export type TestimonialsConfig = AppConfig["testimonials"];
export type AnimationConfig = AppConfig["animation"];
export type LayoutConfig = AppConfig["layout"];