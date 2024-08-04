import type { Paragraph } from "@/types/content";
import type { TypographyProps } from "@/components/Typography/types";
import type { StaticImageData } from "next/image";
import { SocialLink } from "@/types/links";

export interface GenericContentBlockProps {
  heading: string;
  headingProps?: Omit<TypographyProps, "children">;
  body: Paragraph[];
  tldrString?: string;
  sectionAriaLabel?: string;
  links?: SocialLink[];
  children?: React.ReactNode;
}

export interface LeadContentBlockProps extends GenericContentBlockProps {
  imageSrc?: StaticImageData;
  imageAlt?: string;
}

export interface TechContentProps
  extends Pick<GenericContentBlockProps, "sectionAriaLabel" | "headingProps"> {
  techStack: string[];
}
