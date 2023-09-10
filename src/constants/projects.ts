import randomImg from '@/assets/images/eq8-pub.jpg'
import { Project } from '@/types/projects'

export const PROJECT_THUMBS: Project[] = [
	{
		key: crypto.randomUUID(),
		title: 'eQ8 (workplace)',
		body: 'HR Tech - Strategic Workforce Planning SaaS platform',
		projImage: randomImg,
		alt: 'TODO: write a proper alt text here',
		htmlLink: '/eq8',
	},
	{
		key: crypto.randomUUID(),
		title: 'Faethm by Pearson (workplace)',
		body: 'HR Tech - Workforce Insights and Strategy SaaS platform',
		projImage: randomImg,
		alt: 'TODO: write a proper alt text here',
		htmlLink: '/faethm',
	},
	{
		key: crypto.randomUUID(),
		title: 'This portfolio site',
		body: 'A Next 13 SSG/SSR portfolio site to help me sell the Greg dream',
		projImage: randomImg,
		alt: 'TODO: write a proper alt text here',
		htmlLink: '/portfolio',
	},
]
