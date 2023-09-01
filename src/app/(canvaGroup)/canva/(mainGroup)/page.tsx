'use client'
import dynamic from 'next/dynamic'
import { GregLife, MyContribution } from '@/components'

const DynamicGregsValues = dynamic(
	() => import('../../../../components').then(mod => mod.GregsValues),
	{
		loading: () => <p>Loading...</p>,
	},
)
const DynamicGregLifeMural = dynamic(
	() => import('../../../../components').then(mod => mod.GregLifeMural),
	{
		loading: () => <p>Loading...</p>,
	},
)
const DynamicMyJobs = dynamic(
	() => import('../../../../components').then(mod => mod.MyJobs),
	{
		loading: () => <p>Loading...</p>,
	},
)
const DynamicTestimonials = dynamic(
	() => import('../../../../components').then(mod => mod.Testimonials),
	{
		loading: () => <p>Loading...</p>,
	},
)
const DynamicBeHired = dynamic(
	() => import('../../../../components').then(mod => mod.BeHired),
	{
		loading: () => <p>Loading...</p>,
	},
)

// TODO: swipe gestures on values and testimonials
// TODO: projects descriptions
// TODO: Fix be-hired link
// TODO: Contact me transfers me down the bottom of page
// TODO: Add mention of canva portfolio and add github link
export default function Home() {
	return (
		<main>
			<GregLife />
			<MyContribution />
			<DynamicGregsValues />
			<DynamicMyJobs />
			<DynamicGregLifeMural />
			<DynamicTestimonials />
			<DynamicBeHired />
		</main>
	)
}
