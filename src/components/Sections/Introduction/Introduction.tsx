import { Section, Typography } from '@/components'
import styles from './introduction.styles.module.css'

export function Introduction() {
	return (
		<Section
			ariaLabel="Introduction to Greg's portfolio"
			className={styles.wrapper}
		>
			<Typography color="primary" type="h1" size="six-xl">
				Greg&apos;s Place
			</Typography>
		</Section>
	)
}
