import { LeadContentBlock } from "@/components";
import styles from "@/app/(homeGroup)/project.styles.module.css";

export default function JournalingAppProject() {
  return (
    <main className={styles.wrapper}>
      <LeadContentBlock
        heading="Journaling App (Work in Progress)"
        body={[{ key: "1", copy: "WIP" }]}
      />
    </main>
  );
}
