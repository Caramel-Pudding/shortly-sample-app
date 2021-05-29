import { configureStore } from "@reduxjs/toolkit";

/* eslint-disable import/no-cycle */
import { reducer as urls } from "@/redux/features/urls/slice";
/* eslint-enable import/no-cycle */

export const store = configureStore({
  reducer: {
    urls,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = Readonly<ReturnType<typeof store.getState>>;
export type AppDispatch = typeof store.dispatch;
