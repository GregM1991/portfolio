'use client'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import { Arvo } from 'next/font/google'

const arvo = Arvo({
	weight: '700',
	style: 'normal',
	subsets: ['latin'],
})

const LogoContainer = styled(Link)`
	display: grid;
	place-items: center;
	font-weight: 700;
	cursor: pointer;
	font-family: var(--font-family-primary);

	@media (min-width: 2000px) {
		grid-column: 4;
	}
`

function Navigation() {
	const style = {
		'--font-family-primary': arvo.style.fontFamily,
	} as React.CSSProperties
	return (
		<LogoContainer href="/" style={style}>
			<span>
				GR
				<br />
				EG.
			</span>
		</LogoContainer>
	)
}

export default Navigation
