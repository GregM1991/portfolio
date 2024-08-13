import { CanvaPalette, Palette } from "@/types/palette";
import { SocialLink } from "@/types/links";

export interface SocialLinkProps {
  link: SocialLink;
  size: number;
}

export interface SocialLinksProps {
  withTooltip?: boolean;
  color?: keyof Palette | keyof CanvaPalette;
  size?: number;
  canva?: boolean;
  links?: SocialLink[];
}
