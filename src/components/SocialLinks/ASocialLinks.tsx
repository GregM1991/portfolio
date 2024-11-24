"use client";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants/links";
import styles from "./socialLinks.styles.module.css";
import { WithoutTooltip } from "./WithoutTooltip";
import { getColorFromPalette } from "@/theme/theme";
import { SocialLinksProps } from "./socialLinks.types";

const variants = {
  initial: {},
  target: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.25,
    },
  },
};

const listChildVariants = {
  initial: {
    opacity: 0,
    x: -10,
  },
  target: {
    opacity: 1,
    x: 0,
    transition: {
      tween: "easeOut",
      duration: 0.5,
    },
  },
};

export function ASocialLinks({
  color,
  size = 25,
  canva = false,
  links = SOCIAL_LINKS,
}: SocialLinksProps) {
  let colorValue: string | undefined;
  if (color) {
    colorValue = getColorFromPalette(color, canva);
  }

  const additiveStyles = {
    "--color": color ? colorValue : "inherit",
  } as React.CSSProperties;

  return (
    <motion.ul
      initial="initial"
      animate="target"
      variants={variants}
      role="list"
      className={styles.wrapper}
      style={additiveStyles}
    >
      {links.map((link) => (
        <motion.li variants={listChildVariants} key={link.key}>
          <WithoutTooltip size={size} link={link} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
