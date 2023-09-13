import { StaticImageData } from 'next/image'

export type Screen = {
	key: string
	src: StaticImageData
	alt: string
	imageDescription: string
}

type ContributionParagraph = {
	key: string
	copy: string
}

type Contribution = {
	heading: string
	body: ContributionParagraph[]
}

export type SpotlightContent = {
	heading: string
	description: string
	screens: Screen[]
	contribution: Contribution
	tldr: string
}
