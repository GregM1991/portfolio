import type { Metadata } from 'next'
import { ThemeProvider, theme } from '@/theme'
import { toVarNames, toVars } from '@/utils'
import Header from '@/components/Header'
import './global.css'

export const metadata: Metadata = {
	title: "Greg Martin's portfolio 🎨",
	description: 'A place to show the world what I got 💪🏻',
}

export const devVars = toVarNames(theme)
export const cssVars = toVars(theme)

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ThemeProvider>
			<html lang="en" style={{ ...cssVars }}>
				<body>
					<Header />
					{children}
				</body>
			</html>
		</ThemeProvider>
	)
}
