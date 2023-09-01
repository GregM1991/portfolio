'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { SOCIAL_LINKS } from '@/constants/links'
import styles from './socialLinks.styles.module.css'
import { WithTooltip } from './WithTooltip'
import { WithoutTooltip } from './WithoutTooltip'

export function SocialLinks({ withTooltip = true }: { withTooltip?: boolean }) {
	const links = SOCIAL_LINKS.map(link => (
		<li key={link.key}>
			{withTooltip ? (
				<WithTooltip link={link} />
			) : (
				<WithoutTooltip link={link} />
			)}
		</li>
	))

	return (
		<Tooltip.Provider delayDuration={0}>
			<ul role="list" className={styles.wrapper}>
				{links}
			</ul>
		</Tooltip.Provider>
	)
}
