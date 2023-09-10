'use client'
import { useState } from 'react'
import { NewTestimonial } from '@/components'
import { Pagination } from '@/components/CanvaSections/Testimonials/Pagination/Pagination'
import { Controls } from '@/components/CanvaSections/Testimonials/Controls/Controls'
import { TESTIMONIALS } from '@/constants/testimonials'
import { AnimatePresence } from 'framer-motion'
import styles from './newTestimonials.styles.module.css'

// TODO: Need to merge these and canva Testimonials so that there's not two..
export function NewTestimonials() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0)

	const handleControlRightClick = () => {
		if (currentTestimonial === 3) return
		setCurrentTestimonial(currentTestimonial + 1)
	}

	const handleControlLeftClick = () => {
		if (currentTestimonial === 0) return
		setCurrentTestimonial(currentTestimonial - 1)
	}

	const handlePaginationClick = (num: number) => {
		setCurrentTestimonial(num)
	}

	return (
		<section aria-label="Testimonials about Greg as a person/developer">
			<div className={styles.wrapper}>
				<div className={styles.gridWrapper}>
					<AnimatePresence>
						<NewTestimonial
							key={TESTIMONIALS[currentTestimonial].key}
							img={TESTIMONIALS[currentTestimonial].img}
							imgAltText={TESTIMONIALS[currentTestimonial].imgAltText}
							leadText={TESTIMONIALS[currentTestimonial].leadText}
							bodyText={TESTIMONIALS[currentTestimonial].bodyText}
							name={TESTIMONIALS[currentTestimonial].name}
							role={TESTIMONIALS[currentTestimonial].role}
						/>
					</AnimatePresence>
				</div>
				<Pagination
					currentTestimonial={currentTestimonial}
					onClick={handlePaginationClick}
				/>
			</div>
			<Controls
				currentTestimonial={currentTestimonial}
				onRightClick={handleControlRightClick}
				onLeftClick={handleControlLeftClick}
			/>
		</section>
	)
}
