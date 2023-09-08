import { Typography } from '@/components'
import { CanvaProject } from '@/types/projects'
import styles from './project.styles.module.css'

export function Project({ title, points }: CanvaProject) {
	return (
		<div className={styles.wrapper}>
			<Typography canva type="h4" className={styles.h4}>
				{title}
			</Typography>
			<ul className={styles.ul}>
				{points.map(({ key, copy }) => (
					<li key={key} className={styles.li}>
						<Typography canva color="dark-red" type="span">
							{copy}
						</Typography>
					</li>
				))}
			</ul>
		</div>
	)
}
