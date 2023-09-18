export const CUBIC_BEZIER = [0.29, 0.13, 0.3, 1]
export const DURATION = 1.5
const transition = { ease: CUBIC_BEZIER, duration: DURATION }
const hidden = { opacity: 0 }
const visible = { opacity: 1, transition }

export const fadeInVariants = {
	initial: hidden,
	target: visible,
}

export const fadeInRightVariants = {
	initial: { ...hidden, translateX: -50 },
	target: { ...visible, translateX: 0 },
}

export const fadeInUpVariants = {
	initial: { ...hidden, translateY: 50 },
	target: { ...visible, translateY: 0 },
}

export const fadeInUpVariantsB = {
	initial: { ...hidden, translateY: 15 },
	target: { ...visible, translateY: 0 },
}