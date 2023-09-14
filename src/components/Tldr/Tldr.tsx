'use client'
import { useState } from 'react'
import { Button, Typography } from '@/components'
import { BiSolidChevronUp } from 'react-icons/bi'
import styles from './tldr.styles.module.css'

interface TldrProps {
	tldrString: string
	className?: string
	children: React.ReactNode
}

export function Tldr({ tldrString, className, children }: TldrProps) {
	const [contentIsShown, setContentIsShown] = useState(false)
	return (
		<div className={className}>
			<Typography>
				<em className={styles.emphasis}>TLDR: </em>
				{tldrString}
			</Typography>
			<Button
				variant="text"
				size="small"
				onClick={() => setContentIsShown(prev => !prev)}
				className={styles.button}
			>
				{contentIsShown ? 'Read less' : 'Read more'}
				<BiSolidChevronUp
					className={contentIsShown ? styles.chevronDown : styles.chevronUp}
				/>
			</Button>
			{contentIsShown && children}
		</div>
	)
}
