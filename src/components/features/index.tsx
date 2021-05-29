import React, { FC, memo } from "react";

import { features } from "@/consts/features";
import { FeatureCard } from "@/components/feature-card";

import styles from "./styles.module.css";

export const Features: FC = memo(() => {
  return (
    <article className={styles.container}>
      <section className={styles.info}>
        <h2 className={styles.title}>Advanced Statistics</h2>
        <span className={styles.subTitle}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>
      </section>
      <section className={styles.features}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.featureName}
            featureDescription={feature.featureDescription}
            featureName={feature.featureName}
            imageURL={feature.imageURL}
          />
        ))}
        <hr className={styles.line} />
      </section>
    </article>
  );
});
