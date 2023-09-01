import * as Tooltip from '@radix-ui/react-tooltip'
import Link from 'next/link'
import { Link as LinkType } from '@/types/links'
import { VisuallyHidden } from '@/components'
import styles from './socialLinks.styles.module.css'

export const WithTooltip = ({ link }: { link: LinkType }) => (
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
