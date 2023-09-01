'use client'
import Link from 'next/link'
import { VisuallyHidden } from '@/components'
import * as Tooltip from '@radix-ui/react-tooltip'
import { SOCIAL_LINKS } from '@/constants/links'
import { Link as LinkType } from '@/types/links'
import styles from './socialLinks.styles.module.css'

const WithTooltip = ({ link }: { link: LinkType }) => (
	<Tooltip.Root>
		<Tooltip.Trigger asChild className={styles.iconLink}>
			<Link
				target="_blank"
				href={link.href}
				{...(link.attributes ? link.attributes : {})}
			>
				<>
					{link.icon}
					<VisuallyHidden>{link.screenReader}</VisuallyHidden>
				</>
			</Link>
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content className={styles.tooltipContent} sideOffset={15}>
				{link.linkTooltipText}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
)

const WithoutTooltip = ({ link }: { link: LinkType }) => (
	<Link
		target="_blank"
		href={link.href}
		className={styles.iconLink}
		{...(link.attributes ? link.attributes : {})}
	>
		<>
			{link.icon}
			<VisuallyHidden>{link.screenReader}</VisuallyHidden>
		</>
	</Link>
)

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
