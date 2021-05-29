import "@/debug/wdyr";
import React, { FC, memo } from "react";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/redux/store";

import "@/styles/reset.css";
import "@/styles/common.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (process.env.NEXT_PUBLIC_VITALS === "true") {
    // eslint-disable-next-line no-console
    console.debug(metric);
  }
}

export default memo(MyApp);
