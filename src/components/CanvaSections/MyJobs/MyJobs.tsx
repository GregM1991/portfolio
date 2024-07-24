import { AnimatedSection, Job, Typography } from "@/components";
import styles from "./myJobs.styles.module.css";
import { JOBS } from "@/constants/jobs";
import { fadeInVariants } from "@/constants/animation";

export function MyJobs() {
  return (
    <AnimatedSection
      bgColor="light-pink"
      ariaLabel="My projects"
      initAnimatedConfig={{ opacity: 0 }}
      variants={fadeInVariants}
      viewport={{ once: true }}
      initial="initial"
      whileInView="target"
    >
      <span id="projects" className="anchor" />
      <Typography
        canva
        type="h2"
        color="dark-red"
        variant="h2Rich"
        className={styles.header}
      >
        A place for <br /> projects{" "}
      </Typography>
      <div className={styles.projectWrapper}>
        {JOBS.map((job, i) => (
          <Job
            key={job.key}
            title={job.title}
            jobDescription={job.jobDescription}
            jobProjects={job.jobProjects}
            imageSrc={job.imageSrc}
            imageAltText={job.imageAltText}
            layout={(i + 1) % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
