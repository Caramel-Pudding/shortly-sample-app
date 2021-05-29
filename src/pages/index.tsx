import React, { FC, memo } from "react";

import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Shortener } from "@/components/shortener";
import { Features } from "@/components/features";
import { Boost } from "@/components/boost";
import { Footer } from "@/components/footer";
import { classes } from "@/consts/common-css-classes";

import styles from "./styles.module.css";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section className={styles.upperHalf}>
          <Intro />
        </section>
        <section className={classes.offsets.layoutHorizontalOffset}>
          <Shortener />
        </section>
        <section className={styles.lowerHalf}>
          <section className={classes.offsets.layoutHorizontalOffset}>
            <Features />
          </section>
        </section>
      </main>
      <Boost />
      <Footer />
    </div>
  );
};

export default memo(Home);
