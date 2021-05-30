import React, { FC, memo } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

interface FeatureCardProps {
  readonly featureName: string;
  readonly featureDescription: string;
  readonly imageURL: string;
}

export const FeatureCard: FC<FeatureCardProps> = memo(
  ({ featureName, featureDescription, imageURL }) => {
    return (
      <article className={styles.card}>
        <aside className={styles.iconContainer}>
          <Image alt={featureName} height="32" src={imageURL} width="32" />
        </aside>
        <h3>{featureName}</h3>
        <p className={styles.description}>{featureDescription}</p>
      </article>
    );
  }
);
