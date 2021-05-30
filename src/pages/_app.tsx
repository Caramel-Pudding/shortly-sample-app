import "@/debug/wdyr";
import React, { FC, memo } from "react";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { store } from "@/redux/store";

import "@/styles/reset.css";
import "@/styles/common.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const persistor = persistStore(store);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
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
