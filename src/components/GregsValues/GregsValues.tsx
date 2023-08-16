import { Section, Typography, CardCarousel } from '@/components'
import styles from './gregsValues.styles.module.css'

export function GregsValues() {
	return (
		<Section bgColor="red" ariaLabel="My values" className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<Typography type="h2" color="white" variant="programHeader">
					<a id="gregs-values" className="anchor" />
					Greg&apos;s values
				</Typography>
				<Typography color="white">
					I&apos;m a bit torn about what to throw down here, between writing
					down what my values are, or explaining how they align with
					Canva&apos;s values. I feel as though they align so well however,
					I&apos;m going to try and explain how.
				</Typography>
			</div>
			<CardCarousel />
		</Section>
	)
}
