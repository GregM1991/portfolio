import * as React from 'react'
import styles from './typography.styles.module.css'
import { DEV_VARS } from '@/constants/cssVariables'
import { Palette } from '@/theme'

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type Variant =
	| 'pLead'
	| 'h1Lead'
	| 'h2Rich'
	| 'programHeader'
	| 'blockquoteLead'
	| 'ctaLead'
	| 'ctaBody'

interface TypographyProps {
	type?: ElementType
	styledAs?: ElementType
	variant?: Variant
	color?: keyof Palette
	className?: string
	children: React.ReactNode
}

export function Typography({
	type = 'p',
	styledAs,
	variant,
	color = 'dark',
	className,
	children,
}: TypographyProps) {
	const additiveStyles = {
		'--color': DEV_VARS.palette[color],
	} as React.CSSProperties
	const Component = type

	return (
		<Component
			className={`${styles[styledAs || type]} ${
				variant ? styles[variant] : null
			} ${className ? className : null}`}
			style={additiveStyles}
		>
			{children}
		</Component>
	)
}
