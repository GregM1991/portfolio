import { Spotlight } from '@/components'
import { DEMAND_CONFIG, GLOBAL_SUPPLY_UPLOAD } from '@/constants/eq8Content'
import styles from './eq8.styles.module.css'
import { Eq8Intro, Eq8Tech, Eq8Challenges, Eq8Goals, Eq8Overview } from './'


// TODO: Next create an accordion to have TLDR instead of content
export default function Eq8Project() {
	return (
		<main className={styles.wrapper}>
			<Eq8Intro />
			<Eq8Tech />
			<Eq8Goals />
			<Eq8Challenges />
			<Spotlight
				ariaLabel="A spotlight section focusing on work Greg did at eq8"
				content={DEMAND_CONFIG}
			/>
			<Spotlight
				ariaLabel="A spotlight section focusing on work Greg did at eq8"
				content={GLOBAL_SUPPLY_UPLOAD}
			/>
			<Eq8Overview />
		</main>
	)
}
