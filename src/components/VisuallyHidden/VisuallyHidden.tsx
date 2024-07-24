import styles from "./visuallyHidden.styles.module.css";

interface VisuallyHiddenProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const VisuallyHidden = ({ ...delegated }: VisuallyHiddenProps) => {
  return <span className={styles.srOnly} {...delegated} />;
};
