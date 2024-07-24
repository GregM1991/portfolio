"use client";
import {
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import { motion } from "framer-motion";
import { AnimateChildren, AnimatedTypography, Typography } from "@/components";
import { SKILLS_COPY } from "@/constants/homepageContent";
import { fadeInUpVariantsB } from "@/constants/animation";
import styles from "./skills.styles.module.css";

export function Skills() {
  return (
    <section aria-label="A section showcasing Greg's skills">
      <div className={styles.wrapper}>
        <AnimatedTypography
          variants={fadeInUpVariantsB}
          initial="initial"
          whileInView="target"
          viewport={{ once: true }}
          color="primary"
          type="h2"
          size="xl"
        >
          {SKILLS_COPY.title}
        </AnimatedTypography>
        <div className="doubleColumn">
          <Typography>{SKILLS_COPY.body}</Typography>
        </div>
        <AnimateChildren
          className={styles.iconsWrapper}
          targetProps={{ transition: { staggerChildren: 0.125 } }}
          initial="initial"
          viewport={{ once: true }}
          isWhileInView={true}
        >
          <motion.span variants={fadeInUpVariantsB}>
            <SiHtml5 />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB}>
            <SiCss3 />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB}>
            <SiTypescript />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB}>
            <SiReact />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB}>
            <SiNodedotjs />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB}>
            <SiRedux />
          </motion.span>
        </AnimateChildren>
      </div>
    </section>
  );
}
