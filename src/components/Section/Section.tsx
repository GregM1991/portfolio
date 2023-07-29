import { Palette } from '@/theme'
import { DEV_VARS } from '@/constants/cssVariables'
import styles from './section.styles.module.css'

interface SectionChildren {
	bgColor?: keyof Palette
	children: React.ReactNode
	ariaLabel: string
	variant?: 'hero'
	className?: string
}

export function Section({
	children,
	ariaLabel,
	bgColor = 'white',
	variant,
	className = '',
}: SectionChildren) {
	const additiveStyles = {
		'--background-color': DEV_VARS.palette[bgColor],
	} as React.CSSProperties

	return (
		<section
			aria-label={ariaLabel}
			style={additiveStyles}
			className={`${styles.section} ${styles[bgColor]} ${
				variant ? styles[variant] : null
			} ${className}`}
		>
			{children}
		</section>
	)
}
