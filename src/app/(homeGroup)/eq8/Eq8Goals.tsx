import { Tldr, Typography } from '@/components'
import { GOALS } from '@/constants/eq8Content'
import styles from './eq8.styles.module.css'

export function Eq8Goals() {
	return (
		<section aria-label="Gregs goals at eq8">
			<Typography type="h2" size="xl">
				{GOALS.heading}
			</Typography>
			<Tldr tldrString={GOALS.tldr} className={styles.tldr}>
				<div className={styles.doubleColumn}>
					{GOALS.body.map(({ key, copy }) => (
						<Typography key={key}>{copy}</Typography>
					))}
				</div>
			</Tldr>
		</section>
	)
}
