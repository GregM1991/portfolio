export const CUBIC_BEZIER = [0.29, 0.13, 0.3, 1]
export const DURATION = 1.5
const transition = { ease: CUBIC_BEZIER, duration: DURATION }
const hidden = { opacity: 0 }
const visible = { opacity: 1, transition }

export const fadeInVariants = {
	hidden,
	visible,
}

export const fadeInRightVariants = {
	hidden: { ...hidden, translateX: -50 },
	visible: { ...visible, translateX: 0 },
}

export const fadeInUpVariants = {
	hidden: { ...hidden, translateY: 50 },
	visible: { ...visible, translateY: 0 },
}

export const fadeInUpVariantsB = {
	hidden: { ...hidden, translateY: 15 },
	visible: { ...visible, translateY: 0 },
}