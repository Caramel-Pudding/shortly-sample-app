import React, { FC, memo } from "react";
import Link from "next/link";
import classnames from "classnames";

import { classes } from "@/consts/common-css-classes";
import { AdditionalNavigation } from "../additional-navigation";
import { FacebookIcon } from "../icons/socials/facebook";
import { TwitterIcon } from "../icons/socials/twitter";
import { PinterestIcon } from "../icons/socials/pinterest";
import { InstagramIcon } from "../icons/socials/instagram";
import { ShortlyIcon } from "../icons/branding/shortly";

import styles from "./styles.module.css";

export const Footer: FC = memo(() => {
  return (
    <footer
      className={classnames(
        styles.footer,
        classes.offsets.layoutHorizontalOffset
      )}
    >
      <Link href="/">
        <a className={styles.iconContainer}>
          <ShortlyIcon fill="white" />
        </a>
      </Link>
      <section className={styles.content}>
        <section className={styles.navigation}>
          <AdditionalNavigation
            head={{ path: "/", title: "Features" }}
            list={[
              { path: "/", title: "Link Shortening" },
              { path: "/", title: "Banded Links" },
              { path: "/", title: "Analytics" },
            ]}
          />
          <AdditionalNavigation
            head={{ path: "/", title: "Resources" }}
            list={[
              { path: "/", title: "Blog" },
              { path: "/", title: "Developers" },
              { path: "/", title: "Support" },
            ]}
          />
          <AdditionalNavigation
            head={{ path: "/", title: "Company" }}
            list={[
              { path: "/", title: "About" },
              { path: "/", title: "Our Team" },
              { path: "/", title: "Careers" },
              { path: "/", title: "Contact" },
            ]}
          />
        </section>
        <section className={styles.socials}>
          <Link href="/">
            <a className={styles.iconContainer}>
              <FacebookIcon />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.iconContainer}>
              <TwitterIcon />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.iconContainer}>
              <PinterestIcon />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.iconContainer}>
              <InstagramIcon />
            </a>
          </Link>
        </section>
      </section>
    </footer>
  );
});
