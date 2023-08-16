import * as React from 'react'
import { Logo } from '@/components'
import styles from './header.styles.module.css'
import Link from 'next/link'

export function Header() {
	return (
		<header className={styles.wrapper}>
			<div className={styles.header}>
				<Logo />
				<nav className={styles.nav}>
					<Link className={styles.navLink} href="/#greg-life">
						Greg life
					</Link>
					<Link className={styles.navLink} href="/#my-contribution">
						My contribution
					</Link>
					<Link className={styles.navLink} href="/#gregs-values">
						Greg&apos;s values
					</Link>
					<Link className={styles.navLink} href="/#projects">
						A place for projects
					</Link>
					<Link className={styles.navLink} href="/#greg-life-mural">
						#GregLife
					</Link>
					<Link className={styles.navLink} href="/#testimonials">
						Testimonials
					</Link>
				</nav>
			</div>
		</header>
	)
}