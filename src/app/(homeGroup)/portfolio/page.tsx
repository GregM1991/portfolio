import Image from 'next/image'
import Link from 'next/link'
import {
	GenericContentBlock,
	ImageCaptionCard,
	LeadContentBlock,
	Spotlight,
	TechContentBlock,
	Typography,
} from '@/components'
import { FaGithub } from 'react-icons/fa6'
import { GOALS, OPENING, PORTFOLIO_TECH } from '@/constants/portfolioContent'
import homepageWhole from '@/assets/images/whole-homepage-portfolio.png'
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
						View code here
					</Typography>
					<FaGithub />
				</Link>
				<div className={styles.imageWrapper}>
					<Image
						src={OPENING.imageSrc}
						alt={OPENING.imageAlt}
						sizes="100vw"
						placeholder="blur"
						priority
						className={styles.mainImage}
					/>
				</div>
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
			<ImageCaptionCard
				imageSrc={homepageWhole}
				imageAlt="A screenshot of the whole of the home portfolio page"
			/>
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
