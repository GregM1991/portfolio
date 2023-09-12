import { StaticImageData } from 'next/image'
import eq8Gang from '@/assets/images/eq8-pub.jpg'
import {
	dcOld,
	dcSegmentExpanded,
	dcSegmentExpandedEdit,
	dcDriverView,
} from '@/assets/images/demand-config-screens'

export const EQ8_TECH = [
	'C#',
	'dotnet',
	'Azure functions',
	'gRPC',
	'SQL + noSQL databases',
	'Razor pages',
	'React with Typescript',
	'Zustand',
]

export type Screen = {
	key: string
	src: StaticImageData
	alt: string
	imageDescription: string
}

const SCREENS: Screen[] = [
	{
		key: crypto.randomUUID(),
		src: dcOld,
		alt: 'Legacy view of demand configuration',
		imageDescription:
			'A view of the old demand configuration page, there was a lot to the page, a bunch of sliders and buttons.',
	},

	{
		key: crypto.randomUUID(),
		src: dcSegmentExpanded,
		alt: 'Updated view of demand configuration with segment expanded',
		imageDescription:
			'Here is the new view, it was designed to look more simple on intial view, with the option open an UI shelf that houses the segments associations.',
	},
	{
		key: crypto.randomUUID(),
		src: dcSegmentExpandedEdit,
		alt: 'Updated view of demand configuration with segment expanded and in edit mode',
		imageDescription:
			'There is an edit mode for the segment that allows drivers to be created, read, updated and deleted all from the one spot.',
	},
	{
		key: crypto.randomUUID(),
		src: dcDriverView,
		alt: 'Updated view of demand configuration in driver view',
		imageDescription:
			'There is an alternate view wherein the user can view their associations by the driver, instead of the segment.',
	},
]

export const CONTENT = {
	description: {
		heading: 'Working at eQ8',
		body: [
			{
				key: crypto.randomUUID(),
				copy: 'I had a great experience working at eQ8, the team there are a fun bunch of people and we were never short of a good time, you can see a few of my workmates below.',
			},
			{
				key: crypto.randomUUID(),
				copy: "EQ8 is in the start-up phase and the environment showed this. The lessons I learned at my time there had a lot to do with what's necessary for the product to maximise use-ability and minimise time-to-market.",
			},
		],
		imageSrc: eq8Gang,
		imageAlt: '',
	},
	tech: EQ8_TECH,
	goals: {
		heading: 'Goals at eQ8',
		body: [
			{
				key: crypto.randomUUID(),
				copy: "I had set myself a few goals when deciding to leave for eQ8. I'd spent most of my career working with JS and wanted to have a crack at a new language, and I'd heard good things about C#. I was brought on to the team however for my knowledge of React, and the front end. So with that, I wanted to enhance my ability to share knowledge and mentor less experienced devs, as well as fine-tune my React.",
			},
			{
				key: crypto.randomUUID(),
				copy: "I also wanted to step out of my comfort zone, like I said I've spent a lot of my career working with JavaScript, so I wanted something new. I was also heading from a somewhat established company (Faethm had been acquired by Pearson) to a start-up, to help get a feel for the wider industry.",
			},
		],
	},
	challenges: {
		heading: 'Challenges and Growth',
		body: [
			{
				key: crypto.randomUUID(),
				copy: "Working at eq8 was a rollercoaster of growth and challenges. One of the things that stood out was the pace of the projects. Everything moved so quickly that I didn't get as much time as I'd hoped to dive deep into C#. It was a bit of a bummer, but it also taught me to adapt and prioritize based on the team's immediate needs. Speaking of pace, the environment was high-energy and high-pressure. While this could be intense, it pushed me to hone my skills in managing stress, multitasking, and delivering quality work within tight deadlines.",
			},
			{
				key: crypto.randomUUID(),
				copy: 'Every workplace has their legacy code, and eQ8 was no different. We were dealing with razor pages, MVC, and the monumental task of splitting the services from the main app. It was challenging to integrate new features without disrupting the existing architecture. However, this experience was invaluable. It taught me the importance of documentation, understanding the history of code decisions, and the delicate art of modernizing without breaking things.',
			},
			{
				key: crypto.randomUUID(),
				copy: 'All in all, my time at eq8 was filled with learning curves that shaped me into a more resilient and adaptable engineer.',
			},
		],
	},
	demandConfig: {
		heading: 'Refactor of Legacy Demand Configuration',
		description:
			'Demand configuration is a feature that allows clients to associate Demand Drivers to different Segments in their business. We needed to update and refresh the UI/UX of this page as it was a bane for customers. We also split out the APIs and business logic required for the feature into services.',
		screens: SCREENS,
	},
}
