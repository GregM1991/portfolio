"use server";
import {
  GenericContentBlock,
  ImageCaptionCard,
  LeadContentBlock,
  TechContentBlock
} from "@/components";
import projectStyles from "@/app/(homeGroup)/project.styles.module.css";
import dootNotesStyles from "./dootNotes.styles.module.css";
import Image from "next/image";
import { getDootNoteContent } from "./content";
import { notion } from "@notion";

const dbId = "441113d4188b42ca906844df337e8f12";

async function getNotionPage(id: string) {
  const data = await notion.databases.query({
    // TODO: Apparently can't find db
    database_id: id
  });
  console.log(data);
  return data;
}

export default async function SuperBlogBrothersProject() {
  const content = await getDootNoteContent();
  const data = await getNotionPage(dbId);
  return (
    <main className={projectStyles.wrapper}>
      <LeadContentBlock
        heading="Doot Notes (Under Construction 🚧)"
        body={content.openingBody}
        headingProps={{ size: "2xl" }}
        links={content.links}
      />
      <div className={projectStyles.imageWrapper}>
        <Image
          src={content.userSearch.src}
          alt={content.userSearch.alt}
          sizes="100vw"
          placeholder="blur"
        />
      </div>
      <TechContentBlock
        headingProps={{ type: "h2", size: "xl" }}
        sectionAriaLabel={content.techStack.sectionAriaLabel}
        techStack={content.techStack.tech}
      />
      <GenericContentBlock
        heading={content.purposeAndGoals.heading}
        headingProps={{ type: "h2", size: "xl" }}
        body={content.purposeAndGoals.body}
        sectionAriaLabel={content.purposeAndGoals.sectionAriaLabel}
      />
      <div className={dootNotesStyles.screensGrid}>
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
      {/* Render todo and in progress collumns for notion */}
    </main>
  );
}
