"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./gradient.styles.module.css";
import {
  createBRadiusString,
  randomIntFromInterval,
  randomNumArray,
} from "./aGradient.helpers";

export function AGradient() {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
    mass: 1.5,
  });

  const yTo = [
    `${randomIntFromInterval(-50, 25)}%`,
    `${randomIntFromInterval(60, 100)}%`,
  ];

  const gradX = useTransform(springScroll, [0, 0.5, 1], randomNumArray(3));
  const gradY = useTransform(springScroll, [0, 0.5, 1], randomNumArray(3));
  const y = useTransform(springScroll, [0, 1], yTo);
  const borderRadius = useTransform(
    springScroll,
    [0, 1],
    [createBRadiusString(), createBRadiusString()],
  );
  const size = useTransform(springScroll, [0, 1], ["500px", "1200px"]);

  const insideGradientValue = useTransform(
    springScroll,
    [0, 1],
    ["#7BC7B3", "#ff9c9c"],
  );
  const middleGradientValue = useTransform(
    springScroll,
    [0, 1],
    ["#aaffaa", "#ffdb7f"],
  );
  const outsideGradientValue = useTransform(
    springScroll,
    [0, 1],
    ["#ecffd3", "#a5fda4"],
  );
  const gradient = useMotionTemplate`radial-gradient(at ${gradX}% ${gradY}%, ${insideGradientValue} 10%, ${middleGradientValue} 40%, ${outsideGradientValue})`;

  return (
    <motion.div
      layout
      style={{
        background: gradient,
        width: size,
        height: size,
        borderRadius: borderRadius,
        filter: "blur(75px)",
        y,
        x: "-75%",
      }}
      className={styles.gradient}
    />
  );
}
