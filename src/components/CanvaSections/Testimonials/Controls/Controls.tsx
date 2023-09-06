import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { FAB } from '@/components'
import styles from './controls.styles.module.css'

interface ControlsProps {
	currentTestimonial: number
	onRightClick: () => void
	onLeftClick: () => void
}

export const Controls = ({
	currentTestimonial,
	onRightClick,
	onLeftClick,
}: ControlsProps) => (
	<>
		<FAB
			icon={<ChevronLeftIcon />}
			ariaLabel="arrow left button"
			disabled={currentTestimonial === 0}
			className={`${styles.arrowButton} ${styles.btnLeft}`}
			onClick={onLeftClick}
			tab-index={0}
		/>
		<FAB
			icon={<ChevronRightIcon />}
			ariaLabel="arrow right button"
			disabled={currentTestimonial === 3}
			className={`${styles.arrowButton} ${styles.btnRight}`}
			onClick={onRightClick}
			tab-index={0}
		/>
	</>
)
