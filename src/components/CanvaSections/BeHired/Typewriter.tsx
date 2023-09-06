'use client'
import { useState } from 'react'
import { Typography } from '@/components'
import { motion } from 'framer-motion'
import { BE, HIRED, sentence, letter, typewriter } from './constants'
import styles from './beHired.styles.module.css'

export default function Typewriter() {
	const [leadWrapperTrigger, setLeadWrapperTrigger] = useState(false)
	const borderImage = leadWrapperTrigger ? styles.leadWithBorder : ''

	return (
		<Typography canva color="white" type="h2" className={styles.ctaLead}>
			<motion.span
				variants={sentence}
				viewport={{ once: true, amount: 'all' }}
				className={styles.leadWrapper}
				initial="hidden"
				whileInView="visible"
			>
				{BE.map((char, index) => (
					<motion.span key={`${char}-${index}`} variants={letter}>
						{char === ' ' ? '\u00A0' : char}
					</motion.span>
				))}
				<em className={`${styles.lead} ${borderImage}`}>
					{HIRED.map((char, index) => (
						<motion.span key={`${char}-${index}`} variants={letter}>
							{char}
						</motion.span>
					))}
				</em>
				<motion.span
					className={styles.textCursor}
					variants={typewriter}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 'all' }}
					onAnimationComplete={() => setLeadWrapperTrigger(true)}
				/>
			</motion.span>
		</Typography>
	)
}
