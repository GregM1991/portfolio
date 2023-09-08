import faethmKbbq from '@/assets/images/faethm-kbbq-2.jpg'
import eq8Pub from '@/assets/images/eq8-pub.jpg'
import { Jobs } from '@/types/projects'

export const JOBS: Jobs[] = [
	{
		key: crypto.randomUUID(),
		title: 'eQ8 | Full-Stack Engineer',
		jobDescription:
			"Eq8 is a strategic workforce planning SaaS platform. I had a great experience working at eQ8, the team there are a fun bunch of people and we were never short of a good time. The platform's back end was built using C# and the .NET framework, with Azure Functions utilized for serverless computing, gRPC used for API communication, and both SQL and noSQL databases. The front end was built using C# Razor pages, but we were in the process of transitioning our front end to use React with Typescript.",
		jobProjects: [
			{
				key: crypto.randomUUID(),
				title: 'Refactor of old Demand Configuration',
				points: [
					{
						key: crypto.randomUUID(),
						copy: 'Built out new designs in React/Typescript with Zustand, from C# Razor pages',
					},
					{
						key: crypto.randomUUID(),
						copy: 'EQ8 was quite fast-paced, so the designs for the page were evolving as we were building it out. I assisted in feedback of these designs as well as building them',
					},
					{
						key: crypto.randomUUID(),
						copy: 'Helped build out gRPC APIs for CRUD operations on driver associations',
					},
				],
			},
			{
				key: crypto.randomUUID(),
				title: 'Global Supply Upload',
				points: [
					{
						key: crypto.randomUUID(),
						copy: 'Allowed for clients to upload a global supply, giving them the power to create subsets of this data for different plans',
					},
					{
						key: crypto.randomUUID(),
						copy: 'Built out greenfields designs for the page that allowed users to split the global dataset using filters',
					},
					{
						key: crypto.randomUUID(),
						copy: 'Assisted on the design and creation of APIs to segment and store data in the back end',
					},
				],
			},
		],
		imageSrc: eq8Pub,
		imageAltText:
			'Greg, Annisa and Aaron smiling and having a beer in the sunshine',
	},
	{
		key: crypto.randomUUID(),
		title: 'Faethm | Full-Stack Engineer',
		jobDescription:
			"Faethm was a workforce analytics and strategic workforce planning SaaS platform (lots of HR tech I know 😅). Once again I was surrounded by fantastic people, especially the design team. We had a great working relationship (see Karin's testimonial below). The back end was built with Node JS, with AWS Lamdas for serverless computing, gRPC (with some GraphQL) used for APIs and both SQL and noSQL databases. ",
		jobProjects: [
			{
				key: crypto.randomUUID(),
				title: 'In-house Identity to Auth0',
				points: [
					{
						key: crypto.randomUUID(),
						copy: "Implemented an 'invite-only' model instead of a standard sign-up process, where user accounts were created upon invitation and automatically deleted after 12 months of inactivity",
					},
					{
						key: crypto.randomUUID(),
						copy: 'User profile was set globally with a name and email. Roles were specific to each organisation',
					},
					{
						key: crypto.randomUUID(),
						copy: 'Created a set of APIs for our front end login & user management app to use auth0',
					},
				],
			},
			{
				key: crypto.randomUUID(),
				title: 'SWP - Supply & Demand Model',
				points: [
					{
						key: crypto.randomUUID(),
						copy: 'Navigate users through a multi-page form to explain what the impact of different technologies would be on their role in the workforce',
					},
					{
						key: crypto.randomUUID(),
						copy: 'Implemented a graph to indicate the need to increase/decrease the number of individuals in a particular role',
					},
					{
						key: crypto.randomUUID(),
						copy: '3 sections (pages): description of their scenario, selection of technologies adopted and selection of workforce impact (retirement or attrition)',
					},
					{ key: crypto.randomUUID(), copy: 'REST APIs based on resource' },
				],
			},
		],
		imageSrc: faethmKbbq,
		imageAltText:
			'Faethm team at Korean BBQ eating and drinking and smiling at the camera',
	},
]
