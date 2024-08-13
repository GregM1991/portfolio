import Link from "next/link";
import { VisuallyHidden } from "@/components";
import styles from "./socialLinks.styles.module.css";
import type { SocialLinkProps } from "./socialLinks.types";

export const WithoutTooltip = ({ link, size }: SocialLinkProps) => {
  const Icon = link.icon;
  return (
    <Link
      target="_blank"
      href={link.href}
      className={styles.iconLink}
      {...(link.attributes ? link.attributes : {})}
    >
      <>
        <Icon aria-hidden="true" style={{ fontSize: `${size}px` }} />
        <VisuallyHidden>{link.screenReader}</VisuallyHidden>
      </>
    </Link>
  );
};
