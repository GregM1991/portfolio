import { Typography } from '@/components'
import styles from './skills.styles.module.css'
import { SKILLS_COPY } from '@/constants/content'

export function Skills() {
	return (
		<section aria-label="A section showcasing Greg's skills">
			<div className={styles.wrapper}>
				<Typography color="primary" type="h2" weight="bold" size="xl">
					{SKILLS_COPY.title}
				</Typography>
				<Typography>{SKILLS_COPY.body}</Typography>
			</div>
		</section>
	)
}
