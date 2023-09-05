import styles from './pagination.styles.module.css'
import { TestimonialPositionButtonsProps } from '../types'
import { range } from 'lodash'

export function Pagination({
	currentTestimonial,
	setCurrentTestimonial,
}: TestimonialPositionButtonsProps) {
	return (
		<div>
			{range(4).map(num => (
				<button
					key={num}
					aria-label={`pagination button ${num + 1}`}
					className={`${styles.button} ${
						currentTestimonial === num ? styles.active : null
					}`}
					onClick={() => setCurrentTestimonial(num)}
				/>
			))}
		</div>
	)
}
