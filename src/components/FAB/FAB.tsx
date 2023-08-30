import styles from './FAB.styles.module.css'

interface FABProps {
	icon: React.ReactNode
	disabled: boolean
	className: string
	ariaLabel: string
	onClick: () => void
}

export function FAB({
	icon,
	disabled,
	className,
	ariaLabel,
	onClick,
}: FABProps) {
	return (
		<button
			aria-label={ariaLabel}
			aria-disabled={disabled}
			onClick={onClick}
			className={`${styles.FAB} ${disabled && styles.disabled} ${className}`}
		>
			{icon}
		</button>
	)
}
