import '@/app/(canvaGroup)/canva/(canvaMainGroup)/canva-variables.css'
import '@/app/(canvaGroup)/canva/(canvaMainGroup)/canva.css'
import { ezra } from '../(canvaMainGroup)/layout'

interface PasswordProtectLayoutProps {
	children: React.ReactNode
}

export default function PasswordProtectLayout({
	children,
}: PasswordProtectLayoutProps) {
	return (
		<html>
			<body className={ezra.className}>{children}</body>
		</html>
	)
}
