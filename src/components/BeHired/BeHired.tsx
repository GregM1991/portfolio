'use client'
import { AnimatedSection, Typography, Button } from '@/components'
import { FADE_IN_ANIMATION_CONFIG } from '@/constants/animation'
import styles from './beHired.styles.module.css'
import Typewriter from './Typewriter'

export function BeHired() {
	return (
		<AnimatedSection
			bgColor="indigo"
			ariaLabel="Be inspired"
			className={styles.wrapper}
			initAnimatedConfig={{ opacity: 0 }}
			{...FADE_IN_ANIMATION_CONFIG}
		>
			<div className={`${styles.content} container`}>
				<Typewriter />
				<Typography
					color="white"
					variant="ctaBody"
					className={styles.breakoutLine}
				>
					Take your time to think it over.
				</Typography>
				<Typography color="white" variant="ctaBody">
					Hopefully I&apos;ve sold you on the Greg Life, and piqued your
					interest enough to warrant getting in touch. If not, you can reach me
					below anyway, just in case you&apos;re keen for a chat.
				</Typography>
				<Button variant="secondary" className={styles.button}>
					Contact now
				</Button>
			</div>
		</AnimatedSection>
	)
}
