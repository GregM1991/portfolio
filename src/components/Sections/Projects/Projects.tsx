import Image from 'next/image'
import { Typography } from '@/components'
import { PROJECTS_COPY } from '@/constants/content'
import randomImage from '@/assets/images/greg-silhouette-in-lights.jpg'
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
					<div className={styles.projectWrapper}>
						<div className={styles.imageWrapper}>
							<Image
								alt="project alt text would go here"
								src={randomImage}
								fill
							/>
						</div>
						<Typography type="h3">Project Title goes here</Typography>
					</div>
				</div>
			</div>
		</section>
	)
}
