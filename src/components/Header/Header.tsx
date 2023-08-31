'use client'
import { useState } from 'react'
import { Button, ContactMeTrigger, Logo } from '@/components'
import { NAV_LINKS } from '@/constants/links'
import Link from 'next/link'
import styles from './header.styles.module.css'
import { HamburgerButton } from './HamburgerButton'

export function Header() {
	const [isChecked, setIsChecked] = useState(false)

	const handleClick = () => setIsChecked(checked => !checked)

	return (
		<header className={styles.header}>
			<Logo />
			<HamburgerButton isChecked={isChecked} handleClick={handleClick} />
			<nav className={styles.nav}>
				<ul role="list" className={styles.menu}>
					{NAV_LINKS.map(link => (
						<li key={link.href} onClick={handleClick}>
							<Link className={styles.navLink} href={link.href}>
								{link.linkText}
							</Link>
						</li>
					))}
				</ul>
				<ContactMeTrigger
					trigger={<Button aria-controls="radix-:R1mj9:">Contact me</Button>}
				/>
			</nav>
		</header>
	)
}
