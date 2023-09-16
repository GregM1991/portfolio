import Image, { StaticImageData } from 'next/image'
import styles from './imageCaptionCard.styles.module.css'
import { Typography } from '@/components'

interface ImageCaptionCardProps {
	imageSrc: StaticImageData
	imageAlt: string
	caption?: string
}

export function ImageCaptionCard({
	imageSrc,
	imageAlt,
	caption,
}: ImageCaptionCardProps) {
	return (
		<figure className={styles.wrapper}>
			<Image
				src={imageSrc}
				alt={imageAlt}
				sizes="100vw"
				placeholder="blur"
				className={styles.image}
			/>
			{caption && (
				<figcaption>
					<Typography type="span">{caption}</Typography>
				</figcaption>
			)}
		</figure>
	)
}
