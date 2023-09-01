import { AnimatedSection, Job, Typography } from '@/components'
import styles from './myJobs.styles.module.css'
import { JOBS } from '@/constants/projects'
import { fadeInVariants } from '@/constants/animation'

export function MyJobs() {
	return (
		<AnimatedSection
			bgColor="light-pink"
			ariaLabel="My projects"
			initAnimatedConfig={{ opacity: 0 }}
			variants={fadeInVariants}
			viewport={{ once: true }}
			initial="hidden"
			whileInView="visible"
		>
			<a id="projects" className="anchor" />
			<Typography
				type="h2"
				color="dark-red"
				variant="h2Rich"
				className={styles.header}
			>
				A place for <br /> projects{' '}
			</Typography>
			{/* TODO: Add overview section */}
			<div className={styles.projectWrapper}>
				{JOBS.map(
					(
						{ key, title, jobDescription, jobProjects, imageSrc, imageAltText },
						i,
					) => (
						<Job
							key={key}
							title={title}
							jobDescription={jobDescription}
							jobProjects={jobProjects}
							imageSrc={imageSrc}
							imageAltText={imageAltText}
							layout={(i + 1) % 2 === 0 ? 'right' : 'left'}
						/>
					),
				)}
			</div>
		</AnimatedSection>
	)
}
