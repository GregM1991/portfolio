import '../global.css'
import '../variables.css'
import '../fonts.css'

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
