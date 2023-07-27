import * as React from 'react'
import { Arvo } from 'next/font/google'
import styles from './styles.module.css'
import Link from 'next/link'

const arvo = Arvo({
	weight: '700',
	style: 'normal',
	subsets: ['latin'],
})

function Logo() {
	const style = {
		'--font-family-primary': arvo.style.fontFamily,
	} as React.CSSProperties

	return (
		<Link href="/" style={style} className={styles.logo}>
			<span>
				GR
				<br />
				EG.
			</span>
		</Link>
	)
}

export default Logo