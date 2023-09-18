import Image from 'next/image'
import {
	ALineSVG,
	AnimateChildren,
	AnimatedSocialLinks,
	AnimatedTypography,
	Typography,
} from '@/components'
import { INTRO_COPY } from '@/constants/homepageContent'
import { fadeInUpVariantsB } from '@/constants/animation'
import meWide from '@/assets/images/me-wide.jpg'
import styles from './introduction.styles.module.css'

export function Introduction() {
	return (
		<section aria-label="Introduction to Greg's portfolio">
			<div className={styles.wrapper}>
				<div>
					<div className={styles.socialsWrapper}>
						<ALineSVG />
						<AnimatedSocialLinks />
					</div>

					<AnimatedTypography
						variants={fadeInUpVariantsB}
						initial="initial"
						animate="target"
						color="primary"
						type="h1"
						size="5xl"
					>
						{INTRO_COPY.title}
					</AnimatedTypography>
					<AnimateChildren className={styles.taglineContainer}>
						{INTRO_COPY.tagLine.map(({ key, copy }) => (
							<AnimatedTypography
								key={key}
								variants={fadeInUpVariantsB}
								weight="light"
								type="span"
								size="xl"
								className={styles.tagLine}
							>
								{copy}
							</AnimatedTypography>
						))}
					</AnimateChildren>
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
