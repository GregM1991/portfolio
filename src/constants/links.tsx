import { NavLink, SocialLink } from "@/types/links";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaFileArrowDown,
} from "react-icons/fa6";

export const CANVA_NAV_LINKS: NavLink[] = [
  {
    key: "canva-greg-life",
    linkText: "Greg Life",
    href: "/canva/#greg-life"
  },
  {
    key: "canva-my-contribution",
    linkText: "My contribution",
    href: "/canva/#my-contribution"
  },
  {
    key: "canva-gregs-values",
    linkText: "Greg's values",
    href: "/canva/#gregs-values"
  },
  {
    key: "canva-projects",
    linkText: "A place for projects",
    href: "/canva/#projects"
  },
  {
    key: "canva-greg-life-mural",
    linkText: "#GregLife",
    href: "/canva/#greg-life-mural"
  },
  {
    key: "canva-testimonials",
    linkText: "Testimonials",
    href: "/canva/#testimonials"
  },
  {
    key: "canva-be-hired",
    linkText: "Be hired?",
    href: "/canva/#be-hired"
  }
];

export const NAV_LINKS: NavLink[] = [
  { key: "nav-doot-notes", linkText: "Doot Notes", href: "/doot-notes" },
  {
    key: "nav-super-blog-brothers",
    linkText: "Super Blog Brothers",
    href: "/super-blog-brothers"
  },
  { key: "nav-portfolio", linkText: "Portfolio", href: "/portfolio" },
  { key: "nav-canva-portfolio", linkText: "Canva Portfolio", href: "/canva" }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "social-github",
    linkTooltipText: "GitHub",
    href: "https://github.com/GregM1991",
    icon: FaGithub,
    screenReader: "Navigate to Gregs Github page"
  },
  {
    key: "social-linkedin",
    linkTooltipText: "linkedIn",
    href: "https://www.linkedin.com/in/greg-martin-76688678/",
    icon: FaLinkedinIn,
    screenReader: "Navigate to Gregs Linked-in page"
  },
  {
    key: "social-instagram",
    linkTooltipText: "Instagram",
    href: "https://www.instagram.com/grillustration_/",
    icon: FaInstagram,
    screenReader: "Navigate to Gregs Instagram page"
  },
  {
    key: "social-resume",
    linkTooltipText: "Resume",
    href: "/greg-martin-resume-241124.pdf",
    icon: FaFileArrowDown,
    screenReader: "Download a pdf version of Gregs resume",
    attributes: {
      download: "greg-martin-resume-241124"
    }
  }
];
