"use client";
import {
  GenericContentBlock,
  ImageCaptionCard,
  LeadContentBlock,
  TechContentBlock,
} from "@/components";
import projectStyles from "@/app/(homeGroup)/project.styles.module.css";
import superBlogBrosStyles from "./superBlogBrothers.styles.module.css";
import content from "./content";
import Image from "next/image";

export default function SuperBlogBrothersProject() {
  return (
    <main className={projectStyles.wrapper}>
      <LeadContentBlock
        heading="Super Blog Brothers"
        body={content.openingBody}
        headingProps={{ size: "2xl" }}
        links={content.links}
      />
      <div className={projectStyles.imageWrapper}>
        <Image
          src={content.superBlogBrothersSplashImage.src}
          alt={content.superBlogBrothersSplashImage.alt}
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
      <div className={superBlogBrosStyles.screensGrid}>
        {content.images.map((image) => (
          <ImageCaptionCard
            key={image.key}
            imageProps={{
              src: image.src,
              alt: image.alt
            }}
            caption={image.caption}
            style={{ gridArea: image.gridName }}
            isScreenCap
          />
        ))}
      </div>
      <GenericContentBlock
        heading={content.overview.heading}
        headingProps={{ type: "h2", size: "xl" }}
        body={content.overview.body}
        sectionAriaLabel={content.overview.sectionAriaLabel}
      />
    </main>
  );
}
