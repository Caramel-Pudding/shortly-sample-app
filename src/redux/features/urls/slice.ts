import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { URLsState, IsLoadingChangePayload, URLsChangePayload } from "./types";

// Define the initial state using that type
export const initialState: URLsState = {
  urls: [],
  isLoading: false,
};

export const descriptorsSlice = createSlice({
  name: "URLs",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setURLs: (state, action: PayloadAction<URLsChangePayload>) => {
      state.urls = [...state.urls, action.payload.value];
    },
    setIsLoading: (state, action: PayloadAction<IsLoadingChangePayload>) => {
      state.isLoading = action.payload.value;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { setURLs, setIsLoading } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
