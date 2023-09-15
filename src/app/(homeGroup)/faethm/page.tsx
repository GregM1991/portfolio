import {
	GenericContentBlock,
	LeadContentBlock,
	Spotlight,
	TechContentBlock,
} from '@/components'
import {
	CHALLENGES,
	FAETHM_TECH,
	GOALS,
	IN_HOUSE_IDENTITY_TO_AUTH0,
	OPENING,
	SUPPLY_DEMAND_MODEL,
	UI_COMPONENT_LIBRARY,
} from '@/constants/faethmContent'
import styles from '../project.styles.module.css'

export default function FaethmProject() {
	return (
		<main className={styles.wrapper}>
			<LeadContentBlock
				heading={OPENING.heading}
				body={OPENING.body}
				sectionAriaLabel={OPENING.sectionAriaLabel}
				tldrString={OPENING.tldr}
				imageSrc={OPENING.imageSrc}
				imageAlt={OPENING.imageAlt}
			/>
			<TechContentBlock
				headingProps={{ type: 'h2', size: 'xl' }}
				sectionAriaLabel={FAETHM_TECH.sectionAriaLabel}
				techStack={FAETHM_TECH.techStack}
			/>
			<GenericContentBlock
				heading={GOALS.heading}
				headingProps={{ type: 'h2', size: 'xl' }}
				body={GOALS.body}
				sectionAriaLabel={GOALS.sectionAriaLabel}
				tldrString={GOALS.tldr}
			/>
			<GenericContentBlock
				heading={CHALLENGES.heading}
				headingProps={{ type: 'h2', size: 'xl' }}
				body={CHALLENGES.body}
				sectionAriaLabel={CHALLENGES.sectionAriaLabel}
				tldrString={CHALLENGES.tldr}
			/>
			<Spotlight
				ariaLabel="A spotlight section for work Greg did on the UI Component Library at Faethm"
				content={UI_COMPONENT_LIBRARY}
			/>
			<Spotlight
				ariaLabel="A spotlight section for work Greg did on the Auth0 migration at Faethm"
				content={IN_HOUSE_IDENTITY_TO_AUTH0}
			/>
			<Spotlight
				ariaLabel="A spotlight section for work Greg did on the SWP Supply and Demand model at Faethm"
				content={SUPPLY_DEMAND_MODEL}
			/>
		</main>
	)
}
