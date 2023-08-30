'use client'
import Link from 'next/link'
import { VisuallyHidden } from '@/components'
import * as Tooltip from '@radix-ui/react-tooltip'
import { SOCIAL_LINKS } from '@/constants/links'
import styles from './socialLinks.styles.module.css'

export function SocialLinks() {
	return (
		<Tooltip.Provider delayDuration={0}>
			<ul role="list" className={styles.wrapper}>
				{SOCIAL_LINKS.map(link => (
					<li key={link.linkTooltipText}>
						<Tooltip.Root>
							<Tooltip.Trigger asChild className={styles.tooltipTrigger}>
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
								<Tooltip.Content
									className={styles.tooltipContent}
									sideOffset={15}
								>
									{link.linkTooltipText}
								</Tooltip.Content>
							</Tooltip.Portal>
						</Tooltip.Root>
					</li>
				))}
			</ul>
		</Tooltip.Provider>
	)
}
