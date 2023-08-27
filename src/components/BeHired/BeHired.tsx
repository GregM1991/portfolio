'use client'
import { AnimatedSection, Typography, Button } from '@/components'
import styles from './beHired.styles.module.css'
import { FADE_IN_ANIMATION_CONFIG } from '@/constants/animation'
import { motion } from 'framer-motion'
import { useState } from 'react'

const BE = 'Be '
const HIRED = 'hired?'

const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 2,
			staggerChildren: 0.1,
		},
	},
}
const letter = {
	hidden: { display: 'none' },
	visible: {
		display: 'inline',
		transition: {
			type: 'spring',
			restDelta: 1,
		},
	},
}

export function BeHired() {
	const [leadWrapperTrigger, setLeadWrapperTrigger] = useState(false)
	return (
		<AnimatedSection
			bgColor="indigo"
			ariaLabel="Be inspired"
			className={`${styles.wrapper}`}
			initAnimatedConfig={{ opacity: 0 }}
			{...FADE_IN_ANIMATION_CONFIG}
		>
			<div className={`${styles.content} container`}>
				{/* TODO: Extract this to separate component */}
				<Typography color="white" type="h2" variant="ctaLead">
					<motion.span
						variants={sentence}
						viewport={{ once: true, amount: 'all' }}
						initial="hidden"
						whileInView="visible"
						className={styles.leadWrapper}
						onAnimationComplete={() => setLeadWrapperTrigger(true)}
					>
						{BE.split('').map((char, index) => (
							<motion.span key={`${char}-${index}`} variants={letter}>
								{char === ' ' ? '\u00A0' : char}
							</motion.span>
						))}
						<em
							className={`${styles.lead} ${
								leadWrapperTrigger ? styles.leadWithBorder : ''
							}`}
						>
							{HIRED.split('').map((char, index) => (
								<motion.span key={`${char}-${index}`} variants={letter}>
									{char === ' ' ? '\u00A0' : char}
								</motion.span>
							))}
						</em>
						<motion.span
							className={styles.textCursor}
							transition={{
								duration: 2,
							}}
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: [1, 0, 1, 0, 1, 0],
							}}
							viewport={{ once: true, amount: 'all' }}
						/>
					</motion.span>
				</Typography>
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
