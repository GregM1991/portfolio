'use client'
import { useRef } from 'react'
import { AnimatedImage, Typography } from '@/components'
import { Projects, Project as ProjectType } from '@/types/projects'
import { Project } from './Project'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { FADE_UP_IN_ANIMATION_CONFIG } from '@/constants/animation'
import styles from './job.styles.module.css'
import { useIsMobile } from '@/shared/hooks/useIsMobile'

interface JobProps extends Projects {
	layout?: 'left' | 'right'
}

export function Job({
	title,
	jobDescription,
	jobProjects,
	imageSrc,
	imageAltText,
	layout = 'left',
}: JobProps) {
	const isMobile = useIsMobile()
	const wrapperRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ['start end', 'end start'],
	})
	const yScrollPercent = useSpring(scrollYProgress, {
		stiffness: 30,
		damping: 10,
		mass: 1.5,
	})
	const translateY = useTransform(
		yScrollPercent,
		[0, 1],
		['0%', isMobile ? '0%' : '-25%'],
	)

	return (
		<div ref={wrapperRef} className={`${styles.wrapper} ${styles[layout]}`}>
			<div className={styles.textWrapper}>
				<Typography type="h3" color="dark-red">
					{title}
				</Typography>
				<Typography color="dark-red">{jobDescription}</Typography>
				{jobProjects.map((project: ProjectType) => (
					<Project
						key={project.title}
						title={project.title}
						points={project.points}
					/>
				))}
			</div>
			<div className={styles.imageWrapper}>
				<AnimatedImage
					src={imageSrc}
					alt={imageAltText}
					height={430}
					className={styles.img}
					{...FADE_UP_IN_ANIMATION_CONFIG}
					style={{ translateY }}
				/>
			</div>
		</div>
	)
}
