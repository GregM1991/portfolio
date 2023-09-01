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
import { CUBIC_BEZIER, DURATION } from '@/constants/animation'

export function GregLife() {
	return (
		<Section
			variant="hero"
			ariaLabel="An opening welcome from Greg to visitors of his portfolio site"
			className={`${styles.wrapper} container`}
		>
			<a id="greg-life" className="anchor" />
			<div className={styles.imageWrapper}>
				<AnimatedImage
					alt="Greg holding his two cats Sesame and Rame and smiling excitedly"
					src={cuddleCats}
					sizes="(max-width: 768px) 102px, (max-width: 1200px) 150px, 190px"
					initial={{ x: -65, y: 65, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					transition={{
						ease: CUBIC_BEZIER,
						duration: DURATION,
					}}
					className={styles.cuddleCats}
				/>
				<AnimatedImage
					alt="Greg sitting on the sunny Canva rooftop eating a cookie giving the peace sign"
					src={canvaRooftop}
					priority
					className={styles.canvaRooftop}
					sizes="(max-width: 768px) 270px, (max-width: 992px) 400px, (max-width: 1400px) 42vw, 600px"
					initial={{ x: -65, y: 65, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					transition={{
						ease: CUBIC_BEZIER,
						duration: DURATION,
						delay: 0.25,
					}}
				/>
				<AnimatedImage
					src={yellowDoodle}
					alt="Yellow doodle"
					animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0, scale: 0.5 }}
					transition={{
						ease: CUBIC_BEZIER,
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
						ease: CUBIC_BEZIER,
						duration: 1,
					}}
				>
					Greg life
					<AnimatedImage
						src={purpleDoodle}
						alt="Purple doodle"
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0.5 }}
						transition={{
							ease: CUBIC_BEZIER,
							duration: 0.5,
							delay: 1.5,
						}}
						className={styles.purpleDoodle}
					/>
				</AnimatedTypography>
				<Typography variant="pLead">
					Sometimes the chance comes along to be part of something truly
					special. With a cheeky smile and a huge passion for the industry, I
					offer a willingness and dedication to eat up all there is to learn. I
					want to be empowered by the best workers at the best workplace, which
					of course, is Canva. I hope my eagerness is shown through my building
					this personlised portfolio, of which the code can be found on my
					github (link in the footer).
				</Typography>
			</div>
		</Section>
	)
}
