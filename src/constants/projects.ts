import eq8 from '@/assets/images/eq8-pub.jpg'
import faethm from '@/assets/images/faethm-kbbq-2.jpg'
import portfolio from '@/assets/images/greg-standing-on-clifftop-in-tasmania.jpg'
import { Project } from '@/types/projects'

export const PROJECT_THUMBS: Project[] = [
	{
		key: crypto.randomUUID(),
		title: 'Working at eQ8',
		body: 'HR Tech - Strategic Workforce Planning SaaS platform',
		projImage: eq8,
		imageAlt:
			'Greg, Annisa and Aaron smiling and having a beer in the sunshine',
		htmlLink: '/eq8',
	},
	{
		key: crypto.randomUUID(),
		title: 'Working at Faethm by Pearson',
		body: 'HR Tech - Workforce Insights and Strategy SaaS platform',
		projImage: faethm,
		imageAlt:
			'Faethm team at Korean BBQ eating and drinking and smiling at the camera',
		htmlLink: '/faethm',
	},
	{
		key: crypto.randomUUID(),
		title: 'This portfolio site',
		body: 'A Next 13 SSG/SSR portfolio site to help me sell the Greg dream',
		projImage: portfolio,
		imageAlt: 'A picture of a laptop and screen with Gregs website on each.',
		htmlLink: '/portfolio',
	},
]
