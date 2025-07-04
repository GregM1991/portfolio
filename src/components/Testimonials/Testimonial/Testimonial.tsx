"use client";
import { Typography } from "@/components";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import styles from "./testimonial.styles.module.css";

interface TestimonialProps {
  img: StaticImageData;
  imgAltText: string;
  leadText: string;
  bodyText: string;
  name: string;
  role: string;
  variant?: "home" | "canva";
}

export function Testimonial({
  img,
  imgAltText,
  leadText,
  bodyText,
  name,
  role,
  variant = "home",
}: TestimonialProps) {
  return (
    <motion.div
      className={styles.blockQuoteWrapper}
      transition={{ duration: 0.15 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={img}
          alt={imgAltText}
          className={styles.img}
          sizes="(max-width: 992px) 50vw, 34vw"
        />
      </div>
      <blockquote className={styles.blockquote}>
        {variant === "canva" ? (
          <Typography canva className={styles.blockquoteLead}>
            {leadText}
          </Typography>
        ) : (
          <Typography
            type="span"
            size="xl"
            font="arvo"
            color="gray-dark"
            className={styles.blockquoteLead}
          >
            {leadText}
          </Typography>
        )}
        <Typography canva={variant === "canva"}>{bodyText}</Typography>
        <footer className={styles.footer}>
          <cite className={styles.cite}>{name}</cite>
          <small>{role}</small>
        </footer>
      </blockquote>
    </motion.div>
  );
}