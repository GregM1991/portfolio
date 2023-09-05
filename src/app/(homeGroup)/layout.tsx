import type { Metadata } from 'next'
import { Header } from '@/components'
import { Arvo } from 'next/font/google'
import '@/app/global.css'
import '@/app/(homeGroup)/home-variables.css'

const arvo = Arvo({
	weight: ['400', '700'],
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
			<body className={arvo.className}>
				<Header headerFor="normal" />
				{children}
			</body>
		</html>
	)
}
