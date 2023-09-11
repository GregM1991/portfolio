import { Typography } from '@/components'
import Image from 'next/image'
import eq8Gang from '@/assets/images/eq8-pub.jpg'
import styles from './eq8.styles.module.css'

export default function Eq8Project() {
	return (
		<main className={styles.wrapper}>
			<div>
				<Typography type="h1" size="2xl">
					Working at eQ8
				</Typography>
				<Typography className={styles.openingCopy}>
					I had a great experience working at eQ8, the team there are a fun
					bunch of people and we were never short of a good time, you can see a
					few of my workmates below.
				</Typography>
				<Typography className={styles.openingCopy}>
					EQ8 is in the start-up phase and the environment showed this. The
					lessons I learned at my time there had a lot to do with what&apos;s
					necessary for the product to maximise use-ability and minimise
					time-to-market.
				</Typography>
			</div>
			<div className={styles.imageWrapper}>
				<Image
					src={eq8Gang}
					alt="Greg, Annisa and Aaron smiling and having a beer in the sunshine"
					fill
					sizes="100vw"
					placeholder="blur"
				/>
			</div>
			{/* IMAGE */}
			{/* GOALS OF WORKING */}
			{/* CHALLENGES AND GROWTH */}
			{/* SPOTLIGHT 1 */}
			{/* CONTRIBUTIONS */}
			{/* SPOTLIGHT 2 */}
			{/* CONTRIBUTIONS */}
			{/* OVERVIEW */}
		</main>
	)
}
