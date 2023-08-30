import { forwardRef } from 'react'
import { DEV_VARS } from '@/constants/cssVariables'
import { Palette } from '@/types/palette'
import styles from './typography.styles.module.css'

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
// It occurs to me that these are not general variants, they are class specific
type Variant =
	| 'pLead'
	| 'h2Rich'
	| 'programHeader'
	| 'blockquoteLead'
	| 'ctaLead'
	| 'ctaBody'
	| 'acknowledgementBody'

interface TypographyProps {
	type?: ElementType
	styledAs?: ElementType
	variant?: Variant
	color?: keyof Palette
	className?: string
	children: React.ReactNode
}

export const Typography = forwardRef<
	HTMLHeadingElement & HTMLSpanElement,
	TypographyProps
>(function Typography(
	{ type = 'p', styledAs, variant, color, className, children },
	ref,
) {
	const additiveStyles = {
		'--color': color ? DEV_VARS[color] : 'inherit',
	} as React.CSSProperties
	const Component = type

	return (
		<Component
			className={`${styles[styledAs || type]} ${
				variant ? styles[variant] : ''
			} ${className ? className : ''}`}
			style={additiveStyles}
			ref={ref}
		>
			{children}
		</Component>
	)
})
