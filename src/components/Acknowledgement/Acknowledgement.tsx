import styles from './acknowledgment.styles.module.css'
import { Typography } from '@/components'

export function Acknowledgement() {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.textWrapper} container`}>
				<Typography type="h2" color="white" className={styles.header}>
					Acknowledgement of Country
				</Typography>
				<Typography
					color="white"
					variant="acknowledgementBody"
					className={styles.body}
				>
					I would like to begin by acknowledging the Gadigal people, the
					traditional custodians of the land on which I live and work. I pay my
					respects to their Elders past, present, and emerging, and acknowledge
					that their sovereignty was never ceded. I recognize the continuing
					connection of the Gadigal people to this land, its waterways, and
					community.
				</Typography>
				<Typography
					color="white"
					variant="acknowledgementBody"
					className={styles.body}
				>
					As a software developer, I am privileged to live and work on Gadigal
					land, and I am committed to honoring and respecting the enduring
					culture and contributions of the Gadigal people and all Aboriginal and
					Torres Strait Islander peoples.
				</Typography>
			</div>
		</div>
	)
}
