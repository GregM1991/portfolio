import '@/app/(canvaGroup)/canva.css'
import '@/app/(canvaGroup)/canva-variables.css'
import '@/app/(canvaGroup)/fonts.css'

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
