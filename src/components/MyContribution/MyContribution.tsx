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
						With three years of Software Engineering as well as years Graphic
						Design knowledge under my belt, I can walk the turmultuous line
						between engineering and design. I love the frontend side as it
						allows me to still dip my toes in the creative side of building
						software.
					</Typography>
					<Typography color="white">
						I&apos;ve kicked off my time as a developer traversing both ends of
						the technology stack as I beleive it would make me a far better
						frontend engineer than sticking purely with the front side of the
						stack. Knowing how the frontend interacts with your backend is
						important to me as I believe it helps with the structruing and
						architectural needs of the frontend.
					</Typography>
				</div>
			</div>
		</Section>
	)
}
