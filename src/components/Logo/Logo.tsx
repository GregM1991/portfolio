import * as React from 'react'
import { Arvo } from 'next/font/google'
import styles from './logo.styles.module.css'
import Link from 'next/link'

const arvo = Arvo({
	weight: '700',
	style: 'normal',
	subsets: ['latin'],
})

interface LogoProps {
	type: 'canva' | 'normal'
}

export function Logo({ type }: LogoProps) {
	return (
		<Link href="/" className={`${styles[type]} ${arvo.className}`}>
			GREG.
		</Link>
	)
}
