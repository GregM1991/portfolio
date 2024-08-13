"use client";
import { AnimateChildren, AnimatedTypography, Typography } from "@/components";
import { fadeInUpVariantsB } from "@/constants/animation";
import { TechContentProps } from "./types";
import styles from "./contentBlocks.styles.module.css";
import { motion } from "framer-motion";

export function TechContentBlock({
  headingProps,
  techStack,
  sectionAriaLabel,
}: TechContentProps) {
  const Wrapper = sectionAriaLabel ? "section" : "div";
  return (
    <Wrapper aria-label={sectionAriaLabel}>
      <AnimatedTypography
        variants={fadeInUpVariantsB}
        initial="initial"
        whileInView="target"
        viewport={{ once: true }}
        className={styles.opacityForAnimation}
        {...headingProps}
      >
        Tech Stack
      </AnimatedTypography>
      <AnimateChildren
        targetProps={{ transition: { staggerChildren: 0.125 } }}
        initial="initial"
        isWhileInView={true}
        viewport={{ once: true }}
      >
        <motion.ul role="list" className={styles.tech}>
          {techStack.map((tech, index) => (
            <motion.li variants={fadeInUpVariantsB} key={`${index}-${tech}`}>
              <Typography type="span">
                <span className={styles.liDecoration}>○</span>
                {tech}
              </Typography>
            </motion.li>
          ))}
        </motion.ul>
      </AnimateChildren>
    </Wrapper>
  );
}
