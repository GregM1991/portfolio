import clsx from "clsx";
import { forwardRef } from "react";
import { TypographyProps, stepMap } from "./types";
import styles from "./typography.styles.module.css";

export const Typography = forwardRef<
  HTMLHeadingElement & HTMLSpanElement,
  TypographyProps
>(function Typography(
  {
    type = "p",
    variant = "",
    weight = "",
    font = "",
    size,
    color,
    className,
    children,
  },
  ref,
) {
  const Component = type;
  const classes = clsx([
    { [styles[type]]: type },
    { [styles[variant]]: variant },
    { [styles[weight]]: weight },
    { [styles[font]]: font },
    className,
  ]);

  const colorStyle = color ? { color: `var(--palette-${color})` } : {};
  const sizeStyle = size ? { fontSize: `var(--step-${stepMap[size]})` } : {};
  const style = {
    ...colorStyle,
    ...sizeStyle,
  };

  return (
    <Component className={classes} ref={ref} style={style}>
      {children}
    </Component>
  );
});
