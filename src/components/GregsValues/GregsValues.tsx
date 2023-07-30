import { Section, Typography, CardCarousel } from '@/components'
import styles from './gregsValues.styles.module.css'

export function GregsValues() {
	return (
		<Section bgColor="red" ariaLabel="My values" className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<Typography type="h2" color="white" variant="programHeader">
					Greg&apos;s values <a id="gregs-values" />
				</Typography>
				<Typography color="white">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid. error nam facilis explicabo aliquid.
				</Typography>
			</div>
			<CardCarousel />
		</Section>
	)
}
