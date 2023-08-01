import {
	Section,
	Typography,
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
			<Section bgColor="green" ariaLabel="My sustainability">
				<Typography type="h2" variant="h2Rich">
					Sustainability <a id="sustainability" />
				</Typography>
				<Typography>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</Section>
			<Testimonials />
		</main>
	)
}
