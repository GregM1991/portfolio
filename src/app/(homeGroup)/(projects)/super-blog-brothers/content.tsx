import SuperBlogBrothersSplash from "@/assets/images/super-blog-brothers-splash.png";
import { SocialLink } from "@/types/links";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const imageAltTxt = `Super Blog Brothers written on a dark background with floating geometry`;
const copy = `Super Blog Brothers was a fun build, Andy and George are two great blokes, who came to me with a largely open brief. I talked them into some 3d assets (using Threlte JS) to help them with personlisation and they loved that, bringing this feel of games to a website about games. I got to build the site using my favourite framework SvelteKit, so the DX was really nice for me. I also opted for a CMS, Prismic, so that Andy and George could take control of the content side and add/remove posts as they wanted.`;
const links: SocialLink[] = [
  {
    key: "1",
    linkTooltipText: "Visit the Super Blog Brothers website",
    href: "https://video-game-blog-lbm4vcmxo-gregm1991s-projects.vercel.app/",
    icon: FaArrowUpRightFromSquare,
    screenReader: "A link to the Super Blog Brothers website"
  },
  {
    key: "2",
    linkTooltipText: "Visit the Super Blog Brothers Github repository",
    href: "https://github.com/GregM1991/portfolio",
    icon: FaGithub,
    screenReader: "A link to the Super Blog Brothers Github repository"
  }
];
const techStack = ["SvelteKit", "Threelte JS", "Prismic", "Typescript"];
const techSectionAriaLabel =
  "The tech stack used in the Super Blog Brothers project";

const content = {
  SuperBlogBrothersSplash,
  copy,
  imageAltTxt,
  links,
  techStack,
  techSectionAriaLabel
};
export default content;
