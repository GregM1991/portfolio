import styles from './button.styles.module.css'

interface ButtonProps {
	variant?: 'primary' | 'secondary'
	className?: string
	children: React.ReactNode
}

export function Button({
	variant = 'primary',
	className,
	children,
}: ButtonProps) {
	return (
		<button className={`${styles.wrapper} ${styles[variant]} ${className}`}>
			{children}
		</button>
	)
}
