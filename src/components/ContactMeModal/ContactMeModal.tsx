'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FAB, SocialLinks, Typography } from '@/components'
import styles from './contactMeModal.styles.module.css'

interface ContactMeModalProps {
	trigger: React.ReactNode
}

export function ContactMeModal({
	children,
	trigger,
	...props
}: ContactMeModalProps & Dialog.DialogProps) {
	return (
		<Dialog.Root {...props}>
			<Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />
				<Dialog.Content className={styles.content}>
					<Dialog.Title>
						<Typography type="span" styledAs="h4" color="dark-red">
							Get in touch
						</Typography>
					</Dialog.Title>
					<Dialog.Description>
						<div className={styles.modalContainer}>
							<Typography type="span">
								📧 Email: <a href="mailto:gregm31@live.com">gregm31@live.com</a>
							</Typography>
							<Typography type="span">📱 Phone: +61 407 670 950</Typography>
							<SocialLinks withTooltip={false} />
						</div>
					</Dialog.Description>
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
