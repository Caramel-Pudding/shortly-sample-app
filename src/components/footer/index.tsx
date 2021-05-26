import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

export const Footer: FC = memo(() => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image height="33" src="/images/logo.svg" width="121" />
      </Link>
      <section className={styles.navigation}>
        <section>
          <span>Features</span>
          <ul>
            <li>Link Shortening</li>
            <li>Banded Links</li>
            <li>Analytics</li>
          </ul>
        </section>
        <section>
          <span>Resources</span>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </section>
        <section>
          <span>Company</span>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </section>
      </section>
      <Link href="/">
        <Image height="50" src="/images/icon-facebook.svg" width="50" />
      </Link>
      <Link href="/">
        <Image height="50" src="/images/icon-twitter.svg" width="50" />
      </Link>
      <Link href="/">
        <Image height="50" src="/images/icon-pinterest.svg" width="50" />
      </Link>
      <Link href="/">
        <Image height="50" src="/images/icon-instagram.svg" width="50" />
      </Link>
    </footer>
  );
});
