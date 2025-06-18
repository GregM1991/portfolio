"use client";
import { useState } from "react";
import { CanvaSection, Controls } from "@/components";
import { Testimonial } from "./Testimonial/Testimonial";
import { Pagination } from "./Pagination/Pagination";
import { TESTIMONIALS } from "@/constants/testimonials";
import { fadeInUpVariants } from "@/constants/animation";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./testimonials.styles.module.css";

interface TestimonialsProps {
  variant?: "home" | "canva";
}

export function Testimonials({ variant = "home" }: TestimonialsProps) {
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

  const ariaLabel = "Testimonials about Greg as a person/developer";

  if (variant === "canva") {
    return (
      <CanvaSection
        ariaLabel={ariaLabel}
        className={styles.canvaWrapper}
      >
        <span id="testimonials" className="anchor" />
        <motion.div
          className={`${styles.canvaContentWrapper} container canva`}
          variants={fadeInUpVariants}
          viewport={{ once: true }}
          initial="initial"
          whileInView="target"
        >
          <div className={styles.gridWrapper}>
            <AnimatePresence>
              <Testimonial
                key={TESTIMONIALS[currentTestimonial].key}
                img={TESTIMONIALS[currentTestimonial].img}
                imgAltText={TESTIMONIALS[currentTestimonial].imgAltText}
                leadText={TESTIMONIALS[currentTestimonial].leadText}
                bodyText={TESTIMONIALS[currentTestimonial].bodyText}
                name={TESTIMONIALS[currentTestimonial].name}
                role={TESTIMONIALS[currentTestimonial].role}
                variant="canva"
              />
            </AnimatePresence>
          </div>
          <Pagination
            currentTestimonial={currentTestimonial}
            onClick={handlePaginationClick}
            variant="canva"
          />
        </motion.div>
        <Controls
          leftDisabled={leftDisabled}
          rightDisabled={rightDisabled}
          onRightClick={handleControlRightClick}
          onLeftClick={handleControlLeftClick}
        />
      </CanvaSection>
    );
  }

  return (
    <section
      aria-label={ariaLabel}
      className={styles.homeSection}
    >
      <div className={styles.homeWrapper}>
        <div className={styles.gridWrapper}>
          <AnimatePresence>
            <Testimonial
              key={TESTIMONIALS[currentTestimonial].key}
              img={TESTIMONIALS[currentTestimonial].img}
              imgAltText={TESTIMONIALS[currentTestimonial].imgAltText}
              leadText={TESTIMONIALS[currentTestimonial].leadText}
              bodyText={TESTIMONIALS[currentTestimonial].bodyText}
              name={TESTIMONIALS[currentTestimonial].name}
              role={TESTIMONIALS[currentTestimonial].role}
              variant="home"
            />
          </AnimatePresence>
        </div>
        <Pagination
          currentTestimonial={currentTestimonial}
          onClick={handlePaginationClick}
          variant="home"
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