import React, { FC, memo } from "react";

import styles from "./styles.module.css";

export const Shortener: FC = memo(() => {
  return (
    <section className={styles.wrapper}>
      <form className={styles.container}>
        <input className={styles.input} placeholder="Shorten a link here..." />
        <button className={styles.button} type="submit">
          Shorten it!
        </button>
      </form>
    </section>
  );
});
