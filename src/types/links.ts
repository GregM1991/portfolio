export type Link = {
	key: string
	linkTooltipText: string
	href: string
	icon: React.ReactNode
	screenReader: string
	attributes?: {
		download: string
	}
}
