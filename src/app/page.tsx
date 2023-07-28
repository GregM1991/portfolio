import Section from '@/components/Section'
import Typography from '@/components/Typography/Typography'

export default function Home() {
	return (
		<main>
			<Section>
				<Typography type="h1">
					Greg life <a id="greg-life" />
				</Typography>
				<Typography variant="pLead">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</Section>
			<Section bgColor="indigo">
				<Typography type="h1" color="white">
					My contribution <a id="my-contribution" />
				</Typography>
				<Typography color="white">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</Section>
			<Section bgColor="orange">
				Greg&apos;s values
				<a id="gregs-values">#</a>
			</Section>
			<Section bgColor="pink">
				A place for projects
				<a id="projects">#</a>
			</Section>
			<Section bgColor="green">
				Sustainability
				<a id="sustainability">#</a>
			</Section>
		</main>
	)
}
