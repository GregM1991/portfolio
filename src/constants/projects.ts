import projectImage from '@/assets/images/delicious-black-nectar-of-the-gods.jpg'
import { StaticImageData } from 'next/image'

type Project = {
	title: string
	points: string[]
}

export interface Projects {
	title: string
	jobDescription: string
	jobProjects: Project[]
	imageSrc: StaticImageData
	imageAltText: string
}

// TODO: Change the alt text of the images
export const JOBS: Projects[] = [
	{
		title: 'eQ8',
		jobDescription:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat aut harum. Quas eos unde atque aliquam ea distinctio, aperiam modi quos in sit officia a? A voluptas expedita ab.',
		jobProjects: [
			{
				title: 'Refactor of old Demand Configuration',
				points: [
					'Building out new designs in React/Typescript with Zustand, from c# Razer pages',
					'Assisted in refinement of UI/UX in ongoing discussions as new UI/UX was designed',
					'Helped build out gRPC APIs for crud operations on driver associations',
				],
			},
			{
				title: 'Global Supply Upload',
				points: [
					'Allowed for clients to upload a global supply, allowing them to create subsets of this data for different plans',
					'Built out greenfields design for the page that allowed users to split the global dataset using filters',
					'Assisted on creation of APIs to segment and store data in the backend',
				],
			},
		],
		imageSrc: projectImage,
		imageAltText: 'eQ8 image alt text goes here',
	},
	{
		title: 'Faethm',
		jobDescription: '',
		jobProjects: [
			{
				title: 'In-house Identity to Auth0',
				points: [
					'Followed invite model rather then sign up, users were created on invite - users were only deleted if inactive for 12 months',
					'User profile was had name/email which was global - but roles were specific to each org',
					'Created set of APIs for our frontend login & user management app to use auth0',
					'All Auth0 Infrastructure Terraform (roles/applications/user database/login page) Terraformed',
				],
			},
			{
				title: 'SWP - Supply & Demand Model',
				points: [
					'Navigate users through a form to explain what the impact of different technologies was on their a role in their workforce',
					'End graph would show whether they need more or less of role',
					'3 sections: Description of their scenario, selection of technologies adopted and selection of workforce impact (retirement or retention)',
					'REST APIs based on resource',
				],
			},
		],
		imageSrc: projectImage,
		imageAltText: 'Faethm image alt text goes here',
	},
]
