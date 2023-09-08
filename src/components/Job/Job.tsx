'use client'
import { useRef } from 'react'
import { AnimatedImage, Typography } from '@/components'
import { Jobs, CanvaProject } from '@/types/projects'
import { Project } from './Project'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { fadeInUpVariants } from '@/constants/animation'
import styles from './job.styles.module.css'
import { useIsMobile } from '@/shared/hooks/useIsMobile'

interface JobProps extends Jobs {
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
	const transformTo = isMobile ? ['17px', '17px'] : ['0%', '-25%']

	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ['start end', 'end start'],
	})
	const yScrollPercent = useSpring(scrollYProgress, {
		stiffness: 30,
		damping: 10,
		mass: 1.5,
	})
	const translateY = useTransform(yScrollPercent, [0, 1], transformTo)

	return (
		<div ref={wrapperRef} className={`${styles.wrapper} ${styles[layout]}`}>
			<div className={styles.textWrapper}>
				<Typography canva type="h3" color="dark-red">
					{title}
				</Typography>
				<Typography canva color="dark-red">
					{jobDescription}
				</Typography>
				{jobProjects.map((project: CanvaProject) => (
					<Project
						key={project.key}
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
					sizes="(max-width: 992px) 100vw, 42vw"
					className={styles.img}
					variants={fadeInUpVariants}
					viewport={{ once: true }}
					initial="hidden"
					whileInView="visible"
					style={{ translateY }}
				/>
			</div>
		</div>
	)
}
