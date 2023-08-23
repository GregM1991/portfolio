import { Section, Typography, Button } from '@/components'
import styles from './beHired.styles.module.css'

export function BeHired() {
	return (
		<Section
			bgColor="indigo"
			ariaLabel="Be inspired"
			className={`${styles.wrapper}`}
		>
			<div className={`${styles.content} container`}>
				<Typography color="white" type="h2" variant="ctaLead">
					<span>
						Be <em className={styles.lead}>hired?</em>
					</span>
				</Typography>
				<Typography
					color="white"
					variant="ctaBody"
					className={styles.breakoutLine}
				>
					Take your time to think it over.
				</Typography>
				<Typography color="white" variant="ctaBody">
					Hopefully I&apos;ve sold you on the Greg Life, and piqued your
					interest enough to warrant getting in touch. If not, you can reach me
					below anyway, just in case you&apos;re keen for a chat.
				</Typography>
				<Button variant="secondary" className={styles.button}>
					Contact now
				</Button>
			</div>
		</Section>
	)
}
