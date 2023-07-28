import {
	Breakpoints,
	Palette,
	Gradients,
	Radii,
	Shadows,
	Spaces,
	Theme,
	Typography,
} from './types'

const palette: Palette = {
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
	'gray-light': '#f8f9f9',
	'gray-dark': '#293039',
	primary: '#7d2ae8',
	secondary: '#280f91',
	light: '#e9ecef',
	dark: '#0e1318',
	blendBlue: '#5a32fa',
}

const gradients: Gradients = {
	brandGradient: `${palette.cyan}, ${palette.blendBlue}, ${palette.purple}`,
}

const shadows: Shadows = {
	small: '0.5px 1px 1px hsl(0deg, 0%, 50%,)',
	medium:
		'1px 2px 2px hsl(0deg, 0%, 50% / 0.333), 2px 4px 4px hsl(0deg, 0%, 50% / 0.333), 3px 6px 6px hsl(0deg, 0%, 50% / 0.333)',
}

const typography: Typography = {
	heading: 'ezramedium, sans-serif',
	body: 'sans-serif',
	steps: {
		minus2: '.85rem',
		minus1: '.9375rem',
		zero: '1rem',
		one: '1.0625rem',
		two: '1.25rem',
		three: '1.5rem',
		four: '1.75rem',
		five: '3rem',
		six: '4rem',
		seven: '5.5625rem',
		eight: '6rem',
		nine: '9rem',
	},
}

const radii: Radii = {
	none: '0',
	medium: '6px',
	large: '1rem',
	full: '9999px',
}

const breakpoints: Breakpoints = {
	xs: '0',
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
	xxl: '1400px',
	xxxl: '1600px',
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

export const theme: Theme = {
	palette,
	gradients,
	shadows,
	typography,
	radii,
	breakpoints,
	spaces,
}