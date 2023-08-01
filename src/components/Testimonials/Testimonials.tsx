'use client'
import { useState } from 'react'
import { Section, Testimonial } from '@/components'
import styles from './testimonials.styles.module.css'
import testimonialImage from '@/assets/images/greg-and-cat-in-barossa.jpg'

const TESTIMONIALS = [
	{
		img: testimonialImage,
		imgAltText: 'Testimonial will go here',
		leadText: 'Lorem ipsum dolor sit amet.',
		bodyText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam explicabo numquam deserunt est adipisci ducimus? Maiores itaque consectetur similique!',
		name: 'John Smith',
		role: 'King of the shits',
	},
]

export function Testimonials() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0)
	return (
		<Section
			ariaLabel="Testimonials about Greg as a person/developer"
			className={styles.wrapper}
		>
			{TESTIMONIALS.map(testimonial => (
				<Testimonial
					key={testimonial.name}
					img={testimonial.img}
					imgAltText={testimonial.imgAltText}
					leadText={testimonial.leadText}
					bodyText={testimonial.bodyText}
					name={testimonial.name}
					role={testimonial.role}
				/>
			))}
		</Section>
	)
}
