import React, { ReactElement, FC } from "react";
import {
  render as defaultRender,
  RenderOptions,
  RenderResult,
  Queries,
} from "@testing-library/react";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState } from "@/redux/store";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";

import { mockRouter, reducer, initialStateMock } from "./mocks";

interface RenderProps {
  readonly state?: Partial<RootState>;
  readonly router?: Partial<NextRouter>;
  readonly renderOptions?: RenderOptions;
}

const render = (
  ui: ReactElement,
  { router, state = initialStateMock, ...renderOptions }: RenderProps
): RenderResult<Queries, HTMLElement> => {
  const store = createStore(reducer, state);
  const wrapper: FC = ({ children }) => {
    return (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <Provider store={store}>{children}</Provider>
      </RouterContext.Provider>
    );
  };
  return defaultRender(ui, { wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
