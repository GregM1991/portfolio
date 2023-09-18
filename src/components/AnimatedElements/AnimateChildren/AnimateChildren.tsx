'use client'
import { Variant, motion } from 'framer-motion'

const INITIAL = {}
const TARGET = {
	transition: {
		staggerChildren: 0.25,
	},
}

interface AnimateChildren {
	initialProps?: Variant
	targetProps?: Variant
	className: string
	children: React.ReactNode
}

export function AnimateChildren({
	initialProps = INITIAL,
	targetProps = TARGET,
	className,
	children,
}: AnimateChildren) {
	const variants = {
		initial: { ...INITIAL, ...initialProps },
		target: { ...TARGET, ...targetProps },
	}

	return (
		<motion.div
			className={className}
			variants={variants}
			initial="initial"
			animate="target"
		>
			{children}
		</motion.div>
	)
}
