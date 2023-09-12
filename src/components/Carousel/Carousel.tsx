'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Controls } from '@/components'
import { Screen } from '@/app/(homeGroup)/eq8/content'
import styles from './carousel.styles.module.css'

interface CarouselProps {
	items: Screen[]
}

export function Carousel({ items }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const indexItem = items[currentIndex]

	const handleNext = () => {
		setCurrentIndex(prevIndex =>
			prevIndex + 1 === items.length ? 0 : prevIndex + 1,
		)
	}

	const handlePrevious = () => {
		setCurrentIndex(prevIndex =>
			prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1,
		)
	}

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	const leftDisabled = currentIndex === 0
	const rightDisabled = currentIndex === items.length - 1

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image
					key={indexItem.key}
					src={indexItem.src}
					alt={indexItem.alt}
					fill
				/>
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
