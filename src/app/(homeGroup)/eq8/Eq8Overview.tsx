import { Typography } from '@/components'
import styles from './eq8.styles.module.css'
import { OVERVIEW } from '@/constants/eq8Content'

export function Eq8Overview() {
	return (
		<section aria-label="An overview of Gregs time at eq8">
			<Typography type="h3" size="xl">
				{OVERVIEW.heading}
			</Typography>
			<div className={styles.doubleColumn}>
				<Typography>{OVERVIEW.description}</Typography>
			</div>
		</section>
	)
}
