'use client'
import styles from './testimonials.styles.module.css'
import { useState } from 'react'
import { Section, Testimonial } from '@/components'
import { Pagination } from './pagination/Pagination'
import { TESTIMONIALS } from '@/constants/testimonials'
import { Controls } from './controls/Controls'
import { AnimatePresence, motion } from 'framer-motion'
import { FADE_UP_IN_ANIMATION_CONFIG } from '@/constants/animation'

export function Testimonials() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0)

	return (
		<Section
			ariaLabel="Testimonials about Greg as a person/developer"
			className={`${styles.wrapper}`}
		>
			<motion.div
				className={`${styles.contentWrapper} container`}
				{...FADE_UP_IN_ANIMATION_CONFIG}
			>
				<a id="testimonials" className="anchor" />
				<div className={styles.gridWrapper}>
					<AnimatePresence>
						<Testimonial
							key={TESTIMONIALS[currentTestimonial].name}
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
					setCurrentTestimonial={setCurrentTestimonial}
				/>
			</motion.div>
			<Controls
				currentTestimonial={currentTestimonial}
				setCurrentTestimonial={setCurrentTestimonial}
			/>
		</Section>
	)
}
