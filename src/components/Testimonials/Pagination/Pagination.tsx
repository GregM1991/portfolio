import styles from './pagination.styles.module.css'
import { TestimonialPositionButtonsProps } from '../types'

export function Pagination({
	currentTestimonial,
	setCurrentTestimonial,
}: TestimonialPositionButtonsProps) {
	return (
		<div>
			{/* TODO: Probably a cleaner way to render these out */}
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
	)
}
