import {
	GregLifeMural,
	GregLife,
	MyContribution,
	GregsValues,
	MyProjects,
	Testimonials,
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
		</main>
	)
}
