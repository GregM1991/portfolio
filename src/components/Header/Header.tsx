import * as React from 'react'
import Logo from '@/components/Logo'
import styles from './header.styles.module.css'

function Header() {
	return (
		<header>
			<div className={styles.header}>
				<Logo />
				<nav></nav>
			</div>
		</header>
	)
}

export default Header
