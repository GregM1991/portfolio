'use client'
import { useState } from 'react'
import { Logo } from '@/components'
import { LINKS } from '@/constants/links'
import Link from 'next/link'
import styles from './header.styles.module.css'

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
				<ul role="list" className={styles.menu}>
					{LINKS.map(link => (
						<li
							key={link.href}
							onClick={() => setIsChecked(checked => !checked)}
						>
							<Link className={styles.navLink} href={link.href}>
								{link.linkText}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
