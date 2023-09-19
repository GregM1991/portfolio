import Image, { StaticImageData } from 'next/image'
import { AnimatedTypography, Tldr, Typography } from '@/components'
import { Paragraph } from '@/types/content'
import { TypographyProps } from '../Typography/types'
import { fadeInUpVariantsB } from '@/constants/animation'
import clsx from 'clsx'
import styles from './contentBlocks.styles.module.css'

interface GenericContentBlockProps {
	heading: string
	headingProps?: Omit<TypographyProps, 'children'>
	body: Paragraph[]
	tldrString: string
	sectionAriaLabel?: string
	children?: React.ReactNode
}

interface LeadContentBlockProps extends GenericContentBlockProps {
	imageSrc: StaticImageData
	imageAlt: string
}

interface TechContentProps
	extends Pick<GenericContentBlockProps, 'sectionAriaLabel' | 'headingProps'> {
	techStack: string[]
}

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

export function LeadContentBlock({
	heading,
	headingProps,
	body,
	tldrString,
	sectionAriaLabel,
	imageSrc,
	imageAlt,
}: LeadContentBlockProps) {
	return (
		<GenericContentBlock
			heading={heading}
			headingProps={{ type: 'h1', size: '2xl', ...headingProps }}
			body={body}
			sectionAriaLabel={sectionAriaLabel}
			tldrString={tldrString}
		>
			<div className={styles.imageWrapper}>
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					sizes="100vw"
					placeholder="blur"
				/>
			</div>
		</GenericContentBlock>
	)
}

export function TechContentBlock({
	headingProps,
	techStack,
	sectionAriaLabel,
}: TechContentProps) {
	const Wrapper = sectionAriaLabel ? 'section' : 'div'
	return (
		<Wrapper aria-label={sectionAriaLabel}>
			<AnimatedTypography
				variants={fadeInUpVariantsB}
				initial="initial"
				whileInView="target"
				viewport={{ once: true }}
				className={styles.opacityForAnimation}
				{...headingProps}
			>
				Tech Stack
			</AnimatedTypography>
			<ul role="list" className={styles.tech}>
				{techStack.map((tech, index) => (
					<li key={`${index}-${tech}`}>
						<Typography type="span">
							<span className={styles.liDecoration}>○</span>
							{tech}
						</Typography>
					</li>
				))}
			</ul>
		</Wrapper>
	)
}
