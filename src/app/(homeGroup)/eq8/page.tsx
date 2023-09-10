import { Typography } from '@/components'
import styles from './eq8.styles.module.css'

export default function Eq8Project() {
	return (
		<main className={styles.wrapper}>
			<Typography type="h1" size="2xl">
				Working at eQ8
			</Typography>
			<Typography className={styles.openingCopy}>
				I had a great experience working at eQ8, the team there are a fun bunch
				of people and we were never short of a good time, you would have seen a
				few of my workmates from the thumbnail on the homepage.
			</Typography>
			<Typography className={styles.openingCopy}>
				EQ8 is in the start-up phase and the environment showed this. The
				lessons I learned at my time there had a lot to do with what&apos;s
				necessary for the product to maximise use-ability and minimise
				time-to-market.
			</Typography>
		</main>
	)
}
