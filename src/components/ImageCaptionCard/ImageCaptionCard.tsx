import Image, { StaticImageData } from 'next/image'
import styles from './imageCaptionCard.styles.module.css'
import { Typography } from '@/components'
import clsx from 'clsx'

interface ImageCaptionCardProps {
	imageSrc: StaticImageData
	imageAlt: string
	caption?: string
	isScreenCap?: boolean
}

export function ImageCaptionCard({
	imageSrc,
	imageAlt,
	caption,
	isScreenCap = false,
}: ImageCaptionCardProps) {
	const imageClasses = clsx(styles.image, { [styles.shadow]: isScreenCap })
	return (
		<figure className={styles.wrapper}>
			<Image
				src={imageSrc}
				alt={imageAlt}
				sizes="100vw"
				placeholder="blur"
				className={imageClasses}
			/>
			{caption && (
				<figcaption>
					<Typography type="span">{caption}</Typography>
				</figcaption>
			)}
		</figure>
	)
}
