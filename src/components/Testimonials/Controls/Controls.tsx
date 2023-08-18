import styles from './controls.styles.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { TestimonialPositionButtonsProps } from '../types'

export function Controls({
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
