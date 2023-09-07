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
})

const raleway = Raleway({
	weight: ['400', '200'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
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
		<html lang="en">
			<body className={`${arvo.className} ${raleway.className}`}>
				<Header headerFor="normal" />
				{children}
			</body>
		</html>
	)
}
