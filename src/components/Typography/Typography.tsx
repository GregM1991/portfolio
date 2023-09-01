import { forwardRef } from 'react'
import { Palette } from '@/types/palette'
import styles from './typography.styles.module.css'
import { palette } from '@/theme/theme'

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
		'--color': color ? palette[color] : 'inherit',
	} as React.CSSProperties
	const Component = type
	const typeCSS = styles[type]
	const styledAsCSS = styledAs ? styles[styledAs] : ''
	const variantCSS = variant ? styles[variant] : ''
	const classNameCSS = className ? className : ''
	console.log({ type, styledAs, styledAsCSS })

	return (
		<Component
			className={`${typeCSS} ${styledAsCSS} ${variantCSS} ${classNameCSS}`}
			style={additiveStyles}
			ref={ref}
		>
			{children}
		</Component>
	)
})
