import { forwardRef } from 'react'
import { DialogTriggerProps } from '@radix-ui/react-dialog'
import styles from './button.styles.module.css'

interface ButtonProps {
	variant?: 'primary' | 'secondary'
	className?: string
	children: React.ReactNode
}

export const Button = forwardRef<
	HTMLButtonElement,
	ButtonProps & DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>(function Button({ variant = 'primary', className, children, ...rest }, ref) {
	return (
		<button
			ref={ref}
			className={`${styles.wrapper} ${styles[variant]} ${className}`}
			{...rest}
		>
			{children}
		</button>
	)
})
