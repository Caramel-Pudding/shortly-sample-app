import React, { FC, memo } from "react";
import Link from "next/link";
import classnames from "classnames";

import { routes } from "@/consts/routes";
import { classes } from "@/consts/common-css-classes";

import styles from "./styles.module.css";
import { ShortlyIcon } from "../icons/branding/shortly";

export const Header: FC = memo(() => {
  return (
    <header
      className={classnames(
        styles.header,
        classes.offsets.layoutHorizontalOffset
      )}
    >
      <section className={styles.navBar}>
        <Link href="/">
          <a>
            <ShortlyIcon />
          </a>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            {routes.map((route) => (
              <li className={styles.navItem}>
                <Link href={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className={styles.links}>
        <Link href="/">
          <button className={styles.navItem} type="button">
            Login
          </button>
        </Link>
        <Link href="/">
          <button
            className={classnames(
              classes.elements.roundedButton.class,
              classes.elements.roundedButton.modifiers.normalButton
            )}
            type="button"
          >
            Sign Up
          </button>
        </Link>
      </section>
    </header>
  );
});
