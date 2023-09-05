import { forwardRef } from 'react'
import { Palette } from '@/types/palette'
import { palette } from '@/theme/theme'
import styles from './typography.styles.module.css'

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface TypographyProps {
	type?: ElementType
	styledAs?: ElementType
	variant?: 'h2Rich'
	color?: keyof Palette
	className?: string
	children: React.ReactNode
}

export const Typography = forwardRef<
	HTMLHeadingElement & HTMLSpanElement,
	TypographyProps
>(function Typography(
	{ type = 'p', styledAs = '', variant = '', color, className, children },
	ref,
) {
	const additiveStyles = {
		'--color': color ? palette[color] : 'inherit',
	} as React.CSSProperties

	const classes = [
		styles[type],
		styles[styledAs],
		styles[variant],
		className,
	].join(' ')

	const Component = type

	return (
		<Component className={classes} style={additiveStyles} ref={ref}>
			{children}
		</Component>
	)
})
