import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import { FAB } from '@/components'
import styles from './controls.styles.module.css'

interface ControlsProps {
	leftDisabled: boolean
	rightDisabled: boolean
	onRightClick: () => void
	onLeftClick: () => void
}

export const Controls = ({
	leftDisabled,
	rightDisabled,
	onRightClick,
	onLeftClick,
}: ControlsProps) => (
	<>
		<FAB
			icon={<GoChevronLeft />}
			ariaLabel="arrow left button"
			disabled={leftDisabled}
			className={`${styles.arrowButton} ${styles.btnLeft}`}
			onClick={onLeftClick}
			tab-index={0}
		/>
		<FAB
			icon={<GoChevronRight />}
			ariaLabel="arrow right button"
			disabled={rightDisabled}
			className={`${styles.arrowButton} ${styles.btnRight}`}
			onClick={onRightClick}
			tab-index={0}
		/>
	</>
)
