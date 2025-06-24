"use client";
import dynamic from "next/dynamic";
import {
  AnimatedSection,
  Typography,
  Button,
} from "@/components";

const DynamicContactMeModal = dynamic(
  () => import("@/components").then((mod) => mod.ContactMeModal),
  {
    loading: () => <Button variant="secondary" size="large" fluid disabled>Loading...</Button>,
  },
);
import { fadeInVariants } from "@/constants/animation";
import Typewriter from "./Typewriter";
import styles from "./beHired.styles.module.css";

export function BeHired() {
  return (
    <AnimatedSection
      bgColor="secondary"
      ariaLabel="A section posing a question for Greg to be hired"
      className={styles.wrapper}
      variants={fadeInVariants}
      viewport={{ once: true }}
      initial="initial"
      whileInView="target"
      initAnimatedConfig={{ opacity: 0 }}
    >
      <span id="be-hired" className="anchor" />
      <div id="be-hired" className={`${styles.content} container`}>
        <Typewriter />
        <Typography canva color="white" className={styles.breakoutLine}>
          Don&apos;t take too long to think it over!
        </Typography>
        <Typography canva color="white">
          Hopefully I&apos;ve sold you on the Greg Life and piqued your interest
          enough to warrant getting in touch. Reach me below, I&apos;m always
          keen for a chat.
        </Typography>
        <DynamicContactMeModal
          trigger={
            <Button
              aria-controls="radix-:R1mj9:"
              variant="secondary"
              size="large"
              fluid
              className={styles.button}
            >
              Contact now
            </Button>
          }
        />
      </div>
    </AnimatedSection>
  );
}
