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

	return (
		<Section
			ariaLabel="Testimonials about Greg as a person/developer"
			className={`${styles.wrapper}`}
		>
			<motion.div
				className={`${styles.contentWrapper} container`}
				variants={fadeInUpVariants}
				viewport={{ once: true }}
				initial="hidden"
				whileInView="visible"
			>
				<a id="testimonials" className="anchor" />
				<div className={styles.gridWrapper}>
					<AnimatePresence>
						{/* TODO: Karins first */}
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
				<Controls
					currentTestimonial={currentTestimonial}
					setCurrentTestimonial={setCurrentTestimonial}
				/>
				<Pagination
					currentTestimonial={currentTestimonial}
					setCurrentTestimonial={setCurrentTestimonial}
				/>
			</motion.div>
		</Section>
	)
}
