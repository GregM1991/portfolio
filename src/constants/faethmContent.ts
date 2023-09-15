import faethmKbbq from '@/assets/images/faethm-kbbq-2.jpg'
import { SpotlightContent } from '@/types/content'

export const FAETHM_TECH = {
	sectionAriaLabel: 'Technologies used at Faethm',
	techStack: [
		'Node JS',
		'Express',
		'AWS Lambda',
		'gRPC',
		'GraphQL',
		'SQL + noSQL databases',
		'React with Typescript',
		'Redux & Redux Toolkit',
		'RxJS',
	],
}

export const OPENING = {
	heading: 'Working at Faethm',
	tldr: "At Faethm I collaborated with a stellar team (shoutout to the design team) and contributed to the evolution of the product's design and functionality. As they transitioned from startup mode, development became more structured, particularly after Pearson's acquisition.",
	body: [
		{
			key: crypto.randomUUID(),
			copy: "Faethm is a workforce analytics and strategic workforce planning SaaS platform (lots of HR tech I know 😅). Once again I was surrounded by fantastic people, especially the design team. We had a great working relationship (see Karin's testimonial on the home page).",
		},
		{
			key: crypto.randomUUID(),
			copy: 'They had a solid product, albeit a bit dated design-wise (the product team rectified this over the time I worked there). When I joined they were at the end of their start-up life-cycle so the speed of development and feature iteration was quick, but beginning to show signs of more structured processes. This was especially evident after their acquisition by Pearson.',
		},
	],
	imageSrc: faethmKbbq,
	imageAlt:
		'Faethm team at Korean BBQ eating and drinking and smiling at the camera',
	sectionAriaLabel: 'Description and introduction to the faethm project page',
}

export const GOALS = {
	sectionAriaLabel: 'Gregs goals at Faethm',
	heading: 'Goals at Faethm',
	body: [
		{
			key: crypto.randomUUID(),
			copy: 'Before joining Faethm, I set clear objectives for my technical growth. One of my primary goals was to deepen my understanding of React, particularly focusing on the intricacies of the hooks API and advanced design patterns. Additionally, I aimed to bolster my backend expertise, with a keen interest in mastering Node JS, and understanding the synergy between frontend and backend development.',
		},
		{
			key: crypto.randomUUID(),
			copy: 'I had an aspiration to immerse myself in a larger, agile team environment, a departure from my previous experience in a two-person team. I recognized the potential challenges and the need for effective communication in such a setting. Thus, enhancing my interpersonal and collaborative skills was a priority, ensuring that I could contribute effectively and harmoniously within a bigger team.',
		},
	],
	tldr: 'Before joining Faethm, I aimed to deepen my expertise in React and Node JS, focusing on holistic development. Additionally, transitioning to a larger team, I prioritized enhancing my communication and collaboration skills to thrive in an agile environment.',
}

export const CHALLENGES = {
	heading: 'Challenges and Growth',
	body: [
		{
			key: crypto.randomUUID(),
			copy: "Navigating Faethm's start-up mindset presented its own set of challenges. While the energy and drive were palpable, it often meant that advocating for tech-debt tickets or streamlining features for better design and architecture took a backseat. This was particularly evident when working on the UI Component Library; larger refactors, though beneficial in the long run, would divert resources from the immediate roadmap.",
		},
		{
			key: crypto.randomUUID(),
			copy: 'On top of that, grappling with a sizable legacy codebase added another layer of complexity to the mix. My initial encounters with RsJX were a bit of a brain-teaser, and the use of Redux without the Redux Toolkit meant sifting through and setting up a fair amount of boilerplate. It was a learning curve, but these challenges certainly kept things interesting!',
		},
		{
			key: crypto.randomUUID(),
			copy: 'I really learned a lot at Faethm, it was a great job that helped me fill some of the gaps in my knowledge. There was so much knowledge to soak up from the people around me and they were supportive in helping me learn and grow.',
		},
	],
	tldr: 'At Faethm, the start-up mindset and a significant legacy codebase posed challenges, especially when balancing tech-debt and immediate roadmap priorities. Despite the hurdles, the supportive team environment fostered learning, helping me bridge knowledge gaps and grow professionally.',
	sectionAriaLabel: 'Gregs challenges at Faethm',
}

export const UI_COMPONENT_LIBRARY: SpotlightContent = {
	heading: 'UI Component Library',
	description:
		"This was my crowning jewel at Faethm, the UI Component Library. From the moment I joined, I started working on understanding and shaping the component library and how it's used within Faethm. As component libraries go, it's a set of reusable components set up as a package to be brought into front-end applications as needed. The components were built out with the Faethm Design System at its core for styling, using the atomic design system to build out complex components simply.",
	contribution: {
		heading: 'Contribution',
		body: [
			{
				key: crypto.randomUUID(),
				copy: 'I was appointed as the lead for the UI Component Library. This meant I was in charge of the general patterns of design for our components, how the codebase was maintained and written to allow for scalability and ease of use for our developers. I wrote many of the components myself, and would be a key person to review new code.',
			},
			{
				key: crypto.randomUUID(),
				copy: 'I set up a fortnightly meeting to sync up the design and engineering teams, as well as to give updates on how the UI Component Library was tracking. The reasons for this were through observations in my first initial months at Faethm. I found that the Design and Engineering teams were out of sync. I noticed that the Design team were making alterations to component designs, as well as creating new components and not communicating that with engineering. I also reviewed PRs where developers were not utilising the components built within the component library.',
			},
		],
	},
	tldr: "I was appointed as the lead for the UI Component Library, overseeing design patterns, codebase maintenance, and writing components for scalability and developer ease. To address observed communication gaps between the Design and Engineering teams at Faethm, I initiated fortnightly meetings to synchronize both teams and provide updates on the UI Component Library's progress.",
}

export const IN_HOUSE_IDENTITY_TO_AUTH0: SpotlightContent = {
	heading: 'In-House Identity to Auth0',
	description:
		'When Faethm started out they implemented their own bespoke authentication flow and over time the maintainability and scope of this feature blew out of control. We set out to find a third-party alternative that would handle all our use cases and landed on Auth0.',
	contribution: {
		heading: 'Contribution',
		body: [
			{
				key: crypto.randomUUID(),
				copy: 'I was involved in the development of a suite of APIs utilised to seamlessly integrate with our back end, focusing on login and user management functionalities. This ensured that our users had a smooth and secure experience every time they accessed our platform.',
			},
			{
				key: crypto.randomUUID(),
				copy: 'Another significant task I was involved in was the integration of Auth0 into our front-end login flow. By incorporating Auth0, we were able to enhance the security and efficiency of our authentication process, providing our users with a reliable and streamlined login experience.',
			},
		],
	},
	tldr: 'I played a key role in developing APIs for backend integration, particularly for user login and management, ensuring a seamless user experience. Additionally, I contributed to integrating Auth0 into our front end, ensuring the user was redirected to Auth0 and back with minimal interference.',
}

export const SUPPLY_DEMAND_MODEL: SpotlightContent = {
	heading: 'SWP - Supply & Demand Model',
	description:
		"This feature was brought in to help users understand the ins and outs of their workforce and how it's set to be impacted by different emerging technologies. Data models would be pulled from the wider product and would end in a graph showing the need to increase/decrease individuals in a particular role.",
	contribution: {
		heading: 'Contribution',
		body: [
			{
				key: crypto.randomUUID(),
				copy: 'I was actively involved in the architecture of this feature. This involved running point on the UI and what could be utilised from our UI component library, as well as what new components could be created for the library, as well as which components would be more specific to the product. We also went through what state would be needed for both the front-end and back-end applications, including the choice of SQL database and schema.',
			},
			{
				key: crypto.randomUUID(),
				copy: "From there I was involved in the building out of the front-end and back-end applications. Our front end was a multi-step form consisting of three sections; a description of the user's scenario, selection of technologies adopted and workforce impact (retirement/attrition rates). Our back end was built using Node with Typescript, with REST APIs performing CRUD operations on our resources.",
			},
		],
	},
	tldr: "I played a pivotal role in the feature's architecture, focusing on UI components, state management, and database selection. The implementation involved a multi-step front-end form and a Node-based back-end with REST APIs for data operations.",
}
