'use client'
import {
	AnimatedSection,
	Typography,
	Button,
	ContactMeModal,
} from '@/components'
import { fadeInVariants } from '@/constants/animation'
import Typewriter from './Typewriter'
import styles from './beHired.styles.module.css'
import Link from 'next/link'

export function BeHired() {
	return (
		<AnimatedSection
			bgColor="indigo"
			ariaLabel="Be inspired"
			className={styles.wrapper}
			variants={fadeInVariants}
			viewport={{ once: true }}
			initial="hidden"
			whileInView="visible"
			initAnimatedConfig={{ opacity: 0 }}
		>
			<a id="greg-life" className="anchor" />
			<div className={`${styles.content} container`}>
				<Typewriter />
				<Typography
					color="white"
					variant="ctaBody"
					className={styles.breakoutLine}
				>
					Don’t take too long to think it over!
				</Typography>
				<Typography color="white" variant="ctaBody">
					Hopefully I&apos;ve sold you on the Greg Life and piqued your interest
					enough to warrant getting in touch. Reach me below, I&apos;m always
					keen for a chat.
				</Typography>
				<ContactMeModal
					trigger={
						<Button
							aria-controls="radix-:R1mj9:"
							variant="secondary"
							className={styles.button}
						>
							Contact now
						</Button>
					}
				/>
			</div>
		</AnimatedSection>
	)
}
