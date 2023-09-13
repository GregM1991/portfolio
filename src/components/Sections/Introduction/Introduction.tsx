import { SocialLinks, Typography } from '@/components'
import Image from 'next/image'
import meWide from '@/assets/images/me-wide.jpg'
import styles from './introduction.styles.module.css'
import { INTRO_COPY } from '@/constants/homepageContent'

export function Introduction() {
	return (
		<section aria-label="Introduction to Greg's portfolio">
			<div className={styles.wrapper}>
				<div>
					<SocialLinks size={20} color="secondary" />
					<Typography color="primary" type="h1" size="5xl">
						{INTRO_COPY.title}
					</Typography>
					<Typography
						weight="light"
						type="span"
						size="xl"
						className={styles.tagLine}
					>
						{INTRO_COPY.tagLine}
					</Typography>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						src={meWide}
						alt="Greg smiling and looking left with a funky Hawaiian shirt on."
						fill
						sizes="100vw"
						placeholder="blur"
					/>
				</div>
				<div className={styles.bodyCopy}>
					{INTRO_COPY.body.map(para => (
						<Typography key={crypto.randomUUID()}>{para}</Typography>
					))}
				</div>
			</div>
		</section>
	)
}
