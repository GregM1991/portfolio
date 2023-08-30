'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FAB, Typography } from '@/components'
import styles from './contactMeModal.styles.module.css'

interface ContactMeModalProps {
	trigger: React.ReactNode
	title: string
	description: string | React.ReactNode
}

export function ContactMeModal({
	trigger,
	title,
	description,
}: ContactMeModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />
				<Dialog.Content className={styles.content}>
					<Dialog.Title>
						<Typography type="span" styledAs="h4">
							{title}
						</Typography>
					</Dialog.Title>
					<Dialog.Description>{description}</Dialog.Description>
					<Dialog.Close asChild>
						<FAB
							icon={<Cross2Icon />}
							ariaLabel="Close"
							className={styles.close}
						/>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
