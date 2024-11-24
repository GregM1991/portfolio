import { PropsWithChildren } from "react";
import styles from "./banner.styles.module.css";

type BannerProps = {
  type: "warning";
};

export const Banner = ({ type, children }: PropsWithChildren<BannerProps>) => (
  <div className={`${styles.wrapper} ${styles[type]}`}>{children}</div>
);
