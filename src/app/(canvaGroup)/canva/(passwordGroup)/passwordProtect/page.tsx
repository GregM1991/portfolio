'use client'
import { Button, Typography } from '@/components'
import styles from './passwordProtect.styles.module.css'
import { checkPassword } from './checkPassword'
import { useState } from 'react'

export default function Page() {
	const [message, setMessage] = useState<string>('')

	async function onSubmit(formData: FormData) {
		const res = await checkPassword(formData)
		if (res.message) {
			setMessage(res.message)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<label htmlFor="name">
					<Typography canva type="span" className={styles.span}>
						Enter password:
					</Typography>
				</label>
				{message && (
					<Typography canva color="red">
						{message}
					</Typography>
				)}
				<form action={onSubmit} className={styles.form}>
					<input type="password" name="password" id="name" />
					<Button>Enter</Button>
				</form>
			</div>
		</div>
	)
}
