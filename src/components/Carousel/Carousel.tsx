'use client'
import { ReactNode, ReactPortal, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Controls } from '@/components'

interface CarouselProps<T> {
	items: T[]
}

export function Carousel<T extends ReactPortal & ReactNode>({
	items,
}: CarouselProps<T>) {
	const [currentIndex, setCurrentIndex] = useState(0)

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
		<div>
			{items[currentIndex]}
			<Controls
				onRightClick={handleNext}
				onLeftClick={handlePrevious}
				leftDisabled={leftDisabled}
				rightDisabled={rightDisabled}
			/>
		</div>
	)
}
