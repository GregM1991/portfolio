import { GenericContentBlock } from '@/components'
import { LeadContentBlockProps } from './types'
import Image from 'next/image'
import styles from './contentBlocks.styles.module.css'

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
