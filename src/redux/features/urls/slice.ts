import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  URLsState,
  IsLoadingChangePayload,
  URLsChangePayload,
  CopiedURLChangePayload,
} from "./types";

// Define the initial state using that type
export const initialState: URLsState = {
  urls: [],
  copiedUrl: "",
  isLoading: false,
};

export const descriptorsSlice = createSlice({
  name: "URLs",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    addURL: (state, action: PayloadAction<URLsChangePayload>) => {
      state.urls = [...state.urls, action.payload.value];
    },
    setCopiedUrl: (state, action: PayloadAction<CopiedURLChangePayload>) => {
      state.copiedUrl = action.payload.value;
    },
    setIsLoading: (state, action: PayloadAction<IsLoadingChangePayload>) => {
      state.isLoading = action.payload.value;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { addURL, setIsLoading, setCopiedUrl } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
