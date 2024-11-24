import eq8 from "@/assets/images/eq8-pub.jpg";
import portfolio from "@/assets/images/greg-portfolio-mockup.jpg";
import dootNotesImg from "@/assets/images/doot-notes/notes-page.png";
import superBlogBrothersImg from "@/assets/images/super-blog-brothers/super-blog-brothers-splash.png";
import { Project } from "@/types/projects";

export const PROJECT_THUMBS: Project[] = [
  {
    key: "doot-notes",
    title: "DootNotes",
    body: "A notetaking application built with svelte5 and sveltekit. An undertaking to try out a different app framework and hone my skills.",
    projImage: dootNotesImg,
    imageAlt:
      "Greg, Annisa and Aaron smiling and having a beer in the sunshine",
    htmlLink: "/doot-notes",
  },
  {
    key: "super-blog-brothers",
    title: "Super Blog Brothers",
    body: "A freelance blog project built with svelte and prismic. This project was a fun build and incorporates some neat 3d.",
    projImage: superBlogBrothersImg,
    imageAlt:
      "Greg, Annisa and Aaron smiling and having a beer in the sunshine",
    htmlLink: "/super-blog-brothers",
  },
  {
    key: "portfolio-site",
    title: "This portfolio site",
    body: "A Next 13 SSG/SSR portfolio site to help me sell the Greg dream",
    projImage: portfolio,
    imageAlt: "A picture of a laptop and phone with Gregs website on each.",
    htmlLink: "/portfolio",
  },
];
