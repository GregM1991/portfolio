'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Controls, Typography } from '@/components'
import { Screen } from '@/app/(homeGroup)/eq8/content'
import styles from './carousel.styles.module.css'
import clsx from 'clsx'

interface CarouselProps {
	items: Screen[]
	className: string
}

export function Carousel({ items, className }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const indexItem = items[currentIndex]
	const classes = clsx([styles.wrapper, className])

	const handleNext = () => {
		if (currentIndex === items.length - 1) return
		setCurrentIndex(prevIndex => prevIndex + 1)
	}

	const handlePrevious = () => {
		if (currentIndex === 0) return
		setCurrentIndex(prevIndex => prevIndex - 1)
	}

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	const leftDisabled = currentIndex === 0
	const rightDisabled = currentIndex === items.length - 1

	return (
		<div className={classes}>
			<div className={styles.imageWrapper}>
				<Image
					key={indexItem.key}
					src={indexItem.src}
					alt={indexItem.alt}
					fill
					className={styles.imageStyle}
				/>
				{indexItem.imageDescription && (
					<span className={styles.description}>
						<Typography type="span">{indexItem.imageDescription}</Typography>
					</span>
				)}
			</div>
			<Controls
				onRightClick={handleNext}
				onLeftClick={handlePrevious}
				leftDisabled={leftDisabled}
				rightDisabled={rightDisabled}
			/>
		</div>
	)
}
