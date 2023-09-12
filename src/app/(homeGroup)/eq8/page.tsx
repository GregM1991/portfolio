import { Typography } from '@/components'
import Image from 'next/image'
import styles from './eq8.styles.module.css'
import { CONTENT } from './content'

export default function Eq8Project() {
	return (
		<main className={styles.wrapper}>
			<section aria-label="Description and introduction to the eq8 project page">
				<Typography type="h1" size="2xl">
					{CONTENT.description.heading}
				</Typography>
				{CONTENT.description.body.map(({ key, copy }) => (
					<Typography key={key} className={styles.copy}>
						{copy}
					</Typography>
				))}
			</section>
			<div className={styles.imageWrapper}>
				<Image
					src={CONTENT.description.imageSrc}
					alt={CONTENT.description.imageAlt}
					fill
					sizes="100vw"
					placeholder="blur"
				/>
			</div>
			<section aria-label="Technologies used at eQ8">
				<Typography type="h2" size="xl">
					Tech Stack
				</Typography>
				<ul role="list" className={styles.tech}>
					{CONTENT.tech.map((tech, index) => (
						<li key={`${index}-${tech}`}>
							<Typography type="span">
								<span className={styles.liDecoration}>○</span>
								{tech}
							</Typography>
						</li>
					))}
				</ul>
			</section>
			<section aria-label="Gregs goals at eq8">
				<Typography type="h2" size="xl">
					{CONTENT.goals.heading}
				</Typography>
				{CONTENT.goals.body.map(({ key, copy }) => (
					<Typography key={key} className={styles.copy}>
						{copy}
					</Typography>
				))}
			</section>
			<section>
				<Typography type="h2" size="xl">
					{CONTENT.challenges.heading}
				</Typography>
				{CONTENT.challenges.body.map(({ key, copy }) => (
					<Typography key={key} className={styles.copy}>
						{copy}
					</Typography>
				))}
			</section>
			<section aria-label="A spotlight section focusing on work Greg did at eq8">
				{/* TODO: Add tooltip to some of the things that would be confusing to people */}
				<Typography type="h3" size="xl">
					{CONTENT.demandConfig.heading}
				</Typography>
				<Typography type="h3" size="xl">
					{CONTENT.demandConfig.description}
				</Typography>
				{/* Image showcase */}
				{/* Contributions */}
			</section>
			{/* SPOTLIGHT 1 */}
			{/* Refactor old Demand Config page */}
			{/* CONTRIBUTIONS */}
			{/* SPOTLIGHT 2 */}
			{/* Refactor old Demand Config page */}
			{/* CONTRIBUTIONS */}
			{/* 
				OVERVIEW 
				- Hectic and fast-paced but forced me out of my comfort zone
				- Was great seeing how far I've come with React and sharing that knowledge
				- Alot to learn from the people, and they were lovely too.
				- Big thanks to Hina and Annisa
			*/}
		</main>
	)
}
