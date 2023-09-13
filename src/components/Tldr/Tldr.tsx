'use client'
import { useState } from 'react'
import { Button, Typography } from '@/components'
import styles from './tldr.styles.module.css'
import clsx from 'clsx'

interface TldrProps {
	tldrString: string
	className: string
	children: React.ReactNode
}

export function Tldr({ tldrString, className, children }: TldrProps) {
	const [isTldr, setIsTldr] = useState(true)
	return (
		<div className={className}>
			{isTldr ? (
				<Typography>
					<em className={styles.emphasis}>TLDR: </em>
					{tldrString}
				</Typography>
			) : (
				children
			)}
			<Button
				variant="outline"
				size="regular"
				onClick={() => setIsTldr(prevTldr => !prevTldr)}
				className={styles.button}
			>
				{isTldr
					? 'Click here for the longform version'
					: 'Collapse longform content'}
			</Button>
		</div>
	)
}
