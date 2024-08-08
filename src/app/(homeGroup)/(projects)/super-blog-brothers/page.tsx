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
          src={content.SuperBlogBrothersSplash}
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
      {/* TODO: Get into the double column show-case, take screen record of 3d, plus screen caps of other stuff */}
      <div className={projectStyles.screensGrid}>
        <ImageCaptionCard
          imageSrc={content.SuperBlogBrothersSplash}
          imageAlt="A screenshot of the whole of the home portfolio page"
          caption={
            <Typography size="xs">
              The personal portfolio I built for canva.{" "}
              <Link href="/canva">Check the site here</Link>
            </Typography>
          }
          isScreenCap
        />
        <ImageCaptionCard
          imageSrc={content.SuperBlogBrothersSplash}
          imageAlt="A screenshot of the whole of the home portfolio page"
          caption="A carousel component to showcase screens for my projects."
          isScreenCap
          linkToCode="https://github.com/GregM1991/portfolio/blob/main/src/components/Carousel/Carousel.tsx"
        />
        <ImageCaptionCard
          imageSrc={content.SuperBlogBrothersSplash}
          imageAlt="A screenshot of the whole of the home portfolio page"
          caption="I had built this testimonials section for the canva page, but it was too good not to use in my regular portfolio."
          isScreenCap
          linkToCode="https://github.com/GregM1991/portfolio/blob/main/src/components/NewTestimonials/NewTestimonials.tsx"
        />
      </div>
    </main>
  );
}
