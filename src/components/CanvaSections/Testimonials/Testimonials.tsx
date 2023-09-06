'use client'
import { useState } from 'react'
import { Section, Testimonial } from '@/components'
import { Pagination } from './Pagination/Pagination'
import { Controls } from './Controls/Controls'
import { TESTIMONIALS } from '@/constants/testimonials'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeInUpVariants } from '@/constants/animation'
import styles from './testimonials.styles.module.css'

export function Testimonials() {
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
		<Section
			ariaLabel="Testimonials about Greg as a person/developer"
			className={`${styles.wrapper}`}
		>
			<span id="testimonials" className="anchor" />
			<motion.div
				className={`${styles.contentWrapper} container`}
				variants={fadeInUpVariants}
				viewport={{ once: true }}
				initial="hidden"
				whileInView="visible"
			>
				<div className={styles.gridWrapper}>
					<AnimatePresence>
						<Testimonial
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
			</motion.div>
			<Controls
				currentTestimonial={currentTestimonial}
				onRightClick={handleControlRightClick}
				onLeftClick={handleControlLeftClick}
			/>
		</Section>
	)
}
