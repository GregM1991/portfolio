import type { Metadata } from 'next'
import { Header } from '@/components'
import { NAV_LINKS } from '@/constants/links'
import '@/app/global.css'

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
			<body>
				<Header logo="normal" navLinks={NAV_LINKS} />
				{children}
			</body>
		</html>
	)
}
