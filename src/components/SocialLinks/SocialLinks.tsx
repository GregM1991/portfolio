"use client";
import * as Tooltip from "@radix-ui/react-tooltip";
import { SOCIAL_LINKS } from "@/constants/links";
import { getColorFromPalette } from "@/theme/theme";
import styles from "./socialLinks.styles.module.css";
import { WithTooltip } from "./WithTooltip";
import { WithoutTooltip } from "./WithoutTooltip";
import { SocialLinksProps } from "./socialLinks.types";

export function SocialLinks({
  withTooltip = false,
  color,
  size = 25,
  canva = false,
  links = SOCIAL_LINKS
}: SocialLinksProps) {
  // TODO: Gotta be a theme wrapper or something, can't do this everywhere
  let colorValue: string | undefined;
  if (color) {
    colorValue = getColorFromPalette(color, canva);
  }

  const additiveStyles = {
    "--color": color ? colorValue : "inherit"
  } as React.CSSProperties;

  return withTooltip ? (
    <Tooltip.Provider delayDuration={0}>
      <ul role="list" className={styles.wrapper} style={additiveStyles}>
        {links.map((link) => (
          <li key={link.key}>
            <WithTooltip size={size} link={link} />
          </li>
        ))}
      </ul>
    </Tooltip.Provider>
  ) : (
    <ul role="list" className={styles.wrapper} style={additiveStyles}>
      {links.map((link) => (
        <li key={link.key}>
          <WithoutTooltip size={size} link={link} />
        </li>
      ))}
    </ul>
  );
}
