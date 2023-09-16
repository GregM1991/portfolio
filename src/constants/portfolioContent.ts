import portfolioMain from '@/assets/images/greg-portfolio-pic-main.png'

export const PORTFOLIO_TECH = {
	sectionAriaLabel: 'Technologies used for my portfolio',
	techStack: [
		'React/Typescript',
		'Next 13',
		'server components',
		'css-modules',
		'Framer Motion',
	],
}

export const OPENING = {
	heading: 'Personal Portfolio',
	tldr: "Reflecting on my three-year-old portfolio, I decided to refresh it using Next JS v13, drawn by its integration with React Server Components and the opportunity to learn SSR patterns and explore Next's developer experience features.",
	body: [
		{
			key: crypto.randomUUID(),
			copy: "As all Software Engineers do, I looked back at my portfolio I'd built around 3 years back and cringed at what I'd written. I needed an update/refresh and thought it would be fun to rebuild it in Next JS v13. I chose Next 13 because of the integration with React Server Components as it's something I hadn't dived into before, and had heard a lot about them. It was a good challenge and a lot of fun learning the SSR patterns, as well as discovering what great DX features Next has.",
		},
		{
			key: crypto.randomUUID(),
			copy: "At the time of building this I was interested in getting a job at Canva. It's been an aspiration of mine from when I began coding, to be hired in to a company with some of the top talent in Australia is a solid goal I set for myself. With this in mind I built a section of this portfolio as a replica of their canva-life page and used it as a template for my own personal content. You can find the link below.",
		},
	],
	imageSrc: portfolioMain,
	imageAlt: 'A view of the landing page for Gregs portfolio',
	sectionAriaLabel: 'Description and introduction to Gregs portfolio',
	codeLink: 'https://github.com/GregM1991/portfolio',
}

export const GOALS = {
	sectionAriaLabel: 'Gregs goals at for his portfolio',
	heading: 'Purpose and Goals',
	body: [
		{
			key: crypto.randomUUID(),
			copy: "My first goal was obviously to have an up-to-date and relevant portfolio that would help me showcase my skill set and talents. As I don't have many personal projects at the time of building this portfolio, I wanted the portfolio itself to be a showcase of what I can do (if only my front-end skills for now).",
		},
		{
			key: crypto.randomUUID(),
			copy: "My second goal was to learn more about the Server Side Rendering of applications and how that's done in the context of React. Server components are not entirely new, but gaining traction, and I want to be on the right side of their adoption into the mainstream. So I'm easing myself in with this portfolio site, to get some hands-on experience.",
		},
		{
			key: crypto.randomUUID(),
			copy: 'Lastly, I just wanted a bit of a playground where I could test out things, make mistakes and just have a good time building and learning. I used Framer motion for animations and gave utopia.fyi (a responsive design pattern that allows type and space to scale with the screen) a go. I also wanted to implement a site using CSS custom properties. It was a blast.',
		},
	],
	tldr: 'I aimed to create a current portfolio to display my abilities, using the portfolio itself as a testament to my front-end skills due to a lack of personal projects. Additionally, I sought to understand Server Side Rendering in React, diving into server components to stay ahead of their growing popularity and gain hands-on experience.',
}
