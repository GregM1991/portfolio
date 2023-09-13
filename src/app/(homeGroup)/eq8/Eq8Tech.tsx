import { Typography } from '@/components'
import { EQ8_TECH } from '@/constants/eq8Content'
import styles from './eq8.styles.module.css'

export function Eq8Tech() {
	return (
		<section aria-label="Technologies used at eQ8">
			<Typography type="h2" size="xl">
				Tech Stack
			</Typography>
			<ul role="list" className={styles.tech}>
				{EQ8_TECH.map((tech, index) => (
					<li key={`${index}-${tech}`}>
						<Typography type="span">
							<span className={styles.liDecoration}>○</span>
							{tech}
						</Typography>
					</li>
				))}
			</ul>
		</section>
	)
}
