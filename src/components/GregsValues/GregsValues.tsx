import {
	AnimatedSection,
	AnimatedTypography,
	Typography,
	CardCarousel,
} from '@/components'
import styles from './gregsValues.styles.module.css'
import { fadeInVariants } from '@/constants/animation'

export function GregsValues() {
	return (
		<AnimatedSection
			bgColor="red"
			ariaLabel="My values"
			className={styles.wrapper}
			initAnimatedConfig={{ opacity: 0 }}
			variants={fadeInVariants}
			viewport={{ once: true }}
			initial="hidden"
			whileInView="visible"
		>
			<a id="gregs-values" className="anchor" />
			<div className={styles.textWrapper}>
				<AnimatedTypography
					type="h2"
					color="white"
					variant="programHeader"
					className={styles.header}
					variants={fadeInVariants}
					viewport={{ once: true }}
					initial="hidden"
					whileInView="visible"
				>
					Greg&apos;s values
				</AnimatedTypography>
				<Typography color="white" className={styles.body}>
					One of the many reasons I’m so keen on Canva is how well the company
					values align with mine. I’ve found it hugely motivating learning about
					how Canva stands behind this code of ethics and lives them in
					everything they do.
				</Typography>
			</div>
			<CardCarousel />
		</AnimatedSection>
	)
}
