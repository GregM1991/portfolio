import { AnimatedImage, Typography } from '@/components'
import { StaticImageData } from 'next/image'
import styles from './project.styles.module.css'

interface ProjectProps {
	title: string
	copy: string
	imageSrc: StaticImageData
	imageAltText: string
	layout?: 'left' | 'right'
}

export function Project({
	title,
	copy,
	imageSrc,
	imageAltText,
	layout = 'left',
}: ProjectProps) {
	return (
		<div className={`${styles.wrapper} ${styles[layout]}`}>
			<div className={styles.textWrapper}>
				<Typography type="h3" color="dark-red">
					{title}
				</Typography>
				<Typography color="dark-red">{copy}</Typography>
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
