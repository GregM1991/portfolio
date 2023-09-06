import { Section, SocialLinks, Typography } from '@/components'
import Image from 'next/image'
import meWide from '@/assets/images/me-wide.jpg'
import styles from './introduction.styles.module.css'

export function Introduction() {
	return (
		<Section ariaLabel="Introduction to Greg's portfolio">
			<div className={styles.wrapper}>
				<SocialLinks size={20} color="secondary" />
				<Typography color="primary" weight="bold" type="h1" size="six-xl">
					Greg&apos;s Place
				</Typography>
				<Typography
					weight="light"
					type="span"
					size="two-xl"
					className={styles.tagLine}
				>
					A Full-Stack Engineer, standing in front of JavaScript, asking it to
					love him.
				</Typography>
				<div className={styles.imageWrapper}>
					<Image
						src={meWide}
						alt="Greg smiling and looking left with a funky Hawaiian shirt on."
						fill
						sizes="100vw"
						placeholder="blur"
					/>
				</div>
			</div>
		</Section>
	)
}
