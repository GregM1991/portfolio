import { CanvaPalette, Palette } from '@/types/palette'

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export interface TypographyProps {
	type?: ElementType
	canva?: boolean
	variant?: 'h2Rich' | 'h1Lead'
	weight?: 'normal' | 'light' | 'bold'
	font?: 'arvo' | 'raleway'
	size?: keyof typeof stepMap
	color?: keyof CanvaPalette | keyof Palette
	className?: string
	children: React.ReactNode
}

export const stepMap: Record<string, string> = {
	'2xs': '-2',
	xs: '-1',
	s: '0',
	m: '1',
	l: '2',
	xl: '3',
	'2xl': '4',
	'3xl': '5',
	'4xl': '6',
	'5xl': '7',
	'6xl': '8',
}
