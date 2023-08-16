'use client'
import { useState } from 'react'
import { Section, Testimonial } from '@/components'
import styles from './testimonials.styles.module.css'
import { TestimonialPositionButtons } from './TestimonialPositionButtons'
import { TESTIMONIALS } from '@/constants/testimonials'

export function Testimonials() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0)

	return (
		<Section
			ariaLabel="Testimonials about Greg as a person/developer"
			className={styles.wrapper}
		>
			<a id="testimonials" className="anchor" />
			<div className={styles.blockQuoteWrapper}>
				<Testimonial
					key={TESTIMONIALS[currentTestimonial].name}
					img={TESTIMONIALS[currentTestimonial].img}
					imgAltText={TESTIMONIALS[currentTestimonial].imgAltText}
					leadText={TESTIMONIALS[currentTestimonial].leadText}
					bodyText={TESTIMONIALS[currentTestimonial].bodyText}
					name={TESTIMONIALS[currentTestimonial].name}
					role={TESTIMONIALS[currentTestimonial].role}
				/>
			</div>
			<TestimonialPositionButtons
				currentTestimonial={currentTestimonial}
				setCurrentTestimonial={setCurrentTestimonial}
			/>
		</Section>
	)
}
