import { Typography, ProjectThumb } from '@/components'
import { PROJECTS_COPY } from '@/constants/homepageContent'
import { PROJECT_THUMBS } from '@/constants/projects'
import styles from './projects.styles.module.css'

export function Projects() {
	const hasOddProjectsNum = PROJECT_THUMBS.length % 2 === 1
	return (
		<section aria-label="This section houses Greg's projects">
			<div className={styles.wrapper}>
				<Typography color="primary" type="h2" size="xl">
					{PROJECTS_COPY.title}
				</Typography>
				<div className="doubleColumn">
					<Typography>{PROJECTS_COPY.body}</Typography>
				</div>
				<div className={styles.projectsWrapper}>
					{PROJECT_THUMBS.map(
						({ key, title, body, projImage, imageAlt, htmlLink }, index) => {
							const isLastThumb = index === PROJECT_THUMBS.length - 1
							return (
								<ProjectThumb
									key={key}
									title={title}
									body={body}
									projImage={projImage}
									imageAlt={imageAlt}
									htmlLink={htmlLink}
									doubleColumn={isLastThumb && hasOddProjectsNum}
								/>
							)
						},
					)}
				</div>
			</div>
		</section>
	)
}
