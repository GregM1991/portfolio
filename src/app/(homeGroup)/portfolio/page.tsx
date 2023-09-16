import Image from 'next/image'
import Link from 'next/link'
import {
	GenericContentBlock,
	ImageCaptionCard,
	TechContentBlock,
	Typography,
} from '@/components'
import { FaGithub } from 'react-icons/fa6'
import { GOALS, OPENING, PORTFOLIO_TECH } from '@/constants/portfolioContent'
import homepageWhole from '@/assets/images/whole-homepage-portfolio.png'
import carousel from '@/assets/images/carousel.png'
import testimonials from '@/assets/images/testimonials-screenshot.png'
import styles from '../project.styles.module.css'

export default function PortfolioProject() {
	return (
		<main className={styles.wrapper}>
			<GenericContentBlock
				heading={OPENING.heading}
				body={OPENING.body}
				sectionAriaLabel={OPENING.sectionAriaLabel}
				tldrString={OPENING.tldr}
				headingProps={{ type: 'h1', size: '2xl' }}
			>
				<Link href={OPENING.codeLink} className={styles.link} target="_blank">
					<Typography size="xs" type="span">
						View Portfolio code
					</Typography>
					<FaGithub />
				</Link>
			</GenericContentBlock>
			<TechContentBlock
				headingProps={{ type: 'h2', size: 'xl' }}
				sectionAriaLabel={PORTFOLIO_TECH.sectionAriaLabel}
				techStack={PORTFOLIO_TECH.techStack}
			/>
			<GenericContentBlock
				heading={GOALS.heading}
				headingProps={{ type: 'h2', size: 'xl' }}
				body={GOALS.body}
				sectionAriaLabel={GOALS.sectionAriaLabel}
				tldrString={GOALS.tldr}
			/>
			<div className={styles.screensGrid}>
				<ImageCaptionCard
					imageSrc={homepageWhole}
					imageAlt="A screenshot of the whole of the home portfolio page"
					isScreenCap
				/>
				<ImageCaptionCard
					imageSrc={carousel}
					imageAlt="A screenshot of the whole of the home portfolio page"
					isScreenCap
				/>
				<ImageCaptionCard
					imageSrc={testimonials}
					imageAlt="A screenshot of the whole of the home portfolio page"
					isScreenCap
				/>
			</div>
			{/* TODO: pickup here, also keep in mind utopia type design */}
			{/* <GenericContentBlock
				heading={CHALLENGES.heading}
				headingProps={{ type: 'h2', size: 'xl' }}
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
				headingProps={{ type: 'h2', size: 'xl' }}
				body={OVERVIEW.body}
				sectionAriaLabel={OVERVIEW.sectionAriaLabel}
				tldrString={OVERVIEW.tldr}
			/> */}
		</main>
	)
}
