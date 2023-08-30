import { forwardRef } from 'react'
import styles from './section.styles.module.css'
import { Palette } from '@/types/palette'
import { palette } from '@/theme/theme'

interface SectionProps {
	bgColor?: keyof Palette
	children: React.ReactNode
	ariaLabel: string
	variant?: 'hero'
	className?: string
	initAnimatedConfig?: React.CSSProperties
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
	{
		children,
		ariaLabel,
		bgColor = 'white',
		variant,
		className = '',
		initAnimatedConfig = {},
	},
	ref,
) {
	const additiveStyles = {
		'--background-color': palette[bgColor],
	} as React.CSSProperties

	return (
		<section
			ref={ref}
			aria-label={ariaLabel}
			style={{ ...additiveStyles, ...initAnimatedConfig }}
			className={`${styles.section} ${
				variant ? styles[variant] : ''
			} ${className}`}
		>
			{children}
		</section>
	)
})
