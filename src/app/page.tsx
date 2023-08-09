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
