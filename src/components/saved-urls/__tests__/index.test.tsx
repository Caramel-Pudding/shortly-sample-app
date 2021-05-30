import React from "react";

import { render, cleanup } from "@/tests/test-utils";
import { shortcodeAPIResponseStubs } from "@/tests/stubs";

import { SavedUrls } from "..";

describe("SavedUrls Component", () => {
  afterEach(cleanup);

  it("Should render no items if no links saved", () => {
    // * #TEST: ARRANGE
    const { container, queryByText, queryByAltText } = render(<SavedUrls />, {
      state: { urls: { urls: [], isLoading: false, copiedUrl: "" } },
    });
    const tabs = queryByText("Copy");
    // * #TEST: ASSERT
    expect(queryByAltText("Loading...")).toBeNull();
    expect(tabs).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it("Should render amount of tabs equal to amount of links saved", () => {
    // * #TEST: ARRANGE
    const { container, queryAllByText, queryByAltText } = render(
      <SavedUrls />,
      {
        state: {
          urls: {
            urls: shortcodeAPIResponseStubs.map((stub) => stub.result),
            isLoading: false,
            copiedUrl: "",
          },
        },
      }
    );
    const tabs = queryAllByText("Copy");
    // * #TEST: ASSERT
    expect(queryByAltText("Loading...")).toBeNull();
    expect(tabs).toHaveLength(3);
    expect(container).toMatchSnapshot();
  });

  it("Should render loader if isLoading = true", () => {
    // * #TEST: ARRANGE
    const { container, queryByAltText } = render(<SavedUrls />, {
      state: {
        urls: {
          urls: shortcodeAPIResponseStubs.map((stub) => stub.result),
          isLoading: true,
          copiedUrl: "",
        },
      },
    });
    // * #TEST: ASSERT
    expect(queryByAltText("Loading...")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
