import React, { FC, memo } from "react";
import classnames from "classnames";

import { classes } from "@/consts/common-css-classes";

import styles from "./styles.module.css";

export const Boost: FC = memo(() => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Boost your links today</h2>
      <button
        className={classnames(
          classes.elements.roundedButton.class,
          classes.elements.roundedButton.modifiers.largeButton
        )}
        type="button"
      >
        Get Started
      </button>
    </article>
  );
});
