import React, { FC, memo } from "react";

import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Shortener } from "@/components/shortener";
import { Features } from "@/components/features";
import { Boost } from "@/components/boost";
import { Footer } from "@/components/footer";

import styles from "./styles.module.css";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Intro />
        <Shortener />
        <Features />
      </main>
      <Boost />
      <Footer />
    </div>
  );
};

export default memo(Home);
