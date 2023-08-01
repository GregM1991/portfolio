'use client'
import { useState } from 'react'
import { Section, Testimonial } from '@/components'
import styles from './testimonials.styles.module.css'
import testimonialImage from '@/assets/images/greg-and-cat-in-barossa.jpg'
import testimonialImage2 from '@/assets/images/greg-driving-mario-kart.jpg'
import testimonialImage3 from '@/assets/images/greg-in-sun-with-silly-hat.jpg'
import testimonialImage4 from '@/assets/images/greg-on-couch-with-laptop-and-rosie.jpg'

const TESTIMONIALS = [
	{
		img: testimonialImage,
		imgAltText: 'Testimonial will go here',
		leadText: 'Testimonial will go here',
		bodyText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam explicabo numquam deserunt est adipisci ducimus? Maiores itaque consectetur similique!',
		name: 'John Smith',
		role: 'King of the shits',
	},
	{
		img: testimonialImage2,
		imgAltText: 'This is the second testimonial',
		leadText: 'This is the second testimonial',
		bodyText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam explicabo numquam deserunt est adipisci ducimus? Maiores itaque consectetur similique!',
		name: 'Smith John',
		role: 'Shit of the kings',
	},
	{
		img: testimonialImage3,
		imgAltText: 'This is the third testimonial',
		leadText: 'This is the third testimonial',
		bodyText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam explicabo numquam deserunt est adipisci ducimus? Maiores itaque consectetur similique!',
		name: 'Pantaloons mcgee',
		role: 'Clown',
	},
	{
		img: testimonialImage4,
		imgAltText: 'And the Fourth!',
		leadText: 'And the Fourth!',
		bodyText:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam explicabo numquam deserunt est adipisci ducimus? Maiores itaque consectetur similique!',
		name: 'Bob Saget',
		role: 'Renowned Wild Man',
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
				<button
					className={`${styles.button} ${
						currentTestimonial === 0 ? styles.active : null
					}`}
					onClick={() => setCurrentTestimonial(0)}
				/>
				<button
					className={`${styles.button} ${
						currentTestimonial === 1 ? styles.active : null
					}`}
					onClick={() => setCurrentTestimonial(1)}
				/>
				<button
					className={`${styles.button} ${
						currentTestimonial === 2 ? styles.active : null
					}`}
					onClick={() => setCurrentTestimonial(2)}
				/>
				<button
					className={`${styles.button} ${
						currentTestimonial === 3 ? styles.active : null
					}`}
					onClick={() => setCurrentTestimonial(3)}
				/>
			</div>
		</Section>
	)
}
