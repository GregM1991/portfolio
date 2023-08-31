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
				<Typography type="h1" styledAs="h2">
					Enter password:
				</Typography>
				{message && <Typography color="red">{message}</Typography>}
				<form action={onSubmit} className={styles.form}>
					<input type="password" name="password" />
					<Button>Enter</Button>
				</form>
			</div>
		</div>
	)
}
