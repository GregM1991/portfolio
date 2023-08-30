'use client'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { values } from '@/constants/values'
import { fadeInUpVariants } from '@/constants/animation'
import { Card } from './Card'
import { FAB } from '@/components'
import { motion } from 'framer-motion'
import styles from './cardCarousel.styles.module.css'

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
		<motion.div
			variants={fadeInUpVariants}
			viewport={{ once: true }}
			initial="hidden"
			whileInView="visible"
			className={styles.wrapper}
		>
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
				<FAB
					icon={<ChevronLeftIcon />}
					ariaLabel="left arrow icon"
					disabled={transformValue >= 0}
					className={styles.button}
					onClick={onClickLeft}
				/>
				<FAB
					icon={<ChevronRightIcon />}
					ariaLabel="right arrow icon"
					disabled={transformValue < -80}
					className={styles.button}
					onClick={onClickRight}
				/>
			</div>
		</motion.div>
	)
}
