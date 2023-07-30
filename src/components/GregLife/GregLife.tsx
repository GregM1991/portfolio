import * as React from 'react'
import { Typography, Image, Section } from '@/components'
import canvaRooftop from '@/assets/images/greg-at-canva-peace-sign.jpg'
import cuddleCats from '@/assets/images/greg-cuddling-cats-with-grin.jpg'
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
				</Typography>
				<Typography variant="pLead">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid. Lorem, Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Delectus
				</Typography>
			</div>
		</Section>
	)
}
