import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import styles from './testimonials.styles.module.css'

interface TestimonialPositionButtonsProps {
	currentTestimonial: number
	setCurrentTestimonial: (testimonial: number) => void
}

export function TestimonialPositionButtons({
	currentTestimonial,
	setCurrentTestimonial,
}: TestimonialPositionButtonsProps) {
	function onClickRight() {
		if (currentTestimonial === 3) return
		setCurrentTestimonial(currentTestimonial + 1)
	}

	function onClickLeft() {
		if (currentTestimonial === 0) return
		setCurrentTestimonial(currentTestimonial - 1)
	}

	return (
		<>
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
			<button
				disabled={currentTestimonial === 3}
				className={`${styles.arrowButton} ${styles.btnRight}`}
				onClick={onClickRight}
			>
				<ChevronRightIcon />
			</button>
			<button
				disabled={currentTestimonial === 0}
				className={`${styles.arrowButton} ${styles.btnLeft}`}
				onClick={onClickLeft}
			>
				<ChevronLeftIcon />
			</button>
		</>
	)
}
