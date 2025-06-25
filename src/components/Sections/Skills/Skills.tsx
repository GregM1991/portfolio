"use client";
import {
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiNextdotjs,
  SiFramer,
  SiSvelte,
  SiPrismic,
  SiGraphql,
  SiSharp,
  SiDotnet,
  SiPostgresql,
  SiMongodb
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
          targetProps={{ transition: { staggerChildren: 0.1 } }}
          initial="initial"
          viewport={{ once: true }}
          isWhileInView={true}
        >
          <motion.span variants={fadeInUpVariantsB} title="TypeScript">
            <SiTypescript />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="React">
            <SiReact />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="Next.js">
            <SiNextdotjs />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="Node.js">
            <SiNodedotjs />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="C#">
            <SiSharp />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title=".NET">
            <SiDotnet />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="GraphQL">
            <SiGraphql />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="PostgreSQL">
            <SiPostgresql />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="MongoDB">
            <SiMongodb />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="Redux">
            <SiRedux />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="Svelte">
            <SiSvelte />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="Framer Motion">
            <SiFramer />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="HTML5">
            <SiHtml5 />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="CSS3">
            <SiCss3 />
          </motion.span>
          <motion.span variants={fadeInUpVariantsB} title="CSS3">
            <SiPrismic />
          </motion.span>
        </AnimateChildren>
      </div>
    </section>
  );
}
