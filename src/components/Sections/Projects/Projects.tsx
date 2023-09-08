import { Typography } from '@/components'
import styles from './projects.styles.module.css'
import { PROJECTS_COPY } from '@/constants/content'

export function Projects() {
	return (
		<section aria-label="This section houses Greg's projects">
			<div className={styles.wrapper}>
				<Typography color="primary" type="h2" weight="bold" size="xl">
					{PROJECTS_COPY.title}
				</Typography>
				<Typography>{PROJECTS_COPY.body}</Typography>
				<div className={styles.projectsWrapper}>
					<div className={styles.projectWrapper}></div>
				</div>
			</div>
		</section>
	)
}
