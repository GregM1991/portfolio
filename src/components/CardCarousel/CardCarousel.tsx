"use client";
import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { values } from "@/constants/values";
import { fadeInUpVariants } from "@/constants/animation";
import { Card } from "./Card";
import { FAB } from "@/components";
import { motion } from "framer-motion";
import styles from "./cardCarousel.styles.module.css";

export function CardCarousel() {
  const [transformValue, setTransformValue] = React.useState(0);
  const style = {
    "--carousel-transform": `translateX(${transformValue}%)`,
  } as React.CSSProperties;

  function onClickRight() {
    if (transformValue < -80) return;
    setTransformValue((transformValue) => transformValue - 16.6667);
  }

  function onClickLeft() {
    if (transformValue >= 0) return;
    setTransformValue((transformValue) => transformValue + 16.6667);
  }

  return (
    <motion.div
      variants={fadeInUpVariants}
      viewport={{ once: true }}
      initial="initial"
      whileInView="target"
      className={styles.wrapper}
    >
      <div className={styles.carouselContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.carouselSlider} style={style}>
            {values.map((value) => (
              <Card title={value.title} body={value.body} key={value.key} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <FAB
          icon={<GoChevronLeft />}
          ariaLabel="left arrow icon"
          disabled={transformValue >= 0}
          className={styles.button}
          onClick={onClickLeft}
        />
        <FAB
          icon={<GoChevronRight />}
          ariaLabel="right arrow icon"
          disabled={transformValue < -80}
          className={styles.button}
          onClick={onClickRight}
        />
      </div>
    </motion.div>
  );
}
