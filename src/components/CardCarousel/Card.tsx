import { forwardRef } from "react";
import { Typography } from "@/components";
import styles from "./cardCarousel.styles.module.css";

interface CardProps {
  title: string;
  body: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { title, body },
  ref,
) {
  return (
    <div className={styles.card} ref={ref}>
      <Typography canva type="h3">
        {title}
      </Typography>
      <Typography canva className={styles.valueBodyText}>
        {body}
      </Typography>
    </div>
  );
});
