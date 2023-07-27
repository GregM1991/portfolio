import { Theme } from './types'

const palette = {
	blue: '#b4f0f0',
	indigo: '#280f91',
	purple: '#7d2ae8',
	pink: '#ffa5f0',
	red: '#ff5055',
	orange: '#f15852',
	yellow: '#ffd200',
	green: '#28c878',
	teal: '#20c997',
	cyan: '#00c4cc',
	white: '#fff',
	gray: '#6c757d',
	'gray-dark': '#293039',
	primary: '#7d2ae8',
	secondary: '#280f91',
	light: '#e9ecef',
	dark: '#0e1318',
}

const shadows = {
	small: '0.5px 1px 1px hsl(0deg, 0%, 50%,)',
	medium:
		'1px 2px 2px hsl(0deg, 0%, 50% / 0.333), 2px 4px 4px hsl(0deg, 0%, 50% / 0.333), 3px 6px 6px hsl(0deg, 0%, 50% / 0.333)',
}

const typography = {
	heading: 'ezramedium, sans-serif',
	body: 'sans-serif',
	steps: {
		minus2: '.85rem',
		minus1: '.9375rem',
		zero: '1rem',
		one: '1.0625rem',
		two: '1.5rem',
		three: '1.75rem',
		four: '3rem',
		five: '4rem',
		six: '5.5625rem',
		seven: '6rem',
		eight: '9rem',
	},
}

const radii = {
	none: '0',
	medium: '6px',
	large: '1rem',
	full: '9999px',
}

const breakpoints = {
	xs: '0',
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
	xxl: '1400px',
	xxxl: '1600px',
}

const spaces = {
	xxxSmall: '.5rem',
	xxSmall: '.625rem',
	xSmall: '.9375rem',
	small: '1rem',
	medium: '1.5rem',
	large: '2rem',
	xLarge: '3rem',
	xxLarge: '5rem',
	xxxLarge: '7rem',
	xxxxLarge: '10rem',
}

export const theme: Theme = {
	palette,
	shadows,
	typography,
	radii,
	breakpoints,
	spaces,
}
