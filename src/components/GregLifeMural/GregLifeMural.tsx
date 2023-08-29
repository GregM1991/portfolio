'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedTypography, AnimatedImage } from '@/components'
import {
	FADE_IN_ANIMATION_CONFIG,
	FADE_RIGHT_IN_ANIMATION_CONFIG,
} from '@/constants/animation'
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
		<>
			<a id="greg-life-mural" className="anchor" />
			<motion.div
				className={styles.wrapper}
				{...FADE_IN_ANIMATION_CONFIG}
				ref={wrapperRef}
			>
				<AnimatedImage
					src={standing}
					alt="Greg standing on a clifftop in Tasmania looking off into the distance"
					className={styles.standing}
					{...FADE_IN_ANIMATION_CONFIG}
					style={{ translateY: translateY }}
				/>
				<AnimatedImage
					src={lights}
					alt="Greg walking through Japanese light show, bare foot and silhouetted"
					className={styles.lights}
					{...FADE_IN_ANIMATION_CONFIG}
					style={{ translateY: translateYNDouble }}
				/>
				<AnimatedImage
					src={gesture}
					alt="Greg making a silly gesture with his hands"
					className={styles.gesture}
					{...FADE_IN_ANIMATION_CONFIG}
					style={{ translateY: trasnlateYOpposite }}
				/>
				<AnimatedTypography
					type="span"
					color="white"
					className={styles.text}
					{...FADE_RIGHT_IN_ANIMATION_CONFIG}
				>
					#GregLife
				</AnimatedTypography>
			</motion.div>
		</>
	)
}
