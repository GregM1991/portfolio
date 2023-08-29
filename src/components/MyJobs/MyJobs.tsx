import { AnimatedSection, Job, Typography } from '@/components'
import styles from './myJobs.styles.module.css'
import { JOBS } from '@/constants/projects'
import { FADE_IN_ANIMATION_CONFIG } from '@/constants/animation'

export function MyJobs() {
	return (
		<AnimatedSection
			bgColor="light-pink"
			ariaLabel="My projects"
			initAnimatedConfig={{ opacity: 0 }}
			{...FADE_IN_ANIMATION_CONFIG}
		>
			<Typography
				type="h2"
				color="dark-red"
				variant="h2Rich"
				className={styles.header}
			>
				<a id="projects" className="anchor" />A place for <br /> projects{' '}
			</Typography>
			<div className={styles.projectWrapper}>
				{JOBS.map(
					(
						{ title, jobDescription, jobProjects, imageSrc, imageAltText },
						i,
					) => (
						// TODO: will need to find a better key replacement
						<Job
							key={title}
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
