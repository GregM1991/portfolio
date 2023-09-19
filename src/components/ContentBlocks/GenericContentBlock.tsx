import { AnimatedTypography, Tldr, Typography } from '@/components'
import { GenericContentBlockProps } from './types'
import clsx from 'clsx'
import styles from './contentBlocks.styles.module.css'
import { fadeInUpVariantsB } from '@/constants/animation'

export function GenericContentBlock({
	heading,
	headingProps,
	body,
	tldrString,
	sectionAriaLabel,
	children,
}: GenericContentBlockProps) {
	const Wrapper = sectionAriaLabel ? 'section' : 'div'
	const animationClass = clsx(sectionAriaLabel && styles.opacityForAnimation)
	return (
		<Wrapper aria-label={sectionAriaLabel}>
			<AnimatedTypography
				variants={fadeInUpVariantsB}
				initial="initial"
				whileInView="target"
				viewport={{ once: true }}
				className={animationClass}
				{...headingProps}
			>
				{heading}
			</AnimatedTypography>
			<Tldr tldrString={tldrString} className={styles.tldr}>
				<div className={styles.doubleColumn}>
					{body.map(({ key, copy }) => (
						<Typography key={key}>{copy}</Typography>
					))}
				</div>
			</Tldr>
			{children}
		</Wrapper>
	)
}
