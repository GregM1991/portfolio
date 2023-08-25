export const CUBIC_BEZIER = [0.29, 0.13, 0.3, 1]
export const DURATION = 1.5

export const FADE_IN_ANIMATION_CONFIG = {
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: {
		ease: CUBIC_BEZIER,
		duration: DURATION,
	},
}

export const FADE_UP_IN_ANIMATION_CONFIG = {
	...FADE_IN_ANIMATION_CONFIG,
	initial: { translateY: 50 },
	whileInView: { translateY: 0, ...FADE_IN_ANIMATION_CONFIG.whileInView },
}

export const FADE_RIGHT_IN_ANIMATION_CONFIG = {
	...FADE_IN_ANIMATION_CONFIG,
	initial: { translateX: -50 },
	whileInView: { translateX: 0, ...FADE_IN_ANIMATION_CONFIG.whileInView },
}