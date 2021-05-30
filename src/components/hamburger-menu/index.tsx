import React, { FC, memo, Dispatch, SetStateAction, useRef } from "react";
import Link from "next/link";
import classnames from "classnames";

import { routes } from "@/consts/routes";
import { classes } from "@/consts/common-css-classes";
import { useCloseOnOutsideClick } from "@/hooks/close-on-outside-click";

import styles from "./styles.module.css";

interface HamburgerMenuProps {
  readonly isOpen: boolean;
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = memo(
  ({ isOpen, setIsOpen }) => {
    const menu = useRef<HTMLDivElement>(null);
    useCloseOnOutsideClick(setIsOpen, isOpen, menu);

    return (
      <article className={styles.wrapper}>
        <section ref={menu} className={styles.container}>
          <nav>
            <ul className={styles.linksList}>
              {routes.map((route) => (
                <li key={route.title} className={styles.menuItem}>
                  <Link href={route.path}>{route.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr className={styles.line} />
          <Link href="/">
            <a className={styles.menuItem}>Login</a>
          </Link>
          <Link href="/">
            <button
              className={classnames(
                styles.button,
                styles.menuItem,
                classes.elements.button.class,
                classes.elements.button.modifiers.normalSizeButton,
                classes.elements.button.modifiers.roundedButton
              )}
              type="button"
            >
              Sign Up
            </button>
          </Link>
        </section>
      </article>
    );
  }
);
