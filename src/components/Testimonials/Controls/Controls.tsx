import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { TestimonialPositionButtonsProps } from '../types'
import { FAB } from '@/components'
import styles from './controls.styles.module.css'

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
			<FAB
				icon={<ChevronLeftIcon />}
				ariaLabel="arrow left button"
				disabled={currentTestimonial === 0}
				className={`${styles.arrowButton} ${styles.btnLeft}`}
				onClick={onClickLeft}
				tab-index={0}
			/>
			<FAB
				icon={<ChevronRightIcon />}
				ariaLabel="arrow right button"
				disabled={currentTestimonial === 3}
				className={`${styles.arrowButton} ${styles.btnRight}`}
				onClick={onClickRight}
				tab-index={0}
			/>
		</>
	)
}
