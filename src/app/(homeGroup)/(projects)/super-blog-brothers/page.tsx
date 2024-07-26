import { LeadContentBlock } from "@/components";
import styles from "@/app/(homeGroup)/project.styles.module.css";

export default function SuperBlogBrothersProject() {
  return (
    <main className={styles.wrapper}>
      <LeadContentBlock
        heading="Super Blog Brothers"
        body={[{ key: "1", copy: "WIP" }]}
      />
    </main>
  );
}
