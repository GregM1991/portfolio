import { Section, Job, Typography } from '@/components'
import styles from './myJobs.styles.module.css'
import { JOBS } from '@/constants/projects'

export function MyJobs() {
	return (
		<Section bgColor="light-pink" ariaLabel="My projects">
			<Typography
				type="h2"
				color="dark-red"
				variant="h2Rich"
				className={styles.header}
			>
				<a id="projects" className="anchor" />A place for <br /> projects{' '}
			</Typography>
			<div className={styles.projectWrapper}>
				{JOBS.map((project, i) => {
					const { title, jobDescription, jobProjects, imageSrc, imageAltText } =
						project
					// TODO: will need to find a better key replacement
					return (
						<Job
							key={title}
							title={title}
							jobDescription={jobDescription}
							jobProjects={jobProjects}
							imageSrc={imageSrc}
							imageAltText={imageAltText}
							layout={(i + 1) % 2 === 0 ? 'right' : 'left'}
						/>
					)
				})}
			</div>
		</Section>
	)
}
