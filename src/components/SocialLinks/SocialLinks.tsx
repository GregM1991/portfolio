'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { SOCIAL_LINKS } from '@/constants/links'
import styles from './socialLinks.styles.module.css'
import { WithTooltip } from './WithTooltip'
import { WithoutTooltip } from './WithoutTooltip'
import { CanvaPalette, Palette } from '@/types/palette'
import { getColorFromPalette } from '@/theme/theme'
import { SocialLink } from '@/types/links'

export interface SocialLinkProps {
	link: SocialLink
	size: number
}

interface SocialLinks {
	withTooltip?: boolean
	color?: keyof Palette | keyof CanvaPalette
	size?: number
	canva?: boolean
}

export function SocialLinks({
	withTooltip = false,
	color,
	size = 25,
	canva = false,
}: SocialLinks) {
	// Gotta be a theme wrapper or something, can't do this everywhere
	let colorValue: string | undefined
	if (color) {
		colorValue = getColorFromPalette(color, canva)
	}

	const additiveStyles = {
		'--color': color ? colorValue : 'inherit',
	} as React.CSSProperties

	return withTooltip ? (
		<Tooltip.Provider delayDuration={0}>
			<ul role="list" className={styles.wrapper} style={additiveStyles}>
				{SOCIAL_LINKS.map(link => (
					<li key={link.key}>
						<WithTooltip size={size} link={link} />
					</li>
				))}
			</ul>
		</Tooltip.Provider>
	) : (
		<ul role="list" className={styles.wrapper} style={additiveStyles}>
			{SOCIAL_LINKS.map(link => (
				<li key={link.key}>
					<WithoutTooltip size={size} link={link} />
				</li>
			))}
		</ul>
	)
}
