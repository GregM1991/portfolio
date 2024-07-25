import styles from "@/app/(homeGroup)/project.styles.module.css";
import { AnimatedTypography, LeadContentBlock, Typography } from "@/components";
import { fadeInUpVariantsB } from "@/constants/animation";
import { responsibilities, summary } from "./workHistoryContent";

export default function WorkHistory() {
  return (
    <main className={styles.wrapper}>
      {/* Think I'm done trying to make the content blocks work */}
      <LeadContentBlock
        heading="Work History"
        headingProps={{ type: "h1", size: "2xl" }}
        body={[{ key: "1", copy: summary }]}
      />
      <div>
        <AnimatedTypography
          variants={fadeInUpVariantsB}
          initial="initial"
          whileInView="target"
          viewport={{ once: true }}
          type="h2"
          size="l"
        >
          eQ8
        </AnimatedTypography>
        <AnimatedTypography
          variants={fadeInUpVariantsB}
          initial="initial"
          whileInView="target"
          viewport={{ once: true }}
          type="span"
        >
          Mid/Senior Full-Stack Engineer | Jan 2023 - Present
        </AnimatedTypography>
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>
              <Typography type="span">{responsibility}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
