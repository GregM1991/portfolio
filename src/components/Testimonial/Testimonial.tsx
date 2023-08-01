import { Image, Typography } from '@/components'
import styles from './testimonial.styles.module.css'
import { StaticImageData } from 'next/image'

interface TestimonialProps {
	img: StaticImageData
	imgAltText: string
	leadText: string
	bodyText: string
	name: string
	role: string
}

export function Testimonial({
	img,
	imgAltText,
	leadText,
	bodyText,
	name,
	role,
}: TestimonialProps) {
	return (
		<>
			<div className={styles.imageWrapper}>
				<Image
					src={img}
					alt={imgAltText}
					className={styles.img}
					width={450}
					height={600}
				/>
			</div>
			<blockquote className={styles.blockquote}>
				<Typography variant="blockquoteLead">{leadText}</Typography>
				<Typography>{bodyText}</Typography>
				<footer className={styles.footer}>
					<cite className={styles.cite}>{name}</cite>
					<small>{role}</small>
				</footer>
			</blockquote>
		</>
	)
}
