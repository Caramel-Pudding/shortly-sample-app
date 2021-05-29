import React, { FC, memo, useState, FormEvent, SyntheticEvent } from "react";
import classnames from "classnames";

import { fetchShortenUrl } from "@/network/shortcode/gateway";

import styles from "./styles.module.css";

export const Shortener: FC = memo(() => {
  const [link, setLink] = useState("");

  const inputHandler = (event: FormEvent<HTMLInputElement>) => {
    setLink(event.currentTarget.value);
  };

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    await fetchShortenUrl({ link }).then((result) => console.log(result));
  };

  return (
    <section className={styles.wrapper}>
      <form className={styles.container} onSubmit={submitHandler}>
        <input
          className={classnames(styles.input, {
            [styles.inputEmpty]: !link,
          })}
          placeholder="Shorten a link here..."
          value={link}
          onChange={inputHandler}
        />
        <button className={styles.button} type="submit">
          Shorten it!
        </button>
      </form>
    </section>
  );
});
