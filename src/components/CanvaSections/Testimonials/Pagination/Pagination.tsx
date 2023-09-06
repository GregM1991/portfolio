import styles from './pagination.styles.module.css'
import { range } from 'lodash'

export interface PaginationProps {
	currentTestimonial: number
	onClick: (num: number) => void
}

export const Pagination = ({
	currentTestimonial,
	onClick,
}: PaginationProps) => (
	<div>
		{range(4).map(num => (
			<button
				key={num}
				aria-label={`pagination button ${num + 1}`}
				className={`${styles.button} ${
					currentTestimonial === num ? styles.active : null
				}`}
				onClick={() => onClick(num)}
			/>
		))}
	</div>
)
