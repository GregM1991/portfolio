import type { Metadata } from 'next'
import { Header } from '@/components'
import { Arvo, Raleway } from 'next/font/google'
import '../global.css'
import './home.css'
import './home-variables.css'

const arvo = Arvo({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-arvo',
})

const raleway = Raleway({
	weight: ['400', '200'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
})

export const metadata: Metadata = {
	title: "Greg Martin's portfolio 🎨",
	description: 'A place to show the world what I got 💪🏻',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${arvo.variable} ${raleway.variable}`}>
			<body>
				<Header headerFor="normal" />
				{children}

				<div
					style={{
						textAlign: 'center',
						fontFamily: 'var(--font-raleway)',
						padding: 'var(--space-3xl) var(--space-m)',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<hr
						style={{
							maxWidth: '100%',
							color: 'var(--palette-secondary)',
							margin: '0 0 var(--space-3xl)',
						}}
					/>
					<span style={{ fontSize: 'var(--step-2)' }}>🔨👷🏻‍♂️ </span>
					<span style={{ fontSize: 'var(--step-1)' }}>
						Things may look a little bare, but that&apos;s because we&apos;re
						still under construction... Hold tight!
					</span>
					<span style={{ fontSize: 'var(--step-2)' }}> 👷🏻‍♂️🧱</span>
				</div>
			</body>
		</html>
	)
}
