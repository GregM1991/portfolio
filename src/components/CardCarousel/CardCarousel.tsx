'use client'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import styles from './cardCarousel.styles.module.css'
import { values } from '@/constants/values'
import { Card } from './Card'
import { motion } from 'framer-motion'
import { FADE_UP_IN_ANIMATION_CONFIG } from '@/constants/animation'

export function CardCarousel() {
	const [transformValue, setTransformValue] = React.useState(0)
	const style = {
		'--carousel-transform': `translateX(${transformValue}%)`,
	} as React.CSSProperties

	function onClickRight() {
		if (transformValue < -80) return
		setTransformValue(transformValue => transformValue - 16.6667)
	}

	function onClickLeft() {
		if (transformValue >= 0) return
		setTransformValue(transformValue => transformValue + 16.6667)
	}

	return (
		<motion.div {...FADE_UP_IN_ANIMATION_CONFIG} className={styles.wrapper}>
			<div className={styles.carouselContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.carouselSlider} style={style}>
						{values.map(value => (
							<Card title={value.title} body={value.body} key={value.title} />
						))}
					</div>
				</div>
			</div>
			<div className={styles.buttonWrapper}>
				{/* TODO: extract this button as it will be used in Testimonials */}
				<button
					disabled={transformValue >= 0}
					className={styles.button}
					onClick={onClickLeft}
				>
					<ChevronLeftIcon />
				</button>
				<button
					disabled={transformValue < -80}
					className={styles.button}
					onClick={onClickRight}
				>
					<ChevronRightIcon />
				</button>
			</div>
		</motion.div>
	)
}
