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
	{
		img: testimonialImage,
		imgAltText: 'Testimonial will go here',
		leadText: 'Lorem ipsum dolor sit amet.',
		bodyText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam explicabo numquam deserunt est adipisci ducimus? Maiores itaque consectetur similique!',
		name: 'Smith John',
		role: 'King of the shits',
	},
	{
		img: testimonialImage,
		imgAltText: 'Testimonial will go here',
		leadText: 'Lorem ipsum dolor sit amet.',
		bodyText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam explicabo numquam deserunt est adipisci ducimus? Maiores itaque consectetur similique!',
		name: 'John Smith',
		role: 'King of the shits',
	},
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
			<div className={styles.buttonsWrapper}>
				<button className={styles.button} />
				<button className={styles.button} />
				<button className={styles.button} />
				<button className={styles.button} />
			</div>
		</Section>
	)
}
