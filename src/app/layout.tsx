import type { Metadata } from 'next'
import Header from '@/components/Header'

import './global.css'
import '@/utils/variables.css'

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
				<Header />
				{children}
			</body>
		</html>
	)
}
