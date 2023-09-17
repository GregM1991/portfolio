'use client'
import { motion } from 'framer-motion'

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

export function ALineSVG({ initial, width }: ALineProps) {
	const variants = {
		initial: {
			width: initial,
		},
		target: {
			width: width,
		},
	}
	return (
		<motion.svg
			width={width}
			height="40"
			xmlns="http://www.w3.org/2000/svg"
			color="inherit"
		>
			<path
				d="M 0 20 C 10 40 30 40 40 20 
        S 70 0 80 20
        S 110 40 120 20
        S 150 0 160 20
        S 190 40 200 20"
				stroke="black"
				fill="transparent"
			/>
		</motion.svg>
	)
}
