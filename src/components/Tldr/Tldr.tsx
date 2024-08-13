"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button, FAB, Typography } from "@/components";
import { BiSolidChevronUp } from "react-icons/bi";
import { fadeInDownVariants } from "@/constants/animation";
import styles from "./tldr.styles.module.css";
import clsx from "clsx";
import { RxCross1 } from "react-icons/rx";

interface TldrProps {
  tldrString: string;
  className?: string;
  children: React.ReactNode;
}

export function Tldr({ tldrString, className, children }: TldrProps) {
  const [contentIsShown, setContentIsShown] = useState(false);
  const [ariaIsExpanded, setAriaIsExpanded] = useState(false);

  const wrapperClasses = clsx(styles.wrapper, className);

  const handleClick = () => {
    setContentIsShown((prevShown) => !prevShown);
    setAriaIsExpanded((prevExpanded) => !prevExpanded);
  };

  const handleClose = () => {
    setContentIsShown(false);
    setAriaIsExpanded(false);
  };

  return (
    <div className={wrapperClasses}>
      <Typography>
        <em className={styles.emphasis}>TLDR:</em>
        {tldrString}
      </Typography>
      <Button
        aria-label="Expand content"
        aria-haspopup="true"
        aria-expanded={ariaIsExpanded}
        variant="text"
        size="small"
        onClick={handleClick}
        className={styles.button}
      >
        {contentIsShown ? "Read less" : "Read more"}
        <BiSolidChevronUp
          className={contentIsShown ? styles.chevronUp : styles.chevronDown}
        />
      </Button>
      <AnimatePresence>
        {contentIsShown && (
          <motion.div
            variants={fadeInDownVariants}
            initial="initial"
            animate="target"
            exit="exit"
            className={styles.longformPopover}
          >
            {children}
            <FAB
              icon={<RxCross1 />}
              ariaLabel="Close"
              className={styles.close}
              onClick={handleClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
