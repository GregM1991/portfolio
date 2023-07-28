export interface Palette {
	blue: string
	indigo: string
	purple: string
	pink: string
	red: string
	orange: string
	yellow: string
	green: string
	teal: string
	cyan: string
	white: string
	gray: string
	'gray-light': string
	'gray-dark': string
	primary: string
	secondary: string
	light: string
	dark: string
	blendBlue: string
}

export interface Gradients {
	brandGradient: string
}

type Steps = {
	minus2: string
	minus1: string
	zero: string
	one: string
	two: string
	three: string
	four: string
	five: string
	six: string
	seven: string
	eight: string
	nine: string
}

export interface Typography {
	heading: string
	body: string
	steps: Steps
}

export interface Shadows {
	small: string
	medium: string
}

export interface Radii {
	none: string
	medium: string
	large: string
	full: string
}

export interface Breakpoints {
	xs: string
	sm: string
	md: string
	lg: string
	xl: string
	xxl: string
	xxxl: string
}

export interface Spaces {
	xxxSmall: string
	xxSmall: string
	xSmall: string
	small: string
	medium: string
	large: string
	xLarge: string
	xxLarge: string
	xxxLarge: string
	xxxxLarge: string
	xxxxxLarge: string
}

export interface Theme {
	palette: Palette
	gradients: Gradients
	shadows: Shadows
	typography: Typography
	radii: Radii
	breakpoints: Breakpoints
	spaces: Spaces
}
