"use client";
import {
  GenericContentBlock,
  ImageCaptionCard,
  LeadContentBlock,
  TechContentBlock,
  Typography
} from "@/components";
import projectStyles from "@/app/(homeGroup)/project.styles.module.css";
import superBlogBrothersStyles from "./superBlogBrothers.styles.module.css";

import content from "./content";
import Image from "next/image";
import Link from "next/link";

export default function SuperBlogBrothersProject() {
  return (
    <main className={projectStyles.wrapper}>
      <LeadContentBlock
        heading="Super Blog Brothers"
        body={content.openingBody}
        headingProps={{ size: "2xl" }}
        links={content.links}
      />
      <div className={superBlogBrothersStyles.imageWrapper}>
        <Image
          src={content.images.superBlogBrothersSplash}
          alt={content.imageAltTxt}
          sizes="100vw"
          placeholder="blur"
        />
      </div>
      <TechContentBlock
        headingProps={{ type: "h2", size: "xl" }}
        sectionAriaLabel={content.techSectionAriaLabel}
        techStack={content.techStack}
      />
      <GenericContentBlock
        heading={content.purposeAndGoals.heading}
        headingProps={{ type: "h2", size: "xl" }}
        body={content.purposeAndGoals.body}
        sectionAriaLabel={content.purposeAndGoals.sectionAriaLabel}
      />
      <div className={projectStyles.screensGrid}>
        <ImageCaptionCard
          imageSrc={content.images.animatedBlocks}
          imageAlt="A screenshot of the whole of the home portfolio page"
          caption={
            <Typography size="xs">
              These blocks give a fun sense of play to the splash screen and are
              interactive.{" "}
              <Link href="https://video-game-blog-6zt3lzda0-gregm1991s-projects.vercel.app/">
                Check them out here
              </Link>
              , or check out the code{" "}
              <Link href="https://github.com/GregM1991/video-game-blog/blob/main/src/lib/slices/Hero/index.svelte#L72">
                here
              </Link>
            </Typography>
          }
          isScreenCap
        />
        <ImageCaptionCard
          imageSrc={content.images.superBlogBrothersSplash}
          imageAlt="A screenshot of the whole of the home portfolio page"
          caption="A carousel component to showcase screens for my projects."
          isScreenCap
          linkToCode="https://github.com/GregM1991/portfolio/blob/main/src/components/Carousel/Carousel.tsx"
        />
        <ImageCaptionCard
          imageSrc={content.images.superBlogBrothersSplash}
          imageAlt="A screenshot of the whole of the home portfolio page"
          caption="I had built this testimonials section for the canva page, but it was too good not to use in my regular portfolio."
          isScreenCap
          linkToCode="https://github.com/GregM1991/portfolio/blob/main/src/components/NewTestimonials/NewTestimonials.tsx"
        />
      </div>
    </main>
  );
}
