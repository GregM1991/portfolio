'use client'
import * as React from 'react'
import { Typography, Image, Section } from '@/components'
import canvaRooftop from '@/assets/images/greg-at-canva-peace-sign.jpg'
import cuddleCats from '@/assets/images/greg-cuddling-cats-with-grin.jpg'
import doodle from '@/assets/svg/purple-heading-doodle.svg'
import { motion } from 'framer-motion'
import styles from './gregLife.styles.module.css'

export function GregLife() {
	return (
		<Section
			variant="hero"
			ariaLabel="An opening welcome from Greg to visitors of his portfolio site"
			className={`${styles.wrapper} container`}
		>
			<motion.div
				className={styles.imageWrapper}
				initial={{ x: -65, y: 65, opacity: 0 }}
				animate={{ x: 0, y: 0, opacity: 1 }}
				transition={{ type: 'spring', stiffness: 100, damping: 25 }}
			>
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
			</motion.div>
			<div className={styles.type}>
				<Typography type="h1">
					<a id="greg-life" className="anchor" />
					Greg life
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
