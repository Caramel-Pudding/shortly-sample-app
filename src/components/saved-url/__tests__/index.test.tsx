import React from "react";

import { render, cleanup } from "@/tests/test-utils";
import { shortcodeAPIResponseStubs } from "@/tests/stubs";

import { SavedUrl } from "..";

describe("SavedUrls Component", () => {
  afterEach(cleanup);

  it("Should render with proper data", () => {
    // * #TEST: ARRANGE
    const { container, queryByText, getByRole } = render(
      <SavedUrl shortUrl={shortcodeAPIResponseStubs[0].result} />,
      {}
    );
    // * #TEST: ASSERT
    expect(
      queryByText(shortcodeAPIResponseStubs[0].result.original_link)
    ).toBeInTheDocument();
    expect(
      queryByText(shortcodeAPIResponseStubs[0].result.short_link)
    ).toBeInTheDocument();
    expect(() => {
      expect(getByRole("button")).toHaveClass("buttonActive");
    }).toThrow();
    expect(container).toMatchSnapshot();
  });

  it("Should detect copied url", () => {
    // * #TEST: ARRANGE
    const { container, getByRole } = render(
      <SavedUrl shortUrl={shortcodeAPIResponseStubs[0].result} />,
      {
        state: {
          urls: {
            urls: [],
            isLoading: false,
            copiedUrl: shortcodeAPIResponseStubs[0].result.short_link,
          },
        },
      }
    );
    // * #TEST: ASSERT
    expect(getByRole("button")).toHaveClass("buttonActive");
    expect(container).toMatchSnapshot();
  });
});
