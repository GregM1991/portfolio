'use client'
import {
	motion,
	useMotionTemplate,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion'

export function AGradient({ children }: { children: React.ReactNode }) {
	const { scrollYProgress } = useScroll()
	const springScroll = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})

	const insideGradientValue = useTransform(
		springScroll,
		[0, 1],
		['#7c383c', '#e95a77'],
	)
	const outsideGradientValue = useTransform(
		springScroll,
		[0, 1],
		['#FFB5C4', '#ffdffb'],
	)
	const gradient = useMotionTemplate`radial-gradient(at 0% 30%, ${insideGradientValue} 1%, ${outsideGradientValue} 30%, transparent 50%)`

	return (
		<motion.div
			style={{
				background: gradient,
			}}
		>
			{children}
		</motion.div>
	)
}
