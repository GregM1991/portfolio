import { IconProps } from '@radix-ui/react-icons/dist/types'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export type SocialLink = {
	key: string
	linkTooltipText: string
	href: string
	icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
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
