import {
	AnimatedSection,
	AnimatedTypography,
	Typography,
	CardCarousel,
} from '@/components'
import styles from './gregsValues.styles.module.css'
import { FADE_IN_ANIMATION_CONFIG } from '@/constants/animation'

export function GregsValues() {
	return (
		<AnimatedSection
			bgColor="red"
			ariaLabel="My values"
			className={styles.wrapper}
			initAnimatedConfig={{ opacity: 0 }}
			{...FADE_IN_ANIMATION_CONFIG}
		>
			<div className={styles.textWrapper}>
				<AnimatedTypography
					type="h2"
					color="white"
					variant="programHeader"
					className={styles.header}
					{...FADE_IN_ANIMATION_CONFIG}
				>
					<a id="gregs-values" className="anchor" />
					Greg&apos;s values
				</AnimatedTypography>
				<Typography color="white" className={styles.body}>
					I&apos;m a bit torn about what to throw down here, between writing
					down what my values are, or explaining how they align with
					Canva&apos;s values. I feel as though they align so well however,
					I&apos;m going to try and explain how.
				</Typography>
			</div>
			<CardCarousel />
		</AnimatedSection>
	)
}
