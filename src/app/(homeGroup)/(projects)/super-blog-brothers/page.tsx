"use client";
import {
  GenericContentBlock,
  LeadContentBlock,
  TechContentBlock
} from "@/components";
import projectStyles from "@/app/(homeGroup)/project.styles.module.css";
import styles from "./superBlogBrothers.styles.module.css";
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
      <div className={styles.imageWrapper}>
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
    </main>
  );
}
