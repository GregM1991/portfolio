import Image, { StaticImageData } from 'next/image'
import { Typography } from '@/components'
import styles from './project.styles.module.css'
import Link from 'next/link'

interface ProjectProps {
	projImage: StaticImageData
	imageAlt: string
	title: string
	body: string
	htmlLink: string
}

export function Project({
	projImage,
	imageAlt,
	title,
	body,
	htmlLink,
}: ProjectProps) {
	return (
		<Link href={htmlLink}>
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<Image alt={imageAlt} src={projImage} fill />
				</div>
				<Typography type="h3" size="l" className={styles.title}>
					{title}
				</Typography>
				<Typography>{body}</Typography>
			</div>
		</Link>
	)
}
