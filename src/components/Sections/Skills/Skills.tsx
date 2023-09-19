import {
	SiTypescript,
	SiCss3,
	SiHtml5,
	SiReact,
	SiNodedotjs,
	SiRedux,
} from 'react-icons/si'
import { AnimatedTypography, Typography } from '@/components'
import { SKILLS_COPY } from '@/constants/homepageContent'
import { fadeInUpVariantsB } from '@/constants/animation'
import styles from './skills.styles.module.css'

export function Skills() {
	return (
		<section aria-label="A section showcasing Greg's skills">
			<div className={styles.wrapper}>
				<AnimatedTypography
					variants={fadeInUpVariantsB}
					initial="initial"
					whileInView="target"
					viewport={{ once: true }}
					color="primary"
					type="h2"
					size="xl"
				>
					{SKILLS_COPY.title}
				</AnimatedTypography>
				<div className="doubleColumn">
					<Typography>{SKILLS_COPY.body}</Typography>
				</div>
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
