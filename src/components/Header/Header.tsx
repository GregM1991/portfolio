"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, ContactMeModal, Logo } from "@/components";
import { HamburgerButton } from "./HamburgerButton";
import { NavLink } from "@/types/links";
import styles from "./header.styles.module.css";

interface HeaderProps {
  headerFor: "canva" | "normal";
  navLinks?: NavLink[];
}

// TODO: The whole canva/normal thing should be extracted to a theme...
// or I could pull out the path and check if canva is there instead of
// passing a prop?
export function Header({ headerFor, navLinks }: HeaderProps) {
  const [isChecked, setIsChecked] = useState(false);
  const stylePrefix = headerFor === "canva" ? "canva-" : "";

  const handleClick = () => setIsChecked((checked) => !checked);

  return (
    <header className={styles[`${stylePrefix}header`]}>
      <Logo type={headerFor} />
      <HamburgerButton isChecked={isChecked} handleClick={handleClick} />
      <nav className={styles[`${stylePrefix}nav`]}>
        <ul role="list" className={styles.menu}>
          {navLinks?.map((link) => (
            <li
              key={link.key}
              onClick={handleClick}
              className={styles.menuListItem}
            >
              <Link
                className={styles[`${stylePrefix}navLink`]}
                href={link.href}
              >
                {link.linkText}
              </Link>
            </li>
          ))}
        </ul>
        <ContactMeModal
          trigger={
            <Button
              aria-controls="radix-:R1mj9:"
              className={styles.button}
              variant={headerFor === "canva" ? "primary" : "outline"}
            >
              Contact me
            </Button>
          }
        />
      </nav>
    </header>
  );
}
