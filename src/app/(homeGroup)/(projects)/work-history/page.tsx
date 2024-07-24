import styles from "@/app/(homeGroup)/project.styles.module.css";
import { AnimatedTypography, LeadContentBlock } from "@/components";
import { fadeInUpVariantsB } from "@/constants/animation";

export default function WorkHistory() {
  return (
    <main className={styles.wrapper}>
      {/* Think I'm done trying to make the content blocks work */}
      <LeadContentBlock
        heading="Work History"
        headingProps={{ type: "h1", size: "2xl" }}
        body={[{ key: "1", copy: "I have worked at a few places" }]}
      />
      <AnimatedTypography
        variants={fadeInUpVariantsB}
        initial="initial"
        whileInView="target"
        viewport={{ once: true }}
      >
        Faethm by Pearson
      </AnimatedTypography>
    </main>
  );
}
