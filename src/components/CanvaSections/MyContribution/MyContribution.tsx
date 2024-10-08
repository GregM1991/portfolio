"use client";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { AnimatedSection, Typography } from "@/components";
import { fadeInVariants } from "@/constants/animation";
import playingPool from "@/assets/images/greg-playing-pool.jpg";
import styles from "./myContribution.styles.module.css";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export function MyContribution() {
  const isMobile = useIsMobile();
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });
  const yScrollPercent = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 10,
    mass: 1.5,
  });
  const translateY = useTransform(
    yScrollPercent,
    [0, 1],
    ["0%", isMobile ? "0%" : "-25%"],
  );

  return (
    <AnimatedSection
      ref={wrapperRef}
      bgColor="secondary"
      ariaLabel="My contribution"
      variants={fadeInVariants}
      viewport={{ once: true }}
      initAnimatedConfig={{ opacity: 0 }}
      initial="initial"
      whileInView="target"
    >
      <span id="my-contribution" className="anchor" />
      <div className={styles.wrapper}>
        <motion.div
          className={styles.imageWrapper}
          variants={fadeInVariants}
          viewport={{ once: true }}
          initial="initial"
          whileInView="target"
          style={{ translateY: isMobile ? "17px" : translateY }}
        >
          <Image
            src={playingPool}
            alt="Greg playing pool, leaning over the table to take a shot."
            sizes="(max-width: 992px) 100vw, 42vw"
            className={styles.playingPool}
          />
        </motion.div>
        <div className={styles.textWrapper}>
          <Typography canva type="h2" color="white" variant="h2Rich">
            My contribution
          </Typography>
          <Typography canva color="white">
            With three years of Software Engineering under my belt, plus a past
            life spent as a Graphic Designer, I can walk the turmultuous line
            between engineering and design.
          </Typography>
          <Typography canva color="white">
            I kicked off my career as a full-stack developer traversing both
            ends of the technology spectrum and I believe this has hugely
            improved my scope of technical understanding. Knowledge of how the
            front and back end interact with each other is of course key to
            defining your structural and architectural needs. But my heart is
            truly with the front end as it allows me to express my creative side
            and build beautiful, articulate software.
          </Typography>
        </div>
      </div>
    </AnimatedSection>
  );
}
