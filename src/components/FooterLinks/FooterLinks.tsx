import { Typography, SocialLinks } from '@/components'
import { CANVA_NAV_LINKS } from '@/constants/links'
import styles from './footerLinks.styles.module.css'
import Link from 'next/link'

export function FooterLinks() {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.linkWrapper} container`}>
				<Typography canva type="h2" color="white" className={styles.linkHeader}>
					Featured Links
				</Typography>
				<ul role="list">
					{CANVA_NAV_LINKS.map(link => (
						<li key={link.key} className={styles.link}>
							<Link href={link.href}>{link.linkText}</Link>
						</li>
					))}
				</ul>
				<div className={styles.footerBottom}>
					<SocialLinks withTooltip />
					<Typography canva color="white" className={styles.copywrite}>
						&copy; Greg 2023. All rights reserved.
					</Typography>
				</div>
			</div>
		</div>
	)
}
