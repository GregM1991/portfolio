import * as React from 'react'
import { Typography, Image, Section } from '@/components'
import canvaRooftop from '@/assets/images/greg-at-canva-peace-sign.jpg'
import cuddleCats from '@/assets/images/greg-cuddling-cats-with-grin.jpg'
import doodle from '@/assets/svg/purple-heading-doodle.svg'

import styles from './gregLife.styles.module.css'

export function GregLife() {
	return (
		<Section
			variant="hero"
			ariaLabel="An opening welcome from Greg to visitors of his portfolio site"
			className={styles.wrapper}
		>
			{/* TODO: change this to something useful */}
			<div className={styles.imageWrapper}>
				<Image
					alt="Greg holding his two cats Sesame and Rame and smiling excitedly"
					src={cuddleCats}
					width={190}
					height={190}
					className={styles.cuddleCats}
				/>
				<Image
					alt="My first image"
					src={canvaRooftop}
					width={500}
					height={500}
					className={styles.canvaRooftop}
				/>
			</div>
			<div className={styles.type}>
				<Typography type="h1">
					Greg life <a id="greg-life" />
					<span className={styles.doodleContainer}>
						<Image src={doodle} alt="Doodle" className={styles.doodle} />
					</span>
				</Typography>
				<Typography variant="pLead">
					Sometimes the chance comes along to be part of something truly
					special. With a cheeky smile and passion for the industry, I offer
					both dedication and willingness to eat up all there is to learn. I
					want to be empowered by the best workers and the best workplace, which
					of course, is Canva.
				</Typography>
			</div>
		</Section>
	)
}
