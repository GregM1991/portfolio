export type SocialLink = {
	key: string
	linkTooltipText: string
	href: string
	icon: React.ReactNode
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
