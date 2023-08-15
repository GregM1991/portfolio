import { Typography } from '@/components'
import styles from './cardCarousel.styles.module.css'

interface CardProps {
	title: string
	body: string
}

export function Card({ title, body }: CardProps) {
	return (
		<div className={styles.card}>
			<Typography type="h3">{title}</Typography>
			<Typography className={styles.valueBodyText}>{body}</Typography>
		</div>
	)
}
