import { devVars } from './layout'

export default function Home() {
	return (
		<main>
			<h1 style={{ fontSize: devVars.typography.steps.four }}>
				{devVars.palette.dark}
			</h1>
		</main>
	)
}
