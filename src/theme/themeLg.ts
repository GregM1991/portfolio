import { Spaces, Theme, Typography } from '.'

const typography: Typography = {
	heading: 'ezramedium, sans-serif',
	body: 'sans-serif',
	steps: {
		minus2: '.85rem',
		minus1: '.9375rem',
		zero: '1rem',
		one: '1.0625rem',
		two: '4.25rem',
		three: '1.5rem',
		four: '1.75rem',
		five: '3rem',
		six: '4rem',
		seven: '5.5625rem',
		eight: '6rem',
		nine: '9rem',
	},
}

const spaces: Spaces = {
	xxxSmall: '.5rem',
	xxSmall: '.625rem',
	xSmall: '.9375rem',
	small: '1rem',
	medium: '1.25rem',
	large: '1.5rem',
	xLarge: '1.875rem',
	xxLarge: '2rem',
	xxxLarge: '3rem',
	xxxxLarge: '5rem',
	xxxxxLarge: '7rem',
	xxxxxxLarge: '10rem',
}

export const themeLg: Pick<Theme, 'typography' | 'spaces'> = {
	typography,
	spaces,
}
