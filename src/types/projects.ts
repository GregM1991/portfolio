import { StaticImageData } from 'next/image'

type Point = {
	key: string
	copy: string
}

export interface Project {
	key: string
	title: string
	points: Point[]
}

export interface Projects {
	key: string
	title: string
	jobDescription: string
	jobProjects: Project[]
	imageSrc: StaticImageData
	imageAltText: string
}
