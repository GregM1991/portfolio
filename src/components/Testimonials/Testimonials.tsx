'use client'
import { useState } from 'react'
import { Section, Testimonial } from '@/components'
import styles from './testimonials.styles.module.css'
import testimonialImage from '@/assets/images/greg-and-cat-in-barossa.jpg'
import karin from '@/assets/images/karin.jpg'
import aaron from '@/assets/images/aaron.jpg'
import testimonialImage4 from '@/assets/images/greg-on-couch-with-laptop-and-rosie.jpg'
import { TestimonialPositionButtons } from './TestimonialPositionButtons'

const TESTIMONIALS = [
	{
		img: testimonialImage,
		imgAltText: 'Testimonial will go here',
		leadText:
			'Our time working together at Office-Hub was a ball, Greg brought a great vibe to the small team',
		bodyText:
			"If you're looking for a Software Engineer comfortable across the full stack (with a penchant for frontend), I can't recommend Greg highly enough. He's a dream to work with - very creative and has a great eye for detail.",
		name: 'Andy Muprhy (He/Him)',
		role: 'Snr Software Engineer, Domain',
	},
	{
		img: karin,
		imgAltText: 'Karin smiling on a beach in front of a white beach shack',
		leadText:
			'Working with Greg made me feel like we were the Dynamic Duo of the design and engineering world.',
		bodyText:
			"When it comes to frontend development, Greg's skils are off the charts, and effortlessly brings my design ideas to life with a touch of humor that made every day at work an enjoyable experience. His exceptional communication skills foster a productive collaboration between design and engineering",
		name: 'Karin Uli (She/ Her)',
		role: 'Snr Product Designer, Faethm by Pearson',
	},
	{
		img: aaron,
		imgAltText: 'Aaron kneeling in the Australian bush, smiling with a hat on.',
		leadText:
			'I am confident when I say he is the perfect blend of charm, banter and pixel-perfect artistry.',
		bodyText:
			"If you're looking for the deal of the century; a skilled engineer with the keen eye of a diligent designer, look no further than this one!",
		name: 'Aaron Lewis (He/Him)',
		role: 'Full-Stack Enigneer, eQ8',
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
			<TestimonialPositionButtons
				currentTestimonial={currentTestimonial}
				setCurrentTestimonial={setCurrentTestimonial}
			/>
		</Section>
	)
}
