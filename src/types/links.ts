import { ForwardRefExoticComponent, RefAttributes } from 'react'

export type SocialLink = {
	key: string
	linkTooltipText: string
	href: string
	icon: SVGSVGElement
	screenReader: string
	attributes?: {
		download: string
	}
}

export type NavLink = {
	key: string
	linkText: string
	href: string
}
