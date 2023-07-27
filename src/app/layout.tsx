import type { Metadata } from 'next'
import Header from '@/components/Header'
import { CSS_VARS } from '@/constants/cssVariables'

import './global.css'

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
		<html lang="en" style={{ ...CSS_VARS }}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
