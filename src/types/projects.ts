import { StaticImageData } from 'next/image'

type Point = {
	key: number
	copy: string
}

export interface Project {
	title: string
	points: Point[]
}

export interface Projects {
	key: number
	title: string
	jobDescription: string
	jobProjects: Project[]
	imageSrc: StaticImageData
	imageAltText: string
}
