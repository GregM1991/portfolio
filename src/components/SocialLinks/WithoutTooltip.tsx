import Link from 'next/link'
import { SocialLink } from '@/types/links'
import { VisuallyHidden } from '@/components'
import styles from './socialLinks.styles.module.css'

export const WithoutTooltip = ({ link }: { link: SocialLink }) => (
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
