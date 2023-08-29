import { AnimatedImage, Typography } from '@/components'
import styles from './job.styles.module.css'
import { Projects } from '@/constants/projects'

interface JobProps extends Projects {
	layout?: 'left' | 'right'
}

export function Job({
	title,
	jobDescription,
	jobProjects,
	imageSrc,
	imageAltText,
	layout = 'left',
}: JobProps) {
	return (
		<div className={`${styles.wrapper} ${styles[layout]}`}>
			<div className={styles.textWrapper}>
				<Typography type="h3" color="dark-red">
					{title}
				</Typography>
				<Typography color="dark-red">{jobDescription}</Typography>
				{jobProjects.map(project => (
					<></>
				))}
			</div>
			<div className={styles.imageWrapper}>
				<AnimatedImage
					src={imageSrc}
					alt={imageAltText}
					height={430}
					className={styles.img}
				/>
			</div>
		</div>
	)
}
