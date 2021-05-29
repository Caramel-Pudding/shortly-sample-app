import React, { FC, memo } from "react";
import { useAppSelector } from "@/hooks/redux";
import { SavedUrl } from "../saved-url";

import styles from "./styles.module.css";

export const SavedUrls: FC = memo(() => {
  const { urls, isLoading } = useAppSelector((state) => state.urls);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (urls.length === 0) {
    return null;
  }

  return (
    <article className={styles.container}>
      {urls.map((url) => (
        <SavedUrl shortUrl={url} />
      ))}
    </article>
  );
});
