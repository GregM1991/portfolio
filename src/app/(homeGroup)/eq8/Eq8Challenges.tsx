import React from 'react'
import { Tldr, Typography } from '@/components'
import { CHALLENGES } from '@/constants/eq8Content'
import styles from './eq8.styles.module.css'

export function Eq8Challenges() {
	return (
		<section aria-label="Gregs challenges at eq8">
			<Typography type="h2" size="xl">
				{CHALLENGES.heading}
			</Typography>
			<Tldr tldrString={CHALLENGES.tldr} className={styles.tldr}>
				<div className={styles.doubleColumn}>
					{CHALLENGES.body.map(({ key, copy }) => (
						<Typography key={key}>{copy}</Typography>
					))}
				</div>
			</Tldr>
		</section>
	)
}
