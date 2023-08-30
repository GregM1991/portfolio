'use client'
import {
	AnimatedSection,
	Typography,
	Button,
	ContactMeModal,
} from '@/components'
import { fadeInVariants } from '@/constants/animation'
import styles from './beHired.styles.module.css'
import Typewriter from './Typewriter'
import { ModalBody } from './ModalBody'

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
				<ContactMeModal
					title="My deets"
					description={<ModalBody />}
					trigger={
						<Button variant="secondary" className={styles.button}>
							Contact now
						</Button>
					}
				/>
			</div>
		</AnimatedSection>
	)
}
