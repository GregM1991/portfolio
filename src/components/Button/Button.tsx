import { forwardRef } from 'react'
import { DialogTriggerProps } from '@radix-ui/react-dialog'
import styles from './button.styles.module.css'
import clsx from 'clsx'

interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'outline' | 'text'
	size?: 'small' | 'regular' | 'large'
	fluid?: boolean
	className?: string
	children: React.ReactNode
}

export const Button = forwardRef<
	HTMLButtonElement,
	ButtonProps & DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>(function Button(
	{
		variant = 'primary',
		size = 'regular',
		fluid = false,
		className,
		children,
		...rest
	},
	ref,
) {
	const classes = clsx(
		styles.wrapper,
		styles[variant],
		styles[size],
		{ [styles.fluid]: fluid },
		className,
	)
	return (
		<button ref={ref} className={classes} {...rest}>
			{children}
		</button>
	)
})
