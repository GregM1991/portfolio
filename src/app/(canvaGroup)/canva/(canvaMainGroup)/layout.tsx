import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { CANVA_NAV_LINKS } from '@/constants/links'
import '../../../global.css'
import './canva-variables.css'
import './canva.css'

export const metadata: Metadata = {
	title: 'Greg life | portfolio 🎨',
	description: 'A personal portfolio built for canva',
}

const ezra = localFont({
	src: '../../../../../public/fonts/ezra_medium-webfont.woff2',
	display: 'swap',
	fallback: ['sans-serif'],
	variable: '--font-ezra',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${ezra.variable} sans-serif`}>
				<Header headerFor="canva" navLinks={CANVA_NAV_LINKS} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
