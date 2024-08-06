"use client";
import { LeadContentBlock, TechContentBlock } from "@/components";
import projectStyles from "@/app/(homeGroup)/project.styles.module.css";
import styles from "./superBlogBrothers.styles.module.css";
import content from "./content";
import Image from "next/image";

export default function SuperBlogBrothersProject() {
  return (
    <main className={projectStyles.wrapper}>
      <LeadContentBlock
        heading="Super Blog Brothers"
        body={[{ key: "1", copy: content.copy }]}
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
    </main>
  );
}
