"use client";
import { forwardRef } from "react";
import styles from "./canvaSection.styles.module.css";
import { CanvaPalette } from "@/types/palette";
import { canvaPalette } from "@/theme/theme";
import { motion } from "framer-motion";

interface SectionProps {
  bgColor?: keyof CanvaPalette;
  children: React.ReactNode;
  ariaLabel: string;
  variant?: "hero";
  className?: string;
  initAnimatedConfig?: React.CSSProperties;
}

// TODO: Probably don't need a specific component for this now, just a global
export const CanvaSection = forwardRef<HTMLElement, SectionProps>(
  function CanvaSection(
    {
      children,
      ariaLabel,
      bgColor = "white",
      variant,
      className = "",
      initAnimatedConfig = {},
    },
    ref,
  ) {
    const additiveStyles = {
      "--background-color": canvaPalette[bgColor],
    } as React.CSSProperties;

    return (
      <section
        ref={ref}
        aria-label={ariaLabel}
        style={{ ...additiveStyles, ...initAnimatedConfig }}
        className={`${styles.section} ${
          variant ? styles[variant] : ""
        } ${className}`}
      >
        {children}
      </section>
    );
  },
);

export const AnimatedSection = motion.create(CanvaSection);
