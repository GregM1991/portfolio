import {
	GregLifeMural,
	GregLife,
	MyContribution,
	GregsValues,
	MyProjects,
	Testimonials,
	BeInspired,
} from '@/components'

export default function Home() {
	return (
		<main>
			{/* TODO: I should probably reformat all the images into web optimised */}
			<GregLife />
			<MyContribution />
			<GregsValues />
			<MyProjects />
			<GregLifeMural />
			<Testimonials />
			<BeInspired />
		</main>
	)
}
