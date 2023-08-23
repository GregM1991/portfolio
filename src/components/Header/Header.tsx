'use client'
import { useState } from 'react'
import { Logo } from '@/components'
import styles from './header.styles.module.css'
import Link from 'next/link'

export function Header() {
	const [isChecked, setIsChecked] = useState(false)
	return (
		<header className={styles.header}>
			<Logo />
			{/* TODO: Might be best to extract this input out to tidy things up */}
			<input
				className={styles.sideMenu}
				checked={isChecked}
				onChange={event => event.target.checked}
				type="checkbox"
				id="side-menu"
			/>
			<div
				className={styles.hambContainer}
				onClick={() => setIsChecked(checked => !checked)}
			>
				<label className={styles.hamb} htmlFor="side-menu">
					<span className={styles.hambLine}></span>
				</label>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.menu}>
					<li onClick={() => setIsChecked(checked => !checked)}>
						<Link className={styles.navLink} href="/#greg-life">
							Greg life
						</Link>
					</li>
					<li onClick={() => setIsChecked(checked => !checked)}>
						<Link className={styles.navLink} href="/#my-contribution">
							My contribution
						</Link>
					</li>
					<li onClick={() => setIsChecked(checked => !checked)}>
						<Link className={styles.navLink} href="/#gregs-values">
							Greg&apos;s values
						</Link>
					</li>
					<li onClick={() => setIsChecked(checked => !checked)}>
						<Link className={styles.navLink} href="/#projects">
							A place for projects
						</Link>
					</li>
					<li onClick={() => setIsChecked(checked => !checked)}>
						<Link className={styles.navLink} href="/#greg-life-mural">
							#GregLife
						</Link>
					</li>
					<li onClick={() => setIsChecked(checked => !checked)}>
						<Link className={styles.navLink} href="/#testimonials">
							Testimonials
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
