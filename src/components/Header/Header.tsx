import * as React from 'react'
import { Logo } from '@/components'
import styles from './header.styles.module.css'
import Link from 'next/link'

export function Header() {
	return (
		<header className={styles.wrapper}>
			<div className={styles.header}>
				<Logo />
				<input className="side-menu" type="checkbox" id="side-menu" />
				<label className={styles.hamb} htmlFor="side-menu">
					<span className={styles.hambLine}></span>
				</label>
				<nav>
					<ul className={styles.nav}>
						<li>
							<Link className={styles.navLink} href="/#greg-life">
								Greg life
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} href="/#my-contribution">
								My contribution
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} href="/#gregs-values">
								Greg&apos;s values
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} href="/#projects">
								A place for projects
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} href="/#greg-life-mural">
								#GregLife
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} href="/#testimonials">
								Testimonials
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}