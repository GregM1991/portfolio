import faethmKbbq from '@/assets/images/faethm-kbbq-2.jpg'
import eq8Pub from '@/assets/images/eq8-pub.jpg'
import { Projects } from '@/types/projects'

// TODO: Change the alt text of the images
// TODO: Change images to shots of the gang
export const JOBS: Projects[] = [
	{
		title: 'eQ8',
		jobDescription:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat aut harum. Quas eos unde atque aliquam ea distinctio, aperiam modi quos in sit officia a? A voluptas expedita ab.',
		jobProjects: [
			{
				title: 'Refactor of old Demand Configuration',
				points: [
					{
						key: 1,
						copy: 'Building out new designs in React/Typescript with Zustand, from c# Razer pages',
					},
					{
						key: 2,
						copy: 'Assisted in refinement of UI/UX in ongoing discussions as new UI/UX was designed',
					},
					{
						key: 3,
						copy: 'Helped build out gRPC APIs for crud operations on driver associations',
					},
				],
			},
			{
				title: 'Global Supply Upload',
				points: [
					{
						key: 1,
						copy: 'Allowed for clients to upload a global supply, allowing them to create subsets of this data for different plans',
					},
					{
						key: 2,
						copy: 'Built out greenfields design for the page that allowed users to split the global dataset using filters',
					},
					{
						key: 3,
						copy: 'Assisted on creation of APIs to segment and store data in the backend',
					},
				],
			},
		],
		imageSrc: eq8Pub,
		imageAltText:
			'Greg, Annisa and Aaron smiling and having a beer in the sunshine',
	},
	{
		title: 'Faethm',
		jobDescription: '',
		jobProjects: [
			{
				title: 'In-house Identity to Auth0',
				points: [
					{
						key: 1,
						copy: 'Followed invite model rather then sign up, users were created on invite - users were only deleted if inactive for 12 months',
					},
					{
						key: 2,
						copy: 'User profile was had name/email which was global - but roles were specific to each org',
					},
					{
						key: 3,
						copy: 'Created set of APIs for our frontend login & user management app to use auth0',
					},
					{
						key: 4,
						copy: 'All Auth0 Infrastructure Terraform (roles/applications/user database/login page) Terraformed',
					},
				],
			},
			{
				title: 'SWP - Supply & Demand Model',
				points: [
					{
						key: 1,
						copy: 'Navigate users through a form to explain what the impact of different technologies was on their a role in their workforce',
					},
					{
						key: 2,
						copy: 'End graph would show whether they need more or less of role',
					},
					{
						key: 3,
						copy: '3 sections: Description of their scenario, selection of technologies adopted and selection of workforce impact (retirement or retention)',
					},
					{ key: 4, copy: 'REST APIs based on resource' },
				],
			},
		],
		imageSrc: faethmKbbq,
		imageAltText:
			'Faethm team at Korean BBQ eating and drinking and smiling at the camera',
	},
]
