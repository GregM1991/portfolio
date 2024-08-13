import Link from "next/link";
import {
  GenericContentBlock,
  ImageCaptionCard,
  TechContentBlock,
  Typography
} from "@/components";
import { FaGithub } from "react-icons/fa6";
import {
  GOALS,
  OPENING,
  OVERVIEW,
  PORTFOLIO_TECH
} from "@/constants/portfolioContent";
import canvaPageWhole from "@/assets/images/whole-canva-portfolio-page.png";
import carousel from "@/assets/images/carousel.png";
import testimonials from "@/assets/images/testimonials-screenshot.png";
import styles from "@/app/(homeGroup)/project.styles.module.css";

export default function PortfolioProject() {
  return (
    <main className={styles.wrapper}>
      <GenericContentBlock
        heading={OPENING.heading}
        body={OPENING.body}
        sectionAriaLabel={OPENING.sectionAriaLabel}
        tldrString={OPENING.tldr}
        headingProps={{ type: "h1", size: "2xl" }}
      >
        <Link href={OPENING.codeLink} className={styles.link} target="_blank">
          <Typography size="xs" type="span">
            View Portfolio code
          </Typography>
          <FaGithub />
        </Link>
      </GenericContentBlock>
      <TechContentBlock
        headingProps={{ type: "h2", size: "xl" }}
        sectionAriaLabel={PORTFOLIO_TECH.sectionAriaLabel}
        techStack={PORTFOLIO_TECH.techStack}
      />
      <GenericContentBlock
        heading={GOALS.heading}
        headingProps={{ type: "h2", size: "xl" }}
        body={GOALS.body}
        sectionAriaLabel={GOALS.sectionAriaLabel}
        tldrString={GOALS.tldr}
      />
      <div className={styles.screensGrid}>
        <ImageCaptionCard
          imageProps={{
            src: canvaPageWhole,
            alt: "A screenshot of the whole of the home portfolio page"
          }}
          caption={
            <Typography size="xs">
              The personal portfolio I built for canva.{" "}
              <Link href="/canva">Check the site here</Link>
            </Typography>
          }
          isScreenCap
        />
        <ImageCaptionCard
          imageProps={{
            src: carousel,
            alt: "A screenshot of the carousel that showcases screens for my projects"
          }}
          caption="A carousel component to showcase screens for my projects."
          isScreenCap
          linkToCode="https://github.com/GregM1991/portfolio/blob/main/src/components/Carousel/Carousel.tsx"
        />
        <ImageCaptionCard
          imageProps={{
            src: testimonials,
            alt: "A screenshot of the testimonials section"
          }}
          caption="I had built this testimonials section for the canva page, but it was too good not to use in my regular portfolio."
          isScreenCap
          linkToCode="https://github.com/GregM1991/portfolio/blob/main/src/components/NewTestimonials/NewTestimonials.tsx"
        />
      </div>
      <GenericContentBlock
        heading={OVERVIEW.heading}
        headingProps={{ type: "h2", size: "xl" }}
        body={OVERVIEW.body}
        sectionAriaLabel={OVERVIEW.sectionAriaLabel}
        tldrString={OVERVIEW.tldr}
      />
    </main>
  );
}
