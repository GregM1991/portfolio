import { forwardRef } from 'react'
import styles from './accordion.styles.module.css'
import * as RadixAccordion from '@radix-ui/react-accordion'

type TriggerProps = React.ComponentProps<typeof RadixAccordion.Trigger>
type ContentProps = React.ComponentProps<typeof RadixAccordion.Content>

interface AccordionTriggerProps extends TriggerProps {
	className: string
}

interface AccordionHeaderProps extends ContentProps {
	className: string
}

export const AccordionTrigger = forwardRef<
	HTMLButtonElement,
	AccordionTriggerProps
>(function AccordionTrigger({ children, className, ...rest }, forwardedRef) {
	return (
		<RadixAccordion.Header>
			<RadixAccordion.Trigger {...rest} ref={forwardedRef}>
				{children}
			</RadixAccordion.Trigger>
		</RadixAccordion.Header>
	)
})

export const AccordionContent = forwardRef<
	HTMLDivElement,
	AccordionHeaderProps
>(function AccordionContent({ children, className, ...rest }, forwardedRef) {
	return (
		<RadixAccordion.Content {...rest} ref={forwardedRef}>
			{children}
		</RadixAccordion.Content>
	)
})
