'use client'
import { useState } from 'react'
import { Typography } from '@/components'
import styles from './tldr.styles.module.css'
import clsx from 'clsx'

interface TldrProps {
	tldrString: string
	children: React.ReactNode
	className?: string
}

export function Tldr({ tldrString, children, className }: TldrProps) {
	const [isTldr, setIsTldr] = useState(false)
	return (
		<>
			<button
				onClick={() => setIsTldr(prevTldr => !prevTldr)}
				className={clsx(styles.button, className)}
			>
				Would you like the TLDR version?
			</button>
			{isTldr ? <Typography>{tldrString}</Typography> : children}
		</>
	)
}
