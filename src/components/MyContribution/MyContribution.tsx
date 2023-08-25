'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useScroll, motion, useTransform, useSpring } from 'framer-motion'
import { AnimatedSection, Typography } from '@/components'
import playingPool from '@/assets/images/greg-playing-pool.jpg'
import { FADE_IN_ANIMATION_CONFIG } from '@/constants/animation'
import styles from './myContribution.styles.module.css'

export function MyContribution() {
	const wrapperRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ['start end', 'end start'],
	})
	const yScrollPercent = useSpring(scrollYProgress, {
		stiffness: 30,
		damping: 10,
		mass: 1.5,
	})
	const translateY = useTransform(yScrollPercent, [0, 1], ['0%', '-25%'])

	return (
		<AnimatedSection
			ref={wrapperRef}
			bgColor="indigo"
			ariaLabel="My contribution"
			initAnimatedConfig={{ opacity: 0 }}
			{...FADE_IN_ANIMATION_CONFIG}
		>
			<div className={styles.wrapper}>
				<motion.div
					className={styles.imageWrapper}
					{...FADE_IN_ANIMATION_CONFIG}
					style={{ translateY }}
				>
					<Image
						src={playingPool}
						alt="Greg playing pool, leaning over the table to take a shot."
						className={styles.playingPool}
					/>
				</motion.div>
				<div className={styles.textWrapper}>
					<Typography type="h2" color="white" variant="h2Rich">
						<a id="my-contribution" className="anchor" />
						My contribution
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
		</AnimatedSection>
	)
}
