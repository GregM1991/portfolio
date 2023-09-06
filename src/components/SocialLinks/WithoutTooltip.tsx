import Link from 'next/link'
import { VisuallyHidden } from '@/components'
import { SocialLinkProps } from './SocialLinks'
import styles from './socialLinks.styles.module.css'

export const WithoutTooltip = ({ link, size }: SocialLinkProps) => {
	const Icon = link.icon
	return (
		<Link
			target="_blank"
			href={link.href}
			className={styles.iconLink}
			{...(link.attributes ? link.attributes : {})}
		>
			<>
				<Icon height={size} width={size} aria-hidden="true" />
				<VisuallyHidden>{link.screenReader}</VisuallyHidden>
			</>
		</Link>
	)
}
