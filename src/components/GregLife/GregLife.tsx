'use client'
import { motion } from 'framer-motion'
import { Typography, Section } from '@/components'
import Image from 'next/image'
import styles from './gregLife.styles.module.css'
import canvaRooftop from '@/assets/images/greg-at-canva-peace-sign.jpg'
import cuddleCats from '@/assets/images/greg-cuddling-cats-with-grin.jpg'
import purpleDoodle from '@/assets/svg/purple-heading-doodle.svg'
import yellowDoodle from '@/assets/svg/hero-default-doodle-2.svg'

const IMAGE_CUBIC_BEZIER = [0.29, 0.13, 0.3, 1]
const IMAGE_DURATION = 1.5

// TODO: This is getting a touch yuck.. I wonder if we could split the motion imgs out into its own component?
export function GregLife() {
	return (
		<Section
			variant="hero"
			ariaLabel="An opening welcome from Greg to visitors of his portfolio site"
			className={`${styles.wrapper} container`}
		>
			<div className={styles.imageWrapper}>
				<motion.div
					className={styles.cuddleCats}
					initial={{ x: -65, y: 65, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					transition={{
						ease: IMAGE_CUBIC_BEZIER,
						duration: IMAGE_DURATION,
					}}
				>
					<Image
						alt="Greg holding his two cats Sesame and Rame and smiling excitedly"
						src={cuddleCats}
					/>
				</motion.div>
				<motion.div
					className={styles.canvaRooftop}
					initial={{ x: -65, y: 65, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					transition={{
						ease: IMAGE_CUBIC_BEZIER,
						duration: IMAGE_DURATION,
						delay: 0.25,
					}}
				>
					<Image
						alt="Greg sitting on the sunny Canva rooftop eating a cookie giving the peace sign"
						src={canvaRooftop}
					/>
				</motion.div>
				<motion.span
					className={styles.yellowDoodleContainer}
					animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0, scale: 0.5 }}
					transition={{
						ease: IMAGE_CUBIC_BEZIER,
						duration: 0.5,
						delay: 1.5,
					}}
				>
					<Image
						src={yellowDoodle}
						alt="Doodle"
						className={styles.yellowDoodle}
					/>
				</motion.span>
			</div>
			<div className={styles.type}>
				<Typography type="h1">
					<a id="greg-life" className="anchor" />
					Greg life
					<span className={styles.purpleDoodleContainer}>
						<Image
							src={purpleDoodle}
							alt="Doodle"
							className={styles.purpleDoodle}
						/>
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
