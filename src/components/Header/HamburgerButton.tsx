import styles from "./header.styles.module.css";

interface HamburgerButtonProps {
  isChecked: boolean;
  handleClick: () => void;
}

export function HamburgerButton({
  isChecked,
  handleClick,
}: HamburgerButtonProps) {
  return (
    <>
      <input
        className={styles.sideMenu}
        checked={isChecked}
        onChange={(event) => event.target.checked}
        type="checkbox"
        id="side-menu"
      />
      <div className={styles.hambContainer} onClick={handleClick}>
        <label className={styles.hamb} htmlFor="side-menu">
          <span className={styles.hambLine}></span>
        </label>
      </div>
    </>
  );
}
