import { NextRouter } from "next/router";
import { combineReducers } from "@reduxjs/toolkit";

import {
  reducer as urls,
  initialState as urlsInitialState,
} from "@/redux/features/urls/slice";

export const reducer = combineReducers({
  urls,
});

// Redux initial state mock
export const initialStateMock = {
  urls: urlsInitialState,
};

// NextRouter mock
export const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  isLocaleDomain: true,
  isReady: true,
  isPreview: false,
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};
