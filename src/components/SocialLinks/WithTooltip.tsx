import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import { VisuallyHidden } from "@/components";
import styles from "./socialLinks.styles.module.css";
import type { SocialLinkProps } from "./socialLinks.types";

export const WithTooltip = ({ link, size }: SocialLinkProps) => {
  const Icon = link.icon;

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild className={styles.iconLink}>
        <Link
          target="_blank"
          href={link.href}
          {...(link.attributes ? link.attributes : {})}
        >
          <>
            <Icon aria-hidden="true" style={{ fontSize: `${size}px` }} />
            <VisuallyHidden>{link.screenReader}</VisuallyHidden>
          </>
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className={styles.tooltipContent} sideOffset={15}>
          {link.linkTooltipText}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};
