import '@/app/global.css'
import '@/app/canva-variables.css'
import '@/app/fonts.css'

interface PasswordProtectLayoutProps {
	children: React.ReactNode
}

export default function PasswordProtectLayout({
	children,
}: PasswordProtectLayoutProps) {
	return (
		<html>
			<body>{children}</body>
		</html>
	)
}
