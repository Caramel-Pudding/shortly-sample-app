import React from "react";
import fetchMock from "jest-fetch-mock";

import { render, cleanup, fireEvent } from "@/tests/test-utils";
import { urlStub, shortcodeAPIResponseStubs } from "@/tests/stubs";

import { Shortener } from "..";

describe("Shortener Component", () => {
  afterEach(cleanup);

  it("Should show error if form submitted with empty input", () => {
    // * #TEST: ARRANGE
    const { container, queryByText, getByRole } = render(<Shortener />, {});
    const input = getByRole("textbox");
    // * #TEST: ASSERT
    expect(queryByText("Please add a link")).toBeNull();
    expect(input).toHaveTextContent("");
    expect(() => {
      expect(getByRole("textbox")).toHaveClass("inputWarning");
    }).toThrow();
    expect(container).toMatchSnapshot();
    // * #TEST: ACT
    const button = getByRole("button");
    fireEvent.click(button as HTMLElement);
    // * #TEST: ASSERT
    expect(queryByText("Please add a link")).toBeInTheDocument();
    expect(input).toHaveClass("inputWarning");
    expect(container).toMatchSnapshot();
  });

  it("Should send request if form submitted with non-empty input", () => {
    // * #TEST: ARRANGE
    const { container, getByRole } = render(<Shortener />, {});
    const input = getByRole("textbox");
    const button = getByRole("button");
    fetchMock.mockResponseOnce(JSON.stringify(shortcodeAPIResponseStubs[0]));
    // * #TEST: ASSERT
    expect(() => {
      expect(button).toHaveClass("disabledButton");
    }).toThrow();
    expect(container).toMatchSnapshot();
    // * #TEST: ACT
    fireEvent.change(input as HTMLElement, { target: { value: urlStub } });
    fireEvent.click(button as HTMLElement);
    // * #TEST: ASSERT
    expect(button).toHaveClass("disabledButton");
    expect(fetchMock.mock.calls).toHaveLength(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://api.shrtco.de/v2//shorten?url=https%3A%2F%2Fuserinyerface.com%2F"
    );
    expect(container).toMatchSnapshot();
  });
});
