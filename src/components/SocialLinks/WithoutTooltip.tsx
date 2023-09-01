import * as Tooltip from '@radix-ui/react-tooltip'
import Link from 'next/link'
import { Link as LinkType } from '@/types/links'
import { VisuallyHidden } from '@/components'
import styles from './socialLinks.styles.module.css'

export const WithoutTooltip = ({ link }: { link: LinkType }) => (
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
