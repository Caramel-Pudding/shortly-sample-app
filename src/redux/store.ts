import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

/* eslint-disable import/no-cycle */
import { reducer as urls } from "@/redux/features/urls/slice";
/* eslint-enable import/no-cycle */

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ urls })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = Readonly<ReturnType<typeof store.getState>>;
export type AppDispatch = typeof store.dispatch;
