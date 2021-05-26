import React, { FC, memo } from "react";

import { classes } from "@/consts/common-css-classes";

import styles from "./styles.module.css";

export const Boost: FC = memo(() => {
  return (
    <article className={styles.container}>
      <h2>Boost your links today</h2>
      <button className={classes.elements.roundedButton} type="submit">
        Get Started
      </button>
    </article>
  );
});
