import React, { FC, memo } from "react";
import Link from "next/link";

import { Route } from "@/types/route";

import styles from "./styles.module.css";

interface AdditionalNavigationProps {
  readonly head: Route;
  readonly list: Route[];
}

export const AdditionalNavigation: FC<AdditionalNavigationProps> = memo(
  ({ head, list }) => {
    return (
      <nav>
        <Link href={head.path}>{head.title}</Link>
        <ul className={styles.list}>
          {list.map((element: Route) => (
            <li className={styles.listItem}>
              <Link href={element.path}>{element.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);
