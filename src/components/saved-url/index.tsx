import React, { FC, memo } from "react";
import classnames from "classnames";

import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { setCopiedUrl } from "@/redux/features/urls/slice";
import { ShortUrl } from "@/redux/features/urls/types";

import { classes } from "@/consts/common-css-classes";
import styles from "./styles.module.css";

interface SavedUrlProps {
  readonly shortUrl: ShortUrl;
}

export const SavedUrl: FC<SavedUrlProps> = memo(({ shortUrl }) => {
  const dispatch = useAppDispatch();

  const { copiedUrl } = useAppSelector((state) => state.urls);

  const handleButtonClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigator.clipboard.writeText(shortUrl.short_link);
    dispatch(setCopiedUrl({ value: shortUrl.short_link }));
  };

  const isCopied = shortUrl.short_link === copiedUrl;

  return (
    <article className={styles.container}>
      <span className={styles.originalLink}>{shortUrl.original_link}</span>
      <section className={styles.interactionBlock}>
        <span className={styles.shortLink}>{shortUrl.short_link}</span>
        <button
          className={classnames(
            styles.button,
            classes.elements.button.class,
            classes.elements.button.modifiers.normalSizeButton,
            classes.elements.button.modifiers.squareButton,
            {
              [styles.buttonActive]: isCopied,
            }
          )}
          type="button"
          onClick={handleButtonClick}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </section>
    </article>
  );
});
