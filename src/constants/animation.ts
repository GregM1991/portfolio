export const CUBIC_BEZIER = [0.29, 0.13, 0.3, 1]
export const DURATION = 1.5

export const FADE_IN_ANIMATION_CONFIG = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: {
		ease: CUBIC_BEZIER,
		duration: DURATION,
	},
}