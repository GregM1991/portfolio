import Section from '@/components/Section'
import Typography from '@/components/Typography/Typography'
import Image from '@/components/Image'

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
				<Image alt="My first image" src="" />
				{/* TODO: change this to something useful */}
			</Section>
			<Section bgColor="indigo">
				<Typography type="h2" color="white" variant="h2Rich">
					My contribution <a id="my-contribution" />
				</Typography>
				<Typography color="white">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</Section>
			<Section bgColor="red">
				<Typography type="h2" color="white" variant="programHeader">
					Greg&apos;s values <a id="gregs-values" />
				</Typography>
				<Typography color="white">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</Section>
			<Section bgColor="light-pink">
				<Typography type="h2" color="dark-red" variant="h2Rich">
					A place for projects <a id="projects" />
				</Typography>
				<Typography color="dark-red">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</Section>
			<Section bgColor="green">
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
