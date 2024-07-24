"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross1 } from "react-icons/rx";
import { FAB, SocialLinks, Typography } from "@/components";
import styles from "./contactMeModal.styles.module.css";

interface ContactMeModalProps {
  trigger: React.ReactNode;
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
            <Typography canva type="span" color="secondary">
              Get in touch
            </Typography>
          </Dialog.Title>
          <Dialog.Description>
            <div className={styles.modalContainer}>
              <Typography canva type="span">
                📧 Email: <a href="mailto:gregm31@live.com">gregm31@live.com</a>
              </Typography>
              <Typography canva type="span">
                📱 Phone: +61 407 670 950
              </Typography>
            </div>
          </Dialog.Description>
          <SocialLinks withTooltip={false} />
          <Dialog.Close asChild>
            <FAB
              icon={<RxCross1 />}
              ariaLabel="Close"
              className={styles.close}
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
