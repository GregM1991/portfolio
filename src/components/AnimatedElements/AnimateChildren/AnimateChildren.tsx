'use client'
import { motion } from 'framer-motion'

const variants = {
	initial: {
		opacity: 0,
	},
	target: {
		opacity: 1,
		transition: {
			delayChildren: 1.2,
		},
	},
}

export function AnimateChildren({ children }: { children: React.ReactNode }) {
	return (
		<motion.div variants={variants} initial="initial" animate="target">
			{children}
		</motion.div>
	)
}
