export const BE = ['B', 'e', ' ']
export const HIRED = ['h', 'i', 'r', 'e', 'd', '?']

export const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 2,
			staggerChildren: 0.1,
		},
	},
}

export const letter = {
	hidden: { display: 'none' },
	visible: {
		display: 'inline',
		transition: {
			type: 'spring',
			restDelta: 1,
		},
	},
}

export const typewriter = {
	hidden: { opacity: 0 },
	visible: {
		opacity: [1, 0, 1, 0, 1, 0],
		transition: {
			ease: 'linear',
			duration: 1.5,
		},
	},
}
