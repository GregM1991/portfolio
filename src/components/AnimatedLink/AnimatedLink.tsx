import Link from "next/link";
import styles from "./animatedLink.styles.module.css";
import { PropsWithChildren } from "react";

export const AnimatedLink = ({
  href,
  children
}: PropsWithChildren<{ href: string }>) => (
  <Link href={href} className={styles["animated-link"]}>
    <span className={styles["highlight"]} />
    <span className={styles.text}>{children}</span>
  </Link>
);
