import {
	Typography,
	AnimatedTypography,
	AnimatedImage,
	Section,
} from '@/components'
import styles from './gregLife.styles.module.css'
import canvaRooftop from '@/assets/images/greg-at-canva-peace-sign.jpg'
import cuddleCats from '@/assets/images/greg-cuddling-cats-with-grin.jpg'
import purpleDoodle from '@/assets/svg/purple-heading-doodle.svg'
import yellowDoodle from '@/assets/svg/hero-default-doodle-2.svg'

const IMAGE_CUBIC_BEZIER = [0.29, 0.13, 0.3, 1]
const IMAGE_DURATION = 1.5

export function GregLife() {
	return (
		<Section
			variant="hero"
			ariaLabel="An opening welcome from Greg to visitors of his portfolio site"
			className={`${styles.wrapper} container`}
		>
			<div className={styles.imageWrapper}>
				<AnimatedImage
					alt="Greg holding his two cats Sesame and Rame and smiling excitedly"
					src={cuddleCats}
					initial={{ x: -65, y: 65, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					transition={{
						ease: IMAGE_CUBIC_BEZIER,
						duration: IMAGE_DURATION,
					}}
					className={styles.cuddleCats}
				/>
				<AnimatedImage
					alt="Greg sitting on the sunny Canva rooftop eating a cookie giving the peace sign"
					src={canvaRooftop}
					className={styles.canvaRooftop}
					initial={{ x: -65, y: 65, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					transition={{
						ease: IMAGE_CUBIC_BEZIER,
						duration: IMAGE_DURATION,
						delay: 0.25,
					}}
				/>

				<AnimatedImage
					src={yellowDoodle}
					alt="Yellow doodle"
					animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0, scale: 0.5 }}
					transition={{
						ease: IMAGE_CUBIC_BEZIER,
						duration: 0.5,
						delay: 1.5,
					}}
					className={styles.yellowDoodle}
				/>
			</div>
			<div className={styles.type}>
				<AnimatedTypography
					type="h1"
					animate={{ opacity: 1 }}
					transition={{
						ease: IMAGE_CUBIC_BEZIER,
						duration: 1,
					}}
				>
					<a id="greg-life" className="anchor" />
					Greg life
					<AnimatedImage
						src={purpleDoodle}
						alt="Purple doodle"
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0.5 }}
						transition={{
							ease: IMAGE_CUBIC_BEZIER,
							duration: 0.5,
							delay: 1.5,
						}}
						className={styles.purpleDoodle}
					/>
				</AnimatedTypography>
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
