'use client'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import styles from './cardCarousel.styles.module.css'
import { Typography } from '@/components'

export function CardCarousel() {
	const [transformValue, setTransformValue] = React.useState(0)
	console.log(transformValue)
	const style = {
		'--carousel-transform': `translateX(${transformValue}%)`,
	} as React.CSSProperties

	function onClickRight() {
		if (transformValue < -80) return
		setTransformValue(transformValue => transformValue - 16.6667)
	}

	function onClickLeft() {
		if (transformValue >= 0) return
		setTransformValue(transformValue => transformValue + 16.6667)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.carouselContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.carouselSlider} style={style}>
						{/* map through values here */}
						<div className={styles.card}>
							<Typography type="h3">Hello, I&apos;m a carousel item</Typography>
							<Typography className={styles.valueBodyText}>
								Lorem, ipsuma dolor sit amet consectetur adipisicing elit.
								Repellat nemo blanditiis minima perspiciatis debitis qui
								perspiciatis debitis qui
							</Typography>
						</div>
						<div className={styles.card}>
							<Typography type="h3">Hello, I&apos;m a carousel item</Typography>
							<Typography className={styles.valueBodyText}>
								Lorem, ipsuma dolor sit amet consectetur adipisicing elit.
								Repellat nemo blanditiis minima perspiciatis debitis qui
								perspiciatis debitis qui
							</Typography>
						</div>
						<div className={styles.card}>
							<Typography type="h3">Hello, I&apos;m a carousel item</Typography>
							<Typography className={styles.valueBodyText}>
								Lorem, ipsuma dolor sit amet consectetur adipisicing elit.
								Repellat nemo blanditiis minima perspiciatis debitis qui
								perspiciatis debitis qui
							</Typography>
						</div>
						<div className={styles.card}>
							<Typography type="h3">Hello, I&apos;m a carousel item</Typography>
							<Typography className={styles.valueBodyText}>
								Lorem, ipsuma dolor sit amet consectetur adipisicing elit.
								Repellat nemo blanditiis minima perspiciatis debitis qui
								perspiciatis debitis qui
							</Typography>
						</div>
						<div className={styles.card}>
							<Typography type="h3">Hello, I&apos;m a carousel item</Typography>
							<Typography className={styles.valueBodyText}>
								Lorem, ipsuma dolor sit amet consectetur adipisicing elit.
								Repellat nemo blanditiis minima perspiciatis debitis qui
								perspiciatis debitis qui perspiciatis debitis qui
							</Typography>
						</div>
						<div className={styles.card}>
							<Typography type="h3">Hello, I&apos;m a carousel item</Typography>
							<Typography className={styles.valueBodyText}>
								Lorem, ipsuma dolor sit amet consectetur adipisicing elit.
								Repellat nemo blanditiis minima perspiciatis debitis qui
								perspiciatis debitis qui
							</Typography>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.buttonWrapper}>
				<button
					disabled={transformValue >= 0}
					className={styles.button}
					onClick={onClickLeft}
				>
					<ChevronLeftIcon />
				</button>
				<button
					disabled={transformValue < -80}
					className={styles.button}
					onClick={onClickRight}
				>
					<ChevronRightIcon />
				</button>
			</div>
		</div>
	)
}
