import '@/app/global.css'
import '@/app/variables.css'
import '@/app/fonts.css'

interface PassowrdProtectLayoutProps {
	children: React.ReactNode
}

export default function PassowrdProtectLayout({
	children,
}: PassowrdProtectLayoutProps) {
	return (
		<html>
			<body>{children}</body>
		</html>
	)
}
