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
			copy: 'Another aspiration was to immerse myself in a larger, agile team environment, a departure from my previous experience in a two-person team. I recognized the potential challenges and the need for effective communication in such a setting. Thus, enhancing my interpersonal and collaborative skills was a priority, ensuring that I could contribute effectively and harmoniously within a bigger team.',
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

export const IN_HOUSE_IDENTITY_TO_AUTH0: SpotlightContent = {
	heading: 'Refactor of Legacy Demand Configuration',
	description:
		'Demand configuration is a feature that allows clients to associate Demand Drivers to different Segments in their business. We needed to update and refresh the UI/UX of this page as it was a bane for customers. We also split out the APIs and business logic required for the feature into services.',
	contribution: {
		heading: 'Contribution',
		body: [
			{
				key: crypto.randomUUID(),
				copy: "While the original system on C# Razor pages served its purpose, we aimed for a more dynamic and user-friendly experience. We rebuilt the feature with React and Typescript, utilising React APIs like useContext and useReducer to handle each segment's complex state. This transition enhanced the system's responsiveness and set the stage for a more intuitive user interface.",
			},
			{
				key: crypto.randomUUID(),
				copy: "As we delved into the refactoring process, design blueprints for the configuration interface were in a state of flux. Adapting to these evolving designs was both a challenge and an opportunity. It allowed me to be part of iterative design discussions, offering feedback and insights to ensure that the final design was not only visually appealing but also met our functional requirements. My role wasn't confined to just coding; it was about understanding and contributing to the design ethos of the refactored system.",
			},
			{
				key: crypto.randomUUID(),
				copy: 'I also contributed to the creation of our CRUD APIs. Our services to handle these operations were being stripped out of the MVC app and moved to their own services driven by events, so making sure our services and the MVC app were kept in sync was crucial.',
			},
		],
	},
	tldr: 'We transitioned from C# Razor pages to a more responsive system using React and Typescript, enhancing user experience. Amid evolving designs, I actively contributed to design discussions, and ensured synchronization between our new CRUD APIs and the MVC app.',
}

export const SUPPLY_DEMAND_MODEL: SpotlightContent = {
	heading: 'Refactor of Legacy Demand Configuration',
	description:
		'Demand configuration is a feature that allows clients to associate Demand Drivers to different Segments in their business. We needed to update and refresh the UI/UX of this page as it was a bane for customers. We also split out the APIs and business logic required for the feature into services.',
	contribution: {
		heading: 'Contribution',
		body: [
			{
				key: crypto.randomUUID(),
				copy: "While the original system on C# Razor pages served its purpose, we aimed for a more dynamic and user-friendly experience. We rebuilt the feature with React and Typescript, utilising React APIs like useContext and useReducer to handle each segment's complex state. This transition enhanced the system's responsiveness and set the stage for a more intuitive user interface.",
			},
			{
				key: crypto.randomUUID(),
				copy: "As we delved into the refactoring process, design blueprints for the configuration interface were in a state of flux. Adapting to these evolving designs was both a challenge and an opportunity. It allowed me to be part of iterative design discussions, offering feedback and insights to ensure that the final design was not only visually appealing but also met our functional requirements. My role wasn't confined to just coding; it was about understanding and contributing to the design ethos of the refactored system.",
			},
			{
				key: crypto.randomUUID(),
				copy: 'I also contributed to the creation of our CRUD APIs. Our services to handle these operations were being stripped out of the MVC app and moved to their own services driven by events, so making sure our services and the MVC app were kept in sync was crucial.',
			},
		],
	},
	tldr: 'We transitioned from C# Razor pages to a more responsive system using React and Typescript, enhancing user experience. Amid evolving designs, I actively contributed to design discussions, and ensured synchronization between our new CRUD APIs and the MVC app.',
}
