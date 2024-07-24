import styles from "@/app/(homeGroup)/project.styles.module.css";
import { LeadContentBlock } from "@/components";
import eq8Gang from "@/assets/images/eq8-pub.jpg";

export default function WorkHistory() {
  return (
    <main className={styles.wrapper}>
      <LeadContentBlock
        heading="Work History"
        headingProps={{ type: "h1", size: "2xl" }}
        body={[{ key: "1", copy: "I have worked at a few places" }]}
        sectionAriaLabel="Work History"
        tldrString="I have worked at a few places"
        imageSrc={eq8Gang}
        imageAlt="A group of people at a pub"
      >
        <p>Penis</p>
      </LeadContentBlock>
    </main>
  );
}
