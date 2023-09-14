import {
	GenericContentBlock,
	LeadContentBlock,
	Spotlight,
	TechContentBlock,
} from '@/components'
import {
	CHALLENGES,
	DEMAND_CONFIG,
	EQ8_TECH,
	GLOBAL_SUPPLY_UPLOAD,
	GOALS,
	OPENING,
	OVERVIEW,
} from '@/constants/eq8Content'
import styles from '../project.styles.module.css'

export default function Eq8Project() {
	return (
		<main className={styles.wrapper}>
			<LeadContentBlock
				heading={OPENING.heading}
				headingProps={{ type: 'h2' }}
				body={OPENING.body}
				sectionAriaLabel={OPENING.sectionAriaLabel}
				tldrString={OPENING.tldr}
				imageSrc={OPENING.imageSrc}
				imageAlt={OPENING.imageAlt}
			/>
			<TechContentBlock
				headingProps={{ type: 'h2' }}
				sectionAriaLabel={EQ8_TECH.sectionAriaLabel}
				techStack={EQ8_TECH.techStack}
			/>
			<GenericContentBlock
				heading={GOALS.heading}
				headingProps={{ type: 'h2' }}
				body={GOALS.body}
				sectionAriaLabel={GOALS.sectionAriaLabel}
				tldrString={GOALS.tldr}
			/>
			<GenericContentBlock
				heading={CHALLENGES.heading}
				headingProps={{ type: 'h2' }}
				body={CHALLENGES.body}
				sectionAriaLabel={CHALLENGES.sectionAriaLabel}
				tldrString={CHALLENGES.tldr}
			/>
			<Spotlight
				ariaLabel="A spotlight section focusing on work Greg did at eq8"
				content={DEMAND_CONFIG}
			/>
			<Spotlight
				ariaLabel="A spotlight section focusing on work Greg did at eq8"
				content={GLOBAL_SUPPLY_UPLOAD}
			/>
			<GenericContentBlock
				heading={OVERVIEW.heading}
				headingProps={{ type: 'h2' }}
				body={OVERVIEW.body}
				sectionAriaLabel={OVERVIEW.sectionAriaLabel}
				tldrString={OVERVIEW.tldr}
			/>
		</main>
	)
}
