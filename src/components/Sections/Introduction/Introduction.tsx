import { Section, SocialLinks, Typography } from '@/components'
import styles from './introduction.styles.module.css'

export function Introduction() {
	return (
		<Section
			ariaLabel="Introduction to Greg's portfolio"
			className={styles.wrapper}
		>
			<SocialLinks size={20} color="secondary" />
			<Typography color="primary" type="h1" size="six-xl">
				Greg&apos;s Place
			</Typography>
		</Section>
	)
}
