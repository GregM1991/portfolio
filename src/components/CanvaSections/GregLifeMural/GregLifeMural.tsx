'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedTypography, AnimatedImage } from '@/components'
import { fadeInVariants, fadeInRightVariants } from '@/constants/animation'
import standing from '@/assets/images/greg-standing-on-clifftop-in-tasmania.jpg'
import lights from '@/assets/images/greg-silhouette-in-lights.jpg'
import gesture from '@/assets/images/greg-making-a-gesture.jpg'
import { useIsMobile } from '@/shared/hooks/useIsMobile'
import styles from './gregLifeMural.styles.module.css'

export function GregLifeMural() {
	const isMobile = useIsMobile()
	const wrapperRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ['200px end', 'end start'],
	})
	const translateY = useTransform(
		scrollYProgress,
		[0, 1],
		['0%', isMobile ? '0%' : '-20%'],
	)
	const trasnlateYOpposite = useTransform(
		scrollYProgress,
		[0, 1],
		['0%', isMobile ? '0%' : '20%'],
	)
	const translateYNDouble = useTransform(
		scrollYProgress,
		[0, 1],
		['0%', isMobile ? '0%' : '-40%'],
	)
	return (
		<motion.div
			className={styles.wrapper}
			variants={fadeInVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			ref={wrapperRef}
		>
			<span id="greg-life-mural" className="anchor" />
			<AnimatedImage
				src={standing}
				alt="Greg standing on a clifftop in Tasmania looking off into the distance"
				className={styles.standing}
				sizes="(max-width: 992px) 100vw, 58vw"
				initial="hidden"
				whileInView="visible"
				style={{ translateY: translateY }}
			/>
			<AnimatedImage
				src={lights}
				alt="Greg walking through Japanese light show, bare foot and silhouetted"
				className={styles.lights}
				sizes="(max-width: 992px) 50vw, 500px"
				initial="hidden"
				whileInView="visible"
				style={{ translateY: translateYNDouble }}
			/>
			<AnimatedImage
				src={gesture}
				alt="Greg making a silly gesture with his hands"
				className={styles.gesture}
				sizes="(max-width: 992px) 50vw, 290px"
				initial="hidden"
				whileInView="visible"
				style={{ translateY: trasnlateYOpposite }}
			/>
			<AnimatedTypography
				type="span"
				color="white"
				variants={fadeInRightVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className={styles.text}
			>
				#GregLife
			</AnimatedTypography>
		</motion.div>
	)
}
