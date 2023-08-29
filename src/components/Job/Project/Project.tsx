import { Typography } from '@/components'
import { Project } from '@/types/projects'
import styles from './project.styles.module.css'

export function Project({ title, points }: Project) {
	return (
		<div className={styles.wrapper}>
			<Typography type="h4" className={styles.h4}>
				{title}
			</Typography>
			{/* TODO: Check the gaps on mobile between jobs */}
			<ul className={styles.ul}>
				{points.map(({ key, copy }) => (
					<li key={key} className={styles.li}>
						<Typography color="dark-red" type="span">
							{copy}
						</Typography>
					</li>
				))}
			</ul>
		</div>
	)
}
