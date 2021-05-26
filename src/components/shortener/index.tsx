import React, { FC, memo } from "react";

import styles from "./styles.module.css";

export const Shortener: FC = memo(() => {
  return (
    <form className={styles.container}>
      <input className={styles.input} />
      <button className={styles.button} type="submit">
        Shorten it!
      </button>
    </form>
  );
});
