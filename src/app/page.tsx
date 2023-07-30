import {
	Section,
	Typography,
	GregLife,
	MyContribution,
	GregsValues,
} from '@/components'

export default function Home() {
	return (
		<main>
			<GregLife />
			<MyContribution />
			<GregsValues />
			<Section bgColor="light-pink" ariaLabel="My projects">
				<Typography type="h2" color="dark-red" variant="h2Rich">
					A place for projects <a id="projects" />
				</Typography>
				<Typography color="dark-red">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</Section>
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
		</main>
	)
}
