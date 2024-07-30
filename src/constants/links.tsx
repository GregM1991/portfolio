import { NavLink, SocialLink } from "@/types/links";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaFileArrowDown,
} from "react-icons/fa6";

export const CANVA_NAV_LINKS: NavLink[] = [
  {
    key: crypto.randomUUID(),
    linkText: "Greg Life",
    href: "/canva/#greg-life",
  },

  {
    key: crypto.randomUUID(),
    linkText: "My contribution",
    href: "/canva/#my-contribution",
  },
  {
    key: crypto.randomUUID(),
    linkText: "Greg's values",
    href: "/canva/#gregs-values",
  },
  {
    key: crypto.randomUUID(),
    linkText: "A place for projects",
    href: "/canva/#projects",
  },
  {
    key: crypto.randomUUID(),
    linkText: "#GregLife",
    href: "/canva/#greg-life-mural",
  },
  {
    key: crypto.randomUUID(),
    linkText: "Testimonials",
    href: "/canva/#testimonials",
  },
  {
    key: crypto.randomUUID(),
    linkText: "Be hired?",
    href: "/canva/#be-hired",
  },
];

export const NAV_LINKS: NavLink[] = [
  {
    key: crypto.randomUUID(),
    linkText: "Journaling App",
    href: "/journaling-app"
  },
  {
    key: crypto.randomUUID(),
    linkText: "Doot Notes",
    href: "/doot-notes"
  },
  {
    key: crypto.randomUUID(),
    linkText: "Super Blog Brothers",
    href: "/super-blog-brothers"
  },
  {
    key: crypto.randomUUID(),
    linkText: "Portfolio",
    href: "/portfolio"
  },
  {
    key: crypto.randomUUID(),
    linkText: "Canva Portfolio",
    href: "/canva"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: crypto.randomUUID(),
    linkTooltipText: "GitHub",
    href: "https://github.com/GregM1991",
    icon: FaGithub,
    screenReader: "Navigate to Gregs Linked-in page",
  },
  {
    key: crypto.randomUUID(),
    linkTooltipText: "linkedIn",
    href: "https://www.linkedin.com/in/greg-martin-76688678/",
    icon: FaLinkedinIn,
    screenReader: "Navigate to Gregs Linked-in page",
  },
  {
    key: crypto.randomUUID(),
    linkTooltipText: "Instagram",
    href: "https://www.instagram.com/grillustration_/",
    icon: FaInstagram,
    screenReader: "Navigate to Gregs Instagram page",
  },
  {
    key: crypto.randomUUID(),
    linkTooltipText: "Resume",
    href: "/Greg_Martin_Resume_2023.pdf",
    icon: FaFileArrowDown,
    screenReader: "Download a pdf version of Gregs resume",
    attributes: {
      download: "Greg_Martin_Resume_2023",
    },
  },
];
