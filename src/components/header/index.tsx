import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { routes } from "@/consts/routes";
import { classes } from "@/consts/common-css-classes";

import styles from "./styles.module.css";

export const Header: FC = memo(() => {
  return (
    <header className={styles.header}>
      <section className={styles.navBar}>
        <Link href="/">
          <Image height="33" src="/images/logo.svg" width="121" />
        </Link>
        <ul className={styles.nav}>
          {routes.map((route) => (
            <li className={styles.navItem}>
              <Link href={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.nav}>
        <Link href="/">
          <button className={styles.navItem} type="button">
            Login
          </button>
        </Link>
        <Link href="/">
          <button className={classes.elements.roundedButton} type="button">
            Sign Up
          </button>
        </Link>
      </section>
    </header>
  );
});
