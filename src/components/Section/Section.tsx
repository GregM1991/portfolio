import { Palette } from '@/theme'
import styles from './section.styles.module.css'
import { DEV_VARS } from '@/constants/cssVariables'

interface SectionChildren {
	bgColor?: keyof Palette
	children: React.ReactNode
}

function Section({ children, bgColor = 'white' }: SectionChildren) {
	const additiveStyles = {
		'--background-color': DEV_VARS.palette[bgColor],
	} as React.CSSProperties

	return (
		<section
			style={additiveStyles}
			className={`${styles.section} ${styles[bgColor]}`}
		>
			{children}
		</section>
	)
}

export default Section
