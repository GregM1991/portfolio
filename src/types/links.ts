import { IconType } from "react-icons";

export type SocialLink = {
  key: string;
  linkTooltipText: string;
  href: string;
  icon: IconType | JSX.Element;
  screenReader: string;
  attributes?: {
    download: string;
  };
};

export type NavLink = {
  key: string;
  linkText: string;
  href: string;
};
