import { isValidElement } from "react";
import Link from "next/link";
import { VisuallyHidden } from "@/components";
import styles from "./socialLinks.styles.module.css";
import type { SocialLinkProps } from "./socialLinks.types";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType | JSX.Element;
  size: number;
}

const Icon = ({ icon, size }: IconProps) => {
  if (typeof icon === "function") {
    const Icon = icon;
    return <Icon aria-hidden="true" style={{ fontSize: `${size}px` }} />;
  } else if (isValidElement(icon)) {
    return icon;
  }
  return null;
};

export const WithoutTooltip = ({ link, size }: SocialLinkProps) => {
  return (
    <Link
      target="_blank"
      href={link.href}
      className={styles.iconLink}
      {...(link.attributes ? link.attributes : {})}
    >
      <>
        <Icon icon={link.icon} size={size} />
        <VisuallyHidden>{link.screenReader}</VisuallyHidden>
      </>
    </Link>
  );
};
