'use client'
import { Variant, motion } from 'framer-motion'
import merge from 'lodash.merge'

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
		initial: merge({}, INITIAL, initialProps),
		target: merge({}, TARGET, targetProps),
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
