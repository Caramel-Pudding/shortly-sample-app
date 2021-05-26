import React, { FC, memo } from "react";
import Image from "next/image";

import { classes } from "@/consts/common-css-classes";

import styles from "./styles.module.css";

export const Intro: FC = memo(() => {
  return (
    <article className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>More than just shorter links</h1>
        <span className={styles.subTitle}>
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </span>
        <button className={classes.elements.roundedButton} type="button">
          Get Started
        </button>
      </section>
      <Image height="482" src="/images/illustration-working.svg" width="773" />
    </article>
  );
});
