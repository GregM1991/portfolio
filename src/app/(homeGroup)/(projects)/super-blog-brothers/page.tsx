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
          imageProps={{
            src: content.images.animatedBlocks,
            alt: "A screenshot of the whole of the home portfolio page"
          }}
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
          imageProps={{
            src: content.images.animatedBlogList,
            alt: "A gif of the blog list page showing the animation between image hovers"
          }}
          caption={
            <Typography size="xs">
              The blog list page has a fun hover effect on the images, showing a
              preview of the cover art of the game being reviewed.{" "}
              <Link href="https://video-game-blog-beta.vercel.app/blog">
                Check them out here
              </Link>
              , or check out the code{" "}
              <Link href="https://github.com/GregM1991/video-game-blog/blob/main/src/lib/slices/ContentIndex/ContentList.svelte">
                here
              </Link>
            </Typography>
          }
          isScreenCap
        />
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
