import {
	SiTypescript,
	SiCss3,
	SiHtml5,
	SiReact,
	SiNodedotjs,
	SiRedux,
} from 'react-icons/si'
import { Typography } from '@/components'
import { SKILLS_COPY } from '@/constants/content'
import styles from './skills.styles.module.css'

export function Skills() {
	return (
		<section aria-label="A section showcasing Greg's skills">
			<div className={styles.wrapper}>
				<Typography color="primary" type="h2" size="xl">
					{SKILLS_COPY.title}
				</Typography>
				<Typography>{SKILLS_COPY.body}</Typography>
				<div className={styles.iconsWrapper}>
					<SiHtml5 />
					<SiCss3 />
					<SiTypescript />
					<SiReact />
					<SiNodedotjs />
					<SiRedux />
				</div>
			</div>
		</section>
	)
}
