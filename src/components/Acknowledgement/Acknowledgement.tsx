import { Typography } from '@/components'
import styles from './acknowledgment.styles.module.css'

export function Acknowledgement() {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.textWrapper} container`}>
				<Typography type="h2" color="white" className={styles.header}>
					Acknowledgement of Country
				</Typography>
				<Typography color="white" className={styles.body}>
					I would like to acknowledge the Gadigal people of the Eora Nation, the
					traditional custodians of the land on which I live and work. I pay my
					respects to their elders past, present, and emerging, and acknowledge
					that their sovereignty was never ceded. I recognise the continuing
					connection of the Gadigal people to this land, its waterways, and
					community.
				</Typography>
				<Typography color="white" className={styles.body}>
					I am privileged to live and work on Gadigal land, and I am committed
					to honoring and respecting the enduring culture and contributions of
					the Gadigal people and all Aboriginal and Torres Strait Islander
					peoples.
				</Typography>
			</div>
		</div>
	)
}
