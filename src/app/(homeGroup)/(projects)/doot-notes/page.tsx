"use server";
import {
  AnimatedTypography,
  ASocialLinks,
  Banner,
  GenericContentBlock,
  ImageCaptionCard,
  TechContentBlock,
  Typography,
} from "@/components";
import projectStyles from "@/app/(homeGroup)/project.styles.module.css";
import dootNotesStyles from "./dootNotes.styles.module.css";
import Image from "next/image";
import { getDootNoteContent } from "./content";
import { notion } from "@notion";
import { fadeInUpVariantsB } from "@/constants/animation";
import Link from "next/link";
import { RoadMapList } from "./RoadMapList";

const dbId = "1d50f10300fe4760922a96c885b09d13";

async function getNotionPage(id: string) {
  let items = {
    todo: [] as any,
    inProgress: [] as any,
  };

  const db = await notion.databases.query({
    database_id: id,
    filter: {
      or: [
        { property: "Tags", multi_select: { contains: "ToDo" } },
        { property: "Tags", multi_select: { contains: "In Progress" } },
      ],
    },
  });

  db.results.forEach(async (item: any) => {
    if (item.properties.Tags.multi_select[0].name === "ToDo") {
      items.todo.push(item.properties.Name.title[0].text.content);
    } else {
      items.inProgress.push(item.properties.Name.title[0].text.content);
    }
  });

  return items;
}

export default async function SuperBlogBrothersProject() {
  const content = await getDootNoteContent();
  const { todo, inProgress } = await getNotionPage(dbId);

  return (
    <main className={projectStyles.wrapper}>
      <div>
        <AnimatedTypography
          variants={fadeInUpVariantsB}
          initial="initial"
          whileInView="target"
          viewport={{ once: true }}
          className={dootNotesStyles.animationOpacity}
          type="h1"
          size="2xl"
        >
          Doot Notes
        </AnimatedTypography>
        <div className={dootNotesStyles.socialsWrapper}>
          <ASocialLinks links={content.links} withTooltip />
        </div>
      </div>
      <div>
        <Banner type="warning">
          <Typography size="xs">
            🚧 Hi there! This project is something I&apos;m continuing to work
            on. Check out my &apos;Todos&apos; and &apos;In Progress&apos;{" "}
            <Link href="/doot-notes/#road-map">below</Link>, or view the{" "}
            <Link href="https://elfin-opal-cea.notion.site/1d50f10300fe4760922a96c885b09d13?v=441113d4188b42ca906844df337e8f12">
              Notion page here
            </Link>{" "}
            to follow along! 🚧
          </Typography>
        </Banner>
        <div className={`doubleColumn ${dootNotesStyles.openingBody}`}>
          {content.openingBody.map(({ key, copy }) => (
            <Typography key={key}>{copy}</Typography>
          ))}
        </div>
      </div>
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
              alt: image.alt,
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
      <section id="road-map" className="anchor" aria-label="road-map">
        <AnimatedTypography
          variants={fadeInUpVariantsB}
          initial="initial"
          whileInView="target"
          viewport={{ once: true }}
          className={dootNotesStyles.animationOpacity}
          type="h2"
          size="xl"
        >
          Road Map
        </AnimatedTypography>
        <div className={dootNotesStyles.roadMap}>
          <RoadMapList listItems={inProgress} type="inProgress" />
          <RoadMapList listItems={todo} type="todo" />
        </div>
      </section>
    </main>
  );
}
