import Section from '@/components/Section'

export default function Home() {
	return (
		<main>
			<Section>
				Greg Life
				<a id="greg-life">#</a>
			</Section>
			<Section bgColor="indigo">
				My contribution
				<a id="my-contribution">#</a>
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
