'use client'
import Link from 'next/link'
import * as Tooltip from '@radix-ui/react-tooltip'
import { SOCIAL_LINKS } from '@/constants/links'
import styles from './socialLinks.styles.module.css'

export function SocialLinks() {
	return (
		<Tooltip.Provider delayDuration={0}>
			<ul role="list" className={styles.wrapper}>
				{SOCIAL_LINKS.map(link => (
					<li key={link.linkTooltipText}>
						<Link
							target="_blank"
							href={link.href}
							{...(link.attributes ? link.attributes : {})}
						>
							<Tooltip.Root>
								<Tooltip.Trigger asChild className={styles.tooltipTrigger}>
									{link.icon}
								</Tooltip.Trigger>
								<Tooltip.Portal>
									<Tooltip.Content
										className={styles.tooltipContent}
										sideOffset={5}
									>
										{link.linkTooltipText}
									</Tooltip.Content>
								</Tooltip.Portal>
							</Tooltip.Root>
						</Link>
					</li>
				))}
			</ul>
		</Tooltip.Provider>
	)
}
