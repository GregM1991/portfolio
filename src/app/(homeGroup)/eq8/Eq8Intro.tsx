import Image from 'next/image'
import { Typography } from '@/components'
import { OPENING } from '@/constants/eq8Content'
import styles from './eq8.styles.module.css'

export function Eq8Intro() {
	return (
		<>
			<section aria-label="Description and introduction to the eq8 project page">
				<Typography type="h1" size="2xl">
					{OPENING.heading}
				</Typography>
				<div className={styles.doubleColumn}>
					{OPENING.body.map(({ key, copy }) => (
						<Typography key={key}>{copy}</Typography>
					))}
				</div>
			</section>
			<div className={styles.imageWrapper}>
				<Image
					src={OPENING.imageSrc}
					alt={OPENING.imageAlt}
					fill
					sizes="100vw"
					placeholder="blur"
				/>
			</div>
		</>
	)
}
