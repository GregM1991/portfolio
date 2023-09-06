import clsx from 'clsx'
import { forwardRef } from 'react'
import { CanvaPalette, Palette } from '@/types/palette'
import { getColorFromPalette } from '@/theme/theme'
import styles from './typography.styles.module.css'

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type Sizes =
	| 'two-xs'
	| 'xs'
	| 's'
	| 'm'
	| 'l'
	| 'xl'
	| 'two-xl'
	| 'three-xl'
	| 'four-xl'
	| 'five-xl'
	| 'six-xl'

interface TypographyProps {
	type?: ElementType
	canva?: boolean
	variant?: 'h2Rich' | 'h1Lead'
	weight?: 'normal' | 'light' | 'bold'
	size?: Sizes
	color?: keyof CanvaPalette | keyof Palette
	className?: string
	children: React.ReactNode
}

export const Typography = forwardRef<
	HTMLHeadingElement & HTMLSpanElement,
	TypographyProps
>(function Typography(
	{
		type = 'p',
		canva = false,
		variant = '',
		weight = 'normal',
		size = '',
		color,
		className,
		children,
	},
	ref,
) {
	const classes = clsx([
		styles[type],
		styles[variant],
		styles[size],
		styles[weight],
		className,
	])
	const Component = type
	let colorValue: string | undefined
	if (color) {
		colorValue = getColorFromPalette(color, canva)
	}

	const additiveStyles = {
		'--color': color ? colorValue : 'inherit',
	} as React.CSSProperties

	return (
		<Component className={classes} style={additiveStyles} ref={ref}>
			{children}
		</Component>
	)
})
