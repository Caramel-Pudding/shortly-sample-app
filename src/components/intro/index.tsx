import React, { FC, memo } from "react";
import classnames from "classnames";

import { classes } from "@/consts/common-css-classes";
import { useWindowDimensions } from "@/hooks/use-window-dimensions";

import { isDesktop } from "@/consts/screen-breakpoints";
import styles from "./styles.module.css";

export const Intro: FC = memo(() => {
  const { width } = useWindowDimensions();

  return (
    <article className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>More than just shorter links</h1>
        <span className={styles.subTitle}>
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </span>
        <button
          className={classnames(
            classes.elements.button.class,
            classes.elements.button.modifiers.largeSizeButton,
            classes.elements.button.modifiers.roundedButton
          )}
          type="button"
        >
          Get Started
        </button>
      </section>
      <section className={styles.imageContainer}>
        <img
          alt="Illustration Working"
          className={styles.image}
          height={isDesktop(width) ? "482" : "320"}
          src="/images/branding/illustration-working.svg"
          width={isDesktop(width) ? "773" : "515"}
        />
      </section>
    </article>
  );
});
