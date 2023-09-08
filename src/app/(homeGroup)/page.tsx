import { Introduction, Skills, Projects } from '@/components'

export default function Home() {
	return (
		<main>
			<Introduction />
			<Skills />
			<Projects />
			<hr
				style={{
					maxWidth: '80vw',
					color: 'var(--palette-secondary)',
				}}
			/>
			<div
				style={{
					textAlign: 'center',
					fontFamily: 'var(--font-raleway)',
					padding: 'var(--space-3xl) var(--space-m)',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<span style={{ fontSize: 'var(--step-2)' }}>🔨👷🏻‍♂️ </span>
				<span style={{ fontSize: 'var(--step-1)' }}>
					Things may look a little bare, but that&apos;s because we&apos;re
					still under construction... Hold tight!
				</span>
				<span style={{ fontSize: 'var(--step-2)' }}> 👷🏻‍♂️🧱</span>
			</div>
		</main>
	)
}
