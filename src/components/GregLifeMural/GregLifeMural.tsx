'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedTypography, AnimatedImage } from '@/components'
import {
	FADE_IN_ANIMATION_CONFIG,
	FADE_RIGHT_IN_ANIMATION_CONFIG,
} from '@/constants/animation'
import { useWindowSize } from '@uidotdev/usehooks'
import babyLaptop from '@/assets/images/greg-and-cat-with-baby-laptop.jpg'
import barossa from '@/assets/images/greg-and-cat-in-barossa.jpg'
import gesture from '@/assets/images/greg-making-a-gesture.jpg'
import styles from './gregLifeMural.styles.module.css'

export function GregLifeMural() {
	const { width } = useWindowSize()
	let isMobile = false
	if (width !== null && width < 992) {
		isMobile = true
	}
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
					src={babyLaptop}
					alt="Greg and wife Cat holding baby laptop toy"
					className={styles.babyLaptop}
					{...FADE_IN_ANIMATION_CONFIG}
					style={{ translateY: translateY }}
				/>
				<AnimatedImage
					src={barossa}
					alt="Greg and wife Cat in barossa valley"
					className={styles.barossa}
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
