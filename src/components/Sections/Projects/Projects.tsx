import { Typography, Project } from '@/components'
import { PROJECTS_COPY } from '@/constants/content'
import { PROJECT_THUMBS } from '@/constants/projects'
import styles from './projects.styles.module.css'

export function Projects() {
	return (
		<section aria-label="This section houses Greg's projects">
			<div className={styles.wrapper}>
				<Typography color="primary" type="h2" size="xl">
					{PROJECTS_COPY.title}
				</Typography>
				<Typography>{PROJECTS_COPY.body}</Typography>
				<div className={styles.projectsWrapper}>
					{PROJECT_THUMBS.map(
						({ key, title, body, projImage, alt, htmlLink }) => (
							<Project
								key={key}
								title={title}
								body={body}
								projImage={projImage}
								imageAlt={alt}
								htmlLink={htmlLink}
							/>
						),
					)}
				</div>
			</div>
		</section>
	)
}
