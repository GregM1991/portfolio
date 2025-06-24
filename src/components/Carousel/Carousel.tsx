"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimatedImage, Controls, Typography } from "@/components";
import { Screen } from "@/types/content";
import styles from "./carousel.styles.module.css";
import clsx from "clsx";

interface CarouselProps {
  items: Screen[];
  className?: string;
}

export function Carousel({ items, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = clsx([styles.wrapper, className]);

  // Early return for empty items
  if (!items || items.length === 0) {
    return (
      <div className={classes}>
        <div className={styles.imageWrapper}>
          <Typography type="span">No items to display</Typography>
        </div>
      </div>
    );
  }

  // Ensure currentIndex is within bounds
  const safeIndex = Math.max(0, Math.min(currentIndex, items.length - 1));
  const indexItem = items[safeIndex];

  const handleNext = () => {
    if (currentIndex === items.length - 1) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const leftDisabled = currentIndex === 0;
  const rightDisabled = currentIndex === items.length - 1;

  return (
    <div className={classes}>
      <div className={styles.imageWrapper}>
        <AnimatePresence>
          <AnimatedImage
            key={indexItem.key}
            src={indexItem.src}
            alt={indexItem.alt}
            className={styles.imageStyle}
            fill
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {indexItem.imageDescription && (
            <span className={styles.description}>
              <Typography type="span">{indexItem.imageDescription}</Typography>
            </span>
          )}
        </AnimatePresence>
      </div>
      <Controls
        onRightClick={handleNext}
        onLeftClick={handlePrevious}
        leftDisabled={leftDisabled}
        rightDisabled={rightDisabled}
      />
    </div>
  );
}
