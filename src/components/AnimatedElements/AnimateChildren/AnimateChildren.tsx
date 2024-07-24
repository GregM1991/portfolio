"use client";
import { MotionProps, Variant, motion } from "framer-motion";
import merge from "lodash.merge";

const INITIAL = {};
const TARGET = {
  transition: {
    staggerChildren: 0.25,
  },
};

interface AnimateChildren extends MotionProps {
  initialProps?: Variant;
  targetProps?: Variant;
  isWhileInView?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function AnimateChildren({
  initialProps = INITIAL,
  targetProps = TARGET,
  isWhileInView = false,
  className,
  children,
  ...rest
}: AnimateChildren) {
  const variants = {
    initial: merge({}, INITIAL, initialProps),
    target: merge({}, TARGET, targetProps),
  };
  const spreadProps = isWhileInView
    ? {
        whileInView: "target",
        ...rest,
      }
    : {
        ...rest,
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="initial"
      {...spreadProps}
    >
      {children}
    </motion.div>
  );
}
