import '@/app/(canvaGroup)/canva/(canvaMainGroup)/canva-fonts.css'
import '@/app/(canvaGroup)/canva/(canvaMainGroup)/canva-variables.css'
import '@/app/(canvaGroup)/canva/(canvaMainGroup)/canva.css'

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
