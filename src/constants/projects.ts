import eq8 from "@/assets/images/eq8-pub.jpg";
import portfolio from "@/assets/images/greg-portfolio-mockup.jpg";
import { Project } from "@/types/projects";

export const PROJECT_THUMBS: Project[] = [
  {
    key: crypto.randomUUID(),
    title: "Work History",
    body: "Check out the places I've worked over the years, and the impact they've had on my Career",
    projImage: eq8,
    imageAlt:
      "Greg, Annisa and Aaron smiling and having a beer in the sunshine",
    htmlLink: "/work-history"
  },
  {
    key: crypto.randomUUID(),
    title: "This portfolio site",
    body: "A Next 13 SSG/SSR portfolio site to help me sell the Greg dream",
    projImage: portfolio,
    imageAlt: "A picture of a laptop and screen with Gregs website on each.",
    htmlLink: "/portfolio"
  }
];
