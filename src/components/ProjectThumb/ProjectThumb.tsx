import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@/components'
import { Project } from '@/types/projects'
import { GoChevronRight } from 'react-icons/go'
import styles from './projectThumb.styles.module.css'
import clsx from 'clsx'

interface ProjectThumbProps extends Project {
	doubleColumn?: boolean
}

export function ProjectThumb({
	projImage,
	imageAlt,
	title,
	body,
	htmlLink,
	doubleColumn = false,
}: ProjectThumbProps) {
	const wrapperClassName = clsx([
		styles.wrapper,
		{ [styles.doubleColumn]: doubleColumn },
	])
	return (
		<div className={wrapperClassName}>
			<div className={styles.imageWrapper}>
				<Image alt={imageAlt} src={projImage} fill />
			</div>
			<Typography type="h3" size="l" className={styles.title}>
				{title}
			</Typography>
			<Typography>{body}</Typography>
			<Link href={htmlLink} className={styles.viewProject}>
				<Typography size="xs" type="span">
					View project
				</Typography>
				<GoChevronRight />
			</Link>
		</div>
	)
}
