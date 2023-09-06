import { forwardRef } from 'react'
import styles from './section.styles.module.css'
import { CanvaPalette } from '@/types/palette'
import { canvaPalette } from '@/theme/theme'

interface SectionProps {
	bgColor?: keyof CanvaPalette
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
		'--background-color': canvaPalette[bgColor],
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
