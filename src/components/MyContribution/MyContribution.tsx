import { Section, Typography, Image } from '@/components'
import playingPool from '@/assets/images/greg-playing-pool.jpg'
import styles from './myContribution.styles.module.css'

export function MyContribution() {
	return (
		<Section bgColor="indigo" ariaLabel="My contribution">
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<Image
						src={playingPool}
						alt="Greg playing pool, leaning over the table to take a shot."
						className={styles.playingPool}
					/>
				</div>
				<div className={styles.textWrapper}>
					<Typography type="h2" color="white" variant="h2Rich">
						My contribution <a id="my-contribution" />
					</Typography>
					<Typography color="white">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
						labore minus porro ad. Praesentium accusamus error nam facilis
						explicabo aliquid. Lorem ipsum dolor, sit amet consectetur
						adipisicing elit. Quas labore minus porro ad. Praesentium accusamus
						error nam facilis explicabo aliquid.
					</Typography>
				</div>
			</div>
		</Section>
	)
}
