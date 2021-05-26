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
        <Image height="30" src={imageURL} width="30" />
        <h3>{featureName}</h3>
        <span>{featureDescription}</span>
      </article>
    );
  }
);
