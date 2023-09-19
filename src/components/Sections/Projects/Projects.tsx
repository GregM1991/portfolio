import { Typography, ProjectThumb, AnimatedTypography } from '@/components'
import { PROJECTS_COPY } from '@/constants/homepageContent'
import { PROJECT_THUMBS } from '@/constants/projects'
import styles from './projects.styles.module.css'
import { fadeInUpVariantsB } from '@/constants/animation'

export function ProjectThumbs() {
	const hasOddProjectsNum = PROJECT_THUMBS.length % 2 === 1
	return (
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
	)
}

export function Projects() {
	return (
		<section aria-label="This section houses Greg's projects">
			<div className={styles.wrapper}>
				<AnimatedTypography
					variants={fadeInUpVariantsB}
					initial="initial"
					whileInView="target"
					viewport={{ once: true }}
					color="primary"
					type="h2"
					size="xl"
				>
					{PROJECTS_COPY.title}
				</AnimatedTypography>
				<div className={styles.bodyCopy}>
					<Typography>{PROJECTS_COPY.body}</Typography>
				</div>
				<ProjectThumbs />
			</div>
		</section>
	)
}
