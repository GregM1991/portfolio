import * as React from 'react'
import styles from './typography.styles.module.css'
import { DEV_VARS } from '@/constants/cssVariables'
import { Palette } from '@/theme'

interface TypographyProps {
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	variant?: 'pLead' | 'h1Lead' | 'h2Rich' | 'programHeader'
	color?: keyof Palette
	children: React.ReactNode
}

export function Typography({
	type = 'p',
	variant,
	color = 'dark',
	children,
}: TypographyProps) {
	const additiveStyles = {
		'--color': DEV_VARS.palette[color],
	} as React.CSSProperties
	const Component = type

	return (
		<Component
			className={`${styles[type]} ${variant ? styles[variant] : null}`}
			style={additiveStyles}
		>
			{children}
		</Component>
	)
}
