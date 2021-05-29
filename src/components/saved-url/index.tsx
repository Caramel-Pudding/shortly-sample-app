import React, { FC, memo } from "react";
import classnames from "classnames";

import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { setCopiedUrl } from "@/redux/features/urls/slice";
import { ShortUrl } from "@/redux/features/urls/types";

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
      <span>{shortUrl.original_link}</span>
      <section>
        <span className={styles.shortLink}>{shortUrl.short_link}</span>
        <button
          className={classnames(styles.button, {
            [styles.buttonActive]: isCopied,
          })}
          type="button"
          onClick={handleButtonClick}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </section>
    </article>
  );
});
