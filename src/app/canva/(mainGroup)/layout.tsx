import type { Metadata } from 'next'
import {
	Header,
	Footer,
	ContactMeRoot,
	ContactMeContent,
	ModalBody,
} from '@/components'

import '@/app/global.css'
import '@/app/variables.css'
import '@/app/fonts.css'

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
				<ContactMeRoot>
					<Header />
					{children}
					<Footer />
					<ContactMeContent title="My deets" description={<ModalBody />} />
				</ContactMeRoot>
			</body>
		</html>
	)
}
