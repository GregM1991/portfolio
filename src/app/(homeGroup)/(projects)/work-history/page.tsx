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
        tldrString="I have worked at a few places"
      >
        <p>Penis</p>
      </LeadContentBlock>
    </main>
  );
}
