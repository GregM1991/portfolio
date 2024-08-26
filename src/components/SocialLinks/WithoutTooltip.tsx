import Link from "next/link";
import { VisuallyHidden } from "@/components";
import styles from "./socialLinks.styles.module.css";
import type { SocialLinkProps } from "./socialLinks.types";
import { TooltipIcon } from "./TooltipIcon";

export const WithoutTooltip = ({ link, size }: SocialLinkProps) => {
  return (
    <Link
      target="_blank"
      href={link.href}
      className={styles.iconLink}
      {...(link.attributes ? link.attributes : {})}
    >
      <>
        <TooltipIcon icon={link.icon} size={size} />
        <VisuallyHidden>{link.screenReader}</VisuallyHidden>
      </>
    </Link>
  );
};
