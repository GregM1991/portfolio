import {
	GregLifeMural,
	GregLife,
	MyContribution,
	GregsValues,
	MyJobs,
	Testimonials,
	BeHired,
} from '@/components'

export default function Home() {
	return (
		<main>
			{/* TODO: Fix padding at min-width: 576px for containing divs */}
			{/* TODO: I need to revise how I've done the first pass of animations, they're pretty ugly atm (the code) */}
			{/* TODO: A few properties like letter-spacing are riddled throughout the css */}
			<GregLife />
			<MyContribution />
			<GregsValues />
			<MyJobs />
			<GregLifeMural />
			<Testimonials />
			<BeHired />
		</main>
	)
}
