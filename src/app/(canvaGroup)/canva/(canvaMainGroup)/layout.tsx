import type { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { NAV_LINKS } from '@/constants/links'
import '@/app/global.css'
import '@/app/variables.css'
import '@/app/fonts.css'
import '@/app/canva.css'

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
				<Header logo="canva" navLinks={NAV_LINKS} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
