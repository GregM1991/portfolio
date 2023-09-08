import randomImg from '@/assets/images/eq8-pub.jpg'
import { Project } from '@/types/projects'

export const PROJECT_THUMBS: Project[] = [
	{
		key: crypto.randomUUID(),
		title: 'eQ8',
		body: '(workplace) HR Tech - Strategic Workforce Planning SaaS platform.',
		projImage: randomImg,
		alt: 'TODO: write a proper alt text here',
		htmlLink: '/eq8',
	},
]
