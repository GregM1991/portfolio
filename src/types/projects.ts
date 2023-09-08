import { StaticImageData } from 'next/image'

type Point = {
	key: string
	copy: string
}

export interface CanvaProject {
	key: string
	title: string
	points: Point[]
}

export interface Project {
	key: string
	title: string
	body: string
	projImage: StaticImageData
	alt: string
	htmlLink: string
}

export interface Jobs {
	key: string
	title: string
	jobDescription: string
	jobProjects: CanvaProject[]
	imageSrc: StaticImageData
	imageAltText: string
}
