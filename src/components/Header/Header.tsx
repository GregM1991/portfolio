'use client'
import { useState } from 'react'
import { Button, ContactMeModal, Logo } from '@/components'
import { NAV_LINKS } from '@/constants/links'
import Link from 'next/link'
import styles from './header.styles.module.css'
import { HamburgerButton } from './HamburgerButton'
import { NavLink } from '@/types/links'

interface HeaderProps {
	logo: 'canva' | 'normal'
	navLinks: NavLink[]
}

export function Header({ logo, navLinks }: HeaderProps) {
	const [isChecked, setIsChecked] = useState(false)

	const handleClick = () => setIsChecked(checked => !checked)

	return (
		<header className={styles.header}>
			<Logo type={logo} />
			<HamburgerButton isChecked={isChecked} handleClick={handleClick} />
			<nav className={styles.nav}>
				<ul role="list" className={styles.menu}>
					{navLinks.map(link => (
						<li key={link.key} onClick={handleClick}>
							<Link className={styles.navLink} href={link.href}>
								{link.linkText}
							</Link>
						</li>
					))}
				</ul>
				<ContactMeModal
					trigger={
						<Button aria-controls="radix-:R1mj9:" className={styles.button}>
							Contact me
						</Button>
					}
				/>
			</nav>
		</header>
	)
}
