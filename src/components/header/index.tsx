import React, { FC, memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";

import { routes } from "@/consts/routes";
import { classes } from "@/consts/common-css-classes";
import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import { isDesktop } from "@/consts/screen-breakpoints";
import { ShortlyIcon } from "@/components/icons/branding/shortly";

import styles from "./styles.module.css";
import { HamburgerMenu } from "../hamburger-menu";

export const Header: FC = memo(() => {
  const { width } = useWindowDimensions();

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <header
      className={classnames(
        styles.header,
        classes.offsets.layoutHorizontalOffset
      )}
    >
      <section className={styles.content}>
        <section className={styles.navBar}>
          <Link href="/">
            <a>
              <ShortlyIcon />
            </a>
          </Link>
          {isDesktop(width) && (
            <nav className={styles.nav}>
              <ul className={styles.links}>
                {routes.map((route) => (
                  <li key={route.title} className={styles.navItem}>
                    <Link href={route.path}>{route.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </section>
        <section className={styles.links}>
          {isDesktop(width) ? (
            <>
              <Link href="/">
                <button className={styles.navItem} type="button">
                  Login
                </button>
              </Link>
              <Link href="/">
                <button
                  className={classnames(
                    classes.elements.button.class,
                    classes.elements.button.modifiers.normalSizeButton,
                    classes.elements.button.modifiers.roundedButton
                  )}
                  type="button"
                >
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button type="button" onClick={handleHamburgerClick}>
              <Image
                alt="Hamburger"
                height="32"
                src="/hamburger.svg"
                width="32"
              />
            </button>
          )}
        </section>
      </section>

      {isHamburgerMenuOpen && (
        <HamburgerMenu
          isOpen={isHamburgerMenuOpen}
          setIsOpen={setIsHamburgerMenuOpen}
        />
      )}
    </header>
  );
});
