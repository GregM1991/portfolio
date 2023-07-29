import * as React from 'react'
import { Typography, Image, Section } from '@/components'
import gregWalkingDownGardenPath from '@/assets/images/greg-walking-down-garden-path.webp'
import styles from './gregLife.styles.module.css'

export function GregLife() {
	return (
		<Section
			variant="hero"
			ariaLabel="An opening welcome from Greg to visitors of his portfolio site"
			className={styles.wrapper}
		>
			{/* TODO: change this to something useful */}
			<Image
				alt="My first image"
				src={gregWalkingDownGardenPath}
				width={500}
				height={500}
			/>

			<div className={styles.type}>
				<Typography type="h1">
					Greg life <a id="greg-life" />
				</Typography>
				<Typography variant="pLead">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas labore
					minus porro ad. Praesentium accusamus error nam facilis explicabo
					aliquid.
				</Typography>
			</div>
		</Section>
	)
}
