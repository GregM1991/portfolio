"use client";
import { useState } from "react";
import { NewTestimonial, Controls } from "@/components";
import { Pagination } from "@/components/CanvaSections/Testimonials/Pagination/Pagination";
import { TESTIMONIALS } from "@/constants/testimonials";
import { AnimatePresence } from "framer-motion";
import styles from "./newTestimonials.styles.module.css";

// TODO: Need to merge these and canva Testimonials so that there's not two..
export function NewTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleControlRightClick = () => {
    if (currentTestimonial === 3) return;
    setCurrentTestimonial(currentTestimonial + 1);
  };

  const handleControlLeftClick = () => {
    if (currentTestimonial === 0) return;
    setCurrentTestimonial(currentTestimonial - 1);
  };

  const handlePaginationClick = (num: number) => {
    setCurrentTestimonial(num);
  };

  const leftDisabled = currentTestimonial === 0;
  const rightDisabled = currentTestimonial === 3;

  return (
    <section
      aria-label="Testimonials about Greg as a person/developer"
      className={styles.section}
    >
      <div className={styles.wrapper}>
        <div className={styles.gridWrapper}>
          <AnimatePresence>
            <NewTestimonial
              key={TESTIMONIALS[currentTestimonial].key}
              img={TESTIMONIALS[currentTestimonial].img}
              imgAltText={TESTIMONIALS[currentTestimonial].imgAltText}
              leadText={TESTIMONIALS[currentTestimonial].leadText}
              bodyText={TESTIMONIALS[currentTestimonial].bodyText}
              name={TESTIMONIALS[currentTestimonial].name}
              role={TESTIMONIALS[currentTestimonial].role}
            />
          </AnimatePresence>
        </div>
        <Pagination
          currentTestimonial={currentTestimonial}
          onClick={handlePaginationClick}
        />
      </div>
      <Controls
        leftDisabled={leftDisabled}
        rightDisabled={rightDisabled}
        onRightClick={handleControlRightClick}
        onLeftClick={handleControlLeftClick}
      />
    </section>
  );
}
