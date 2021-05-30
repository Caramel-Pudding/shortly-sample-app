import React, { FC, memo, useState, FormEvent, SyntheticEvent } from "react";

import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setIsLoading, addURL } from "@/redux/features/urls/slice";
import { fetchShortenUrl } from "@/network/shortcode/gateway";

import styles from "./styles.module.css";

export const Shortener: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.urls);

  const [link, setLink] = useState("");

  const inputHandler = (event: FormEvent<HTMLInputElement>) => {
    setLink(event.currentTarget.value);
  };

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(setIsLoading({ value: true }));
    await fetchShortenUrl({ link }).then((result) => {
      if (result && result.ok) {
        dispatch(addURL({ value: result.result }));
      }
    });
    dispatch(setIsLoading({ value: false }));
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
        <button
          className={classnames(styles.button, {
            [styles.disabledButton]: isLoading,
          })}
          disabled={isLoading}
          type="submit"
        >
          Shorten it!
        </button>
      </form>
    </section>
  );
});
