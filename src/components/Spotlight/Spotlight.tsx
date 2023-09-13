import { Typography, Carousel } from '@/components'
import styles from './spotlight.styles.module.css'
import { SpotlightContent } from '@/types/content'

interface SpotlightProps {
	ariaLabel: string
	content: SpotlightContent
}

// TODO: This component locks us in to a specific type of content, should think about that
export function Spotlight({ ariaLabel, content }: SpotlightProps) {
	return (
		<section aria-label={ariaLabel}>
			{/* TODO: Add tooltip to some of the things that would be confusing to people */}
			<Typography type="h3" size="xl">
				{content.heading}
			</Typography>
			<div className={styles.doubleColumn}>
				<Typography>{content.description}</Typography>
			</div>
			<Carousel items={content.screens} className={styles.carousel} />
			<Typography type="h4" size="m">
				{content.contribution.heading}
			</Typography>
			<div className={styles.doubleColumn}>
				{content.contribution.body.map(({ key, copy }) => (
					<Typography key={key}>{copy}</Typography>
				))}
			</div>
		</section>
	)
}
