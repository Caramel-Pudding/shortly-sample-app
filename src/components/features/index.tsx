import React, { FC, memo } from "react";

import { features } from "@/consts/features";
import { FeatureCard } from "@/components/feature-card";

import styles from "./styles.module.css";

export const Features: FC = memo(() => {
  return (
    <article className={styles.container}>
      <h2>Advanced Statistics</h2>
      <span>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </span>
      <section className={styles.features}>
        {features.map((feature) => (
          <FeatureCard
            featureDescription={feature.featureDescription}
            featureName={feature.featureName}
            imageURL={feature.imageURL}
          />
        ))}
      </section>
    </article>
  );
});
