'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface ALineProps {
	initial: number
	width: number
}

export function ALine({ initial, width }: ALineProps) {
	const variants = {
		initial: {
			width: initial,
		},
		target: {
			width: width,
		},
	}
	return (
		<motion.span
			variants={variants}
			initial="initial"
			animate="target"
			transition={{
				type: 'string',
				stiffness: 100,
			}}
			style={{
				height: '1px',
				backgroundColor: 'var(--palette-secondary)',
			}}
		/>
	)
}

export function ALineSVG() {
	const variants = {
		initial: {
			width: 0,
		},
		target: {
			width: 190,
		},
	}

	const width = useMotionValue(0)
	const pathLength = useTransform(width, [0, 190], [0, 1])

	return (
		<motion.svg
			height="8"
			xmlns="http://www.w3.org/2000/svg"
			variants={variants}
			initial="initial"
			animate="target"
			transition={{ tween: 'easeInOut', duration: 1.5, delay: 1.5 }}
			style={{ width }}
		>
			<motion.path
				d="M1.74,4.4c0.96,1.5,1.92,3,3.84,3c3.84,0,3.84-6,7.69-6c3.84,0,3.84,6,7.69,6c3.85,0,3.85-6,7.69-6
				c3.84,0,3.84,6,7.69,6c3.85,0,3.85-6,7.69-6c3.84,0,3.84,6,7.69,6c3.85,0,3.85-6,7.69-6c3.84,0,3.84,6,7.69,6c3.85,0,3.85-6,7.69-6
				c3.85,0,3.85,6,7.69,6c3.85,0,3.85-6,7.69-6c3.85,0,3.85,6,7.69,6c3.85,0,3.85-6,7.69-6c3.85,0,3.85,6,7.69,6c3.85,0,3.85-6,7.69-6
				c3.85,0,3.85,6,7.69,6c3.84,0,3.84-6,7.69-6c3.85,0,3.85,6,7.69,6s3.85-6,7.69-6c3.85,0,3.85,6,7.69,6c3.85,0,3.85-6,7.69-6
				c3.85,0,3.85,6,7.7,6c3.85,0,3.85-6,7.7-6c1.93,0,2.89,1.5,3.85,3"
				stroke="currentColor"
				fill="transparent"
				style={{ pathLength, strokeWidth: 2 }}
			/>
		</motion.svg>
	)
}