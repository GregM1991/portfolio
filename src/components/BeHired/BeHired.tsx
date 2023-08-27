'use client'
import { AnimatedSection, Typography, Button } from '@/components'
import styles from './beHired.styles.module.css'
import { FADE_IN_ANIMATION_CONFIG } from '@/constants/animation'
import { motion } from 'framer-motion'

const BE_HIRED = 'Be hired'
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
	console.log(BE_HIRED)
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
					>
						{BE_HIRED.split('').map((char, index) => (
							<motion.span key={`${char}-${index}`} variants={letter}>
								{char === ' ' ? '\u00A0' : char}
							</motion.span>
						))}
						<motion.span
							className={styles.textCursor}
							transition={{ repeat: 1, duration: 1 }}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 1, 0, 1] }}
							viewport={{ once: true, amount: 'all' }}
						/>
					</motion.span>
					{/* The span that will appear after the animation is complete */}
					{/* <span className={styles.leadWrapper}>
						Be <em className={styles.lead}>hired?</em>
					</span> */}
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
