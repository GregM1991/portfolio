import { ProjectThumbs, Typography } from '@/components'
import styles from '../project.styles.module.css'

export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
			<hr className={styles.horizontalRule} />
			<section
				aria-label="A section with links to other projects within Gregs portfolio"
				className={styles.wrapper}
			>
				<Typography type="h3" size="xl">
					Other projects
				</Typography>
				<ProjectThumbs />
			</section>
		</>
	)
}
