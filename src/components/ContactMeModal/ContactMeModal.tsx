'use client'
import { createContext, useContext, useState } from 'react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FAB, Typography } from '@/components'
import styles from './contactMeModal.styles.module.css'

interface ContactMeModalProps {
	title: string
	description: string | React.ReactNode
}

const DialogOpenContext = createContext<boolean>(false)

export function ContactMeRoot({ children, ...props }: Dialog.DialogProps) {
	const [isOpen, setOpen] = useState<boolean>(false)

	return (
		<DialogOpenContext.Provider value={isOpen}>
			<Dialog.Root onOpenChange={setOpen} {...props}>
				{children}
			</Dialog.Root>
		</DialogOpenContext.Provider>
	)
}

export function ContactMeTrigger({ trigger }: { trigger: React.ReactNode }) {
	return <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
}

export function ContactMeContent({ title, description }: ContactMeModalProps) {
	const isOpen = useContext(DialogOpenContext)
	if (!isOpen) return null
	return (
		<>
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
		</>
	)
}

export const ModalBody = () => (
	<div className={styles.modalContainer}>
		<Typography type="span">
			📧 Email: <Link href="mailto:gregm31@live.com">gregm31@live.com</Link>
		</Typography>
		<Typography type="span">📱 Phone: +61 407 670 950</Typography>
	</div>
)
