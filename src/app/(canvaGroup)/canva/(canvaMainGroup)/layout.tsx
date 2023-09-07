import type { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { CANVA_NAV_LINKS } from '@/constants/links'
import '../../../global.css'
import './canva-fonts.css'
import './canva-variables.css'
import './canva.css'

export const metadata: Metadata = {
	title: 'Greg life | portfolio 🎨',
	description: 'A personal portfolio built for canva',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Header headerFor="canva" navLinks={CANVA_NAV_LINKS} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
