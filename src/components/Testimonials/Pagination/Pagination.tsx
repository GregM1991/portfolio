import styles from "./pagination.styles.module.css";
import { range } from "lodash";

const TOTAL_TESTIMONIALS = 4; 

export interface PaginationProps {
  currentTestimonial: number;
  onClick: (num: number) => void;
  variant?: "home" | "canva";
}

export const Pagination = ({
  currentTestimonial,
  onClick,
  variant = "home"
}: PaginationProps) => (
  <div className={variant === "canva" ? "canva" : ""}>
    {range(TOTAL_TESTIMONIALS).map((num) => (
      <button
        key={num}
        aria-label={`pagination button ${num + 1}`}
        className={`${styles.button} ${
          currentTestimonial === num ? styles.active : null
        }`}
        onClick={() => onClick(num)}
      />
    ))}
  </div>
);