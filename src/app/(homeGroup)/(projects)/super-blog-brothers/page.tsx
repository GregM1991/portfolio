import { LeadContentBlock } from "@/components";
import styles from "@/app/(homeGroup)/project.styles.module.css";
import { copy, imageAltTxt, SuperBlogBrothersSplash } from "./content";

export default function SuperBlogBrothersProject() {
  return (
    <main className={styles.wrapper}>
      <LeadContentBlock
        heading="Super Blog Brothers"
        body={[{ key: "1", copy }]}
        imageSrc={SuperBlogBrothersSplash}
        imageAlt={imageAltTxt}
      />
    </main>
  );
}
