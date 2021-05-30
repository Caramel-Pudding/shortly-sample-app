import React, { FC, memo } from "react";
import Image from "next/image";

import { useAppSelector } from "@/hooks/redux";
import { SavedUrl } from "@/components/saved-url";

import styles from "./styles.module.css";

export const SavedUrls: FC = memo(() => {
  const { urls, isLoading } = useAppSelector((state) => state.urls);

  return (
    <article className={styles.container}>
      {urls.map((url) => (
        <SavedUrl shortUrl={url} />
      ))}
      {isLoading && (
        <Image alt="Loading..." height="76" src="/spinner.svg" width="76" />
      )}
    </article>
  );
});
